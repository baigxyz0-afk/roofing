// Every URL builder. Single source of truth. Rename SERVICES for another trade.
import { SERVICE_PARENT } from "@/content/serviceTree";

export const SERVICES = "roofing-services";

export const routes = {
  home: () => "/",
  services: () => `/${SERVICES}/`,
  service: (slug: string) => (SERVICE_PARENT[slug] ? `/${SERVICES}/${SERVICE_PARENT[slug]}/${slug}/` : `/${SERVICES}/${slug}/`),
  category: (slug: string) => `/${SERVICES}/#${slug}`,
  emergency: () => `/${SERVICES}/roof-repair/emergency-roof-repair/`,
  usa: () => "/locations/",
  locations: () => "/locations/",
  state: (s: string) => `/locations/${s}/`,
  city: (s: string, c: string) => `/locations/${s}/${c}/`,
  cityService: (s: string, c: string, svc: string) => `/locations/${s}/${c}/${svc}/`,
  resources: () => "/resources/",
  guide: (slug: string) => `/resources/${slug}/`,
  about: () => "/about/",
  contact: () => "/contact/",
  faq: () => "/faq/",
  request: (q?: { service?: string; zip?: string }) => {
    const p = new URLSearchParams();
    if (q?.service) p.set("service", q.service);
    if (q?.zip) p.set("zip", q.zip);
    const s = p.toString();
    return `/request-service/${s ? `?${s}` : ""}`;
  },
  privacy: () => "/privacy/",
  terms: () => "/terms/",
  accessibility: () => "/accessibility/",
  thankYou: () => "/thank-you/",
  lp: (slug: string) => `/lp/${slug}/`,
};
