import { useRef } from "react";
import { event, lightLogo } from "@/data/luminous";
import { RegisterButton } from "./RegisterButton";
import { Diya } from "./Diya";
import { gsap, useGSAP, prefersReduced } from "./gsap";

const TBA = "To be announced";

export function RevealSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReduced()) return;
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: "top 70%", end: "center center", scrub: 1 } });
      tl.fromTo(".rv-ring", { scale: 0.4, opacity: 0, rotate: -60 }, { scale: 1, opacity: 1, rotate: 0, duration: 1 })
      .fromTo(".rv-word span", { opacity: 0, y: 80 }, { opacity: 1, y: 0, stagger: 0.06, duration: 0.6 }, 0.3)
        .fromTo(".rv-detail", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.4 }, 0.8);
    },
    { scope: ref },
  );

  const details = [
    { k: "Edition", v: event.edition || TBA },
    { k: "Time", v: event.time },
    { k: "Date", v: event.date || TBA },
    { k: "Venue", v: event.venue || TBA },
  ];

  return (
    <section id="register" ref={ref} className="section-light relative px-6 py-20 md:py-28">
      <div className="rangoli-stage">
      <svg viewBox="0 0 400 400" aria-hidden="true" className="rv-ring rangoli-art pointer-events-none">
        {/* outer lotus petals */}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={`o${i}`} transform={`rotate(${(i / 16) * 360} 200 200)`}>
            <path d="M200 32 C220 56 220 84 200 104 C180 84 180 56 200 32Z" fill={i % 2 === 0 ? "var(--rangoli-blue)" : "var(--rangoli-red)"} fillOpacity="0.18" stroke={i % 2 === 0 ? "var(--rangoli-blue)" : "var(--rangoli-red)"} strokeWidth="1.2" />
          </g>
        ))}
        {/* interleaved vermilion petals */}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={`v${i}`} transform={`rotate(${((i + 0.5) / 16) * 360} 200 200)`}>
            <path d="M200 44 C208 62 208 84 200 100 C192 84 192 62 200 44Z" fill="var(--gold)" fillOpacity="0.24" stroke="var(--gold)" strokeWidth="0.8" />
          </g>
        ))}
        {/* dotted ring between the petal layers */}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          return <circle key={`d${i}`} cx={200 + Math.cos(a) * 118} cy={200 + Math.sin(a) * 118} r="2.4" fill="var(--gold)" />;
        })}
        {/* inner petal ring */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`i${i}`} transform={`rotate(${(i / 8) * 360 + 22.5} 200 200)`}>
            <path d="M200 132 C212 144 212 160 200 172 C188 160 188 144 200 132Z" fill="var(--rangoli-blue)" fillOpacity="0.25" stroke="var(--rangoli-blue)" strokeWidth="1" />
          </g>
        ))}
        {/* inner dot ring */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = ((i + 0.5) / 8) * Math.PI * 2;
          return <circle key={`id${i}`} cx={200 + Math.cos(a) * 88} cy={200 + Math.sin(a) * 88} r="2.8" fill="var(--rangoli-red)" />;
        })}
        {/* heart of the rangoli */}
        <circle cx="200" cy="200" r="20" fill="none" stroke="var(--rangoli-blue)" strokeWidth="1.2" />
        <circle cx="200" cy="200" r="12" fill="var(--rangoli-red)" opacity="0.65" />
        <circle cx="200" cy="200" r="4" fill="var(--gold)" />
        {/* fine outer rings with a dotted border */}
        <circle cx="200" cy="200" r="188" fill="none" stroke="var(--gold)" strokeWidth="0.5" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="180" fill="none" stroke="var(--gold)" strokeWidth="0.3" />
        {Array.from({ length: 32 }).map((_, i) => {
          const a = (i / 32) * Math.PI * 2;
          return <circle key={`od${i}`} cx={200 + Math.cos(a) * 188} cy={200 + Math.sin(a) * 188} r="0.9" fill="var(--gold)" />;
        })}
      </svg>
      </div>

      <div className="relative z-10 mx-auto mt-8 flex max-w-6xl flex-col items-center text-center">
        <img src={lightLogo.src} alt={lightLogo.alt} width={1356} height={496} className="h-auto w-40 max-w-full" loading="lazy" />
        <Diya className="mt-8 w-20" />
        <p className="chapter-label mt-10">Event details</p>
        <h2 className="rv-word mt-6 max-w-full font-display text-4xl font-bold leading-none sm:text-6xl md:text-8xl lg:text-9xl" aria-label={event.name}>
          <span className="inline-block">{event.shortName}</span>{" "}<span className="inline-block font-sans text-[0.6em] font-medium tabular-nums">{event.edition}</span>
        </h2>
        <p className="mt-6 font-serif text-[clamp(1.6rem,3.5vw,3rem)] italic text-gold">The next spark could be yours.</p>

        <dl className="mt-16 grid w-full max-w-4xl grid-cols-2 border-y border-border md:grid-cols-4">
          {details.map((d) => (
            <div key={d.k} className="rv-detail border-border px-4 py-6 text-left odd:border-r md:border-r md:last:border-r-0">
              <dt className="chapter-label !text-[0.6rem] text-muted-foreground">{d.k}</dt>
              <dd className="mt-2 font-sans text-base tabular-nums text-foreground">{d.v}</dd>
            </div>
          ))}
        </dl>

        <div className="rv-detail mt-14">
          <div className="flex flex-col items-center gap-4">
            {!event.registrationOpen && <span className="font-display text-2xl text-gold">Coming soon</span>}
            <RegisterButton className="h-11 px-8" />
            {!event.registrationOpen && <p className="max-w-xs text-sm text-muted-foreground">Registration opens soon. Follow EDC to be the first to know.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
