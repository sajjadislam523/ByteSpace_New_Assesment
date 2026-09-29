import Image from "next/image";
import { cn } from "@/lib/cn";

type CoursePreviewProps = { image: string; title: string; className?: string };

export function CoursePreview({ image, title, className }: CoursePreviewProps) {
  return (
    <div
      className={cn(
        "relative aspect-[720/479] w-full overflow-hidden rounded-3xl bg-[#443131] [--focus-ring:white]",
        className,
      )}
    >
      <Image
        src={image}
        alt={`Preview of ${title}`}
        fill
        priority
        sizes="(min-width: 1280px) 720px, (min-width: 1024px) 55vw, 100vw"
        className="object-contain"
      />
      <button
        type="button"
        aria-label="Play course preview"
        className="absolute top-[42.59%] left-[45%] flex items-center justify-center rounded-3xl border border-black-700 bg-[rgb(61_61_61/0.24)] p-2 backdrop-blur-[20px] transition-transform hover:scale-105 sm:p-[15px]"
      >
        <Image
          src="/images/course/play.svg"
          alt=""
          width={72}
          height={72}
          priority
          unoptimized
          className="size-12 sm:size-[72px]"
        />
      </button>
    </div>
  );
}
