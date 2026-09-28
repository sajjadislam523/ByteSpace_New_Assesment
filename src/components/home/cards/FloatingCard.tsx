import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FloatingCardProps = {
  tone?: "white" | "lime";
  className?: string;
  children: ReactNode;
};

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
