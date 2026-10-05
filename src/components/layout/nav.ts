import { categories, servicesInCategory } from "@/content/services";
import { states } from "@/content/locations";
import { censusRegions } from "@/content/states";
import { routes } from "@/lib/routes";
import type { IconName } from "@/content/types";

export type NavGroup = { title: string; href: string; icon?: IconName; links: { name: string; href: string }[] };

export function serviceGroups(): NavGroup[] {
  return categories.map((c) => ({
    title: c.name,
    href: routes.category(c.slug),
    icon: c.icon,
    links: servicesInCategory(c.slug).map((s) => ({ name: s.shortName ?? s.name, href: routes.service(s.slug) })),
  }));
}

/** All 50 states + DC, grouped by Census region. */
export function locationGroups(): NavGroup[] {
  return censusRegions.map((r) => ({
    title: r,
    href: `${routes.locations()}#${r.toLowerCase()}`,
    links: states.filter((s) => s.region === r && s.status === "PUBLISHED").map((s) => ({ name: s.name, href: routes.state(s.slug) })),
  }));
}

export const companyLinks = [
  { name: "Resources", href: routes.resources() },
  { name: "About", href: routes.about() },
  { name: "FAQ", href: routes.faq() },
  { name: "Contact", href: routes.contact() },
];
