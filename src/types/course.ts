import type { CourseLevel } from "@/components/ui/Badge";

export type Course = {
  slug: string;
  title: string;
  creator: { name: string; slug: string };
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  level: CourseLevel;
  category: string;
  rating: number;
  price: number;
  priceSuffix?: string;
  students: {
    avatars: { src: string; alt: string }[];
    extra: string;
  };
};
