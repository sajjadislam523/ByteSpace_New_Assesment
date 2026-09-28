import { FloatingCard } from "./FloatingCard";

type LearningProgressCardProps = {
  label: string;
  percent: number;
  className?: string;
};

/** "Learning Progress 55%" card with a lime progress bar. */
export function LearningProgressCard({ label, percent, className }: LearningProgressCardProps) {
  return (
    <FloatingCard className={className}>
      <p className="text-label-s">{label}</p>
      <p className="w-[200px] font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.48px]">
        {percent}%
      </p>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-[200px] rounded-3xl bg-[#f6f6f6]"
      >
        <div className="h-full rounded-3xl bg-accent" style={{ width: `${percent}%` }} />
      </div>
    </FloatingCard>
  );
}
