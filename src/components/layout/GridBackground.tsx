import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

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
