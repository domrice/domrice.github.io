# [dominikreisach.xyz](https://www.dominikreisach.xyz)

Static site built with Astro and Tailwind.

![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-1.4-000?logo=bun&logoColor=white)
![License](https://img.shields.io/static/v1?label=code&message=MIT&color=green)
![License](https://img.shields.io/static/v1?label=content&message=All%20Rights%20Reserved&color=red)

## Develop

```sh
bun install
bun run dev        # http://localhost:4321
```

## Build

```sh
bun run build      # static site → dist/
bun run preview    # serve the build locally
```

Pushing to `main` deploys to GitHub Pages.

## Content

All content lives in `content/` as Markdown/YAML. Stills live in `src/assets/imgs/<project>/`
(Astro encodes them at build); clips are encoded from `masters/` into `public/video/<project>/`
with `node scripts/video.mjs` (needs `ffmpeg`).

| Path | What |
| --- | --- |
| `content/work/*.md` | Projects |
| `content/publications/*.yml` | Publications |
| `content/pitch/*.md` | Unlisted pages at `/pitch/<slug>` |

### Media sizes

Landscape media spans the 928px project column; portraits take half of it (452px).
Portraits pair side by side, so pair same with same: stills 1200×1920 (5:8), clips 3:4.

| Item | Source | Goes to | Ships as |
| --- | --- | --- | --- |
| Grid thumb | square 1080×1080 `.avif` | `src/assets/imgs/<project>/` | AVIF + JPG at 640/960/1280/1920 (capped at source width) |
| Still | ≥1920px long side, best-quality `.jpg` (q94–99) | `src/assets/imgs/<project>/` | same |
| Clip | best copy that exists (ProRes, or a high-bitrate MP4), 16:9 for landscape | `masters/<project>/` | `video.mjs`: short side capped at 720px plus a 480px `_sm` pair for phones, AV1 `.webm` + H.264 `.mp4`, frame-0 `_poster.jpg` in `src/assets/video/<project>/` (a hand-picked `_poster.avif` is kept) |
| Social card | nothing — built from the hero | `public/og/<id>.jpg` | `node scripts/og.mjs`: 1200×630 JPG |

Screen recordings of a UI: record a 1280×720 viewport at 2× (2560×1440 master), so the 720p
encode maps the layout 1:1 and UI text stays readable at 928px. 16:9 matches the size the
video element reserves before metadata loads, so the page doesn't shift.

#### Recording with OBS (macOS)

Record a lossless-enough master once; `video.mjs` does all web compression.

| OBS setting | Value | Why |
| --- | --- | --- |
| Video → Base (canvas) / Output (scaled) | 2560×1440 / 2560×1440 | 1280×720 viewport at 2×, no rescale in OBS |
| Video → FPS | 60 | smooth scrolling; `video.mjs` keeps the frame rate |
| Output mode | Advanced → Recording | |
| Recording format / encoder | MOV, Apple ProRes 422 (VT) | intra-frame: frame-exact cuts in Resolve, no smearing of UI text |
| Advanced → Color format / space / range | P216 (or P010), Rec. 709, **Limited** | what Resolve and ffmpeg assume; Full range shifts blacks |
| Audio | mute all tracks | clips ship without audio (`-an`) |
| Source | macOS Screen Capture → Window, cursor off unless it tells the story | |

Browser: size the window so the page viewport is exactly 1280×720 CSS px (Chrome DevTools →
device toolbar → Responsive 1280×720, DPR 2, or a Playwright window), then crop the browser
chrome off in OBS (⌥-drag the source edges) so only the viewport fills the 2560×1440 canvas.
Hide scrollbars, bookmarks and notifications; use a clean profile.

#### Cutting in DaVinci Resolve

- Project settings: timeline 2560×1440, 60 fps, matching the recording (set before importing).
- Cut each clip to loop: the first frame is the poster, the last should flow back into it.
  Keep clips short (≈5–15 s).
- Deliver → Custom: QuickTime, Apple ProRes 422 HQ, 2560×1440, 60 fps, audio off,
  data levels Auto (Video).
- Save to `masters/<project>/<name>.mov`, named like the frontmatter (`cd1_dr.mov` →
  `/video/2026-12_compas-dev/cd1_dr.webm`), then run `node scripts/video.mjs`.

## License

- Code (Astro, TypeScript, CSS): [MIT](LICENSE-MIT)
- Content (images, text, videos): All Rights Reserved, see [LICENSE](LICENSE)
