import "server-only";
import { indexableUrls } from "./sitemap";
import { ogKeyFor } from "./seo";
import { getService, getCategory } from "@/content/services";
import { cityBySlug, cityLabel, getState } from "@/content/locations";
import { getArticle } from "@/content/articles";

export type OgCard = { key: string; eyebrow: string; title: string };

// Per-page Open Graph card definitions for every indexable URL.
export function ogCards(): OgCard[] {
  return indexableUrls().map((u) => {
    const parts = u.path.split("/").filter(Boolean);
    let eyebrow = "Roofing help nationwide";
    let title = u.title;
    if (parts[0] === "roofing-services" && parts[1]) {
      const s = getService(parts[1]);
      if (s) {
        eyebrow = getCategory(s.category).name;
        title = s.h1;
      }
    } else if (parts[0] === "locations" && parts[1] && !parts[2]) {
      const st = getState(parts[1]);
      eyebrow = `State guide · ${st?.region ?? ""}`;
      title = `Roofing help in ${st?.name ?? ""}`;
    } else if (parts[0] === "locations" && parts[2]) {
      const c = cityBySlug(parts[2]);
      eyebrow = `Service area · ${c?.county} County`;
      title = parts[3] ? u.title : `Roofing help in ${c ? cityLabel(c) : ""}`;
    } else if (parts[0] === "resources" && parts[1]) {
      const a = getArticle(parts[1]);
      eyebrow = `Guide · ${a?.category}`;
    } else if (u.path === "/") {
      title = "Roofing help built for the weather where you live";
    }
    return { key: ogKeyFor(u.path), eyebrow, title };
  });
}
