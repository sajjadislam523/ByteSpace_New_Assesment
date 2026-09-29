import Image from "next/image";
import Link from "next/link";
import type { Creator } from "@/data/creators";

const pill = "flex items-center gap-1 rounded-3xl bg-shuttle-50 px-4 py-2 text-label-m";

type CreatorCardProps = { creator: Creator; priority?: boolean };

export function CreatorCard({ creator, priority = false }: CreatorCardProps) {
  return (
    <article className="relative flex h-full flex-col gap-6 rounded-3xl border border-shuttle-200 bg-white p-6 transition-colors hover:border-shuttle-400">
      <div className="flex items-center gap-4">
        <Image
          src={creator.avatar}
          alt=""
          width={72}
          height={72}
          priority={priority}
          className="size-[72px] shrink-0 rounded-3xl object-cover"
        />
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-heading text-heading-xs text-shuttle-950">
            <Link
              href={`/creators/${creator.slug}`}
              className="after:absolute after:inset-0 after:rounded-3xl"
            >
              {creator.name}
            </Link>
          </h2>
          <span className="rounded-3xl bg-accent px-3 py-1 text-label-s text-shuttle-950">
            Creator
          </span>
        </div>
      </div>

      <p className="flex-1 text-body-m leading-[1.6] text-shuttle-700">{creator.tagline}</p>

      <ul className="flex flex-wrap gap-3">
        <li className={pill}>
          <span className="text-primary">{creator.products}</span>
          <span className="text-shuttle-950">Products</span>
        </li>
        <li className={pill}>
          <span className="text-primary">{creator.followers}</span>
          <span className="text-shuttle-950">Followers</span>
        </li>
      </ul>
    </article>
  );
}
