export const logo = { src: "/images/edc-logo.png", alt: "Entrepreneurship Development Cell, NIT Durgapur" };
export const lightLogo = { src: "/images/edc-logo-light.png", alt: logo.alt };

export const photos = {
  hero: { type: "image", src: "/images/hero-diya.jpg", alt: "Stunning wide aerial diya display — Luminous 10.0", label: "" } as Media,
  diyaSpiral: { type: "image", src: "/images/diya-spiral.jpg", alt: "Wide diya display on a courtyard", label: "" } as Media,
  nabAerial: { type: "image", src: "/images/nab-top-diyas.jpg", alt: "NAB from top with lit diyas", label: "" } as Media,
  crowdEdc: { type: "image", src: "/images/hero-diya.jpg", alt: "Stunning wide aerial diya display — Luminous 10.0", label: "" } as Media,
  team1: { type: "image", src: "/images/team-1.jpg", alt: "EDC members in festive kurtas with painted diyas on table", label: "" } as Media,
  team2: { type: "image", src: "/images/team-2.jpg", alt: "Group of students posing with a rangoli", label: "" } as Media,
  rangoli: { type: "image", src: "/images/floral-rangoli.jpg", alt: "Colourful floral rangoli with a lit diya at its centre", label: "" } as Media,
  lighter: { type: "image", src: "/images/lighter.jpg", alt: "Student crouching to light diyas at night", label: "" } as Media,
  diyaPath: { type: "image", src: "/images/diya-path.jpg", alt: "Girls posing alongside a winding path of lit diyas", label: "" } as Media,
  lantern: { type: "image", src: "/images/group-diyas.jpg", alt: "Students around a heart-shaped diya arrangement", label: "" } as Media,
  
  // Pre-Luminous (Preliminaries) photos from lumi-2
  prelimMentor: { type: "image", src: "/images/prelim-mentor-edc.jpg", alt: "EDC mentor smiling with children as they paint diyas", label: "Mentor & Kids" } as Media,
  prelimGirl: { type: "image", src: "/images/prelim-girl-painting.jpg", alt: "Young girl happily painting a handcrafted diya", label: "Young Artist" } as Media,
  prelimBoy: { type: "image", src: "/images/prelim-boy-painting.jpg", alt: "Boy carefully brushing vibrant paint onto a clay diya", label: "Diya Craft" } as Media,
  prelimRings: { type: "image", src: "/images/prelim-rings-diya.jpg", alt: "Intricate concentric color rings hand-painted on a diya", label: "Intricate Detail" } as Media,
  prelimCircle: { type: "image", src: "/images/prelim-girls-circle.jpg", alt: "Group of kids in a circle decorating diyas on newspaper", label: "Creative Circle" } as Media,
  prelimPavilion: { type: "image", src: "/images/prelim-pavilion-wide.jpg", alt: "Pavilion filled with students and children decorating diyas together", label: "Workshop Pavilion" } as Media,
  prelimCheering: { type: "image", src: "/images/prelim-kids-cheering.jpg", alt: "Children joyfully raising their hands during the workshop", label: "Joy & Cheering" } as Media,
  prelimBoysFocus: { type: "image", src: "/images/prelim-boys-focus.jpg", alt: "Two young boys collaborating on their diya design", label: "Young Creators" } as Media,
};

/**
 * LUMINOUS — single source of truth for event info and media.
 * To add real media: put a URL/path in `src` (and `poster` for videos).
 * Empty `src` renders a labelled placeholder slot.
 */

export type Media = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  /** Shown on the placeholder until real media is supplied */
  label: string;
};

export const event = {
  name: "LUMINOUS 10.0",
  shortName: "LUMINOUS",
  organiser: "Entrepreneurship & Development Cell",
  organiserShort: "EDC",
  institute: "NIT Durgapur",
  tagline: "A thousand little lights.",
  subline: "One unforgettable night.",
  // Leave empty until confirmed by organisers — UI shows "Coming soon".
  edition: "10.0",
  theme: "",
  date: "",
  venue: "New Academic Building (NAB)",
  time: "6:00 PM onwards",
  registrationOpen: false,
  registrationUrl: "",
  contactEmail: "",
  socials: [
    { label: "Instagram", url: "" },
    { label: "LinkedIn", url: "" },
    { label: "Facebook", url: "" },
  ],
};

export const media = {
  heroVideo: { type: "video", src: "", alt: "Diya flame in darkness", label: "Hero video — diya flame loop" } as Media,
  diyaField: { type: "video", src: "", alt: "Field of lit diyas", label: "Video — slow field of diyas" } as Media,
  fireworks: { type: "video", src: "", alt: "Golden fireworks over campus", label: "Video — fireworks sequence" } as Media,
  rangoli: [
    { type: "image", src: "/images/floral-rangoli.jpg", alt: "Colourful floral rangoli with a lit diya at its centre", label: "Floral Rangoli" },
    { type: "image", src: "/images/group-diyas-2.jpg", alt: "Students posing with diya arrangement", label: "Diya Formation" },
    { type: "image", src: "/images/team-2.jpg", alt: "Team with rangoli artwork", label: "Team Rangoli" },
  ] as Media[],
  gallery: [
    { type: "image", src: "/images/nab-top-diyas.jpg", alt: "NAB from top with lit diyas", label: "NAB View" },
    { type: "image", src: "/images/lighter.jpg", alt: "Student lighting diyas at night", label: "Lighting Diyas" },
    { type: "image", src: "/images/prelim-pavilion-wide.jpg", alt: "Large crowd at the workshop event", label: "Pavilion Workshop" },
    { type: "image", src: "/images/prelim-girl-painting.jpg", alt: "Child painting a diya with focus", label: "Young Artist" },
    { type: "image", src: "/images/prelim-mentor-edc.jpg", alt: "Mentor guiding kids in diya painting", label: "EDC Mentorship" },
    { type: "image", src: "/images/prelim-kids-cheering.jpg", alt: "Kids raising hands at workshop session", label: "Workshop Joy" },
  ] as Media[],
};

/** Only activities confirmed in the brief. Add more once organisers confirm. */
export const activities: {
  id: string;
  index: string;
  title: string;
  line: string;
  tone: "gold" | "vermilion" | "violet";
  media: Media;
}[] = [
  {
    id: "diyas",
    index: "01",
    title: "Lighting of Diyas",
    line: "Hundreds of hands. One shared glow across the campus.",
    tone: "gold",
    media: { type: "image", src: "/images/diya-path.jpg", alt: "Students lighting diyas at night", label: "" },
  },
  {
    id: "rangoli",
    index: "02",
    title: "Rangoli Competition",
    line: "Powder, patience and pattern — the ground becomes a canvas.",
    tone: "vermilion",
    media: { type: "image", src: "/images/floral-rangoli.jpg", alt: "Colourful floral rangoli with a lit diya at its centre", label: "" },
  },
  {
    id: "fireworks",
    index: "03",
    title: "Fireworks",
    line: "The moment every face turns to the sky.",
    tone: "violet",
    media: { type: "image", src: "/images/group-diyas-2.jpg", alt: "Crowd watching celebration", label: "" },
  },
];

export const chapters = [
  { id: "home", label: "Home" },
  { id: "story", label: "The story" },
  { id: "memories", label: "Memories" },
  { id: "register", label: "Details" },
];
