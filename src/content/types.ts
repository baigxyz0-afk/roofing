// Content types. Shaped to match prisma/schema.prisma for a later move to a database.

export type Status = "DRAFT" | "REVIEW" | "PUBLISHED" | "NOINDEX" | "ARCHIVED";

export type Faq = { q: string; a: string };

export type CategorySlug =
  | "repair"
  | "storm"
  | "replacement"
  | "flat"
  | "inspection"
  | "components";

export type Category = {
  slug: CategorySlug;
  name: string;
  blurb: string;
  icon: IconName;
};

export type IconName =
  | "roof"
  | "storm"
  | "hail"
  | "wind"
  | "layers"
  | "flat"
  | "ladder"
  | "vent"
  | "skylight"
  | "house"
  | "drop"
  | "alert"
  | "phone"
  | "check"
  | "pin"
  | "clock"
  | "shield"
  | "wrench"
  | "sun"
  | "search";

export type Service = {
  slug: string;
  name: string;
  shortName?: string;
  category: CategorySlug;
  status: Status;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  /** 1–3 sentence direct answer shown first on the page (AEO). */
  answer: string;
  intro: string[];
  signs: string[];
  process: { title: string; body: string }[];
  costFactors: string[];
  diy?: { safe: string[]; stop: string[] };
  faqs: Faq[];
  related: string[];
  isEmergencyCapable: boolean;
  /** Facts rendered in the "at a glance" <dl>. */
  glance: { term: string; detail: string }[];
  updated: string;
};

export type Risk = "hail" | "hurricane" | "snow" | "wildfire" | "heat" | "wind" | "rain";

export type CensusRegion = "Northeast" | "Midwest" | "South" | "West";

export type State = {
  slug: string;
  name: string;
  abbr: string;
  region: CensusRegion;
  status: Status;
  /** Roofing hazards that shape which services and guides the state hub emphasizes. */
  risks: Risk[];
  /** Neighboring state slugs, for sideways links. */
  neighbors: string[];
  /** State-specific overview: climate, housing and what roofs face. */
  intro: string;
  /** State-specific roofing conditions. */
  details: { heading: string; body: string }[];
  /** Contractor licensing, code and insurance notes. Only facts we can stand behind; otherwise point to the agency. */
  rules: string;
  faqs: Faq[];
  updated: string;
};

export type City = {
  slug: string;
  name: string;
  stateSlug: string;
  county: string;
  region: string;
  status: Status;
  /** Only a real, staffed office. Service-area business otherwise. */
  officeAddress: string | null;
  zips: string[];
  areas: string[];
  intro: string;
  housingNotes: string;
  localIssues: { title: string; body: string }[];
  popularServices: string[];
  nearby: string[];
  /** Wind, flood-zone and insurance notes for the town. */
  storm: string;
  permits: string;
  faqs: Faq[];
  updated: string;
};

export type CityService = {
  citySlug: string;
  serviceSlug: string;
  status: Status;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  answer: string;
  localAngle: string[];
  localFaqs: Faq[];
  updated: string;
};

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: "Leaks & repair" | "Storms & insurance" | "Replacement" | "Maintenance" | "Cost";
  status: Status;
  answer: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  whenToCall: string[];
  faqs: Faq[];
  services: string[];
  relatedArticles: string[];
  published: string;
  updated: string;
  reviewedBy: string | null;
};

export type Review = {
  id: string;
  author: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body: string;
  date: string;
  source: "Google";
  verified: true;
};

export type LandingPage = {
  slug: string;
  service: string;
  canonical: string;
  headline: string;
  sub: string;
  bullets: string[];
  signs: string[];
  expect: string[];
  faqs: Faq[];
  /** Whitelisted ?kw= values → headline. Arbitrary text is never reflected. */
  kw: Record<string, string>;
};
