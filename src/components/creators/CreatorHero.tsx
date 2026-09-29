import Image from "next/image";
import type { Creator } from "@/data/creators";
import { CreatorStats } from "./CreatorStats";

export function CreatorHero({ creator }: { creator: Creator }) {
  return (
    <div className="flex flex-col gap-10 text-shuttle-50 xl:ml-0.5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <Image
          src={creator.avatar}
          alt=""
          width={96}
          height={96}
          priority
          className="size-24 shrink-0 rounded-3xl object-cover"
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-start gap-2">
            <h1 className="font-heading text-heading-s max-sm:text-[28px] max-sm:tracking-[-0.28px]">
              {creator.name}
            </h1>
            <span className="rounded-3xl bg-accent px-6 py-2 text-label-m text-shuttle-950 backdrop-blur-[20px]">
              Creator
            </span>
          </div>
          <p className="text-body-l">{creator.tagline}</p>
        </div>
      </div>

      <div className="text-body-l">
        {creator.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <CreatorStats products={creator.products} followers={creator.followers} />
    </div>
  );
}
