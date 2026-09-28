import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FloatingCardProps = {
  /** "lime" is the Happy Students card on the Sign In / Register collage. */
  tone?: "white" | "lime";
  className?: string;
  children: ReactNode;
};

/** 16px-radius card floating over the home photos. Callers position it. */
export function FloatingCard({ tone = "white", className, children }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-2 rounded-2xl p-4 text-shuttle-950",
        tone === "white" ? "bg-white" : "bg-accent",
        className,
      )}
    >
      {children}
    </div>
  );
}
