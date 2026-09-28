import type { CourseDetails } from "@/data/course-details";
import { ReviewList } from "./ReviewList";
import { ReviewStars } from "./ReviewStars";

const body = "text-body-m leading-[1.6] text-shuttle-700";

export function ReviewsTab({ details }: { details: CourseDetails }) {
  const total = details.ratingCounts.reduce((sum, row) => sum + row.count, 0);

  return (
    <div className="flex flex-col gap-6 text-shuttle-950">
      <h2 className="font-heading text-heading-xs">What Learners Are Saying</h2>
      <p className={`xl:max-w-[723px] ${body}`}>{details.reviewsIntro}</p>

      <section
        aria-label="Rating summary"
        className="flex flex-col gap-6 rounded-2xl border border-shuttle-200 bg-white p-6 backdrop-blur-[10px] sm:flex-row sm:items-center sm:p-10 xl:max-w-[723px]"
      >
        <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-accent p-6 backdrop-blur-[20px] sm:p-10">
          <p className="text-label-s">Ratings</p>
          <p className="font-heading text-heading-s">
            <span className="sr-only">Average rating </span>
            {details.averageRating}
          </p>
        </div>
        <ul className="flex min-w-0 flex-1 flex-col gap-1">
          {details.ratingCounts.map((row) => (
            <li key={row.stars} className="flex items-center gap-4">
              <div aria-hidden="true" className="h-2 min-w-0 flex-1 rounded-3xl bg-shuttle-100">
                <div
                  className="h-full rounded-3xl bg-accent"
                  style={{ width: `${total ? (row.count / total) * 100 : 0}%` }}
                />
              </div>
              <ReviewStars
                value={row.stars}
                label={`${row.stars} star${row.stars === 1 ? "" : "s"}`}
              />
              <span className={`w-10 shrink-0 text-right ${body}`}>
                {row.count}
                <span className="sr-only"> reviews</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <h2 className="font-heading text-heading-xs">Individual Reviews:</h2>
      <ReviewList reviews={details.reviewList} />
    </div>
  );
}
