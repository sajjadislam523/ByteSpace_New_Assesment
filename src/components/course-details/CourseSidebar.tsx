import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { CourseDetails } from "@/data/course-details";
import { cn } from "@/lib/cn";
import type { Course } from "@/types/course";

type CourseSidebarProps = { course: Course; details: CourseDetails; className?: string };

// Body M on this page uses a 1.6 line height (26px rows in Figma).
const body = "text-body-m leading-[1.6] text-shuttle-700";

/** Enroll card: lesson preview, price, what's included and the creator. */
export function CourseSidebar({ course, details, className }: CourseSidebarProps) {
  const { creator } = details;

  return (
    <aside
      aria-label="Enroll in this course"
      className={cn(
        "flex flex-col gap-6 rounded-3xl border border-shuttle-200 bg-white p-6 text-shuttle-950 sm:p-10",
        className,
      )}
    >
      <section className="flex flex-col gap-6">
        <h2 className="font-heading text-heading-xs">{details.lessonSummary}</h2>
        <div className="flex flex-col gap-3">
          <ol className="flex max-w-[326px] flex-col gap-3">
            {details.lessons.map((lesson) => (
              <li key={lesson.number} className="flex items-start justify-between gap-4">
                <span className="flex gap-2 text-label-m">
                  <span className="w-6 shrink-0">{lesson.number}</span>
                  <span className="max-w-[198px]">{lesson.title}</span>
                </span>
                <span className="shrink-0 text-body-m leading-[1.6] text-primary">
                  {lesson.duration}
                </span>
              </li>
            ))}
          </ol>
          <p className={body}>{details.moreLessons} more videos</p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <p className={body}>{details.enrollText}</p>
        <p className="flex items-end">
          {/* Figma clips the price line to 38px */}
          <span className="font-heading text-heading-s leading-[38px] text-primary">${course.price}</span>
          {course.priceSuffix && <span className={body}>{course.priceSuffix}</span>}
        </p>
        <Button href="/register" className="w-full">
          Enroll Now
        </Button>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-heading text-heading-xs">This course include</h2>
        <ul className="flex flex-col gap-3">
          {details.includes.map((item) => (
            <li key={item.label} className="flex items-start gap-2">
              <Image src={item.icon} alt="" width={24} height={24} unoptimized />
              <span className={body}>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-black-200" />

      <section className="flex flex-col items-start gap-6">
        <div className="flex items-start gap-3">
          <Image
            src={creator.avatar}
            alt=""
            width={52}
            height={52}
            className="size-[52px] shrink-0 rounded-full object-cover"
          />
          <div>
            <h2 className="text-label-l">{creator.name}</h2>
            <p className={body}>{creator.role}</p>
          </div>
        </div>
        <p className={body}>{creator.bio}</p>
        <Link
          href={creator.href}
          className="rounded-3xl border border-shuttle-200 px-[15px] py-[7px] text-label-m text-shuttle-700 transition-colors hover:border-shuttle-400 hover:text-shuttle-950"
        >
          See Full Profile
        </Link>
      </section>
    </aside>
  );
}
