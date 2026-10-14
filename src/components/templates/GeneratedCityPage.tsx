import Link from "next/link";
import type { GeneratedCity } from "@/content/generatedCities";
import { countyNote } from "@/content/generatedCities";
import type { State, Service } from "@/content/types";
import { RISKS } from "@/content/risks";
import { getService } from "@/content/services";
import { availability, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { Chip, FaqList, JsonLd } from "@/components/ui";
import { PhoneLink } from "@/components/PhoneLink";
import { combosForCity } from "@/content/generatedCombos";

// Data-driven city page (Wave 5). Kept deliberately lean on shared boilerplate: most of the main content is
// real per-city data (covered ZIPs, real distances, county rules), so sibling pages don't read as near-duplicates.
const list = (xs: string[]) => (xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`);

export function GeneratedCityPage({ c, st }: { c: GeneratedCity; st: State }) {
  const path = routes.city(st.slug, c.slug);
  const label = `${c.name}, ${st.abbr}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: routes.locations() },
    { name: st.name, path: routes.state(st.slug) },
    { name: c.name, path },
  ];
  const services = [...new Set(st.risks.flatMap((r) => RISKS[r].services))].map(getService).filter(Boolean).slice(0, 5) as Service[];
  const near = c.nearbyCovered.slice(0, 3).map((n) => n.name);
  const note = countyNote(c);
  const zipText = c.zips.length === 1 ? `ZIP code ${c.zips[0]}` : `${c.zips.length} ZIP codes (${c.zips.join(", ")})`;

  const intro = [
    c.ref ? `${c.name} sits about ${c.ref.miles} miles ${c.ref.dir} of ${c.ref.name} in ${c.county} County.` : `${c.name} is in ${c.county} County, ${st.name}.`,
    `Our contractor network covers ${zipText} here.`,
    near.length ? `The same roofers often work in ${list(near)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const faqs = [
    { q: `Is ${label} in your network?`, a: `Yes. Covered ZIP codes in ${c.name}: ${c.zips.join(", ")}.` },
    ...(c.nearbyCovered.length
      ? [{ q: `What's covered near ${c.name}?`, a: list(c.nearbyCovered.slice(0, 6).map((n) => `${n.name}, ${n.miles} miles away (${n.zips} ZIP${n.zips === 1 ? "" : "s"})`)) + "." }]
      : []),
  ];

  const placeId = `${site.url}/#place-${st.slug}-${c.slug}`;
  const place = { "@type": "City", "@id": placeId, name: label, containedInPlace: { "@id": ids.state(st.slug) }, geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lng } };
  const zip0 = c.zips[0];

  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: `Roof Repair & Replacement in ${label}`, description: intro, crumbs, faqs, about: [placeId], extra: [place] }))} />
      <Hero crumbs={crumbs} eyebrow={`${c.county} County · ${st.name}`} title={`Roofing help in ${label}`} lead={<p>{intro}</p>} facts={[availability, `${c.zips.length} covered ZIP${c.zips.length === 1 ? "" : "s"}`]} />
      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0 space-y-10">
            <dl className="grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-2">
              {[
                ["County", `${c.county} County`],
                ["Covered ZIP codes", c.zips.join(", ")],
                ["Nearest major city", c.ref ? `${c.ref.name} · ${c.ref.miles} mi ${c.ref.dir}` : "—"],
                ["Closest city guide", c.nearestGuide ? `${c.nearestGuide.name} · ${c.nearestGuide.miles} mi` : st.name],
                ["Coordinates", `${c.lat.toFixed(3)}, ${c.lng.toFixed(3)}`],
                ["State hazards", st.risks.map((r) => RISKS[r].label).join(" · ")],
              ].map(([t, d]) => (
                <div key={t} className="bg-white p-5">
                  <dt className="text-sm font-semibold text-muted">{t}</dt>
                  <dd className="mt-1 font-medium">{d}</dd>
                </div>
              ))}
            </dl>

            {note && (
              <div className="rounded-2xl border-l-4 border-alert bg-alert-tint p-6">
                <h2 className="font-sans text-lg font-semibold">Local rule in {c.county} County</h2>
                <p className="mt-2 leading-relaxed">{note}</p>
              </div>
            )}

            {c.nearbyCovered.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold">Covered near {c.name}</h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {c.nearbyCovered.map((n) => {
                    const page = c.nearbyPages.find((p) => p.name === n.name);
                    return (
                      <li key={n.name} className="flex items-center justify-between gap-3 rounded-lg bg-white px-4 py-3 ring-1 ring-line">
                        {page ? <Link href={routes.city(st.slug, page.slug)} className="link font-semibold">{n.name}</Link> : <span className="font-semibold">{n.name}</span>}
                        <span className="shrink-0 text-sm text-muted">{n.miles} mi · {n.zips} ZIP{n.zips === 1 ? "" : "s"}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-semibold">{st.details[0].heading}</h2>
              <p className="mt-3 leading-relaxed text-muted">{st.details[0].body}</p>
              <p className="mt-3 text-sm leading-relaxed">
                <strong>Hiring in {st.name}:</strong> {st.rules.split(". ")[0]}.{" "}
                <Link href={routes.state(st.slug)} className="link">More on {st.name} roofing rules</Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Roofing services in {c.name}</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                {combosForCity(c, st).map((slug) => {
                  const sv = getService(slug)!;
                  return (
                    <li key={slug}>
                      <Link href={routes.cityService(st.slug, c.slug, slug)} className="card block p-4 font-semibold hover:text-teal-deep">{sv.shortName ?? sv.name} in {c.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <FaqList faqs={faqs} title={`${c.name} coverage`} />

            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <Chip key={s.slug} href={routes.service(s.slug)}>{s.shortName ?? s.name}</Chip>
              ))}
              {c.nearestGuide && <Chip href={routes.city(st.slug, c.nearestGuide.slug)}>{`${c.nearestGuide.name} guide`}</Chip>}
              {c.nearbyPages
                .filter((p) => !c.nearbyCovered.some((n) => n.name === p.name))
                .map((p) => (
                  <Chip key={p.slug} href={routes.city(st.slug, p.slug)}>{p.name}</Chip>
                ))}
              <Chip href={routes.state(st.slug)}>{st.name}</Chip>
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <p className="font-serif text-xl font-semibold">Roofer for {c.name}</p>
              <p className="mt-1 text-sm text-muted">{availability}.</p>
              <PhoneLink phone={site.phone} e164={site.phoneE164} location="generated_city" className="btn btn-primary mt-4 w-full" label={`Call ${site.phone}`} />
              <Link href={routes.request({ zip: zip0 })} className="btn btn-secondary mt-3 w-full">
                Request service
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
