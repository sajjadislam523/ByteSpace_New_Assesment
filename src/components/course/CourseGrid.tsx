import type { CatalogEntry } from "@/data/courses";
import { CourseCard } from "./CourseCard";

type CourseGridProps = {
  entries: CatalogEntry[];
  /** Number of leading cards whose images load eagerly. */
  priorityCount?: number;
};

/** 3-column course grid with 40px gaps, or the "No courses found" empty state. */
export function CourseGrid({ entries, priorityCount = 3 }: CourseGridProps) {
  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-3xl border border-dashed border-shuttle-200 px-6 py-20 text-center">
        <p className="font-heading text-heading-xs">No courses found</p>
        <p className="text-body-m text-shuttle-400">Try another category or search term.</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
      {entries.map(({ id, course }, index) => (
        <li key={id} className="flex w-full justify-center">
          <CourseCard course={course} priority={index < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
