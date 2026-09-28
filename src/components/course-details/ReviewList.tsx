"use client";

import { useState } from "react";
import { StarIcon } from "@/components/icons";
import { Chip } from "@/components/ui/Chip";
import type { Review } from "@/data/course-details";
import { ReviewCard } from "./ReviewCard";

const ratings = [5, 4, 3, 2, 1];

export function ReviewList({ reviews }: { reviews: Review[] }) {
  const [filter, setFilter] = useState<number | null>(null);
  const visible = filter === null ? reviews : reviews.filter((review) => review.rating === filter);

  return (
    <>
      <div role="group" aria-label="Filter reviews by rating" className="flex flex-wrap items-start gap-4">
        <Chip active={filter === null} aria-pressed={filter === null} onClick={() => setFilter(null)}>
          All rating
        </Chip>
        {ratings.map((rating) => (
          <Chip
            key={rating}
            active={filter === rating}
            aria-pressed={filter === rating}
            aria-label={`${rating} star${rating === 1 ? "" : "s"}`}
            onClick={() => setFilter(rating)}
            className="gap-1"
          >
            <StarIcon />
            {rating}
          </Chip>
        ))}
      </div>

      {visible.length > 0 ? (
        <ul className="flex flex-col gap-6">
          {visible.map((review) => (
            <li key={review.name}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p
          role="status"
          className="rounded-3xl border border-dashed border-shuttle-200 px-6 py-10 text-center text-body-m leading-[1.6] text-shuttle-700"
        >
          No {filter}-star reviews yet.
        </p>
      )}
    </>
  );
}
