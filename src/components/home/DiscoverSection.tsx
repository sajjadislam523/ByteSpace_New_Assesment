"use client";

import Link from "next/link";
import { useState } from "react";
import { CourseGrid } from "@/components/course/CourseGrid";
import { Container } from "@/components/layout/Container";
import { Chip } from "@/components/ui/Chip";
import { courses } from "@/data/courses";
import { discoverChipRows } from "@/data/home";

const featured = courses.slice(0, 6).map((course) => ({ id: course.slug, course }));

export function DiscoverSection() {
  const [category, setCategory] = useState("Featured");
  const visible =
    category === "Featured" ? featured : featured.filter(({ course }) => course.category === category);

  return (
    <section aria-labelledby="discover-heading" className="py-12 lg:py-18">
      <Container>
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2
            id="discover-heading"
            className="max-w-[588px] font-heading text-heading-s text-[#040819] sm:text-heading-m"
          >
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="text-body-m text-shuttle-400 sm:text-body-l">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        {/* Three centred rows at lg+, one horizontally scrolling row below. */}
        <div
          role="group"
          aria-label="Filter courses by category"
          className="-mx-5 mt-8 flex items-center gap-4 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-[42px] lg:flex-col lg:gap-[21px] lg:overflow-visible lg:px-0"
        >
          {discoverChipRows.map((row, rowIndex) => (
            <div
              key={row[0]}
              className="flex items-center gap-4 max-lg:contents lg:flex-wrap lg:justify-center"
            >
              {row.map((chip) => (
                <Chip
                  key={chip}
                  active={chip === category}
                  aria-pressed={chip === category}
                  onClick={() => setCategory(chip)}
                >
                  {chip}
                </Chip>
              ))}
              {rowIndex === discoverChipRows.length - 1 && (
                <Link
                  href="/courses"
                  className="shrink-0 text-label-m whitespace-nowrap text-primary hover:underline"
                >
                  + More
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-[77px]">
          <CourseGrid entries={visible} />
        </div>
      </Container>
    </section>
  );
}
