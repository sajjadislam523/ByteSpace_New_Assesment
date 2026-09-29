"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  visiblePages?: number;
  className?: string;
};

function getPageWindow(page: number, total: number, visible: number) {
  const size = Math.min(visible, total);
  let start = Math.max(1, page - Math.floor(size / 2));
  start = Math.min(start, total - size + 1);
  return Array.from({ length: size }, (_, i) => start + i);
}

const arrowClasses =
  "flex h-12 w-14 items-center justify-center rounded-3xl border border-shuttle-200 bg-white text-shuttle-950 transition-colors hover:border-shuttle-400 disabled:pointer-events-none disabled:opacity-40";

export function Pagination({
  page,
  totalPages,
  onPageChange,
  visiblePages = 5,
  className,
}: PaginationProps) {
  if (totalPages < 1) return null;
  const pages = getPageWindow(page, totalPages, visiblePages);

  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-6", className)}>
      <button
        type="button"
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className={arrowClasses}
      >
        <ChevronLeftIcon />
      </button>

      <ul className="flex items-center gap-6">
        {pages.map((number) => {
          const current = number === page;
          return (
            <li key={number}>
              <button
                type="button"
                aria-label={`Page ${number}`}
                aria-current={current ? "page" : undefined}
                onClick={() => onPageChange(number)}
                className={cn(
                  "text-body-l transition-colors",
                  current
                    ? "font-medium text-primary underline-offset-4 hover:underline"
                    : "text-shuttle-950 hover:text-primary",
                )}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        aria-label="Next page"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className={arrowClasses}
      >
        <ChevronRightIcon />
      </button>
    </nav>
  );
}
