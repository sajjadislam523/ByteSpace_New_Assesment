import type { Metadata } from "next";
import { CreatorCard } from "@/components/creators/CreatorCard";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { creators } from "@/data/creators";

export const metadata: Metadata = {
  title: "Meet Our Creators",
  description: "Discover the ByteSpace creators and the courses they teach.",
};

export default function CreatorsPage() {
  return (
    <>
      <GridBackground>
        <Header active="creators" />
        <Container className="flex flex-col items-center gap-4 pt-6 pb-16 text-center text-shuttle-50 lg:pt-11 lg:pb-[69px]">
          <h1 className="font-heading text-heading-s">Meet Our Creators</h1>
          <p className="max-w-[640px] text-body-l">
            Learn from designers, marketers and makers who share what they know.
          </p>
        </Container>
      </GridBackground>

      <main className="flex-1">
        <Container className="py-12 lg:py-[72px]">
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {creators.map((creator, index) => (
              <li key={creator.slug}>
                <CreatorCard creator={creator} priority={index < 3} />
              </li>
            ))}
          </ul>
        </Container>
      </main>

      <Footer />
    </>
  );
}
