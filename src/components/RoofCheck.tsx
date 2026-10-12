"use client";
import { useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { useZipCoverage } from "@/lib/useZipCoverage";

// "60-second Roof Check": four questions -> a plain-language urgency score, the matching service and guide,
// and a call button. Scoring is a simple, transparent heuristic, not a diagnosis; the result says so.
type Opt = { label: string; pts: number; service?: string };
const QUESTIONS: { id: string; q: string; opts: Opt[] }[] = [
  { id: "age", q: "How old is your roof?", opts: [{ label: "Under 10 years", pts: 0 }, { label: "10–15 years", pts: 1 }, { label: "15–20 years", pts: 2, service: "roof-inspection" }, { label: "Over 20 / not sure", pts: 3, service: "roof-replacement" }] },
  { id: "storm", q: "Any storm in the last 12 months?", opts: [{ label: "No", pts: 0 }, { label: "Hail", pts: 3, service: "hail-damage-roof-repair" }, { label: "High wind or hurricane", pts: 3, service: "wind-damage-roof-repair" }, { label: "Heavy snow or ice", pts: 2, service: "ice-dam-removal" }] },
  { id: "signs", q: "What do you see?", opts: [{ label: "Nothing unusual", pts: 0 }, { label: "Granules in gutters / curling shingles", pts: 2, service: "roof-replacement" }, { label: "Missing or lifted shingles", pts: 3, service: "roof-repair" }, { label: "Water stain or active leak", pts: 5, service: "roof-leak-repair" }] },
  { id: "now", q: "Is water coming in right now?", opts: [{ label: "No", pts: 0 }, { label: "Yes", pts: 6, service: "emergency-roof-repair" }] },
];
const GUIDE: Record<string, { href: string; label: string }> = {
  "roof-replacement": { href: "/resources/repair-or-replace-roof/", label: "Repair or replace your roof?" },
  "roof-inspection": { href: "/resources/how-long-does-a-roof-last/", label: "How long does a roof last?" },
  "hail-damage-roof-repair": { href: "/resources/how-to-spot-hail-damage-on-a-roof/", label: "How to spot hail damage" },
  "wind-damage-roof-repair": { href: "/resources/roof-checklist-after-hurricane/", label: "Roof checklist after a storm" },
  "ice-dam-removal": { href: "/resources/ice-dams-what-to-do/", label: "Ice dams: what to do" },
  "roof-repair": { href: "/resources/repair-or-replace-roof/", label: "Repair or replace?" },
  "roof-leak-repair": { href: "/resources/roof-leaking-what-to-do/", label: "Roof leaking? First-hour steps" },
  "emergency-roof-repair": { href: "/resources/roof-leaking-what-to-do/", label: "Roof leaking? First-hour steps" },
};
const SERVICE_PATH: Record<string, string> = {
  "roof-replacement": "/roofing-services/roof-replacement/",
  "roof-inspection": "/roofing-services/roof-inspection/",
  "hail-damage-roof-repair": "/roofing-services/storm-damage-roof-repair/hail-damage-roof-repair/",
  "wind-damage-roof-repair": "/roofing-services/storm-damage-roof-repair/wind-damage-roof-repair/",
  "ice-dam-removal": "/roofing-services/roof-repair/ice-dam-removal/",
  "roof-repair": "/roofing-services/roof-repair/",
  "roof-leak-repair": "/roofing-services/roof-repair/roof-leak-repair/",
  "emergency-roof-repair": "/roofing-services/roof-repair/emergency-roof-repair/",
};
const NAME: Record<string, string> = {
  "roof-replacement": "Roof replacement quote", "roof-inspection": "Roof inspection", "hail-damage-roof-repair": "Hail damage inspection",
  "wind-damage-roof-repair": "Wind damage inspection", "ice-dam-removal": "Ice dam removal", "roof-repair": "Roof repair",
  "roof-leak-repair": "Leak repair", "emergency-roof-repair": "Emergency tarping",
};

export function RoofCheck({ phone, e164 }: { phone: string; e164: string }) {
  const [answers, setAnswers] = useState<Record<string, Opt>>({});
  const [zip, setZip] = useState("");
  const hit = useZipCoverage(zip);
  const step = QUESTIONS.findIndex((q) => !answers[q.id]);
  const done = step === -1;
  const score = Object.values(answers).reduce((n, o) => n + o.pts, 0);
  // Highest-weight answer decides the recommended service; ties go to the more specific question (now > storm > signs > age).
  const PRIORITY = ["now", "storm", "signs", "age"];
  const top = PRIORITY.map((id) => answers[id]).filter((o): o is Opt => Boolean(o?.service)).sort((a, b) => b.pts - a.pts)[0]?.service ?? "roof-inspection";
  const level = answers.now?.pts ? "urgent" : score >= 7 ? "high" : score >= 3 ? "medium" : "low";
  const copy = {
    urgent: { title: "Get it covered today", body: "Active water means interior damage grows by the hour. Catch the water, switch off power to wet fixtures, and call for emergency tarping.", tone: "bg-alert text-white" },
    high: { title: "Book an inspection this week", body: "Your answers point to damage or a roof near the end of its life. Get it documented soon, especially if a storm was involved and a claim deadline applies.", tone: "bg-sun text-white" },
    medium: { title: "Worth a professional look", body: "Nothing urgent, but an inspection now catches small problems before the next storm season.", tone: "bg-teal text-white" },
    low: { title: "Your roof sounds healthy", body: "Keep gutters clear, check after big storms, and plan an inspection every year or two.", tone: "bg-sage text-white" },
  }[level];

  function choose(id: string, o: Opt) {
    setAnswers((a) => ({ ...a, [id]: o }));
    if (Object.keys(answers).length === 0) track("roof_check_start", {});
    if (step === QUESTIONS.length - 1) track("roof_check_complete", { level, service: o.service ?? top });
  }

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-sand px-6 py-4">
        <p className="font-serif text-xl font-semibold">60-second Roof Check</p>
        <p className="text-sm text-muted" aria-live="polite">{done ? "Your result" : `Question ${step + 1} of ${QUESTIONS.length}`}</p>
      </div>
      <div className="h-1.5 bg-sand-deep">
        <div className="h-full bg-sun transition-all" style={{ width: `${((done ? QUESTIONS.length : step) / QUESTIONS.length) * 100}%` }} />
      </div>
      {!done ? (
        <fieldset className="p-6">
          <legend className="text-lg font-semibold">{QUESTIONS[step].q}</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {QUESTIONS[step].opts.map((o) => (
              <button key={o.label} type="button" onClick={() => choose(QUESTIONS[step].id, o)} className="min-h-12 rounded-xl bg-white px-4 py-3 text-left font-medium ring-1 ring-line transition hover:ring-2 hover:ring-teal">
                {o.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button type="button" className="mt-4 text-sm text-muted underline" onClick={() => setAnswers((a) => { const n = { ...a }; delete n[QUESTIONS[step - 1].id]; return n; })}>
              Back
            </button>
          )}
        </fieldset>
      ) : (
        <div className="p-6">
          <div className={`rounded-xl p-5 ${copy.tone}`}>
            <p className="text-sm font-semibold tracking-wider uppercase opacity-90">Urgency {Math.min(score, 10)}/10</p>
            <p className="mt-1 font-serif text-2xl font-semibold">{copy.title}</p>
            <p className="mt-2 opacity-95">{copy.body}</p>
          </div>
          <p className="mt-5 font-semibold">Recommended: <Link href={SERVICE_PATH[top]} className="link">{NAME[top]}</Link></p>
          {GUIDE[top] && <p className="mt-1 text-sm">Read first: <Link href={GUIDE[top].href} className="link">{GUIDE[top].label}</Link></p>}
          <div className="mt-5 grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
            <label className="sr-only" htmlFor="rc-zip">ZIP code</label>
            <input id="rc-zip" className="field" inputMode="numeric" maxLength={5} placeholder="Your ZIP code" value={zip} onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))} />
            <a href={`tel:${e164}`} onClick={() => track("call_click", { location: "roof_check" })} className={`btn ${level === "urgent" ? "btn-alert" : "btn-primary"}`}>Call {phone}</a>
          </div>
          <p className="mt-2 min-h-5 text-sm" aria-live="polite">
            {hit && `✓ ${hit.city}, ${hit.state} is in our network.`}
            {hit === null && "That ZIP may be outside our network; call and we'll try to help."}
          </p>
          <p className="mt-3 text-xs text-muted">A quick self-check, not a diagnosis. A roofer confirms the roof&apos;s condition on site.</p>
          <button type="button" className="mt-3 text-sm text-muted underline" onClick={() => setAnswers({})}>Start over</button>
        </div>
      )}
    </div>
  );
}
