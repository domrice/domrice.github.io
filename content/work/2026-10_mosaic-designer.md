---
title: Mosaic Designer I
description: >-
  Mosaic Designer I packs ceramic fragments from a large inventory into collision-free mosaics on flat and curved surfaces.
order: 2
category: tools
thumb: /imgs/2026-10_mosaic-designer/md0_dr_thumb
hero:
  src: /imgs/2026-10_mosaic-designer/md01_dr
  alt: Rendered bench with a curved shell clad in ceramic fragments, set into a concrete planter wall
  credit: Bench with Mosaic Finish | Render © Dominik Reisach
media:
  - src: /imgs/2026-10_mosaic-designer/md04_dr
    alt: Diagram from a stock of loose sage, through color and orientation fields on a curved surface, to the finished trencadís mosaic
    credit: From Tile Stock via Design Fields to Trencadís Mosaic | Diagram © Dominik Reisach
  - src: /video/2026-10_mosaic-designer/md06_dr.webm
    alt: Animation of the bench's curved surface split into blocks, fragments from the stock packed into the blocks in parallel, and the finished mosaic
    credit: The Making of the Mosaic Bench | Video © Dominik Reisach
  - src: /imgs/2026-10_mosaic-designer/md02_dr
    alt: Top view of a floor mosaic, a circle of orange and charcoal diamonds radiating from an open center on a sage ground
    credit: Mosaic Floor | Render © Dominik Reisach
    portrait: true
  - src: /imgs/2026-10_mosaic-designer/md03_dr
    alt: Close-up of the floor mosaic, irregular fragments packed into nested orange and charcoal diamonds
    credit: Mosaic Floor, Detail | Render © Dominik Reisach
    portrait: true
  - src: /imgs/2026-10_mosaic-designer/md05_dr
    alt: Rendered canopy vault seen from below, its underside a mosaic of an orange star and a charcoal disc on a sage ground
    credit: Mosaic Canopy | Render © Dominik Reisach
type: R&D Project
year: 2026
place: ETH Zürich, CH
credits:
  - role: Supervision
    people:
      - name: Prof. Dr. Benjamin Dillenburger
        url: https://dbt.arch.ethz.ch/
      - name: Dr. Mathias Bernhard
  - role: Material Sponsors
    people:
      - name: JOHO Baukeramik + Bäder AG
        url: https://joho-baukeramik.ch
      - name: Ganz Baukeramik AG
        url: https://www.ganz-baukeramik.ch
  - role: Software
    people:
      - Python, OpenCV, YOLO11, SAM2, Open3D, Swift
  - role: Hardware
    people:
      - iPhone 14 Pro
---

Two ceramic suppliers donated unsellable stock headed for landfill, 3,301 fragments in all. I digitized every one with an iPhone and computer vision. A stock that size is still small enough to handle in production without an inventory system. **Mosaic Designer I** packs them into mosaics. It began as the packing algorithm in [Robotic Mosaic](/work/2026-09_robotic_mosaic), and I rebuilt it outside Rhino as a standalone system.

The design arrives as fields on a voxel grid that assign fragments to color regions, bound their size where the surface curves, and set their orientation. With a fixed stock, the fragment that fits a gap and the one the design asks for often differ, and Mosaic Designer has to weigh both. Robotic Mosaic placed every fragment uncut. Where whole fragments leave gaps, Mosaic Designer now fills them with pieces it plans to cut from unused ones. Trencadís, the Catalan mosaic technique, makes the same cut by hand.

Gaps also came from the grid. Robotic Mosaic capped the voxel resolution, which left wider gaps between fragments. Mosaic Designer now works with 1&nbsp;mm voxels. It scores every position of a fragment at once with a fast Fourier transform. But at 1&nbsp;mm, each transform ran over the whole grid. Fragments only land in a thin band around the surface. That's why the grid stores just that band, split into blocks that are packed in parallel. A deterministic schedule returns the same mosaic for any number of workers, so two runs differ only by the design change between them.
