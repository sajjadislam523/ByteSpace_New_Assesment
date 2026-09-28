import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { testimonials } from "@/data/home";
import { TestimonialCard } from "./TestimonialCard";

// Blurred lime/blue glows, placed from the 1440 frame's left edge and kept centred.
const glows = [
  { src: "/images/home/testimonials/glow-lime.svg", size: 1217, x: 802, top: -281 },
  { src: "/images/home/growth/backdrop-glow-small.svg", size: 752, x: 355, top: -178 },
  { src: "/images/home/testimonials/glow-blue.svg", size: 1217, x: -482, top: 109 },
];

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[#fafafa] py-12 lg:pt-[74px] lg:pb-[57px] xl:min-h-[784px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {glows.map((glow) => (
          <Image
            key={glow.src}
            src={glow.src}
            alt=""
            width={glow.size}
            height={glow.size}
            unoptimized
            className="absolute max-w-none"
            style={{ left: `calc(50% - 720px + ${glow.x}px)`, top: glow.top }}
          />
        ))}
      </div>

      <Container>
        {/* Figma's content box is 1204px (3 × 374 + 2 × 41), 2px wider than the column each side. */}
        <div className="flex flex-col gap-10 lg:gap-[72px] xl:-mx-0.5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:gap-[43px]">
            <h2
              id="testimonials-heading"
              className="max-w-[577px] shrink-0 font-heading text-heading-s text-black sm:text-heading-m"
            >
              Discover What Our Community Is Saying
            </h2>
            <p className="max-w-[580px] text-body-m text-black-700 sm:text-body-l">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what
              we do. Hear directly from those who have experienced the transformative journey of
              learning and creating on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          <ul className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-[repeat(3,374px)] xl:gap-[41px]">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <TestimonialCard {...testimonial} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
