import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AboutTab } from "@/components/course-details/AboutTab";
import { CourseHero } from "@/components/course-details/CourseHero";
import { CoursePreview } from "@/components/course-details/CoursePreview";
import { CourseSidebar } from "@/components/course-details/CourseSidebar";
import { CourseTabs, CourseTabsView } from "@/components/course-details/CourseTabs";
import { LessonsTab } from "@/components/course-details/LessonsTab";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { getCourseDetails } from "@/data/course-details";
import { courses } from "@/data/courses";

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = getCourseDetails(slug);
  if (!data) return {};
  return { title: data.details.title, description: data.details.subtitle };
}

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-3xl border border-dashed border-shuttle-200 px-6 py-20 text-center">
      <h2 className="font-heading text-heading-xs">{title} are coming soon</h2>
      <p className="text-body-m text-shuttle-400">Check back shortly.</p>
    </div>
  );
}

export default async function CourseDetailsPage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const data = getCourseDetails(slug);
  if (!data) notFound();
  const { course, details } = data;

  const panels = {
    about: <AboutTab details={details} />,
    lessons: <LessonsTab details={details} />,
    reviews: <ComingSoon title="Reviews" />,
  };

  return (
    <>
      {/* The blue band is 957px at 1440; the video and enroll card start inside it at 416. */}
      <GridBackground className="xl:h-[957px]">
        <Header active="courses" />
        <Container className="pt-6 pb-12 lg:pt-[52px] xl:pb-0">
          <CourseHero course={course} details={details} />
        </Container>
      </GridBackground>

      <Container
        as="main"
        className="relative grid flex-1 content-start gap-10 pt-10 pb-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-x-8 xl:-mt-[541px] xl:grid-cols-[minmax(0,1fr)_412px] xl:gap-x-[63px] xl:gap-y-[124.5px] xl:pt-0"
      >
        <CoursePreview
          image={details.preview}
          title={details.title}
          className="lg:col-start-1 lg:row-start-1 xl:ml-[5px] xl:w-[calc(100%-5px)]"
        />
        <CourseSidebar
          course={course}
          details={details}
          className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start"
        />
        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <Suspense fallback={<CourseTabsView panels={panels} value="about" />}>
            <CourseTabs panels={panels} />
          </Suspense>
        </div>
      </Container>

      <Footer />
    </>
  );
}
