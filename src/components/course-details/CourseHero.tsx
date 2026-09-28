import Image from "next/image";
import Link from "next/link";
import type { CourseDetails } from "@/data/course-details";
import type { Course } from "@/types/course";
import { ShareButton } from "./ShareButton";

type CourseHeroProps = { course: Course; details: CourseDetails };

export function CourseHero({ course, details }: CourseHeroProps) {
  const pills = [
    { icon: "/images/course/level.svg", label: details.level },
    {
      icon: "/images/course/rating.svg",
      label: `${details.rating.toFixed(1)} (${details.reviews} reviews)`,
    },
    { icon: "/images/course/students.svg", label: `${details.students} Students` },
  ];

  return (
    <div className="flex flex-col gap-6 text-shuttle-50 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex flex-col gap-6 xl:ml-0.5">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-heading-s max-sm:text-[28px] max-sm:tracking-[-0.28px] xl:whitespace-nowrap">
            {details.title}
          </h1>
          <p className="font-heading text-heading-xs">{details.subtitle}</p>
        </div>
        <p className="text-label-l text-[#f1f4fe]">
          by{" "}
          <Link href={details.creator.href} className="text-accent hover:underline">
            {course.creator.name}
          </Link>
        </p>
        <ul className="flex flex-wrap gap-4">
          {pills.map((pill) => (
            <li
              key={pill.label}
              className="inline-flex items-center gap-2 rounded-3xl bg-white px-6 py-2 text-label-m whitespace-nowrap text-shuttle-950 backdrop-blur-[20px]"
            >
              <Image src={pill.icon} alt="" width={24} height={24} unoptimized />
              {pill.label}
            </li>
          ))}
        </ul>
      </div>
      <ShareButton title={details.title} />
    </div>
  );
}
