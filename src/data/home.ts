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

export type FrameOrnament = {
  src: string;
  mask: string;
  tint: "lime" | "white";
  x: number;
  top: number;
  size: number;
  inset: string;
  flip?: boolean;
};

export const springInset = "0 0.47% -0.47% -0.93%";
export const solidInset = "-0.22% 0.56% -0.28% -1.05%";

export const heroOrnaments: FrameOrnament[] = [
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

export const partnerLogos = [
  { src: "/images/home/logos/logo-1.svg", width: 167, height: 41 },
  { src: "/images/home/logos/logo-2.svg", width: 168, height: 41 },
  { src: "/images/home/logos/logo-3.svg", width: 170, height: 41 },
  { src: "/images/home/logos/logo-4.svg", width: 170, height: 41 },
  { src: "/images/home/logos/logo-5.svg", width: 169, height: 42 },
];

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

export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

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

export const ctaOrnaments: FrameOrnament[] = [
  {
    src: "/images/home/cone.png",
    mask: "/images/home/cone-mask.png",
    tint: "lime",
    x: 454,
    top: 0,
    size: 188,
    inset: solidInset,
  },
  {
    src: "/images/home/spring-bottom-right.png",
    mask: "/images/home/spring-bottom-right-mask.png",
    tint: "lime",
    x: 555,
    top: 289,
    size: 330,
    inset: springInset,
  },
  {
    src: "/images/home/spring.png",
    mask: "/images/home/spring-top-left-mask.png",
    tint: "lime",
    x: -645.5,
    top: -162,
    size: 385,
    inset: springInset,
  },
  {
    src: "/images/home/spring.png",
    mask: "/images/home/spring-small-mask.png",
    tint: "white",
    x: -454.5,
    top: 5,
    size: 175,
    inset: springInset,
    flip: true,
  },
  {
    src: "/images/home/cta/cone-2.png",
    mask: "/images/home/cta/cone-2-mask.png",
    tint: "white",
    x: -674,
    top: 225,
    size: 188,
    inset: solidInset,
  },
  {
    src: "/images/home/ring.png",
    mask: "/images/home/ring-mask.png",
    tint: "lime",
    x: -529,
    top: 299,
    size: 342,
    inset: solidInset,
  },
  {
    src: "/images/home/cylinder.png",
    mask: "/images/home/cylinder-mask.png",
    tint: "white",
    x: 691,
    top: 6,
    size: 370,
    inset: solidInset,
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/home/testimonials/sarah-m.png",
    quote:
      "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/home/testimonials/james-l.png",
    quote:
      "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/home/testimonials/alex-b.png",
    quote:
      "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];
