import Image from "next/image";
import type { CSSProperties } from "react";
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
