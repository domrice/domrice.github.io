// The pipeline every pitch project walks, in order. A media item may carry one of these
// as its `stage`; the page groups a project's media by it and numbers the groups by
// position here, so a skipped number says that stage is not part of the project.
export const stages = ["scan", "algorithm", "robot", "built"] as const;

export const pitchText = {
  en: {
    for: "for",
    stages: { scan: "scan", algorithm: "algorithm", robot: "robot", built: "built" },
    contact: "contact",
    write: "email me",
    rights: "All Rights Reserved.",
    explore: "explore more",
    newTab: "opens in a new tab",
  },
  de: {
    for: "für",
    stages: { scan: "scan", algorithm: "algorithmus", robot: "roboter", built: "gebaut" },
    contact: "kontakt",
    write: "schreiben Sie mir",
    rights: "Alle Rechte vorbehalten.",
    explore: "mehr entdecken",
    newTab: "öffnet in einem neuen Tab",
  },
};
