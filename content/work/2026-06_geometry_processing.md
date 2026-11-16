---
title: Geometry Processing
description: >-
  The foundations of digital geometry processing, implemented in C++: subdivision, surface reconstruction, parameterization, deformation, and skinning.
order: 6
category: tools
thumb: /imgs/2026-06_geometry_processing/gp00_dr_thumb
hero:
  src: /video/2026-06_geometry_processing/gp11_dr.webm
  credit: Mesh Subdivision | Video © Dominik Reisach
  alt: Mesh subdivision on the Stanford bunny
media:
  - src: /video/2026-06_geometry_processing/gp31_dr.webm
    alt: Point cloud to mesh via implicit moving least squares function and marching cubes on Luigi
    credit: Point Cloud to Mesh via Implicit Moving Least Squares Function and Marching Cubes | Video © Dominik Reisach
  - src: /video/2026-06_geometry_processing/gp43_dr.webm
    alt: Mesh parameterization on an octopus
    credit: Mesh Parameterization | Video © Dominik Reisach
  - src: /video/2026-06_geometry_processing/gp51_dr.webm
    alt: Mesh deformation on a hand
    credit: Mesh Deformation | Video © Dominik Reisach
  - src: /video/2026-06_geometry_processing/gp52_dr.webm
    alt: Mesh deformation on a bumpy plane
    credit: Mesh Deformation | Video © Dominik Reisach
  - src: /video/2026-06_geometry_processing/gp64_dr.webm
    alt: >-
      Four linear blend skinning variants side by side on four humanoids: per vertex
      with and without context-aware corrections, and per face with direct and
      decomposed blending
    credit: Skeletal Deformation | Video © Dominik Reisach
type: Course
year: 2026
place: ETH Zürich, D-INFK, CH
credits:
  - role: Course Website
    people:
      - name: Shape Modeling and Geometry Processing
        url: https://igl.ethz.ch/teaching/shape-modeling/sm2026/
  - role: Software
    people:
      - C++, libigl, Eigen
---

In the Shape Modeling and Geometry Processing course at ETH Zürich, I implemented the foundations of digital geometry processing in C++ on libigl: mesh subdivision; surface reconstruction from point clouds via an implicit moving least squares function and marching cubes; mesh parameterization with uniform and cotangent Laplacians, LSCM, and ARAP; mesh deformation; and skeletal deformation with four variants of linear blend skinning, compared side by side: per vertex, with and without context-aware corrections, and per face, with transformations blended directly or decomposed.

The models are the course's standard test meshes. The problems are the ones my research runs into on real material: a scanned stone or tile shard arrives as a point cloud, has to become a clean surface before any algorithm can reason about it, and often has to be flattened or deformed before it can be placed.

The course is taught by the [Interactive Geometry Lab, ETH Zürich](https://igl.ethz.ch/).
