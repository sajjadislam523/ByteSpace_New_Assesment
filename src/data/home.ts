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

const springInset = "0 0.47% -0.47% -0.93%";
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
