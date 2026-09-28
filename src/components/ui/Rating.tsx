import Image from "next/image";
import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type RatingProps = {
  value: number;
  /** Number of reviews, shown as "(240)". */
  count?: number;
  /** md: course cards. sm: "4.5 (240) ★" on the home hero card. */
  size?: "md" | "sm";
  className?: string;
};

export function Rating({ value, count, size = "md", className }: RatingProps) {
  const text = value.toFixed(1);
  const label =
    count === undefined
      ? `Rated ${text} out of 5`
      : `Rated ${text} out of 5 from ${count} reviews`;

  if (size === "sm") {
    return (
      <span className={cn("inline-flex items-center text-body-xs", className)} aria-label={label}>
        <span aria-hidden="true" className="whitespace-pre">
          <span className="text-shuttle-950">{text} </span>
          {count !== undefined && <span className="text-shuttle-400">({count})</span>}
        </span>
        {/* star sits inside a 16px frame with the Figma insets */}
        <span aria-hidden="true" className="relative size-4 shrink-0">
          <span className="absolute inset-[6.92%_8.87%_14.53%_8.87%]">
            <Image src="/images/home/star.svg" alt="" fill unoptimized />
          </span>
        </span>
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex items-center text-body-l text-black-700", className)}
      aria-label={label}
    >
      <span aria-hidden="true">{text}</span>
      <StarIcon className="shrink-0 text-shuttle-200" />
    </span>
  );
}
