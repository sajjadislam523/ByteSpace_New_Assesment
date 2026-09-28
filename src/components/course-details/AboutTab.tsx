import Image from "next/image";
import type { CourseDetails } from "@/data/course-details";

// Body M on this page uses a 1.6 line height; paragraphs are separated by one empty line.
const body = "text-body-m leading-[1.6] text-shuttle-700";

/** About tab: description, sneak-peek gallery and key points. */
export function AboutTab({ details }: { details: CourseDetails }) {
  return (
    <div className="flex flex-col gap-6 text-shuttle-950">
      <h2 className="font-heading text-heading-xs">Description</h2>
      <div className={`flex flex-col gap-[1.6em] xl:max-w-[723px] ${body}`}>
        {details.description.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <h2 className="font-heading text-heading-xs">Sneak Peak</h2>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:gap-[19.33px]">
        {details.sneakPeek.map((image) => (
          <li
            key={image.src}
            className="relative aspect-[167/125] overflow-hidden rounded-2xl bg-[#d9d9d9]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 167px, (min-width: 640px) 22vw, 45vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <h2 className="font-heading text-heading-xs">Key Points</h2>
      <ul className="flex flex-col gap-3">
        {details.keyPoints.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <Image
              src="/images/home/growth/check-circle.svg"
              alt=""
              width={24}
              height={24}
              unoptimized
            />
            <span className={body}>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
