import { useEffect, useState } from "react";
import { chapters, event, logo } from "@/data/luminous";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RegisterButton } from "./RegisterButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > window.innerHeight * 0.6);
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-700 md:px-10",
          scrolled ? "bg-plum/90 backdrop-blur-md" : "bg-plum/30",
        )}
      >
        <a href="#home" className="group flex items-center gap-3 text-ivory transition-opacity hover:opacity-95">
          <img src={logo.src} alt={logo.alt} className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-brand text-sm font-bold tracking-[0.2em] text-ivory uppercase transition-colors group-hover:text-gold">
              {event.shortName}
            </span>
            <span className="font-sans text-[0.68rem] font-semibold text-gold tabular-nums tracking-normal">
              {event.edition}
            </span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={cn(
                "text-sm transition-colors hover:text-gold",
                c.id === "register" ? "text-gold" : "text-ivory/70",
              )}
            >
              {c.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
        <RegisterButton />
        <Button variant="ghost"
          className="text-sm text-ivory md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </Button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-plum px-8 md:hidden">
          {chapters.map((c, i) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-ivory"
            >
              <span className="mr-4 align-top text-xs text-gold">0{i + 1}</span>
              {c.label}
            </a>
          ))}
        </div>
      )}

      {/* illuminated progress line */}
      <div className="fixed left-4 top-1/2 z-50 hidden h-40 w-px -translate-y-1/2 bg-ivory/10 md:block">
        <div className="w-full bg-gold shadow-flame" style={{ height: `${progress * 100}%` }} />
      </div>
    </>
  );
}
