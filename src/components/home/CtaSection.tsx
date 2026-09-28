import { Container } from "@/components/layout/Container";
import { GridBackground } from "@/components/layout/GridBackground";
import { Button } from "@/components/ui/Button";
import { ctaOrnaments } from "@/data/home";
import { OrnamentLayer } from "./Ornament";

export function CtaSection() {
  return (
    <GridBackground
      aria-labelledby="cta-heading"
      className="flex items-center py-16 md:py-20 xl:h-[488px] xl:py-0"
    >
      <Container className="flex flex-col items-center gap-8 text-center lg:gap-10">
        <h2 id="cta-heading" className="max-w-[710px] font-heading text-heading-s sm:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] text-body-m sm:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button href="/register?role=creator">Join as Creator</Button>
      </Container>

      {/* Figma offsets only clear the text when it has its 1440 widths, so shapes start at xl. */}
      <OrnamentLayer ornaments={ctaOrnaments} className="hidden xl:block" />
    </GridBackground>
  );
}
