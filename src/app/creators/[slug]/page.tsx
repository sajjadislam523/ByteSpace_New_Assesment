import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseGrid } from "@/components/course/CourseGrid";
import { CreatorHero } from "@/components/creators/CreatorHero";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { FilterBar } from "@/components/ui/FilterBar";
import { creators, getCreator, getCreatorCourses } from "@/data/creators";

export function generateStaticParams() {
  return creators.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) return { title: "Page not found" };
  return { title: creator.name, description: creator.tagline };
}

export default async function CreatorPage({ params }: PageProps<"/creators/[slug]">) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  const entries = getCreatorCourses(slug).map((course) => ({ id: course.slug, course }));

  return (
    <>
      <GridBackground>
        <Header active="creators" />
        <Container className="pt-6 pb-12 lg:pt-[52px] xl:pb-[83px]">
          <CreatorHero creator={creator} />
        </Container>
      </GridBackground>

      <main className="flex-1">
        <Container className="py-12 lg:py-16 xl:pt-[62px] xl:pb-[61px]">
          <h2 className="sr-only">Courses by {creator.name}</h2>
          <FilterBar />
          <div className="mt-10">
            <CourseGrid entries={entries} />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
