// Floating cards on the home hero.
export const heroCards = {
  progress: {
    label: "Learning Progress",
    percent: 55,
  },
  students: {
    label: "Happy Students",
    rating: 4.5,
    reviews: 240,
    avatars: [1, 2, 3, 4, 5, 6, 7].map((n) => ({
      src: `/images/home/avatar-${n}.png`,
      alt: `Student ${n}`,
    })),
    extra: "2K+",
  },
  category: {
    title: "UI/UX Design",
    courses: "200 Courses",
    students: "1000+ Students",
  },
};

export type HeroOrnament = {
  src: string;
  mask: string;
  tint: "lime" | "white";
  /** Horizontal centre, in px from the middle of the 1440px frame. */
  x: number;
  top: number;
  size: number;
  /** Image box inside the frame, as exported from Figma. */
  inset: string;
  flip?: boolean;
};

export const springInset = "0 0.47% -0.47% -0.93%";
const solidInset = "-0.22% 0.56% -0.28% -1.05%";

// 3D shapes around the hero, in Figma paint order.
export const heroOrnaments: HeroOrnament[] = [
  {
    src: "/images/home/spring-bottom-right.png",
    mask: "/images/home/spring-bottom-right-mask.png",
    tint: "white",
    x: 572,
    top: 672,
    size: 330,
    inset: springInset,
  },
  {
    src: "/images/home/spring.png",
    mask: "/images/home/spring-top-left-mask.png",
    tint: "lime",
    x: -645.5,
    top: 221,
    size: 385,
    inset: springInset,
  },
  {
    src: "/images/home/spring.png",
    mask: "/images/home/spring-small-mask.png",
    tint: "white",
    x: -449.5,
    top: 477,
    size: 175,
    inset: springInset,
    flip: true,
  },
  {
    src: "/images/home/ring.png",
    mask: "/images/home/ring-mask.png",
    tint: "white",
    x: -531,
    top: 682,
    size: 342,
    inset: solidInset,
  },
  {
    src: "/images/home/cylinder.png",
    mask: "/images/home/cylinder-mask.png",
    tint: "lime",
    x: 696,
    top: 221,
    size: 370,
    inset: solidInset,
  },
  {
    src: "/images/home/cone.png",
    mask: "/images/home/cone-mask.png",
    tint: "white",
    x: 480,
    top: 464,
    size: 188,
    inset: solidInset,
  },
];

// Partner logos strip under the hero. Sizes are the SVG root dimensions.
export const partnerLogos = [
  { src: "/images/home/logos/logo-1.svg", width: 167, height: 41 },
  { src: "/images/home/logos/logo-2.svg", width: 168, height: 41 },
  { src: "/images/home/logos/logo-3.svg", width: 170, height: 41 },
  { src: "/images/home/logos/logo-4.svg", width: 170, height: 41 },
  { src: "/images/home/logos/logo-5.svg", width: 169, height: 42 },
];

// "Discover Your Passion" category chips, one array per centred Figma row. "Featured" shows all.
export const discoverChipRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

// "Explore Diverse Learning Paths" tiles. Icons are the 36px Figma SVGs.
export const learningPaths = [
  { label: "Design", icon: "design" },
  { label: "Development", icon: "development" },
  { label: "IT & Software", icon: "it-software" },
  { label: "Business", icon: "business" },
  { label: "Marketing", icon: "marketing" },
  { label: "Photography", icon: "photography" },
].map(({ label, icon }) => ({
  label,
  icon: `/images/home/paths/${icon}.svg`,
  href: `/courses?${new URLSearchParams({ category: label })}`,
}));

// "Your Path to Professional Growth" stats.
export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

// "Create & Manage Courses Easily." checklist and dashboard cards.
export const creatorChecklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const creatorRevenue = {
  total: { title: "Total Revenue", period: "July 1-28", amount: "$120.29", change: "+12$", progress: 56 },
  yearToDate: { title: "Year to Date", period: "2023", amount: "$1,200.38", change: "+12$" },
};
