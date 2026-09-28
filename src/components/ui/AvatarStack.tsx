import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: { src: string; alt: string }[];
  extra?: string;
  size?: 32 | 43;
  extraTone?: "lime" | "dark";
  className?: string;
};

export function AvatarStack({
  avatars,
  extra,
  size = 32,
  extraTone = "lime",
  className,
}: AvatarStackProps) {
  const overlap = size === 32 ? "-ml-2" : "-ml-4";
  const bubble =
    extraTone === "lime"
      ? "bg-accent text-shuttle-950"
      : size === 32
        ? "bg-black text-white"
        : "bg-shuttle-950 text-shuttle-50";

  return (
    <div className={cn("flex items-center", className)}>
      {avatars.map((avatar, index) => (
        <Image
          key={avatar.src + index}
          src={avatar.src}
          alt={avatar.alt}
          width={size}
          height={size}
          className={cn("shrink-0 rounded-full object-cover", index > 0 && overlap)}
          style={{ width: size, height: size }}
        />
      ))}
      {extra && (
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full text-label-xs leading-5",
            bubble,
            size === 43 && "font-bold leading-normal",
            avatars.length > 0 && overlap,
          )}
          style={{ width: size, height: size }}
        >
          {extra}
        </span>
      )}
    </div>
  );
}
