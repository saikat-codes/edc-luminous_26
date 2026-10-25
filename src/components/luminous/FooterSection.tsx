import { Instagram, Linkedin, Globe, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { event, logo } from "@/data/luminous";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  LinkedIn: Linkedin,
  Website: Globe,
};

export function FooterSection() {
  return (
    <footer className="relative bg-plum px-6 py-16 text-ivory md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          {/* Brand info */}
          <div className="max-w-md">
            <a href="#home" className="inline-block transition-opacity hover:opacity-90">
              <img src={logo.src} alt={logo.alt} className="h-10 w-auto" loading="lazy" />
            </a>

            <div className="mt-5 flex items-baseline gap-2">
              <h3 className="font-brand text-xl font-bold tracking-[0.18em] uppercase text-ivory">
                {event.shortName}
              </h3>
              <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 font-sans text-[0.7rem] font-semibold tracking-normal text-gold tabular-nums">
                {event.edition}
              </span>
            </div>

            <p className="mt-2 font-serif text-base italic text-ivory/70">
              {event.organiser} · {event.institute}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-sans text-xs text-ivory/60">
              <span className="flex items-center gap-1.5 text-gold/90">
                <MapPin className="size-3.5 shrink-0 text-gold" />
                <span>{event.venue}</span>
              </span>
              <span className="hidden text-ivory/30 sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-ivory/80">
                <Clock className="size-3.5 shrink-0 text-gold" />
                <span>{event.time}</span>
              </span>
            </div>

            {event.contactEmail && (
              <a
                href={`mailto:${event.contactEmail}`}
                className="mt-3 inline-block font-sans text-xs tracking-wide text-gold transition-colors hover:text-gold/80"
              >
                {event.contactEmail}
              </a>
            )}
          </div>

          {/* Social connections */}
          <div className="flex flex-col items-start md:items-end">
            <p className="font-brand text-[0.72rem] font-bold tracking-[0.2em] uppercase text-gold">
              Connect With Us
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {event.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.label] || Globe;
                return s.url ? (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-white/[0.03] px-4 py-2 font-sans text-xs font-medium tracking-wide text-ivory/85 transition-all duration-300 hover:border-gold/40 hover:bg-gold/10 hover:text-gold hover:shadow-sm"
                  >
                    <Icon className="size-3.5 text-gold/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-gold" />
                    <span>{s.label}</span>
                    <ArrowUpRight className="size-3 text-ivory/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </a>
                ) : (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-2 rounded-full border border-ivory/10 px-3.5 py-1.5 font-sans text-xs text-ivory/40"
                  >
                    <Icon className="size-3.5 opacity-50" />
                    <span>{s.label}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom subtle copyright row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center">
          <p className="font-sans tracking-wide">
            © {new Date().getFullYear()} {event.name} · {event.organiser}
          </p>
          <p className="font-serif italic tracking-wide text-gold/70">
            A celebration of light &amp; togetherness
          </p>
        </div>
      </div>
    </footer>
  );
}
