"use client";
import { useEffect, useRef } from "react";

// Muted looping clip that only downloads and plays while on screen (keeps LCP and data use low).
export function LoopVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} className="aspect-video w-full rounded-2xl bg-ink object-cover" src={src} poster={poster} muted loop playsInline preload="none" aria-label={label} />
  );
}
