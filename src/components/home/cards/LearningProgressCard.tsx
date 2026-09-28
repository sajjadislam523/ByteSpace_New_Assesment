import { cn } from "@/lib/cn";
import { FloatingCard } from "./FloatingCard";

type LearningProgressCardProps = {
  label: string;
  percent: number;
  /** "inline" is the full-width bordered card on the course Lessons tab. */
  variant?: "floating" | "inline";
  className?: string;
};

/** "Learning Progress 55%" card with a lime progress bar. */
export function LearningProgressCard({
  label,
  percent,
  variant = "floating",
  className,
}: LearningProgressCardProps) {
  const inline = variant === "inline";

  return (
    <FloatingCard
      className={cn(inline && "w-full border border-shuttle-200 backdrop-blur-[10px]", className)}
    >
      <p className="text-label-s">{label}</p>
      <p
        className={cn(
          "w-[200px] font-heading",
          inline ? "text-heading-s" : "text-[48px] leading-[1.2] font-semibold tracking-[-0.48px]",
        )}
      >
        {percent}%
      </p>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn("h-2 rounded-3xl", inline ? "w-full bg-shuttle-100" : "w-[200px] bg-[#f6f6f6]")}
      >
        <div className="h-full rounded-3xl bg-accent" style={{ width: `${percent}%` }} />
      </div>
    </FloatingCard>
  );
}
