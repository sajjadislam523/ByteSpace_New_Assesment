import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { partnerLogos } from "@/data/home";

export function LogosSection() {
  return (
    <section aria-labelledby="partners-heading" className="bg-shuttle-50 py-12 lg:py-20">
      <Container>
        <h2 id="partners-heading" className="sr-only">
          Trusted by
        </h2>
        <ul className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8 xl:flex-nowrap xl:gap-[72px]">
          {partnerLogos.map((logo) => (
            <li key={logo.src} className="shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                unoptimized
                className="h-auto w-[125px] sm:w-auto"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
