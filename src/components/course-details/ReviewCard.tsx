import Image from "next/image";
import type { Review } from "@/data/course-details";
import { ReviewStars } from "./ReviewStars";

const body = "text-body-m leading-[1.6] text-shuttle-700";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-shuttle-200 p-6 sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-start gap-3">
            <Image
              src={review.avatar}
              alt=""
              width={52}
              height={52}
              className="size-[52px] shrink-0 rounded-full object-cover"
            />
            <div>
              <h3 className="text-label-l text-shuttle-950">{review.name}</h3>
              <p className={body}>{review.role}</p>
            </div>
          </div>
          <ReviewStars value={review.rating} />
        </div>
        <p className={`shrink-0 ${body}`}>{review.date}</p>
      </div>
      <p className={body}>{review.text}</p>
    </article>
  );
}
