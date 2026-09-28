import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { SearchBar } from "@/components/ui/SearchBar";
import { cn } from "@/lib/cn";
import { heroCards, heroOrnaments } from "@/data/home";
import { FloatingCard } from "./cards/FloatingCard";
import { HappyStudentsCard } from "./cards/HappyStudentsCard";
import { LearningProgressCard } from "./cards/LearningProgressCard";
import { photoShadow } from "./effects";
import { OrnamentLayer } from "./Ornament";

// Card offsets are measured from the 578 × 541 photo box; small screens scale the cards down.
const heroCard = "absolute max-sm:scale-60 sm:max-md:scale-75";

export function HeroSection() {
  const { progress, students, category } = heroCards;

  return (
    <GridBackground className="isolate lg:h-[1024px]">
      <Header active="home" />

      <OrnamentLayer ornaments={heroOrnaments} className="z-10 hidden lg:block" />

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
          style={{ filter: photoShadow }}
        />

        <LearningProgressCard
          {...progress}
          className={cn(
            heroCard,
            "max-md:top-[34%] max-md:right-0 max-md:origin-top-right md:top-[139px] md:left-[411px]",
          )}
        />

        <HappyStudentsCard
          {...students}
          className={cn(
            heroCard,
            "max-md:bottom-[4%] max-md:left-0 max-md:origin-bottom-left md:top-[325px] md:left-[-80px] lg:left-[-103px]",
          )}
        />

        <FloatingCard
          className={cn(
            heroCard,
            "z-20 whitespace-nowrap max-md:top-[6%] max-md:left-0 max-md:origin-top-left md:top-[127px] md:left-[-27px]",
          )}
        >
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
