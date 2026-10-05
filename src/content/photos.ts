import type { CategorySlug, Article } from "./types";

// Real licensed photography (Pexels license). Credits: public/photos/CREDITS.md
export type Photo = { src: string; w: number; h: number; alt: string };

const p = (name: string, alt: string, w = 1600, h = 1067): Photo => ({ src: `/photos/${name}.webp`, w, h, alt });

export const photos = {
  skyline: p("houston-skyline-daylight", "Downtown Houston skyline above green parkland on a clear day"),
  reroof: p("reroof-brick-house-texas", "Roofers re-roofing a brick home in Texas with ladders against the eaves"),
  tearoff: p("tearoff-brick-house-texas", "Brick Texas home with its roof partly torn off during a replacement"),
  loading: p("roofers-loading-shingles", "Roofers stacking bundles of shingles on a roof under synthetic underlayment"),
  nailing: p("roofer-nailing-shingles", "Roofer nailing architectural asphalt shingles with a nail gun"),
  installing: p("roofer-installing-shingles", "Roofer kneeling on a roof installing new asphalt shingles"),
  repairing: p("roofer-repairing-shingle-roof", "Roofer in a harness working on a pitched shingle roof"),
  flatCrew: p("roofers-flat-roof-membrane", "Roofers working on a flat roof membrane"),
  flatRoll: p("roofer-rolling-flat-roof-membrane", "Roofer rolling out a waterproof membrane on a flat roof", 1600, 900),
  metal: p("metal-roof-with-skylight", "Dark standing seam metal roof with a skylight"),
  skylights: p("skylights-living-room", "Bright living room lit by ceiling skylights"),
  chimney: p("chimney-flashing-repair", "Roofer in a hard hat working beside a brick chimney"),
  attic: p("attic-rafters-and-vents", "Empty attic with exposed rafters and gable windows"),
  drip: p("water-dripping-roof-edge", "Rainwater dripping from a roof edge"),
  hail: p("hail-on-lawn", "Hailstones scattered across a green lawn after a storm", 1600, 1060),
  treeDown: p("storm-uprooted-tree", "Large tree uprooted beside a house after a severe storm"),
  branchDown: p("storm-branch-down-street", "Fallen tree branches on a wet street after a storm"),
  stormClouds: p("storm-clouds-over-city", "Dark storm clouds over city buildings"),
  ladder: p("roofer-climbing-ladder-gutter", "Roofer with a tool belt climbing a ladder past a gutter"),
  brickHome: p("brick-suburban-home", "Red brick suburban home with a shingle roof and a wide lawn"),
  colonial: p("brick-colonial-home-houston", "Brick colonial-style home in Houston under mature oaks"),
  aerial: p("aerial-suburban-neighborhood", "Aerial view of a suburban Houston-area neighborhood"),
  galveston: p("galveston-pleasure-pier", "Entrance to the Galveston Island Historic Pleasure Pier", 1600, 1070),
};

export const categoryPhotos: Record<CategorySlug, Photo> = {
  repair: photos.repairing,
  storm: photos.treeDown,
  replacement: photos.reroof,
  flat: photos.flatCrew,
  inspection: photos.ladder,
  components: photos.chimney,
};

export const servicePhotoOverrides: Record<string, Photo> = {
  "roof-leak-repair": photos.drip,
  "emergency-roof-repair": photos.branchDown,
  "hail-damage-roof-repair": photos.hail,
  "wind-damage-roof-repair": photos.stormClouds,
  "roof-insurance-claims": photos.tearoff,
  "asphalt-shingle-roofing": photos.nailing,
  "impact-resistant-shingles": photos.installing,
  "metal-roofing": photos.metal,
  "roof-coatings": photos.flatRoll,
  "roof-maintenance": photos.brickHome,
  "roof-ventilation": photos.attic,
  "skylight-repair": photos.skylights,
  "fascia-soffit-repair": photos.loading,
};

export const guidePhotos: Record<Article["category"], Photo> = {
  "Leaks & repair": photos.repairing,
  "Storms & insurance": photos.treeDown,
  Replacement: photos.reroof,
  Maintenance: photos.ladder,
  Cost: photos.loading,
};
