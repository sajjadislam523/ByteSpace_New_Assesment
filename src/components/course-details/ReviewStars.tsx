import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type ReviewStarsProps = { value: number; label?: string; className?: string };

export function ReviewStars({ value, label, className }: ReviewStarsProps) {
  return (
    <span
      role="img"
      aria-label={label ?? `Rated ${value} out of 5`}
      className={cn("flex shrink-0 gap-1", className)}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} className={star <= value ? "text-shuttle-700" : "text-shuttle-200"} />
      ))}
    </span>
  );
}
