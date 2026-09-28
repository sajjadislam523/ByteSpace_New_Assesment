import type { Metadata } from "next";
import { CourseBrowser } from "@/components/course/CourseBrowser";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { SearchBar } from "@/components/ui/SearchBar";
import { categories } from "@/data/courses";

export const metadata: Metadata = {
  title: "Find Your Next Course",
  description: "Browse ByteSpace courses by category, level and popularity.",
};

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const query = first(params.q)?.trim() || undefined;
  const categoryParam = first(params.category);
  const category = categories.find((c) => c === categoryParam) ?? "Featured";
  const page = Math.max(1, Number.parseInt(first(params.page) ?? "1", 10) || 1);

  return (
    <>
      <GridBackground>
        <Header active="courses" />
        <Container className="flex flex-col items-center gap-8 pt-6 pb-16 lg:pt-11 lg:pb-[69px]">
          <h1 className="text-center font-heading text-heading-s">Find Your Next Course</h1>
          <SearchBar defaultValue={query} />
        </Container>
      </GridBackground>

      <main className="flex-1 pb-16 lg:pb-[72px]">
        <Container>
          <CourseBrowser
            key={query ?? ""}
            query={query}
            initialCategory={category}
            initialPage={page}
          />
        </Container>
      </main>

      <Footer />
    </>
  );
}
