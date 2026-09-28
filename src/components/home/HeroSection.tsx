import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Rating } from "@/components/ui/Rating";
import { SearchBar } from "@/components/ui/SearchBar";
import { cn } from "@/lib/cn";
import { heroCards, heroOrnaments, type HeroOrnament } from "@/data/home";

// Figma effect "A". drop-shadow follows the cut-out photo, box-shadow would draw a rectangle.
const personShadow = [
  "drop-shadow(0.518px 0.741px 3.036px rgb(0 0 0 / 0.04))",
  "drop-shadow(2.233px 3.19px 5.723px rgb(0 0 0 / 0.06))",
  "drop-shadow(5.383px 7.69px 9.571px rgb(0 0 0 / 0.07))",
  "drop-shadow(10.208px 14.582px 16.087px rgb(0 0 0 / 0.08))",
  "drop-shadow(16.946px 24.209px 24px rgb(0 0 0 / 0.09))",
  "drop-shadow(25.838px 36.912px 36px rgb(0 0 0 / 0.1))",
  "drop-shadow(37.122px 53.032px 56px rgb(0 0 0 / 0.11))",
  "drop-shadow(51.038px 72.912px 72px rgb(0 0 0 / 0.13))",
].join(" ");

const tints = {
  lime: "var(--color-accent)",
  white: "var(--color-shuttle-50)",
};

export function HeroSection() {
  const { progress, students, category } = heroCards;

  return (
    <GridBackground className="isolate lg:h-[1024px]">
      <Header active="home" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        {heroOrnaments.map((ornament) => (
          <Ornament key={ornament.mask} {...ornament} />
        ))}
      </div>

      <Container className="flex flex-col items-center gap-8 pt-6 text-center md:pt-10 lg:gap-15 lg:pt-[49px]">
        <div className="flex flex-col items-center gap-4 lg:gap-8">
          <h1 className="max-w-[935px] font-heading text-heading-s text-white sm:text-[56px] sm:max-lg:tracking-[-0.56px] lg:text-heading-l">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[560px] text-body-m text-shuttle-100 sm:text-body-l lg:max-w-none lg:whitespace-nowrap">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
        </div>
        <SearchBar
          placeholder="Course, topic, creator"
          submitLabel="Search"
          className="text-left sm:w-auto"
        />
      </Container>

      {/* Person, lime arc and cards. Positions below are offsets from the 578 × 541 photo box. */}
      <div className="relative mx-auto mt-12 aspect-[578/541] w-[calc(100%-2.5rem)] max-w-[578px] sm:w-[calc(100%-4rem)] lg:absolute lg:top-[512px] lg:left-[calc(50%-289px)] lg:mt-0 lg:w-[578px]">
        <Image
          src="/images/home/arc.svg"
          alt=""
          aria-hidden="true"
          width={1149}
          height={1149}
          unoptimized
          className="absolute top-[12.94%] left-[calc(50%-0.5px)] h-auto w-[198.79%] max-w-none -translate-x-1/2"
        />
        <Image
          src="/images/home/hero-person.png"
          alt="Smiling student with a headset holding a laptop"
          fill
          priority
          sizes="(min-width: 640px) 578px, calc(100vw - 40px)"
          className="object-cover"
          style={{ filter: personShadow }}
        />

        <FloatingCard className="max-md:top-[34%] max-md:right-0 max-md:origin-top-right md:top-[139px] md:left-[411px]">
          <p className="text-label-s">{progress.label}</p>
          <p className="w-[200px] font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.48px]">
            {progress.percent}%
          </p>
          <div
            role="progressbar"
            aria-label={progress.label}
            aria-valuenow={progress.percent}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 w-[200px] rounded-3xl bg-[#f6f6f6]"
          >
            <div className="h-full rounded-3xl bg-accent" style={{ width: `${progress.percent}%` }} />
          </div>
        </FloatingCard>

        <FloatingCard className="w-[258px] justify-center max-md:bottom-[4%] max-md:left-0 max-md:origin-bottom-left md:top-[325px] md:left-[-80px] lg:left-[-103px]">
          <div className="flex flex-col items-start">
            <p className="text-label-m">{students.label}</p>
            <Rating value={students.rating} count={students.reviews} size="sm" />
          </div>
          <AvatarStack avatars={students.avatars} extra={students.extra} size={43} />
        </FloatingCard>

        <FloatingCard className="z-20 whitespace-nowrap max-md:top-[6%] max-md:left-0 max-md:origin-top-left md:top-[127px] md:left-[-27px]">
          <div className="flex flex-col items-start">
            <p className="text-label-m">{category.title}</p>
            <p className="flex items-start gap-2 text-body-xs text-shuttle-400">
              <span>{category.courses}</span>
              <span aria-hidden="true" className="text-[10px] leading-[1.5]">
                •
              </span>
              <span>{category.students}</span>
            </p>
          </div>
        </FloatingCard>
      </div>
    </GridBackground>
  );
}

function FloatingCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "absolute flex flex-col items-start gap-2 rounded-2xl bg-white p-4 text-shuttle-950 max-sm:scale-60 sm:max-md:scale-75",
        className,
      )}
    >
      {children}
    </div>
  );
}

// Grey 3D render tinted with a hard-light colour layer clipped to the shape's mask.
function Ornament({ src, mask, tint, x, top, size, inset, flip }: HeroOrnament) {
  return (
    <div
      className={cn("absolute isolate -translate-x-1/2", flip && "-scale-x-100")}
      style={{ left: `calc(50% + ${x}px)`, top, width: size, height: size }}
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
