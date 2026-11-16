---
title: Job Seek
description: >-
  Job Seek collects Swiss job postings from boards and employer career pages into one local database and scores each one against a CV with a model that runs on the same machine.
order: 2
category: tools
thumb: /imgs/2026-11_jobseek/js0_dr_thumb
hero:
  src: /video/2026-11_jobseek/js1_dr.webm
  alt: Job Seek choosing job boards and models, then pre-scoring and deep-scoring postings into a ranked table of scored jobs
  credit: The Job Seek Interface | Video © Dominik Reisach
type: Open-Source Tool
year: 2026
credits:
  - role: Software
    people:
      - Nuxt, Vue, TypeScript, SQLite, Drizzle, Ollama, Gemma
  - role: Code
    people:
      - name: domrice/jobseek
        url: https://github.com/domrice/jobseek
---

Job hunting means checking the same job boards every week, then the career pages of every employer of interest, each run on its own applicant tracking system (ATS). The same posting turns up on several boards. Then every posting has to be read just to find out whether it fits. I built **Job Seek** for people outside tech who want that first read and evaluation done for them.

It is a local app, Nuxt and TypeScript over SQLite. It currently reads five Swiss job boards and the career pages of employers on eight ATS, from Greenhouse to plain WordPress. I chose each source by hand after checking its terms of service and robots.txt, and requests stay at least 2&nbsp;s apart. A single normalization step maps their HTML, JSON, and RSS onto one schema and fingerprints each posting with a content hash. Duplicates across boards are flagged, never deleted. A rerun only updates.

A keyword score ranks every posting against the search profile. A Gemma model, run locally through Ollama, then reads each posting next to the CV. It returns a score and a confidence, with a summary, strengths, gaps, and concerns. A fast model makes the first pass over everything. A larger, slower model re-judges only the best pre-scored postings. Your CV is personal data, so it never leaves your machine.
