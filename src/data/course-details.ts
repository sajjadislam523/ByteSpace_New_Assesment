import type { CourseLevel } from "@/components/ui/Badge";
import type { Course } from "@/types/course";
import { courses } from "./courses";

export type CourseDetails = {
  title: string;
  subtitle: string;
  level: CourseLevel;
  rating: number;
  reviews: number;
  students: number;
  preview: string;
  lessonSummary: string;
  /** First lessons shown in the sidebar; the rest are counted in `moreLessons`. */
  lessons: { number: string; title: string; duration: string }[];
  moreLessons: number;
  enrollText: string;
  includes: { label: string; icon: string }[];
  creator: { name: string; role: string; avatar: string; bio: string; href: string };
  description: string[];
  sneakPeek: { src: string; alt: string }[];
  keyPoints: string[];
};

// Content of the "Build Digital Asset" course in Figma, shared by every course for now.
const shared: Omit<CourseDetails, "title"> = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  level: "Intermediate",
  rating: 4.8,
  reviews: 172,
  students: 199,
  preview: "/images/course/preview.jpg",
  lessonSummary: "112 Lessons (24 hours)",
  lessons: [
    { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  moreLessons: 99,
  enrollText: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  includes: [
    { label: "Learning Resources", icon: "/images/course/resources.svg" },
    { label: "Quality Lesson Videos", icon: "/images/course/videos.svg" },
    { label: "Certificate of Completion", icon: "/images/course/certificate.svg" },
    { label: "Private Consultation", icon: "/images/course/consultation.svg" },
  ],
  creator: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar: "/images/course/creator-purepearl.png",
    // Figma repeats the enroll copy here.
    bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    href: "/creators/purepearl-studio",
  },
  description: [
    `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [
    { src: "/images/course/sneak-peek-1.jpg", alt: "Hand sketching app wireframes on paper" },
    { src: "/images/course/sneak-peek-2.jpg", alt: "Design system components open on a laptop" },
    { src: "/images/course/sneak-peek-3.jpg", alt: "UI style guide on a desktop monitor" },
    { src: "/images/course/sneak-peek-4.jpg", alt: "Colourful mobile app screens on two phones" },
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
};

const titles: Record<string, string> = {
  "build-digital-asset": "Build Digital Asset: A Comprehensive Guide",
};

export const courseDetails: Record<string, CourseDetails> = Object.fromEntries(
  courses.map((course) => [course.slug, { ...shared, title: titles[course.slug] ?? course.title }]),
);

export function getCourseDetails(slug: string): { course: Course; details: CourseDetails } | undefined {
  const course = courses.find((item) => item.slug === slug);
  const details = courseDetails[slug];
  return course && details ? { course, details } : undefined;
}
