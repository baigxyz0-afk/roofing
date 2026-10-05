import "server-only";
import { site } from "@/content/site";
import { publishedServices, categories } from "@/content/services";
import { cityLabel } from "@/content/locations";
import { indexableCities, indexableStates } from "./sitemap";
import { routes } from "./routes";
import type { Faq } from "@/content/types";

// Connected JSON-LD graph with stable @ids. Every @id referenced on a page is defined on that page.
const U = site.url;
export const ids = {
  org: `${U}/#organization`,
  website: `${U}/#website`,
  country: `${U}/#place-us`,
  logo: `${U}/#logo`,
  service: (slug: string) => `${U}${routes.service(slug)}#service`,
  place: (city: string) => `${U}/#place-${city}`,
  county: (slug: string) => `${U}/#place-${slug.replace(/[^a-z0-9-]+/gi, "-").toLowerCase()}-county`,
  state: (s: string) => `${U}/#place-${s}`,
  page: (path: string) => `${U}${path}#webpage`,
  breadcrumb: (path: string) => `${U}${path}#breadcrumb`,
  faq: (path: string) => `${U}${path}#faq`,
};

export function siteGraph() {
  const cities = indexableCities();
  const org: Record<string, unknown> = {
    "@type": "Organization",
    "@id": ids.org,
    name: site.name,
    alternateName: site.shortName,
    url: `${U}/`,
    logo: { "@id": ids.logo },
    description:
      "Ridgewise Roofing is a nationwide roofing referral service covering all 50 U.S. states and Washington, D.C. It connects homeowners with independent roofing contractors for roof repair, leaks, ice dams, storm, hail and hurricane damage, insurance claim inspections, roof replacement, and metal, tile and flat roofs.",
    areaServed: { "@id": ids.country },
    knowsAbout: ["Roof repair", "Roof leak repair", "Hail damage", "Hurricane and wind damage", "Roof insurance claims", "Roof replacement", "Impact-resistant shingles", "Metal roofing", "Flat roofing", "Tile roofing", "Ice dams", "Wildfire-resistant roofing", "FORTIFIED roofs", "Attic ventilation"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing services",
      itemListElement: categories.map((cat) => ({
        "@type": "OfferCatalog",
        name: cat.name,
        itemListElement: publishedServices
          .filter((s) => s.category === cat.slug)
          .map((s) => ({ "@type": "Offer", itemOffered: { "@id": ids.service(s.slug) } })),
      })),
    },
  };
  if (site.phoneIsReal) org.telephone = site.phoneE164;
  if (site.email) org.email = site.email;
  if (site.googleProfileUrl) org.sameAs = [site.googleProfileUrl];

  return [
    org,
    { "@type": "ImageObject", "@id": ids.logo, url: `${U}/brand/logo.png`, width: 600, height: 160, caption: site.name },
    { "@type": "WebSite", "@id": ids.website, url: `${U}/`, name: site.name, publisher: { "@id": ids.org }, inLanguage: "en-US" },
    ...publishedServices.map((s) => ({ "@type": "Service", "@id": ids.service(s.slug), name: s.name, url: `${U}${routes.service(s.slug)}` })),
    { "@type": "Country", "@id": ids.country, name: "United States", identifier: "US" },
    ...indexableStates().map((s) => ({ "@type": "State", "@id": ids.state(s.slug), name: s.name, containedInPlace: { "@id": ids.country } })),
    ...[...new Map(cities.map((c) => [`${c.county}-${c.stateSlug}`, c])).values()].map((c) => ({
      "@type": "AdministrativeArea",
      "@id": ids.county(`${c.county.toLowerCase()}-${c.stateSlug}`),
      name: `${c.county} County`,
      containedInPlace: { "@id": ids.state(c.stateSlug) },
    })),
    ...cities.map((c) => ({
      "@type": "City",
      "@id": ids.place(c.slug),
      name: cityLabel(c),
      containedInPlace: { "@id": ids.county(`${c.county.toLowerCase()}-${c.stateSlug}`) },
    })),
  ];
}

export type Crumb = { name: string; path: string };

export function pageGraph(opts: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "ItemPage" | "AboutPage" | "ContactPage" | "FAQPage";
  crumbs: Crumb[];
  faqs?: Faq[];
  about?: string[];
  extra?: Record<string, unknown>[];
}) {
  const { path, name, description, crumbs, faqs, about, extra } = opts;
  const type = opts.type ?? "WebPage";
  const pageTypes = faqs?.length && type !== "FAQPage" ? [type, "FAQPage"] : type;
  const page: Record<string, unknown> = {
    "@type": pageTypes,
    "@id": ids.page(path),
    url: `${U}${path}`,
    name,
    description,
    isPartOf: { "@id": ids.website },
    publisher: { "@id": ids.org },
    breadcrumb: { "@id": ids.breadcrumb(path) },
    inLanguage: "en-US",
  };
  if (about?.length) page.about = about.map((id) => ({ "@id": id }));
  if (faqs?.length)
    page.mainEntity = faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }));
  const bc = {
    "@type": "BreadcrumbList",
    "@id": ids.breadcrumb(path),
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${U}${c.path}` })),
  };
  return [page, bc, ...(extra ?? [])];
}

export function graph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
