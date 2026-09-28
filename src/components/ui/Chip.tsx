import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ChipProps = ComponentProps<"button"> & { active?: boolean };

/** 43px pill used by category filters and page tabs. */
export function Chip({ active = false, className, ...props }: ChipProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-3xl px-4 py-3 text-label-m whitespace-nowrap transition-colors",
        active
          ? "bg-accent text-shuttle-950"
          : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-200/60 hover:text-shuttle-950",
        className,
      )}
      {...props}
    />
  );
}
