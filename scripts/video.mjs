// Encodes every clip in masters/<project>/ into the files MediaVideo serves from
// public/video/<project>/: AV1 .webm for browsers that decode it, H.264 .mp4 for the
// rest (Safari before M3/A17 Pro), each at 720p and as a 480p `_sm` for phones. A master is the best copy that exists — ProRes
// where there is one, otherwise the old 1080p encode. Skips outputs that exist, so
// delete one to re-encode it. Rerun after adding a clip: `node scripts/video.mjs [project]`
import { execFileSync } from 'node:child_process'
import { existsSync, globSync, mkdirSync } from 'node:fs'
import { basename, dirname, extname } from 'node:path'

// short side cap: clips render at ≤928 css px (a full-width gallery item), and these
// are looping process clips — 1080p bought 3–10× the bytes for detail nobody stops for.
// Phones (≤600 css px, MediaVideo's `media`) get a `_sm` pair at 480.
const FULL = 720
const SIZES = { '': FULL, _sm: 480 }

// calibration knobs, measured on gp52 (dense wireframe, the hardest clip) against a
// near-lossless 720p reference: AV1 46 → 1.4 MB at SSIM 0.982; H.264 30 → 1.5 MB at
// 0.975, already above the 0.965 of the mp4 it replaces. H.264 28 would match AV1's
// look, but on the long pitch clips it nearly doubled the old fallback's bytes, and
// that fallback is every iPhone before the 15 Pro. The old pair was 12.7 / 0.87 MB.
const AV1_CRF = 46
const H264_CRF = 30

const even = (/** @type {number} */ n) => Math.round(n / 2) * 2

// square pixels at the capped size: several masters are anamorphic (720×576 shown
// as 1024×576), and a browser honours SAR inconsistently, so it is baked in here
/** @param {string} src @returns {[number, number]} display width, height */
function probe(src) {
  const [w, h, sar] = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height,sample_aspect_ratio', '-of', 'csv=p=0', src],
  { encoding: 'utf8' }).trim().split(',')
  const [n, d] = sar.split(':').map(Number)
  return [+w * (n && d ? n / d : 1), +h]
}

/** @param {[number, number]} dims @param {number} short */
function scale([dw, h], short) {
  const k = Math.min(1, short / Math.min(dw, h))
  return `scale=${even(dw * k)}:${even(h * k)}:flags=lanczos,setsar=1`
}

/** @param {string} src @param {string} vf @param {string[]} args @param {string} out */
function encode(src, vf, args, out) {
  if (existsSync(out)) return
  // SVT_LOG=1: errors only, SVT-AV1 otherwise prints a 20-line banner per clip
  execFileSync('ffmpeg', ['-v', 'error', '-i', src, '-an', '-vf', vf, ...args, out],
    { stdio: 'inherit', env: { ...process.env, SVT_LOG: '1' } })
  console.log(`wrote ${out}`)
}

// optional project folder, e.g. `node scripts/video.mjs 2026-11_jobseek`, so a new clip
// does not also encode the unused masters of other projects
for (const src of globSync(`masters/${process.argv[2] ?? '*'}/*`).sort()) {
  const project = basename(dirname(src))
  const name = basename(src, extname(src))
  const dims = probe(src)
  mkdirSync(`public/video/${project}`, { recursive: true })
  for (const [suffix, short] of Object.entries(SIZES)) {
    const out = `public/video/${project}/${name}${suffix}`
    const vf = scale(dims, short)
    encode(src, vf, ['-pix_fmt', 'yuv420p', '-c:v', 'libsvtav1', '-preset', '6', '-crf', `${AV1_CRF}`], `${out}.webm`)
    encode(src, vf, ['-pix_fmt', 'yuv420p', '-c:v', 'libx264', '-preset', 'slow', '-crf', `${H264_CRF}`,
      '-profile:v', 'high', '-movflags', '+faststart'], `${out}.mp4`)
  }
  const vf = scale(dims, FULL)
  // the poster is a still like any other: its source goes to src/assets, Astro encodes it.
  // Frame 0, so the poster is exactly where the loop starts. A hand-picked one is kept.
  const poster = `src/assets/video/${project}/${name}_poster`
  mkdirSync(dirname(poster), { recursive: true })
  if (!existsSync(`${poster}.avif`)) encode(src, vf, ['-frames:v', '1', '-q:v', '2'], `${poster}.jpg`)
}
