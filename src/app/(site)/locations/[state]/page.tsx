import Link from "next/link";
import { notFound } from "next/navigation";
import { getState } from "@/content/locations";
import { getService } from "@/content/services";
import { getArticle } from "@/content/articles";
import { RISKS } from "@/content/risks";
import { stateCoverage } from "@/content/coverage";
import { indexableCities, indexableStates } from "@/lib/sitemap";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { availability } from "@/content/site";
import { Hero } from "@/components/Hero";
import { Chip, FaqList, JsonLd, ServiceCard } from "@/components/ui";
import { Icon } from "@/components/icons";
import { ZipChecker } from "@/components/ZipChecker";
import { CtaBand } from "@/components/CtaBand";
import type { Article, Service } from "@/content/types";

export const dynamicParams = false;
export function generateStaticParams() {
  return indexableStates().map((s) => ({ state: s.slug }));
}

type P = { params: Promise<{ state: string }> };

function hazardsLine(risks: string[]) {
  return risks.map((r) => RISKS[r as keyof typeof RISKS].label.toLowerCase()).slice(0, 3).join(", ");
}

export async function generateMetadata({ params }: P) {
  const st = getState((await params).state)!;
  return pageMeta({
    title: `Roof Repair & Replacement in ${st.name}`,
    description: `Roofing in ${st.name}: ${hazardsLine(st.risks)}, contractor licensing and permits, and how to get connected with a local roofer.`.slice(0, 158),
    path: routes.state(st.slug),
  });
}

export default async function StatePage({ params }: P) {
  const st = getState((await params).state);
  if (!st || !indexableStates().some((s) => s.slug === st.slug)) notFound();
  const path = routes.state(st.slug);
  const cov = stateCoverage(st.abbr);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: routes.locations() },
    { name: st.name, path },
  ];
  const localPages = indexableCities().filter((c) => c.stateSlug === st.slug);
  const pageFor = (name: string) => localPages.find((c) => c.name.toLowerCase() === name.toLowerCase() || c.name.toLowerCase().startsWith(name.toLowerCase() + " "));
  const services = [...new Set(st.risks.flatMap((r) => RISKS[r].services))].map(getService).filter(Boolean).slice(0, 6) as Service[];
  const guides = [...new Set(st.risks.flatMap((r) => RISKS[r].guides))].map(getArticle).filter((a) => a?.status === "PUBLISHED").slice(0, 4) as Article[];
  const neighbors = indexableStates().filter((s) => st.neighbors.includes(s.slug));
  const title = `Roof Repair & Replacement in ${st.name}`;

  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: title, description: st.intro, type: "CollectionPage", crumbs, faqs: st.faqs, about: [ids.state(st.slug)] }))} />
      <Hero
        crumbs={crumbs}
        eyebrow={`${st.region} · ${st.name}`}
        title={`Roofing help in ${st.name}`}
        lead={<p>{st.intro}</p>}
        facts={[availability, cov ? `${cov.zips.toLocaleString("en-US")} ZIP codes in our network` : "Network coverage varies", "Free to request"]}
        aside={
          <div className="rounded-2xl bg-ink-soft p-6 ring-1 ring-white/10">
            <ZipChecker dark />
          </div>
        }
      />

      <section className="py-14">
        <div className="container-x">
          <h2 className="text-3xl font-semibold">What roofs face in {st.name}</h2>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Main roofing hazards">
            {st.risks.map((r) => (
              <li key={r} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium ring-1 ring-line">
                <Icon name={RISKS[r].icon} className="h-4 w-4 text-teal" />
                {RISKS[r].label}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {st.details.map((d) => (
              <div key={d.heading} className="card p-6">
                <h3 className="font-sans text-lg font-semibold">{d.heading}</h3>
                <p className="mt-2 leading-relaxed text-muted">{d.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-teal bg-teal-tint p-6">
            <h2 className="font-sans text-lg font-semibold">Licensing, permits and contracts in {st.name}</h2>
            <p className="mt-2 leading-relaxed">{st.rules}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-x">
          <h2 className="text-3xl font-semibold">Roofing services {st.name} homeowners ask for most</h2>
          <p className="mt-2 max-w-3xl text-muted">Matched to the hazards above. Every service is available across our {st.name} network; each page explains signs, process and cost factors.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
          <p className="mt-4">
            <Link href={routes.services()} className="link">All roofing services</Link>
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-3xl font-semibold">Where we connect homeowners in {st.name}</h2>
            {cov && (
              <p className="mt-2 text-muted">
                Our contractor network covers {cov.zips.toLocaleString("en-US")} ZIP codes in {cov.cities.toLocaleString("en-US")} communities across {st.name}. These are the places with the most covered ZIP codes; enter yours above to check a specific address.
              </p>
            )}
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {(cov?.topCities ?? []).map((c) => {
                const page = pageFor(c.city);
                return (
                  <li key={c.city} className="flex items-center justify-between gap-3 rounded-lg bg-white px-4 py-3 ring-1 ring-line">
                    <span className="min-w-0">
                      {page ? (
                        <Link href={routes.city(st.slug, page.slug)} className="link font-semibold">{c.city}</Link>
                      ) : (
                        <span className="font-semibold">{c.city}</span>
                      )}
                      {c.county && <span className="block text-sm text-muted">{c.county} County</span>}
                    </span>
                    <span className="shrink-0 text-sm text-muted">{c.zips} ZIP{c.zips === 1 ? "" : "s"}</span>
                  </li>
                );
              })}
            </ul>
            {localPages.length > 0 && (
              <div className="mt-8">
                <h3 className="font-sans text-lg font-semibold">Local guides for {st.name} cities</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {localPages.map((c) => (
                    <Chip key={c.slug} href={routes.city(st.slug, c.slug)}>{c.name}</Chip>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="space-y-8">
            {guides.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold">Guides for {st.name} roofs</h2>
                <ul className="mt-4 space-y-3">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link href={routes.guide(g.slug)} className="card block p-5 font-semibold hover:text-teal-deep">{g.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {neighbors.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold">Neighboring states</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {neighbors.map((n) => (
                    <Chip key={n.slug} href={routes.state(n.slug)}>{n.name}</Chip>
                  ))}
                  <Chip href={`${routes.locations()}#${st.region.toLowerCase()}`}>All of the {st.region}</Chip>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-x max-w-4xl">
          <FaqList faqs={st.faqs} title={`${st.name} roofing FAQ`} />
        </div>
      </section>
      <CtaBand title={`Need a roofer in ${st.name}?`} />
    </main>
  );
}

