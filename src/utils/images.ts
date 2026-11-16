import type { ImageMetadata, ImageOutputFormat } from "astro";
import sharp from "sharp";

// Every still has one best-quality source in src/assets/ (the q94–99 JPG, or the
// AVIF for thumbs and posters, which never had anything better), keyed by its path
// under src/assets without extension: /imgs/... for stills, and /video/..._poster
// next to the clip it belongs to in public/video/.
const files = import.meta.glob<ImageMetadata>("../assets/{imgs,video}/**/*.{jpg,avif}", {
  eager: true,
  import: "default",
});
// Each comes with a 16px WebP of itself, inlined as the background its <img>/<video>
// paints over: the frame shows a soft preview on first paint instead of an empty box,
// at no extra request. `center / cover` crops it like the `object-cover` on top of it.
const stills = Object.fromEntries(
  await Promise.all(
    Object.entries(files).map(async ([k, src]) => {
      const buf = await sharp(k.replace("..", "src")).resize(16).webp({ quality: 50 }).toBuffer();
      const style = `background: url(data:image/webp;base64,${buf.toString("base64")}) center / cover`;
      return [k.slice("../assets".length).replace(/\.\w+$/, ""), { src, style }];
    }),
  ),
);

// `{ src, style }`, spread straight into a <Picture>. Content is authored by hand:
// a typo should name itself, not fail as "expected an image"
export const still = (src: string) => {
  const img = stills[src];
  if (!img) throw new Error(`no image source for ${src} in src/assets/`);
  return img;
};

// One strategy for every <Picture>: AVIF for every browser that has it, a mozjpeg JPG
// (astro.config) for the ones that don't — both at the same widths, so a legacy phone
// still gets a phone-sized file, and a modern one never downloads the fallback.
// Astro drops widths above the source's own, so a 1080px thumb tops out at 1080.
// 1280 is there for 3× phones (342px × 3 ≈ 1026); 1920 for 2× laptops (928px × 2).
export const picture: { formats: ImageOutputFormat[]; fallbackFormat: ImageOutputFormat; widths: number[] } = {
  formats: ["avif"],
  fallbackFormat: "jpg",
  widths: [640, 960, 1280, 1920],
};
