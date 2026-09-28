import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { learningPaths } from "@/data/home";

export function LearningPathsSection() {
  return (
    <section aria-labelledby="paths-heading" className="pb-12 lg:pb-18">
      <Container>
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2
            id="paths-heading"
            className="font-heading text-heading-s text-[#040819] max-sm:text-[28px] max-sm:tracking-[-0.28px]"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-body-m text-shuttle-400 sm:text-body-l">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there&apos;s something for everyone. Unleash
            your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 × 167px tiles with 40px gaps = 1202px, centred on the 1200px column like Figma. */}
        <ul className="mt-10 grid grid-cols-[repeat(2,minmax(0,167px))] justify-center gap-4 sm:grid-cols-[repeat(3,167px)] sm:gap-10 lg:mt-[68px] xl:grid-cols-[repeat(6,167px)]">
          {learningPaths.map((path) => (
            <li key={path.label}>
              <Link
                href={path.href}
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-200 bg-white transition-[border-color,box-shadow] duration-200 hover:border-shuttle-400 hover:shadow-[0_12px_32px_rgba(36,37,40,0.08)] focus-visible:border-primary"
              >
                <span className="flex rounded-[40px] bg-accent p-3 transition-colors group-hover:bg-accent-hover">
                  <Image src={path.icon} alt="" width={36} height={36} unoptimized />
                </span>
                <span className="text-label-xl whitespace-nowrap text-shuttle-950">{path.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
