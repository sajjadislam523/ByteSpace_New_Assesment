import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type RatingProps = {
  value: number;
  className?: string;
};

/** "4.5 ★" shown in the top-right of each course card. */
export function Rating({ value, className }: RatingProps) {
  const text = value.toFixed(1);
  return (
    <span
      className={cn("inline-flex items-center text-body-l text-black-700", className)}
      aria-label={`Rated ${text} out of 5`}
    >
      <span aria-hidden="true">{text}</span>
      <StarIcon className="shrink-0 text-shuttle-200" />
    </span>
  );
}
