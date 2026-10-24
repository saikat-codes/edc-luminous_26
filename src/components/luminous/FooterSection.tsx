import { event, logo } from "@/data/luminous";

export function FooterSection() {
  return (
    <footer className="relative bg-plum px-6 pb-12 pt-24 md:px-10">
      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-gold to-transparent shadow-flame" />
      <p className="mx-auto mt-20 max-w-4xl text-center font-serif text-[clamp(1.6rem,4vw,3.2rem)] italic leading-tight text-ivory/85">
        A thousand little lights.
        <br />
        One unforgettable night.
      </p>
      <div className="mx-auto mt-24 flex max-w-6xl flex-col items-start justify-between gap-8 text-sm text-ivory/70 md:flex-row md:items-end">
        <div>
          <img src={logo.src} alt={logo.alt} className="mb-4 h-10 w-auto" loading="lazy" />
          <p className="font-sans text-sm text-ivory">{event.name}</p>
          <p className="mt-1 text-gold">{event.venue} · {event.time}</p>
          <p className="mt-1">{event.organiser}</p>
          <p>{event.institute}</p>
          {event.contactEmail && <a href={`mailto:${event.contactEmail}`} className="mt-3 block text-gold">{event.contactEmail}</a>}
        </div>
        <div className="flex gap-6">
          {event.socials.map((s) =>
            s.url ? (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">{s.label}</a>
            ) : (
              <span key={s.label} className="opacity-50">{s.label}</span>
            ),
          )}
        </div>
        <p>© {event.name} · {event.organiserShort}</p>
      </div>
    </footer>
  );
}
