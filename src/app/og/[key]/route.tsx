import { ImageResponse } from "next/og";
import { ogCards } from "@/lib/og";

export const dynamicParams = false;
export function generateStaticParams() {
  return ogCards().map((c) => ({ key: `${c.key}.png` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ key: string }> }) {
  const key = (await params).key.replace(/\.png$/, "");
  const card = ogCards().find((c) => c.key === key) ?? ogCards()[0];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#16232e", color: "white", fontFamily: "serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, width: 860 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 64, height: 64, borderRadius: 14, background: "#1d6a72", display: "flex", alignItems: "flex-end", justifyContent: "center" }}><div style={{ width: 0, height: 0, borderLeft: "26px solid transparent", borderRight: "26px solid transparent", borderBottom: "22px solid #f08a4b", marginBottom: 20, display: "flex" }} /></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 40, fontWeight: 700 }}>Ridgewise</span>
              <span style={{ fontSize: 16, letterSpacing: 6, color: "#c4e7ea" }}>ROOFING</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, color: "#c4e7ea", textTransform: "uppercase", letterSpacing: 2 }}>{card.eyebrow}</span>
            <span style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, marginTop: 16 }}>{card.title}</span>
          </div>
          <span style={{ fontSize: 26, color: "rgba(255,255,255,0.75)" }}>Roofing help in all 50 states + D.C.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: 1, background: "#ece5da" }}>
          <div style={{ height: 120, background: "#9fd6db", display: "flex" }} />
          <div style={{ height: 120, background: "#1d6a72", display: "flex" }} />
          <div style={{ height: 120, background: "#f08a4b", display: "flex" }} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
