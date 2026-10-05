import type { IconName } from "@/content/types";

// Monoline 1.5px icons.
const paths: Record<IconName, string> = {
  roof: "M2 12 12 4l10 8M5 10v10h14V10M10 20v-5h4v5",
  storm: "M7 15a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6 1.5A3.5 3.5 0 0 1 17 15H7zM12 15l-2 4h3l-2 3",
  hail: "M7 13a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6 1.5A3.5 3.5 0 0 1 17 13H7zM8 17v.01M12 16v.01M16 17v.01M10 20v.01M14 20v.01",
  wind: "M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7",
  layers: "M2 14l10-6 10 6M2 18l10-6 10 6M2 10l10-6 10 6",
  flat: "M3 9h18v3H3zM5 12v8M19 12v8M3 20h18M7 6h10",
  ladder: "M7 3v18M15 3v18M7 7h8M7 11h8M7 15h8M7 19h8",
  vent: "M4 20V10l8-6 8 6v10H4zM8 13h8M8 16h8",
  skylight: "M2 13 12 5l10 8M9 9.5h6v5H9zM12 9.5v5M9 12h6",
  house: "M3 11 12 4l9 7v9H3v-9zM9 20v-6h6v6",
  drop: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
  alert: "M12 3l9.5 17h-19L12 3zM12 10v4M12 17v.01",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  check: "M5 12l5 5L20 7",
  pin: "M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zM12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  clock: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 7v5l3 2",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z",
  wrench: "M14.5 5.5a4 4 0 0 0 5 5L11 19a2 2 0 0 1-3-3l8.5-8.5a4 4 0 0 0-2-2z",
  sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
