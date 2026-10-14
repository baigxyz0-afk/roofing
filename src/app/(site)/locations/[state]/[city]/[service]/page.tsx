import { notFound } from "next/navigation";
import { getService } from "@/content/services";
import { getCity, getState, cityLabel, cityBySlug } from "@/content/locations";
import { indexableCityServices } from "@/lib/sitemap";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { site } from "@/content/site";
import { JsonLd } from "@/components/ui";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";
import { indexableStates } from "@/lib/sitemap";
import { getGeneratedCity } from "@/content/generatedCities";
import { allCombos, comboIndexable } from "@/content/generatedCombos";
import { GeneratedCityServicePage } from "@/components/templates/GeneratedCityServicePage";

function generatedCombo(p: { state: string; city: string; service: string }) {
  const c = getGeneratedCity(p.state, p.city);
  const st = getState(p.state);
  const s = getService(p.service);
  if (!c || !st || !s) return null;
  const combos = allCombos([st]);
  if (!combos.some((x) => x.c.slug === c.slug && x.service === s.slug)) return null;
  const siblings = new Set(combos.filter((x) => comboIndexable(x.c, x.service)).map((x) => `${x.c.slug}/${x.service}`));
  return { c, st, s, siblings };
}

export const dynamicParams = false;
export function generateStaticParams() {
  return [
    ...indexableCityServices().map((cs) => ({ state: cityBySlug(cs.citySlug)!.stateSlug, city: cs.citySlug, service: cs.serviceSlug })),
    // Wave 6: data-driven service + city pages (flagged near-duplicates render noindex).
    ...allCombos(indexableStates()).map((x) => ({ state: x.st.slug, city: x.c.slug, service: x.service })),
  ];
}

type P = { params: Promise<{ state: string; city: string; service: string }> };

function load(p: { state: string; city: string; service: string }) {
  const cs = indexableCityServices().find((x) => x.citySlug === p.city && x.serviceSlug === p.service);
  const city = getCity(p.state, p.city);
  const s = getService(p.service);
  const st = getState(p.state);
  if (!cs || !city || !s || !st) return null;
  return { cs, city, s, st };
}

export async function generateMetadata({ params }: P) {
  const p = await params;
  const g = load(p) ? null : generatedCombo(p);
  if (g) {
    const label = `${g.c.name}, ${g.st.abbr}`;
    return pageMeta({
      title: `${g.s.name} in ${label}`,
      description: `${g.s.name} in ${label} (${g.c.county} County): ${g.c.zips.length} covered ZIP${g.c.zips.length === 1 ? "" : "s"}, warning signs, nearby availability and a local roofer.`.slice(0, 158),
      path: routes.cityService(g.st.slug, g.c.slug, g.s.slug),
      ogKey: `locations--${g.st.slug}`,
      noindex: !comboIndexable(g.c, g.s.slug),
    });
  }
  const d = load(p)!;
  return pageMeta({ title: d.cs.seoTitle, description: d.cs.metaDescription, path: routes.cityService(d.st.slug, d.city.slug, d.s.slug) });
}

export default async function CityServicePage({ params }: P) {
  const p = await params;
  const d = load(p);
  if (!d) {
    const g = generatedCombo(p);
    if (!g) notFound();
    return <GeneratedCityServicePage c={g.c} st={g.st} s={g.s} siblingsWithPage={g.siblings} />;
  }
  const { cs, city, s, st } = d;
  const path = routes.cityService(st.slug, city.slug, s.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: routes.locations() },
    { name: st.name, path: routes.state(st.slug) },
    { name: city.name, path: routes.city(st.slug, city.slug) },
    { name: s.name, path },
  ];
  const faqs = [...cs.localFaqs, ...s.faqs].slice(0, 4);
  const node = {
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: `${s.name} in ${cityLabel(city)}`,
    url: `${site.url}${path}`,
    description: cs.answer,
    broker: { "@id": ids.org },
    areaServed: { "@id": ids.place(city.slug) },
    isRelatedTo: { "@id": ids.service(s.slug) },
  };
  return (
    <>
      <JsonLd data={graph(pageGraph({ path, name: cs.seoTitle, description: cs.metaDescription, type: "ItemPage", crumbs, faqs, about: [`${site.url}${path}#service`], extra: [node] }))} />
      <ServiceTemplate s={s} path={path} crumbs={crumbs} city={city} local={cs} faqs={faqs} />
    </>
  );
}
