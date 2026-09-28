import type { ReactNode } from "react";
import { SignalIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/** Frosted badge placed over course images ("17 Lessons", "2 hours 16 mins"). */
export function GlassBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-3xl bg-glass px-3 py-1.5 text-label-xs whitespace-nowrap text-black-700 backdrop-blur-[4px]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

/** Grey pill with the signal icon, e.g. "Beginner". */
export function LevelBadge({ level, className }: { level: CourseLevel; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-3xl bg-shuttle-50 px-3 py-1.5 text-label-xs whitespace-nowrap text-shuttle-700",
        className,
      )}
    >
      <SignalIcon size={20} className="shrink-0" />
      {level}
    </span>
  );
}
