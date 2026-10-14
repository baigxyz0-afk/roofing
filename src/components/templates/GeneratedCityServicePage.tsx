import Link from "next/link";
import type { GeneratedCity } from "@/content/generatedCities";
import { countyNote } from "@/content/generatedCities";
import { HAZARD_REASON, HAZARD_SERVICE, combosForCity } from "@/content/generatedCombos";
import type { Risk, Service, State } from "@/content/types";
import { RISKS } from "@/content/risks";
import { getService, parentOf } from "@/content/services";
import { availability, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { Chip, FaqList, JsonLd } from "@/components/ui";
import { PhoneLink } from "@/components/PhoneLink";

// Data-driven service + city page (Wave 6). Service detail lives on the service page; this page carries the
// local data: covered ZIPs, distances, the state hazard that drives this service, and the same service nearby.
const list = (xs: string[]) => (xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`);

export function GeneratedCityServicePage({ c, st, s, siblingsWithPage }: { c: GeneratedCity; st: State; s: Service; siblingsWithPage: Set<string> }) {
  const path = routes.cityService(st.slug, c.slug, s.slug);
  const label = `${c.name}, ${st.abbr}`;
  const parent = parentOf(s.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: routes.locations() },
    { name: st.name, path: routes.state(st.slug) },
    { name: c.name, path: routes.city(st.slug, c.slug) },
    { name: s.name, path },
  ];
  // The state hazard this service answers, if any (e.g. hail -> hail damage repair).
  const hazard = (Object.keys(HAZARD_SERVICE) as Risk[]).find((r) => HAZARD_SERVICE[r] === s.slug && st.risks.includes(r));
  const why = hazard ? HAZARD_REASON[hazard] : st.risks.slice(0, 2).map((r) => HAZARD_REASON[r]).join(" and ");
  const zipText = c.zips.length === 1 ? `ZIP code ${c.zips[0]}` : `${c.zips.length} ZIP codes`;
  const nearSame = c.nearbyPages.filter((p) => siblingsWithPage.has(`${p.slug}/${s.slug}`));
  const others = combosForCity(c, st).filter((x) => x !== s.slug).map(getService).filter(Boolean) as Service[];
  const note = countyNote(c);

  const intro = [
    `${s.name} in ${c.name} (${c.county} County) usually follows ${why}.`,
    `Independent roofers in our network serve ${zipText} here${c.ref ? `, about ${c.ref.miles} miles ${c.ref.dir} of ${c.ref.name}` : ""}.`,
  ].join(" ");

  const faqs = [
    { q: `Can I get ${s.shortName?.toLowerCase() ?? s.name.toLowerCase()} in ${label}?`, a: `Yes. Covered ZIP codes in ${c.name}: ${c.zips.join(", ")}. Call ${site.phone} or request service online.` },
    ...(nearSame.length ? [{ q: `Where else nearby is ${s.shortName?.toLowerCase() ?? s.name.toLowerCase()} available?`, a: list(nearSame.map((p) => `${p.name} (${p.miles} mi)`)) + "." }] : []),
  ];

  const node = {
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: `${s.name} in ${label}`,
    url: `${site.url}${path}`,
    description: intro,
    broker: { "@id": ids.org },
    areaServed: { "@type": "City", name: label },
    isRelatedTo: { "@id": ids.service(s.slug) },
  };

  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: `${s.name} in ${label}`, description: intro, type: "ItemPage", crumbs, faqs, about: [`${site.url}${path}#service`], extra: [node] }))} />
      <Hero crumbs={crumbs} eyebrow={`${parent ? parent.name : "Roofing"} · ${c.county} County`} title={`${s.name} in ${label}`} lead={<p>{intro}</p>} service={s.slug} facts={[availability, `${c.zips.length} covered ZIP${c.zips.length === 1 ? "" : "s"}`]} />
      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0 space-y-10">
            <dl className="grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-2">
              {[
                ["County", `${c.county} County`],
                ["Covered ZIP codes", c.zips.join(", ")],
                ["Why it's needed here", hazard ? RISKS[hazard].label : st.risks.slice(0, 2).map((r) => RISKS[r].label).join(" · ")],
                ["Nearest major city", c.ref ? `${c.ref.name} · ${c.ref.miles} mi ${c.ref.dir}` : st.name],
              ].map(([t, d]) => (
                <div key={t} className="bg-white p-5">
                  <dt className="text-sm font-semibold text-muted">{t}</dt>
                  <dd className="mt-1 font-medium">{d}</dd>
                </div>
              ))}
            </dl>

            <p className="text-sm">
              How {s.name.toLowerCase()} works, warning signs and cost factors: <Link href={routes.service(s.slug)} className="link">{s.name} guide</Link>
            </p>

            {note && (
              <div className="rounded-2xl border-l-4 border-alert bg-alert-tint p-6">
                <h2 className="font-sans text-lg font-semibold">Local rule in {c.county} County</h2>
                <p className="mt-2 leading-relaxed">{note}</p>
              </div>
            )}

            {c.nearbyCovered.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold">{s.shortName ?? s.name} near {c.name}</h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {c.nearbyCovered.map((n) => {
                    const p = c.nearbyPages.find((x) => x.name === n.name);
                    const href = p && siblingsWithPage.has(`${p.slug}/${s.slug}`) ? routes.cityService(st.slug, p.slug, s.slug) : p ? routes.city(st.slug, p.slug) : null;
                    return (
                      <li key={n.name} className="flex items-center justify-between gap-3 rounded-lg bg-white px-4 py-3 ring-1 ring-line">
                        {href ? <Link href={href} className="link font-semibold">{n.name}</Link> : <span className="font-semibold">{n.name}</span>}
                        <span className="shrink-0 text-sm text-muted">{n.miles} mi · {n.zips} ZIP{n.zips === 1 ? "" : "s"}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <FaqList faqs={faqs} title={`${s.shortName ?? s.name} in ${c.name}`} />

            <div className="flex flex-wrap gap-2">
              {others.map((o) => (
                <Chip key={o.slug} href={routes.cityService(st.slug, c.slug, o.slug)}>{`${o.shortName ?? o.name} in ${c.name}`}</Chip>
              ))}
              <Chip href={routes.city(st.slug, c.slug)}>{`Roofing in ${c.name}`}</Chip>
              <Chip href={routes.state(st.slug)}>{st.name}</Chip>
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <p className="font-serif text-xl font-semibold">{s.shortName ?? s.name} in {c.name}</p>
              <p className="mt-1 text-sm text-muted">{availability}.</p>
              <PhoneLink phone={site.phone} e164={site.phoneE164} location="generated_city_service" className="btn btn-primary mt-4 w-full" label={`Call ${site.phone}`} />
              <Link href={routes.request({ service: s.slug, zip: c.zips[0] })} className="btn btn-secondary mt-3 w-full">Request service</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
