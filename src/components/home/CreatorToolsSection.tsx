import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { creatorChecklist, creatorRevenue, heroCards, springInset } from "@/data/home";
import { HappyStudentsCard } from "./cards/HappyStudentsCard";
import { RevenueCard } from "./cards/RevenueCard";
import { photoShadow } from "./effects";
import { Ornament } from "./Ornament";

export function CreatorToolsSection() {
  return (
    <section aria-labelledby="creator-heading" className="py-12 lg:pt-18 lg:pb-[120px]">
      <Container>
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:gap-[79px]">
          {/* md+: Figma layers at their 541 × 596 offsets (revenue cards sit under the photo).
              Below md: photo, then the cards. */}
          <div className="relative flex w-full max-w-[541px] shrink-0 flex-col items-center gap-4 md:block md:h-[596px]">
            <RevenueCard
              {...creatorRevenue.total}
              className="max-md:order-2 md:absolute md:top-11 md:left-0"
            />
            <RevenueCard
              {...creatorRevenue.yearToDate}
              className="w-[134px] max-md:order-3 md:absolute md:top-[194px] md:left-0"
            />
            <div
              className="relative aspect-[435/596] w-full max-w-[435px] overflow-hidden max-md:order-first md:absolute md:top-0 md:left-7 md:w-[435px]"
              style={{ filter: photoShadow }}
            >
              {/* Figma crop: the square photo drawn at 157% width, shifted left, top-aligned. */}
              <Image
                src="/images/home/growth/creator-person.png"
                alt="Smiling student with headphones holding a tablet"
                width={500}
                height={500}
                sizes="(min-width: 640px) 683px, 157vw"
                className="absolute top-0 left-[-28.51%] h-[114.6%] w-[157.01%] max-w-none"
              />
            </div>
            <HappyStudentsCard
              {...heroCards.students}
              className="max-md:order-4 md:absolute md:top-[413px] md:left-[283px]"
            />
            <Ornament
              src="/images/home/spring.png"
              mask="/images/home/growth/creator-spring-mask.png"
              tint="lime"
              size={215}
              inset={springInset}
              className="top-[114px] left-[305px] max-md:hidden"
            />
          </div>

          <div className="flex w-full max-w-[580px] flex-col gap-6 max-xl:order-first lg:gap-10">
            <h2
              id="creator-heading"
              className="max-w-[391px] font-heading text-heading-s sm:text-heading-m"
            >
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-[574px] text-body-m text-shuttle-700 sm:text-body-l">
              <strong className="font-bold text-shuttle-950">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and administration of
              educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorChecklist.map((item) => (
                <li key={item} className="flex items-end gap-2 text-label-l">
                  <Image
                    src="/images/home/growth/check-circle.svg"
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
