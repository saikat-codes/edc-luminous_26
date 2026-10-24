import { useState, useRef } from "react";
import { photos, type Media } from "@/data/luminous";
import { MediaSlot } from "./MediaSlot";
import { gsap, useGSAP, prefersReduced } from "./gsap";
import { ScrollTiltedGrid } from "@/components/ui/scroll-tilted-grid";
import { cn } from "@/lib/utils";

const PRELIM_PHOTOS = [
  { media: photos.prelimMentor, title: "Mentorship", desc: "EDC mentors guiding kids" },
  { media: photos.prelimGirl, title: "Young Artist", desc: "Painting handcrafted diyas" },
  { media: photos.prelimBoy, title: "Clay Craft", desc: "Brushing vibrant colours" },
  { media: photos.prelimRings, title: "Detail", desc: "Hand-painted circular patterns" },
  { media: photos.prelimPavilion, title: "Workshop", desc: "Pavilion filled with creators" },
  { media: photos.prelimCheering, title: "Pure Joy", desc: "Community & celebration" },
];

const STRIP = [
  { media: photos.lighter, ratio: "1616 / 1080" },
  { media: photos.nabAerial, ratio: "1616 / 1080" },
  { media: photos.prelimMentor, ratio: "1600 / 1200" },
  { media: photos.rangoli, ratio: "1600 / 1069" },
  { media: photos.prelimGirl, ratio: "1200 / 1600" },
  { media: photos.diyaPath, ratio: "1148 / 774" },
  { media: photos.prelimPavilion, ratio: "1600 / 1200" },
  { media: photos.diyaSpiral, ratio: "1616 / 1080" },
];

export function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const [activePrelimIndex, setActivePrelimIndex] = useState(0);

  useGSAP(
    () => {
      if (prefersReduced()) return;
      gsap.utils.toArray<HTMLElement>(".ch").forEach((el) => {
        gsap.fromTo(
          el.querySelector(".ch-media"),
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1.3, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } },
        );
        gsap.fromTo(
          el.querySelectorAll(".ch-text > *"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 65%" } },
        );
      });
    },
    { scope: ref },
  );

  const activePrelim = PRELIM_PHOTOS[activePrelimIndex];

  return (
    <section id="story" ref={ref} className="section-light relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="chapter-label">The story</p>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,6vw,5rem)] font-semibold leading-[0.95]">
          Ten editions. <span className="font-serif font-normal italic text-gold">One glow.</span>
        </h2>
      </div>

      <div className="mt-20 flex flex-col gap-28 md:gap-40">
        {/* Chapter 01 — Introduction */}
        <article className="ch mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:grid-cols-12 md:gap-14 md:px-10">
          <div className="ch-media relative aspect-[16/10] overflow-hidden rounded-xl border border-border/40 shadow-lg md:col-span-7">
            <MediaSlot media={photos.diyaSpiral} className="h-full w-full object-cover" />
          </div>
          <div className="ch-text md:col-span-5">
            <p className="chapter-label text-gold">Chapter 01 — Introduction</p>
            <h3 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
              A Diwali of <span className="font-serif font-normal italic text-gold">creativity, community & light.</span>
            </h3>
            <div className="my-7 h-px w-16 bg-gold shadow-flame" />
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              LUMINOUS 10.0 is EDC NIT Durgapur's Diwali celebration — an evening where the campus gathers to create, to come together, and to light up the night.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Every flame is placed by hand. Every pattern is made by people who showed up.
            </p>
          </div>
        </article>

        {/* Chapter 02 — Preliminaries · BMEP × EDC */}
        <article className="ch mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:grid-cols-12 md:gap-14 md:px-10">
          <div className="ch-media flex flex-col gap-3 md:col-span-7">
            {/* Main Featured Photo Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/40 bg-slate shadow-xl">
              <img
                key={activePrelim.media.src}
                src={activePrelim.media.src}
                alt={activePrelim.media.alt}
                className="h-full w-full object-cover transition-all duration-500 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/85 via-plum/30 to-transparent p-4">
                <p className="font-serif text-lg font-medium text-ivory">{activePrelim.title}</p>
                <p className="text-xs text-ivory/75">{activePrelim.desc}</p>
              </div>
            </div>

            {/* Thumbnail selector row showing more photos from lumi-2 */}
            <div className="grid grid-cols-6 gap-2">
              {PRELIM_PHOTOS.map((item, idx) => (
                <button
                  key={item.media.src}
                  type="button"
                  onClick={() => setActivePrelimIndex(idx)}
                  className={cn(
                    "group relative aspect-[4/3] w-full overflow-hidden rounded-lg border-2 transition-all duration-300",
                    activePrelimIndex === idx
                      ? "border-gold shadow-flame ring-1 ring-gold"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                  aria-label={`View photo: ${item.title}`}
                >
                  <img
                    src={item.media.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="ch-text md:col-span-5">
            <p className="chapter-label text-vermilion">Chapter 02 — Preliminaries · BMEP × EDC</p>
            <h3 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Diyas, coloured <span className="font-serif font-normal italic text-vermilion">by hand.</span>
            </h3>
            <div className="my-7 h-px w-16 bg-gold shadow-flame" />
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              In the Preliminaries, run by BMEP together with EDC, participants colour and decorate diyas — each one becoming a small piece of art.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              The finished diyas are then sold to professors and campus members. The proceeds and diyas used for the activity bring warm support to local communities.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-border/60 bg-ivory/40 px-3 py-1 font-medium text-foreground">
                6 Workshop Perspectives
              </span>
              <span className="rounded-full border border-border/60 bg-ivory/40 px-3 py-1 font-medium text-foreground">
                BMEP × EDC Initiative
              </span>
            </div>
          </div>
        </article>

        {/* Chapter 03 — Luminas · Rangoli Competition */}
        <article className="ch mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:grid-cols-12 md:gap-14 md:px-10">
          <div className="ch-media relative aspect-[16/10] overflow-hidden rounded-xl border border-border/40 shadow-lg md:col-span-7">
            <MediaSlot media={photos.rangoli} className="h-full w-full object-cover" />
          </div>
          <div className="ch-text md:col-span-5">
            <p className="chapter-label text-antique">Chapter 03 — Luminas · Rangoli Competition</p>
            <h3 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
              The ground <span className="font-serif font-normal italic text-antique">becomes a canvas.</span>
            </h3>
            <div className="my-7 h-px w-16 bg-gold shadow-flame" />
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              In Luminas, college students form groups and create intricate floral and geometric rangoli designs together across the campus floor.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              A panel of judges evaluates every vibrant creation, celebrating the spirit of Diwali and rewarding the most captivating artistry.
            </p>
          </div>
        </article>
      </div>

      {/* Moments from the night */}
      <div className="mt-32 md:mt-44" aria-label="Moments from the night">
        <p className="chapter-label mx-auto max-w-7xl px-6 text-antique md:px-10">Moments from the night</p>
        <ScrollTiltedGrid
          className="mt-8"
          images={STRIP.map(({ media, ratio }) => ({ src: media.src, alt: media.alt, aspectRatio: ratio }))}
          smoothScroll={false}
          loop={false}
          maxTilt={14}
          maxBlur={0}
        />
      </div>
    </section>
  );
}
