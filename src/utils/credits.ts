// Credit roles in display order, banded: stack → proof → people.
// A project page renders each band as its own group, so a visitor reads what was
// built with first, what came out of it second, and who made it last. Frontmatter
// order is ignored; a role missing from this list fails the build.
export const bands = [
  ["Software", "Code", "Hardware"],
  ["Publications", "Award", "Course Website"],
  // lead → partners → team → support: the long name lists sit at the end
  [
    "Supervision",
    "Office",
    "Collaborations",
    "Material Sponsors",
    "Teaching & Organisation Team",
    "Teaching Team",
    "Project Team",
    "Student Team",
    "Support",
    "Workshop Support",
    "Visualization",
  ],
] as const;

export const roles = bands.flat();
