import type { Course } from "@/types/course";

const creator = { name: "purepearl studio", slug: "purepearl-studio" };

const students = {
  avatars: [1, 2, 3, 4].map((n) => ({
    src: `/images/avatars/avatar-${n}.png`,
    alt: `Student ${n}`,
  })),
  extra: "26+",
};

const shared = {
  creator,
  students,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  rating: 4.5,
  price: 25,
  priceSuffix: "/lifetime",
} satisfies Partial<Course>;

// Mock data matching the course cards in the Figma file.
export const courses: Course[] = [
  {
    ...shared,
    slug: "learn-figma-from-basic",
    category: "UI/UX Design",
    title: "Learn Figma from Basic",
    image: "/images/courses/learn-figma-from-basic.jpg",
  },
  {
    ...shared,
    slug: "build-digital-asset",
    category: "Creative Marketing",
    title: "Build Digital Asset",
    image: "/images/courses/build-digital-asset.jpg",
  },
  {
    ...shared,
    slug: "the-power-of-big-data",
    category: "Marketing",
    title: "the Power of Big Data",
    image: "/images/courses/the-power-of-big-data.jpg",
  },
  {
    ...shared,
    slug: "balancing-productivity-and-self-care",
    category: "Social Media",
    title: "Balancing Productivity and Self-Care",
    image: "/images/courses/balancing-productivity-and-self-care.jpg",
  },
  {
    ...shared,
    slug: "mastering-money-management",
    category: "Marketing",
    title: "Mastering Money Management",
    image: "/images/courses/mastering-money-management.jpg",
  },
  {
    ...shared,
    slug: "from-idea-to-startup-success",
    category: "Creative Marketing",
    title: "From Idea to Startup Success",
    image: "/images/courses/from-idea-to-startup-success.jpg",
  },
];

export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
] as const;

export const COURSES_PER_PAGE = 18;

export type CatalogEntry = { id: string; course: Course };

// Mock catalog: the six design courses repeated to fill five pages.
const catalog: CatalogEntry[] = Array.from({ length: 15 }, (_, round) =>
  courses.map((course) => ({ id: `${course.slug}-${round}`, course })),
).flat();

export function filterCatalog({ category, query }: { category?: string; query?: string }) {
  const q = query?.trim().toLowerCase();
  return catalog.filter(({ course }) => {
    if (category && category !== "Featured" && course.category !== category) return false;
    if (q && !`${course.title} ${course.creator.name}`.toLowerCase().includes(q)) return false;
    return true;
  });
}
