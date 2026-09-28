import { AvatarStack } from "@/components/ui/AvatarStack";
import { Rating } from "@/components/ui/Rating";
import { cn } from "@/lib/cn";
import { FloatingCard } from "./FloatingCard";

type HappyStudentsCardProps = {
  label: string;
  rating: number;
  reviews: number;
  avatars: { src: string; alt: string }[];
  extra: string;
  className?: string;
};

/** "Happy Students 4.5 (240) ★" card with a 43px avatar stack. */
export function HappyStudentsCard({
  label,
  rating,
  reviews,
  avatars,
  extra,
  className,
}: HappyStudentsCardProps) {
  return (
    <FloatingCard className={cn("w-[258px] justify-center", className)}>
      <div className="flex flex-col items-start">
        <p className="text-label-m">{label}</p>
        <Rating value={rating} count={reviews} size="sm" />
      </div>
      <AvatarStack avatars={avatars} extra={extra} size={43} />
    </FloatingCard>
  );
}
