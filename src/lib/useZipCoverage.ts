"use client";
import { useEffect, useState } from "react";

export type ZipHit = { city: string; state: string } | null;

/** undefined = not a full ZIP yet or still checking; null = outside the network; object = covered. */
export function useZipCoverage(zip: string): ZipHit | undefined {
  const [hit, setHit] = useState<{ zip: string; value: ZipHit } | null>(null);
  useEffect(() => {
    if (!/^\d{5}$/.test(zip)) return;
    let live = true;
    fetch(`/api/coverage/?zip=${zip}`)
      .then((r) => r.json())
      .then((d) => live && setHit({ zip, value: d.ok ? { city: d.city, state: d.state } : null }))
      .catch(() => live && setHit({ zip, value: null }));
    return () => {
      live = false;
    };
  }, [zip]);
  return /^\d{5}$/.test(zip) && hit?.zip === zip ? hit.value : undefined;
}
