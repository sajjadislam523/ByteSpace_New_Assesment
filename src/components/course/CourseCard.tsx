import Image from "next/image";
import Link from "next/link";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { GlassBadge, LevelBadge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { cn } from "@/lib/cn";
import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
  className?: string;
  /** Set on cards above the fold so the image loads eagerly. */
  priority?: boolean;
  /** "showcase": lime star and black "26+" bubble, as on the Sign In / Register collage. */
  tone?: "default" | "showcase";
};

/** Course_Card_1 from Figma — 373 × 384 at desktop. */
export function CourseCard({
  course,
  className,
  priority = false,
  tone = "default",
}: CourseCardProps) {
  const showcase = tone === "showcase";
  const href = `/courses/${course.slug}`;

  return (
    <article
      className={cn(
        "group relative flex w-full max-w-[373px] flex-col rounded-3xl border border-shuttle-200 bg-white p-[15px] pb-5",
        "transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(36,37,40,0.08)]",
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-[341/195.145] w-full overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1280px) 341px, (min-width: 768px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute bottom-[19px] left-[13px] flex gap-3">
          <GlassBadge>{course.lessons} Lessons</GlassBadge>
          <GlassBadge>{course.duration}</GlassBadge>
          <GlassBadge>{course.comments} Comments</GlassBadge>
        </div>
      </div>

      {/* Body */}
      <div className="mt-[20.855px] flex flex-col gap-4">
        <div className="flex items-start justify-between gap-[9px]">
          <div className="flex min-w-0 flex-col">
            <h3 className="truncate font-heading text-heading-xs text-black">
              <Link href={href} className="after:absolute after:inset-0 after:rounded-3xl">
                {course.title}
              </Link>
            </h3>
            <p className="text-body-xs text-black-700">
              by{" "}
              <Link
                href={`/creators/${course.creator.slug}`}
                className="relative z-10 text-primary hover:underline"
              >
                {course.creator.name}
              </Link>
            </p>
          </div>
          <Rating
            value={course.rating}
            starColor={showcase ? "lime" : undefined}
            className="shrink-0"
          />
        </div>

        <div className="flex items-center gap-3">
          <LevelBadge level={course.level} />
          <AvatarStack
            avatars={course.students.avatars}
            extra={course.students.extra}
            extraTone={showcase ? "dark" : "lime"}
          />
        </div>

        <p className="flex items-end">
          <span className="font-heading text-heading-xs text-primary">${course.price}</span>
          {course.priceSuffix && (
            <span className="text-body-xs text-black-700">{course.priceSuffix}</span>
          )}
        </p>
      </div>
    </article>
  );
}
