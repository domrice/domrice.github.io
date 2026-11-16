---
title: Offcut Tales
description: >-
  This thesis presents methods for upcycling and designing low-engineered free-form timber structure with offcuts—a waste material from timber production.
order: 7
category: tools
thumb: /imgs/2022-09_offcut_tales/ot0_dr_thumb
hero:
  src: /imgs/2022-09_offcut_tales/ot1_dr
  credit: Photo © Michael Braun
  alt: Detailed photograph of the free-form arched prototype.
media:
  - src: /imgs/2022-09_offcut_tales/ot2i_dr
    alt: Diagram of the lifecycle of a tree in the timber industry.
    credit: Life Cycle of a Tree © Dominik Reisach
  - src: /imgs/2022-09_offcut_tales/ot4i_dr
    alt: Drawings of the free-form arched prototype.
    credit: Prototype Design © Dominik Reisach
  - src: /video/2022-09_offcut_tales/ot13_dr.webm
    alt: >-
      Screen recording of the custom Grasshopper plugin: a Rhino viewport showing the
      free-form arched prototype geometry beside a Grasshopper canvas with custom components.
    credit: Custom Grasshopper Plugin | Video © Dominik Reisach
  - src: /video/2022-09_offcut_tales/ot6_dr.webm
    alt: The UR10e robot arm milling a slot into the end face of a timber offcut clamped upright in a vice, in the daylit workshop.
    credit: Video © Dominik Reisach
    portrait: true
  - src: /video/2022-09_offcut_tales/ot7_dr.webm
    alt: Close-up of the milling bit cutting a rectangular slot into the sawn end grain of an offcut, sawdust scattered across the face.
    credit: Video © Dominik Reisach
    portrait: true
  - src: /imgs/2022-09_offcut_tales/ot9_dr
    alt: Detailed photograph of the free-form arched prototype.
    credit: Photo © Michael Braun
  - src: /imgs/2022-09_offcut_tales/ot10_dr
    alt: Detailed photograph of the free-form arched prototype.
    credit: Photo © Michael Braun
  - src: /imgs/2022-09_offcut_tales/ot11_dr
    alt: Photograph of the free-form arched prototype.
    credit: Photo © Michael Braun
  - src: /imgs/2022-09_offcut_tales/ot12_dr
    alt: Photograph of the free-form arched prototype.
    credit: Photo © Michael Braun
type: R&D Project
year: 2022
place: Bauhaus-Universität Weimar, DE
credits:
  - role: Supervision
    people:
      - name: Prof. Dr. Jan Willmann
        url: https://www.uni-weimar.de/en/art-and-design/chairs/theory-and-history-of-design/
      - name: Dr. Sven Schneider
        url: https://www.uni-weimar.de/en/architecture-and-urbanism/chairs/infau/news/
      - Dr. Stephan Schütz
  - role: Support
    people:
      - name: Michael Braun (Photography, Robotic Setup)
        url: https://michaelbraun-design.de/
  - role: Workshop Support
    people:
      - Dr. Christian Hanke
      - Ringo Gunkel (Wood Workshop)
      - Matthias Henkelmann (CNC Milling)
  - role: Material Sponsors
    people:
      - name: Rettenmeier Holzindustrie Hirschberg GmbH
        url: https://www.rettenmeier.com/en/company/locations/hirschberg
  - role: Software
    people:
      - C#, Rhino, Grasshopper
  - role: Code
    people:
      - name: domrice/spruce-beetle
        url: https://github.com/domrice/spruce-beetle
  - role: Hardware
    people:
      - UR10e, Milling End Effector
  - role: Publications
    people:
      - name: CAAD Futures 2023
        url: https://doi.org/10.1007/978-3-031-37189-9_24
      - name: ACADIA 2023
        url: https://doi.org/10.52842/conf.acadia.2023.1.154
      - name: Circular Economy
        url: https://doi.org/10.55845/VWGD7873
---

Timber production leaves offcuts behind, and they are usually burned for energy. For my master's thesis I took 167 of them from the pile to see if they could become a structure instead. They looked like cuboids but never quite were, especially at the cuts. Moisture varied, since some were fresh and others had lain outside for days. So did the reason each had been cut off, from rot to purely visual defects.

With no scanner at hand, I measured every offcut by hand. That was precise enough, because the ragged end grain would be milled off anyway. Each piece got an ID, written on the wood and logged in a digital inventory. Spruce Beetle, a C# plugin I built for Rhino/Grasshopper, reads that inventory, orients the offcuts, computes the joints between them, and writes the fabrication data for a free-form structure of timber arches. A UR10e robot arm milled the joints. I assembled the arches by hand.

81 offcuts went into the prototype. The other 86 went unused and ended up burned. Milling on the UR10e was slow, so two of the arches moved to a 5-axis CNC mill. Freshly joined, the arches were stiff and stable. Storage changed that. The wood shrank unevenly, the joints stopped pulling the pieces tight, and by the exhibition the whole structure had a slight wobble.

The prototype lasted one photoshoot and one exhibition at the university. Then my supervisors burned it in their chimney, the fate the offcuts had been headed for all along. Spruce Beetle outlived it. The plugin is public on [GitHub](https://github.com/domrice/Spruce-Beetle) and in Rhino's package manager. Two lessons carried into my PhD. Tracking every piece by ID was a logistical nightmare, so I now handle reclaimed material in batches, and measuring by hand pushed me to develop an automated digitization method for [Robotic Mosaic](/work/2026-09_robotic_mosaic).
