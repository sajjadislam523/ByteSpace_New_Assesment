import Image from "next/image";
import { LearningProgressCard } from "@/components/home/cards/LearningProgressCard";
import type { CourseDetails } from "@/data/course-details";

// Body M on this page uses a 1.6 line height.
const body = "text-body-m leading-[1.6] text-shuttle-700";

/** Lessons tab: module list, lesson content and progress tracking. */
export function LessonsTab({ details }: { details: CourseDetails }) {
  return (
    <div className="flex flex-col gap-6 text-shuttle-950">
      <h2 className="font-heading text-heading-xs">Explore the Modules</h2>
      <p className={`xl:max-w-[723px] ${body}`}>{details.lessonsIntro}</p>

      <h2 className="font-heading text-heading-xs">Lesson List</h2>
      <ol className="flex flex-col gap-6">
        {details.modules.map((item) => (
          <li key={item.number} className="flex items-start gap-[13px] sm:items-center">
            <span className="flex shrink-0 items-center justify-center rounded-3xl bg-accent p-3 sm:p-4">
              <Image
                src="/images/course/module.svg"
                alt=""
                width={40}
                height={40}
                unoptimized
                className="size-8 sm:size-10"
              />
            </span>
            <div className="flex min-w-0 flex-col gap-1 xl:max-w-[638px]">
              <h3 className="text-label-m">
                Module {item.number}: {item.title}
              </h3>
              <p className={body}>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="font-heading text-heading-xs">Lesson Content</h2>
      <p className={`xl:max-w-[723px] ${body}`}>{details.lessonContent}</p>

      <h2 className="font-heading text-heading-xs">Lesson Progress Tracking</h2>
      <p className={`xl:max-w-[723px] ${body}`}>{details.progressTracking}</p>
      <LearningProgressCard
        variant="inline"
        label="Learning Progress"
        percent={details.progress}
        className="xl:max-w-[723px]"
      />
    </div>
  );
}
