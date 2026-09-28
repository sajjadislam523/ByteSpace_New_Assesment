import Image from "next/image";
import { CourseCard } from "@/components/course/CourseCard";
import { Container } from "@/components/layout/Container";
import { courses } from "@/data/courses";
import { growthStats, heroCards, springInset } from "@/data/home";
import { LearningProgressCard } from "./cards/LearningProgressCard";
import { photoShadow } from "./effects";
import { Ornament } from "./Ornament";

export function GrowthSection() {
  return (
    <section aria-labelledby="growth-heading" className="pt-12 lg:pt-[120px]">
      <Container>
        <div className="flex flex-col items-center gap-12 xl:-mr-[58px] xl:flex-row xl:gap-[63px]">
          <div className="flex w-full max-w-[574px] flex-col gap-6 lg:gap-10">
            <h2
              id="growth-heading"
              className="max-w-[577px] font-heading text-heading-s sm:text-heading-m"
            >
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] text-body-m text-shuttle-700 sm:text-body-l">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <dl className="flex gap-10 sm:gap-14">
              {growthStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-body-m text-shuttle-700 sm:text-body-l">{stat.label}</dt>
                  <dd className="font-heading text-[36px] leading-11 font-medium tracking-[-0.36px] text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex w-full max-w-[621px] shrink-0 flex-col items-center gap-4 md:block md:h-[552px]">
            <div inert className="w-full max-w-[373px] max-md:order-3 md:absolute md:top-0 md:left-0">
              <CourseCard course={courses[0]} />
            </div>
            <div className="relative aspect-[577/540] w-full max-w-[577px] max-md:order-first md:absolute md:top-3 md:left-0 md:w-[577px]">
              <Image
                src="/images/home/hero-person.png"
                alt="Smiling student with a headset holding a laptop"
                fill
                sizes="(min-width: 640px) 577px, calc(100vw - 40px)"
                className="object-cover"
                style={{ filter: photoShadow }}
              />
            </div>
            <LearningProgressCard
              {...heroCards.progress}
              className="max-md:order-2 md:absolute md:top-[213px] md:left-[345px]"
            />
            <Ornament
              src="/images/home/spring-bottom-right.png"
              mask="/images/home/growth/growth-spring-mask.png"
              tint="lime"
              size={215}
              inset={springInset}
              className="top-[67px] left-[406px] max-md:hidden"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
