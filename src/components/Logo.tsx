import Link from "next/link";

// Roof ridge over an eave line + wordmark.
export function LogoMark({ className = "h-9 w-9", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" fill={light ? "#1d6a72" : "#16232e"} />
      <path d="M6 22 20 9l14 13" fill="none" stroke="#f08a4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 22.5v-2L20 14l8 6.5v2z" fill="#9fd6db" />
      <path d="M9 29h22M13 32.5h14" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Ridgewise Roofing home">
      <LogoMark light={light} />
      <span className="leading-none">
        <span className={`block font-serif text-xl font-semibold sm:text-2xl ${light ? "text-white" : "text-ink"}`}>Ridgewise</span>
        <span className={`block text-[0.65rem] font-bold tracking-[0.3em] ${light ? "text-teal-tint" : "text-teal-deep"}`}>ROOFING</span>
      </span>
    </Link>
  );
}
