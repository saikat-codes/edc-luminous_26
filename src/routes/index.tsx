import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/luminous/Navbar";
import { HeroSection } from "@/components/luminous/HeroSection";
import { StorySection } from "@/components/luminous/StorySection";
import { MemoriesSection } from "@/components/luminous/MemoriesSection";
import { RevealSection } from "@/components/luminous/RevealSection";
import { FooterSection } from "@/components/luminous/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUMINOUS 10.0 — Diwali at NIT Durgapur | EDC" },
<<<<<<< HEAD
      { name: "description", content: "LUMINOUS 10.0 by EDC NIT Durgapur — diya decorating, the Luminous rangoli competition and a night of light at NAB, 4 Nov, 6:00 PM onwards." },
=======
      { name: "description", content: "LUMINOUS 10.0 by EDC NIT Durgapur — diya decorating, the Luminas rangoli competition and a night of light at NAB, 4 Nov, 6:00 PM onwards." },
>>>>>>> origin/main
      { property: "og:title", content: "LUMINOUS 10.0 — EDC NIT Durgapur" },
      { property: "og:description", content: "Diyas, rangoli and light at NAB, NIT Durgapur. 4 Nov, 6:00 PM onwards." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain relative">
      <Navbar />
      <HeroSection />
      <StorySection />
      <MemoriesSection />
      <RevealSection />
      <FooterSection />
    </main>
  );
}
