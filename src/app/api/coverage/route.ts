import { NextResponse } from "next/server";
import { zipCoverage } from "@/content/coverage";

// GET /api/coverage?zip=12345 -> { ok, city?, state? }. Keeps the national ZIP index on the server.
export function GET(req: Request) {
  const zip = new URL(req.url).searchParams.get("zip") ?? "";
  if (!/^\d{5}$/.test(zip)) return NextResponse.json({ ok: false, error: "Enter a 5-digit ZIP code" }, { status: 400 });
  const hit = zipCoverage(zip);
  return NextResponse.json(hit ? { ok: true, ...hit } : { ok: false }, { headers: { "cache-control": "public, max-age=86400" } });
}
