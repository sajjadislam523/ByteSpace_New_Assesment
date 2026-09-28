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
  tone?: "white" | "lime";
  className?: string;
};

export function HappyStudentsCard({
  label,
  rating,
  reviews,
  avatars,
  extra,
  tone = "white",
  className,
}: HappyStudentsCardProps) {
  const lime = tone === "lime";

  return (
    <FloatingCard tone={tone} className={cn("w-[258px] justify-center", className)}>
      <div className="flex flex-col items-start">
        <p className="text-label-m">{label}</p>
        <Rating
          value={rating}
          count={reviews}
          size="sm"
          starColor={lime ? "primary" : undefined}
        />
      </div>
      <AvatarStack
        avatars={avatars}
        extra={extra}
        size={43}
        extraTone={lime ? "dark" : "lime"}
      />
    </FloatingCard>
  );
}
