---
title: compas.dev
description: >-
  compas.dev is the new website of COMPAS, the open-source computational framework for research and collaboration in architecture, engineering, and construction.
order: 6
category: tools
thumb: /imgs/2026-12_compas-dev/cd0_dr_thumb
hero:
  src: /video/2026-12_compas-dev/cd1_dr.webm
  alt: Scrolling down the compas.dev home page, from the supporter logos through the features and testimonials to the association
  credit: Home Page | Video © Dominik Reisach
media:
  - src: /video/2026-12_compas-dev/cd2_dr.webm
    alt: compas.dev on a phone, opening the news page from the menu and scrolling through release posts into one release's changelog
    credit: News | Video © Dominik Reisach
    portrait: true
  - src: /video/2026-12_compas-dev/cd3_dr.webm
    alt: compas.dev on a phone, scrolling through projects made with COMPAS, each with a photo, place, year, and description
    credit: Made with COMPAS | Video © Dominik Reisach
    portrait: true
  - src: /video/2026-12_compas-dev/cd4_dr.webm
    alt: Switching the installation docs between Python, Rhino, Grasshopper, and Blender, each with its own numbered steps
    credit: Installation Docs | Video © Dominik Reisach
type: Website
year: 2026
credits:
  - role: Software
    people:
      - Nuxt, Vue, TypeScript, Tailwind CSS, GitHub Actions
  - role: Code
    people:
      - name: compas-dev/compas.dev
        url: https://github.com/compas-dev/compas.dev
  - role: Project Team
    people:
      - Tom Van Mele
      - Gonzalo Casas
      - Dominik Reisach
---

**[compas.dev](https://compas.dev)** is the website of COMPAS, the open-source computational framework for research and collaboration in architecture, engineering, and construction. The old site had fallen behind the framework it described. Its codebase was outdated and hard to maintain, and it did not communicate what COMPAS is. The documentation was scattered and incomplete.

None of the old code survived. We redesigned the structure together, then split the build by area. Only content that still made sense came across, cut down and regrouped around the core library, its ecosystem of packages, and the association behind them, so there is less to search through. The new site runs on Nuxt and Vue with TypeScript and Tailwind CSS, and GitHub Actions deploys it.

I implemented the news and docs pages. The docs are reorganized so that installing COMPAS starts from the software you already work in. News posts are Markdown files, published automatically on merge. A weekly job checks GitHub for new COMPAS releases and opens a pull request for each, with the post written and its image rendered. Keeping the site current now takes a review and a merge.
