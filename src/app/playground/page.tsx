import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CourseCard } from "@/components/course/CourseCard";
import { ChevronDownIcon } from "@/components/icons";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { GlassBadge, LevelBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CategoryChips } from "@/components/ui/CategoryChips";
import { FilterBar } from "@/components/ui/FilterBar";
import { Input } from "@/components/ui/Input";
import { Rating } from "@/components/ui/Rating";
import { SearchBar } from "@/components/ui/SearchBar";
import { categories, courses } from "@/data/courses";
import { PaginationDemo, TabsDemo } from "./PlaygroundDemos";

export const metadata: Metadata = {
  title: "Components",
  robots: { index: false },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6 border-b border-shuttle-200 py-12 last:border-b-0">
      <h2 className="font-heading text-heading-xs text-shuttle-400">{title}</h2>
      {children}
    </section>
  );
}

export default function PlaygroundPage() {
  const avatars = courses[0].students.avatars;

  return (
    <>
      <GridBackground>
        <Header active="courses" />
        <Container className="flex flex-col items-center gap-8 pt-6 pb-16 lg:pt-11 lg:pb-[69px]">
          <h1 className="text-center font-heading text-heading-s">Find Your Next Course</h1>
          <SearchBar />
        </Container>
      </GridBackground>

      <main className="flex-1">
        <Container>
          <Section title="Buttons">
            <div className="flex flex-wrap items-center gap-4">
              <Button>Continue</Button>
              <Button>Sign In</Button>
              <Button rightIcon={<ChevronDownIcon />}>Courses</Button>
              <Button variant="outline" size="sm">
                Outline
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </Section>

          <Section title="Inputs">
            <div className="grid max-w-[453px] gap-6">
              <Input label="Full Name" placeholder="Jamie Davis" autoComplete="name" />
              <Input
                label="Email"
                type="email"
                placeholder="designer@example.com"
                autoComplete="email"
              />
              <Input label="Password" type="password" placeholder="********" />
              <Input
                label="Email"
                type="email"
                defaultValue="not-an-email"
                error="Please enter a valid email address."
              />
            </div>
          </Section>

          <Section title="Filter bar & category chips">
            <FilterBar />
            <CategoryChips categories={categories} />
          </Section>

          <Section title="Tabs">
            <TabsDemo />
          </Section>

          <Section title="Badges, rating & avatars">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex gap-3 rounded-xl bg-[#443131] p-4">
                <GlassBadge>17 Lessons</GlassBadge>
                <GlassBadge>2 hours 16 mins</GlassBadge>
                <GlassBadge>59 Comments</GlassBadge>
              </div>
              <LevelBadge level="Beginner" />
              <Rating value={4.5} />
              <AvatarStack avatars={avatars} extra="26+" />
              <AvatarStack
                size={43}
                avatars={[...avatars, ...avatars.slice(0, 3)]}
                extra="2K+"
              />
            </div>
          </Section>

          <Section title="Course cards">
            <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3 xl:justify-items-stretch">
              {courses.map((course, index) => (
                <CourseCard key={course.slug} course={course} priority={index < 3} />
              ))}
            </div>
          </Section>

          <Section title="Pagination">
            <div className="flex justify-center">
              <PaginationDemo />
            </div>
          </Section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
