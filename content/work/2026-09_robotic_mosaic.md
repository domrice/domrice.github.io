---
title: Robotic Mosaic
description: >-
  Robotic Mosaic explores a material-led workflow for transforming irregular ceramic waste into bespoke mosaic surfaces.
order: 5
category: tools
thumb: /imgs/2026-09_robotic_mosaic/rm0_dr_thumb
hero:
  src: /imgs/2026-09_robotic_mosaic/rm9_dr
  alt: Concrete façade panel with a swirling mosaic of colored ceramic shards
  credit: Mosaic Façade Panel | Photo © Spyridon Pyrgiotis, Ioanna Tatouli
media:
  - src: /video/2026-09_robotic_mosaic/rm6_dr.webm
    alt: Video of ceramic fragments being detected on a table, then digitally packed into a square mosaic of a red disc above a dark wave
    credit: Tile Detection and Placement | Video © Dominik Reisach
  - src: /video/2026-09_robotic_mosaic/rm8_dr.webm
    alt: Video of the robot excavating and compacting the earth formwork
    credit: Earth Formwork Fabrication | Video © Spyridon Pyrgiotis, Ioanna Tatouli
  - src: /video/2026-09_robotic_mosaic/rm3_dr.webm
    alt: Video of the robot picking and placing ceramic tiles into the earth formwork
    credit: Mosaic Fabrication in Earth Formwork | Video © Spyridon Pyrgiotis, Ioanna Tatouli
  - src: /video/2026-09_robotic_mosaic/rm4_dr.webm
    alt: Video of the robot flipping a ceramic tile with a pneumatic gripper
    credit: Tile Flipping | Video © Spyridon Pyrgiotis, Ioanna Tatouli
  - src: /video/2026-09_robotic_mosaic/rm7_dr.webm
    alt: Video of the casting and demolding process of the mosaic concrete panels
    credit: Casting & Demolding | Video © Spyridon Pyrgiotis, Ioanna Tatouli
  - src: /imgs/2026-09_robotic_mosaic/rm0_dr
    alt: Two stacked mosaic concrete panels standing in the workshop
    credit: Mosaic Façade Panels | Photo © Spyridon Pyrgiotis, Ioanna Tatouli
    portrait: true
  - src: /imgs/2026-09_robotic_mosaic/rm10_dr
    alt: Close-up of a curved concrete surface set with orange, yellow, green and blue ceramic shards
    credit: Mosaic Façade Panel | Photo © Ming-Yang Wang
    portrait: true
type: R&D Project
year: 2025
place: ETH Zürich, CH
credits:
  - role: Supervision
    people:
      - name: Prof. Dr. Benjamin Dillenburger
        url: https://dbt.arch.ethz.ch/
  - role: Project Team
    people:
      - Dominik Reisach (Project Co-Lead)
      - Ming-Yang Wang (Project Co-Lead)
      - Spyridon Pyrgiotis
      - Ioanna Tatouli
      - Megi Sinani
      - Sukhdevsinh Parmar
  - role: Workshop Support
    people:
      - Tobias Hartmann
      - Philippe Fleischmann
      - Luca Petrus
      - Jonathan Leu
      - Michael Lyrenmann
      - Matineh Mahmoudi (Concrete Recipe)
  - role: Material Sponsors
    people:
      - name: JOHO Baukeramik + Bäder AG
        url: https://joho-baukeramik.ch
      - name: Ganz Baukeramik AG
        url: https://www.ganz-baukeramik.ch
  - role: Software
    people:
      - Python, OpenCV, YOLO11, SAM2, Rhino, Grasshopper
  - role: Hardware
    people:
      - ABB IRB1600, Intel RealSense D455f, Digging and Vacuum Gripping End Effectors
  - role: Publications
    people:
      - name: CDRF 2026 (in press)
        url: /publications
      - name: DMS 2026 (in press)
        url: /publications
---

Ceramic suppliers end up with stock they can no longer sell, in small batches, odd colors, and discontinued patterns, some of it broken. Its next stop is landfill. Two suppliers donated theirs to us, with no record of the pieces' shape, color, or number. Every piece was different, so any tiling logic built on a standard element fails on them. **Robotic Mosaic** builds the mosaic from whatever is on the table.

I built the vision pipeline, a voxel-based packing algorithm with its design tool in Rhino, and the robotic pick-and-place. A camera on the robot arm captured the loose fragments. A computer vision stack of OpenCV, YOLO11, and SAM2 read each fragment's outline, color, position, and orientation into a live inventory. The packer then found a place for each fragment it used, without cutting or reshaping it. Signed distance fields computed the collision-free candidate positions. Color fields, directional fields that set which way each fragment points, and the flat or curved target surface decided which candidate each fragment took.

For the façade panels, Spyridon Pyrgiotis and Ioanna Tatouli developed the design and ran fabrication as their [MAS DFAB](https://masdfab.arch.ethz.ch) thesis, on the robotic earth formwork system Ming-Yang Wang developed. The robot excavated and compacted the earth, then flipped each fragment face-down into it. Concrete went on top. Once the earth came off, the mosaic was the panel's finished surface.

I planned to read each fragment's thickness from the Intel RealSense depth camera, but its depth image was too noisy to trust. A flexible suction cup absorbed the ±2&nbsp;mm spread instead, so the RealSense kept only the 2D work. Cropped to the table, its images came to roughly 800 × 400&nbsp;px, enough for outlines, positions, and color in a prototype. The cost was color that strayed from the design and, with the packer's voxel resolution capped, wider gaps between fragments.

[After the thesis](/work/2026-10_mosaic-designer) I replaced the RealSense with an iPhone shooting 48-megapixel stills with reliable color. I also moved the packer out of Rhino, where it started so the students could see and steer the design, into a standalone system with its own 3D viewer. There it runs faster and, at a higher voxel resolution, packs more densely. The prototype ran end to end on the donated stock and produced two cast façade panels.
