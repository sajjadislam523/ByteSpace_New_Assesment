import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** White 16px-radius card floating over the home photos. Callers position it. */
export function FloatingCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-2 rounded-2xl bg-white p-4 text-shuttle-950",
        className,
      )}
    >
      {children}
    </div>
  );
}
