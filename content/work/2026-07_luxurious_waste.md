---
title: Luxurious Waste
description: >-
  Luxurious Waste upcycles marble offcuts from the natural stone industry into stable, robotically stacked walls.
order: 4
category: tools
thumb: /imgs/2026-07_luxurious_waste/lw0_dr_thumb
hero:
  src: /imgs/2026-07_luxurious_waste/lw01_dr
  alt: A curved wall of stacked white marble offcuts on a workbench in the robot lab
  credit: Stacked Marble Wall | Photo © Dominik Reisach
media:
  - src: /imgs/2026-07_luxurious_waste/lw02_dr
    alt: An iPhone screen showing the app scanning a marble offcut on a marker board
    credit: iPhone App for Offcut Digitization | Photo © Dominik Reisach
  - src: /imgs/2026-07_luxurious_waste/lw03_dr
    alt: The robot's vacuum gripper lifting a marble offcut from the pick platform
    credit: Picking an Offcut | Photo © Dominik Reisach
  - src: /video/2026-07_luxurious_waste/lw17_dr.webm
    alt: Video of the robot cell being set up and calibrated, then close-ups of the robot placing offcuts and neoprene shims
    credit: Setup and Robotic Process in Detail | Video © Dominik Reisach
  - src: /video/2026-07_luxurious_waste/lw18_dr.webm
    alt: Screen recording of the GUI segmenting offcuts on the pick platform and planning their placement in a 3D view of the robot cell
    credit: GUI for Segmentation and Planning | Video © Dominik Reisach
  - src: /video/2026-07_luxurious_waste/lw19_dr.webm
    alt: Timelapse of the robot stacking a wall, cut with the GUI planning each offcut
    credit: Robotic Assembly with GUI | Video © Dominik Reisach
  - src: /imgs/2026-07_luxurious_waste/lw11_dr
    alt: A branching wall of stacked marble offcuts
    credit: Branching Wall | Photo © Dominik Reisach
    portrait: true
  - src: /imgs/2026-07_luxurious_waste/lw14_dr
    alt: The wall corner from another angle
    credit: Wall Corner | Photo © Dominik Reisach
    portrait: true
  - src: /video/2026-07_luxurious_waste/lw16_dr.webm
    alt: Video of a MuJoCo simulation replaying the assembly of a wall offcut by offcut
    credit: Physics Simulation of the Assembly in MuJoCo | Video © Dominik Reisach
  - src: /imgs/2026-07_luxurious_waste/lw15_dr
    alt: Render of a building-scale wall of steel-framed panels filled with stacked marble offcuts, one curved panel hanging from a crane as a worker looks up
    credit: Modular Wall Construction System
type: R&D Project
year: 2026
place: ETH Zürich, CH
credits:
  - role: Software
    people:
      - Python, OpenCV, SAM2, Open3D, MuJoCo, Swift, TypeScript, Three.js
  - role: Hardware
    people:
      - iPhone 14 Pro, ABB IRB 1600, Vacuum Gripping End Effector
  - role: Supervision
    people:
      - name: Prof. Dr. Benjamin Dillenburger
        url: https://dbt.arch.ethz.ch/
      - name: Prof. Dr. Silke Langenberg
        url: https://langenberg.arch.ethz.ch/
  - role: Workshop Support
    people:
      - Tobias Hartmann
      - Philippe Fleischmann
      - Luca Petrus
      - Michael Lyrenmann
  - role: Material Sponsors
    people:
      - name: Lasa Marmo
        url: https://www.lasamarmo.it
---

Only about a third of the stone quarried for products is ever sold. Part of the rest becomes offcuts when panels are cut to shape, each with sawn faces, an irregular outline, and a thickness that varies from piece to piece. The stone is sound, but no two offcuts match, so the labor of sorting, measuring, and fitting each one costs more than the stone is worth. I partnered with Lasa Marmo to develop a system that upcycles their offcuts. They donated 300&nbsp;kg of material. **Luxurious Waste** stacks the offcuts into walls without mortar, the way traditional dry-stone walls are built.

I built the whole chain, from capture to robot. An iPhone on a rack above the platform took 48-megapixel photos, which the system fetched over HTTP. OpenCV and SAM2 read each offcut's outline from them, and the robot probed its thickness. The result was a digital inventory of prismatic offcuts. A voxel-based planner searched for placements inside a prescribed wall volume. It ranked candidates with masonry heuristics and discarded any that the robot could not build or that would not stand. The robot then picked each offcut with a vacuum gripper and set it in place. A GUI, built with TypeScript and Three.js, let me cycle through candidate positions and watch the digital wall grow. It made the prototype easier to follow, though a fully automated run does not need it.

The hard part was thickness. A mortar bed absorbs small differences in height, and dry stacking has nothing like it. Without compensation, the offcuts would not stack into a stable wall. Neoprene shims, placed by the robot wherever a height difference remained, filled that gap. For stability, I replaced the planner's first check, a live simulation in the Bullet physics engine, with a faster rigid block equilibrium check. Apart from the robot, a MuJoCo simulation replays the whole assembly and checks that the wall stands. A wall can therefore be packed and tested entirely in software.

The robot built straight, C-shaped, angled, and branching walls and disassembled each one again.
