import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/** Blue section with the 120px blueprint grid used across hero areas. */
export function GridBackground({
  className,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={cn("relative overflow-hidden bg-grid text-shuttle-50", className)}
      {...props}
    />
  );
}
