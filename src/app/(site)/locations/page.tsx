import Link from "next/link";
import { cityBySlug } from "@/content/locations";
import { censusRegions } from "@/content/states";
import { RISKS } from "@/content/risks";
import { nationalCoverage, stateCoverage } from "@/content/coverage";
import { indexableCities, indexableCityServices, indexableStates } from "@/lib/sitemap";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { Chip, FaqList, JsonLd } from "@/components/ui";
import { ZipChecker } from "@/components/ZipChecker";
import { CtaBand } from "@/components/CtaBand";

const title = "Roofing Across the U.S.: All 50 States + D.C.";
const description =
  "Find roofing help in all 50 states and Washington, D.C.: state guides to storms, climate, contractor licensing and permits, plus a ZIP checker for our network.";
const path = routes.locations();

export const metadata = pageMeta({ title, description, path });

const faqs = [
  { q: "Do you cover my state?", a: "Our contractor network includes ZIP codes in all 50 states and Washington, D.C. Coverage within a state depends on which contractors serve each ZIP, so use the ZIP checker for your address." },
  { q: "Why does roofing advice change from state to state?", a: "Hazards and rules differ. Hail dominates the Plains, hurricanes the Gulf and Atlantic coasts, ice dams the North, wildfire the West, and each state sets its own contractor licensing rules." },
  { q: "Are the roofers licensed?", a: "Licensing depends on the state. Some states license or register roofers, others leave it to cities, and a few have no roofing license at all. Each state page explains what applies and where to verify it." },
];

export default function LocationsHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path },
  ];
  const states = indexableStates();
  const nat = nationalCoverage();
  const combos = indexableCityServices();
  const cities = indexableCities();
  return (
    <main id="main">
      <JsonLd data={graph(pageGraph({ path, name: title, description, type: "CollectionPage", crumbs, faqs, about: states.map((s) => ids.state(s.slug)) }))} />
      <Hero
        crumbs={crumbs}
        eyebrow="Service areas · United States"
        title="Roofing help in all 50 states and D.C."
        lead={
          <p>
            Our network of independent roofing contractors covers {nat.zips.toLocaleString("en-US")} ZIP codes across the country. Pick your state to read about the storms, climate and licensing rules that shape roofing there, or check your ZIP code.
          </p>
        }
        aside={
          <div className="rounded-2xl bg-ink-soft p-6 ring-1 ring-white/10">
            <ZipChecker dark />
          </div>
        }
      />

      <section className="py-14">
        <div className="container-x space-y-12">
          {censusRegions.map((r) => {
            const list = states.filter((s) => s.region === r);
            return (
              <div key={r} id={r.toLowerCase()} className="scroll-mt-28">
                <h2 className="text-3xl font-semibold">{r}</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((s) => {
                    const cov = stateCoverage(s.abbr);
                    return (
                      <li key={s.slug}>
                        <Link href={routes.state(s.slug)} className="card group flex h-full flex-col p-5">
                          <span className="flex items-baseline justify-between gap-3">
                            <span className="text-lg font-semibold group-hover:text-teal-deep">{s.name}</span>
                            {cov && <span className="shrink-0 text-sm text-muted">{cov.zips.toLocaleString("en-US")} ZIPs</span>}
                          </span>
                          <span className="mt-1 text-sm text-muted">{s.risks.slice(0, 3).map((x) => RISKS[x].label).join(" · ")}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">City guides</h2>
            <p className="mt-2 text-muted">City pages go deeper on local housing, storm history, permits and insurance rules. They are added metro by metro, only where we can write a genuinely local guide.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {cities.map((c) => (
                <Chip key={c.slug} href={routes.city(c.stateSlug, c.slug)}>{c.name}</Chip>
              ))}
            </div>
            {combos.length > 0 && (
              <ul className="mt-6 space-y-2">
                {combos.map((cs) => (
                  <li key={cs.citySlug + cs.serviceSlug}>
                    <Link href={routes.cityService(cityBySlug(cs.citySlug)!.stateSlug, cs.citySlug, cs.serviceSlug)} className="link">
                      {cs.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2 className="text-3xl font-semibold">How coverage works</h2>
            <div className="prose-cp mt-4 text-muted">
              <p>Ridgewise is a referral service. When you call or send a request, we route it to an independent roofing contractor who has chosen to serve your ZIP code. Coverage within a state depends on which contractors are active there, so two neighboring towns can differ.</p>
              <p>Each state page lists the communities with the most covered ZIP codes, the hazards roofs face there, and how contractor licensing works, so you know what to ask before hiring anyone.</p>
            </div>
            <div className="mt-6">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
