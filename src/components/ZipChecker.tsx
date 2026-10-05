"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useZipCoverage } from "@/lib/useZipCoverage";
import { track } from "@/lib/analytics";

export function ZipChecker({ dark = false }: { dark?: boolean }) {
  const [zip, setZip] = useState("");
  const [submitted, setSubmitted] = useState("");
  const valid = /^\d{5}$/.test(submitted);
  const hit = useZipCoverage(submitted);

  useEffect(() => {
    if (valid && hit !== undefined) track("location_selected", { zip: submitted, inArea: Boolean(hit) });
  }, [hit, submitted, valid]);

  function check(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(zip);
  }

  return (
    <form onSubmit={check} className="w-full max-w-md">
      <label htmlFor="zipcheck" className={`field-label ${dark ? "text-white" : ""}`}>
        Check your ZIP code
      </label>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
        <input
          id="zipcheck"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          value={zip}
          onChange={(e) => {
            setZip(e.target.value.replace(/\D/g, ""));
            setSubmitted("");
          }}
          className="field"
          placeholder="e.g. 30305"
        />
        <button className="btn btn-primary">Check</button>
      </div>
      <p aria-live="polite" className={`mt-2 min-h-6 text-sm ${dark ? "text-white/90" : ""}`}>
        {submitted && !valid && "Enter a 5-digit ZIP code."}
        {valid && hit === undefined && "Checking…"}
        {valid && hit && (
          <>
            ✓ We connect homeowners in {submitted} ({hit.city}, {hit.state}).{" "}
            <Link className={dark ? "underline" : "link"} href={`/request-service/?zip=${submitted}`}>
              Request service
            </Link>
          </>
        )}
        {valid && hit === null && `${submitted} isn't in our network yet. You can still call and we'll try to help.`}
      </p>
    </form>
  );
}
