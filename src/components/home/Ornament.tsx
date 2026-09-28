import Image from "next/image";
import type { CSSProperties } from "react";
import type { FrameOrnament } from "@/data/home";
import { cn } from "@/lib/cn";

const tints = {
  lime: "var(--color-accent)",
  white: "var(--color-shuttle-50)",
};

type OrnamentProps = {
  src: string;
  mask: string;
  tint: keyof typeof tints;
  size: number;
  /** Image box inside the frame, as exported from Figma. */
  inset: string;
  flip?: boolean;
  /** Positioning classes; the ornament is always absolute. */
  className?: string;
  style?: CSSProperties;
};

// Grey 3D render tinted with a hard-light colour layer clipped to the shape's mask.
export function Ornament({ src, mask, tint, size, inset, flip, className, style }: OrnamentProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute isolate", flip && "-scale-x-100", className)}
      style={{ width: size, height: size, ...style }}
    >
      <div className="absolute" style={{ inset }}>
        <Image src={src} alt="" fill sizes={`${size}px`} className="object-cover" />
        <div
          className="absolute inset-0 mask-size-[100%_100%] mask-no-repeat mix-blend-hard-light"
          style={{ backgroundColor: tints[tint], maskImage: `url(${mask})` }}
        />
      </div>
    </div>
  );
}

/** Decorative layer of ornaments placed from the centre of the 1440px frame. */
export function OrnamentLayer({
  ornaments,
  className,
}: {
  ornaments: FrameOrnament[];
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {ornaments.map(({ x, top, ...ornament }) => (
        <Ornament
          key={ornament.mask}
          {...ornament}
          className="-translate-x-1/2"
          style={{ left: `calc(50% + ${x}px)`, top }}
        />
      ))}
    </div>
  );
}
