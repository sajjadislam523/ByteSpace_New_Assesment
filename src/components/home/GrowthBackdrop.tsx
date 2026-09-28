import Image from "next/image";
import type { ReactNode } from "react";

/** #FAFAFA band with the blurred lime/blue glows behind the growth + creator sections. */
export function GrowthBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden bg-[#fafafa]">
      {/* Offsets from the Figma frame's left edge, kept centred on the 1440px layout. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/home/growth/backdrop-glow.svg"
          alt=""
          width={2536}
          height={2471}
          unoptimized
          className="absolute top-[-506px] left-[calc(50%-1268px)] max-w-none"
        />
        <Image
          src="/images/home/growth/backdrop-glow-small.svg"
          alt=""
          width={752}
          height={752}
          unoptimized
          className="absolute top-[906px] left-[calc(50%-1047px)] max-w-none"
        />
      </div>
      {children}
    </div>
  );
}
