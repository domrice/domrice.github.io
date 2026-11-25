---
title: Mosaic Designer II
description: >-
  Mosaic Designer II flattens a curved surface into charts, packs each chart with ceramic fragments in 2D, and maps the mosaic back onto the surface.
order: 1
category: tools
thumb: /imgs/2026-11_mosaic-designer-ii/mdii0_dr_thumb
hero:
  src: /imgs/2026-11_mosaic-designer-ii/mdii01_dr
  alt: Low-angle close-up of the bench's seat, yellow and red fragments in white grout meeting a blurred region of grey, blue and green ones
  credit: Bench with Mosaic Finish, Detail | Render © Dominik Reisach
media:
  - src: /video/2026-11_mosaic-designer-ii/mdii02_dr.webm
    alt: Animation of a mosaic canopy vault cut into charts along its color regions, the charts flattened and packed with fragments, then mapped back onto the vault
    credit: The Making of the Mosaic Canopy | Video © Dominik Reisach
type: R&D Project
year: 2026
place: ETH Zürich, CH
credits:
  - role: Software
    people:
      - C++, libigl, Eigen, Clipper2, Directional, oneTBB
---

**Mosaic Designer II** is my second take on [Mosaic Designer I](/work/2026-10_mosaic-designer), packing the same donated fragments with a different algorithm. Mosaic Designer I packs on a voxel grid. Memory and compute there grow cubically with the resolution, so it stores only a thin band around the surface and splits that band into blocks. Mosaic Designer II needs none of this. It flattens the surface and packs in 2D, which is much faster, and it places every fragment on the surface itself rather than in a band around it.

First, it cuts the mesh into charts along the boundaries of its color texture, with extra cuts where a chart won't flatten otherwise. A SCAF parameterization flattens each chart without overlaps, and all charts pack in parallel. Packing starts at the outline, with fragments laid longest edge along each chart's boundary. For the interior, it tries several candidate fragments in a few rotations each, and their no-fit polygons mark every position where one touches its neighbors without overlapping. The last gaps get pieces cut from unused fragments, matched to them with the Hungarian algorithm. Only straight cuts are allowed, so every piece is realistic to cut. Finally, every fragment maps back onto the surface without distortion or overlaps.

What does limit it is curvature. The largest fragment that fits at a point shrinks as the maximum principal curvature there grows. Where the mesh turns tightly and the stock holds only large fragments, Mosaic Designer II finds no good fits.

The system works. The designs don't exist yet, and neither does the open-source release. Both are next.
