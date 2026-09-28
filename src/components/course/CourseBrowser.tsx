"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { CategoryChips } from "@/components/ui/CategoryChips";
import { FilterBar } from "@/components/ui/FilterBar";
import { Pagination } from "@/components/ui/Pagination";
import { categories, COURSES_PER_PAGE, filterCatalog } from "@/data/courses";
import { CourseGrid } from "./CourseGrid";

type CourseBrowserProps = {
  initialCategory?: string;
  initialPage?: number;
  query?: string;
};

export function CourseBrowser({
  initialCategory = "Featured",
  initialPage = 1,
  query,
}: CourseBrowserProps) {
  const router = useRouter();
  const pathname = usePathname();
  const gridRef = useRef<HTMLDivElement>(null);

  const [category, setCategory] = useState(initialCategory);
  const [page, setPage] = useState(initialPage);

  const results = useMemo(() => filterCatalog({ category, query }), [category, query]);
  const totalPages = Math.max(1, Math.ceil(results.length / COURSES_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = results.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE,
  );

  function syncUrl(next: { category: string; page: number }) {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (next.category !== "Featured") params.set("category", next.category);
    if (next.page > 1) params.set("page", String(next.page));
    const search = params.toString();
    router.replace(search ? `${pathname}?${search}` : pathname, { scroll: false });
  }

  function changeCategory(next: string) {
    setCategory(next);
    setPage(1);
    syncUrl({ category: next, page: 1 });
  }

  function changePage(next: number) {
    setPage(next);
    syncUrl({ category, page: next });
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <FilterBar className="mt-12 lg:mt-[72px]" />
      <CategoryChips
        categories={categories}
        value={category}
        onValueChange={changeCategory}
        className="mt-8"
      />

      <div ref={gridRef} className="scroll-mt-8 pt-12 lg:pt-[77px]">
        {query && (
          <p className="mb-8 text-body-m text-shuttle-700">
            {results.length} {results.length === 1 ? "result" : "results"} for “{query}”
          </p>
        )}

        <CourseGrid entries={visible} />
      </div>

      {visible.length > 0 && (
        <div className="mt-12 flex justify-center lg:mt-[72px]">
          <Pagination page={currentPage} totalPages={totalPages} onPageChange={changePage} />
        </div>
      )}
    </>
  );
}
