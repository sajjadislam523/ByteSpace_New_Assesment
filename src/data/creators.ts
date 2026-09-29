import type { Course } from "@/types/course";
import { courses } from "./courses";

export type Creator = {
  slug: string;
  name: string;
  tagline: string;
  avatar: string;
  bio: string[];
  products: number;
  followers: number;
};

function purepearlBio(name: string) {
  return [
    `Welcome to the creative world of ${name}. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!`,
    "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ];
}

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    tagline: "Passionate UI/UX, Web designer",
    avatar: "/images/creators/purepearl-studio.png",
    bio: purepearlBio("PurePearl Studio"),
    products: 3,
    followers: 12,
  },
];

export function getCreator(slug: string) {
  return creators.find((creator) => creator.slug === slug);
}

export function getCreatorCourses(slug: string): Course[] {
  return courses.filter((course) => course.creator.slug === slug);
}
