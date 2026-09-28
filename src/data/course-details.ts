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
  lessons: { number: string; title: string; duration: string }[];
  moreLessons: number;
  enrollText: string;
  includes: { label: string; icon: string }[];
  creator: { name: string; role: string; avatar: string; bio: string; href: string };
  description: string[];
  sneakPeek: { src: string; alt: string }[];
  keyPoints: string[];
  lessonsIntro: string;
  modules: { number: number; title: string; description: string }[];
  lessonContent: string;
  progressTracking: string;
  progress: number;
  reviewsIntro: string;
  averageRating: number;
  ratingCounts: { stars: number; count: number }[];
  reviewList: Review[];
};

export type Review = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
};

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
  lessonsIntro:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  modules: [
    {
      number: 1,
      title: "Introduction to Digital Assets",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      number: 2,
      title: "Design Principles for Impact",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      number: 4,
      title: "User-Centric Design Strategies",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      number: 5,
      title: "Interactive Media and Engagement",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      number: 6,
      title: "Project Showcase and Critique",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      number: 7,
      title: "Optimizing Digital Assets for Various Platforms",
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  lessonContent:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressTracking:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
  progress: 55,
  reviewsIntro:
    "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
  averageRating: 4.7,
  ratingCounts: [
    { stars: 5, count: 720 },
    { stars: 4, count: 120 },
    { stars: 3, count: 21 },
    { stars: 2, count: 12 },
    { stars: 1, count: 16 },
  ],
  reviewList: [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: "/images/reviews/purepearl-studio.png",
      rating: 5,
      date: "a year ago",
      text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: "/images/reviews/albert-flores.png",
      rating: 5,
      date: "a year ago",
      text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: "/images/reviews/cody-fisher.png",
      rating: 5,
      date: "a year ago",
      text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: "/images/reviews/brooklyn-simmons.png",
      rating: 5,
      date: "a year ago",
      text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
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
