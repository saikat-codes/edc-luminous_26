import { cn } from "@/lib/utils";

/** Terracotta diya drawn in SVG with a CSS flame. */
export function Diya({ lit = true, className, flameClass }: { lit?: boolean; className?: string; flameClass?: string }) {
  return (
    <div className={cn("relative aspect-[2/1.3] w-24", className)}>
      {lit && (
        <>
          <div className="pointer-events-none absolute left-1/2 top-[10%] h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 glow-gold" />
          <div className={cn("flame absolute left-1/2 top-[-38%] h-[55%] w-[18%] -translate-x-1/2", flameClass)} />
        </>
      )}
      <svg viewBox="0 0 200 130" className="relative h-full w-full">
        <defs>
          <linearGradient id="clay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="oklch(0.55 0.13 45)" />
            <stop offset="1" stopColor="oklch(0.28 0.07 35)" />
          </linearGradient>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="oklch(0.4 0.1 40)" />
            <stop offset="0.5" stopColor={lit ? "oklch(0.8 0.13 70)" : "oklch(0.5 0.1 45)"} />
            <stop offset="1" stopColor="oklch(0.4 0.1 40)" />
          </linearGradient>
        </defs>
        <path d="M10 40 Q100 140 190 40 Q170 30 130 34 L100 14 L70 34 Q30 30 10 40Z" fill="url(#clay)" />
        <path d="M10 40 Q30 30 70 34 L100 14 L130 34 Q170 30 190 40 Q100 56 10 40Z" fill="url(#rim)" opacity="0.9" />
        <path d="M60 110 Q100 128 140 110" stroke="oklch(0.22 0.05 30)" strokeWidth="6" fill="none" />
      </svg>
    </div>
  );
}
