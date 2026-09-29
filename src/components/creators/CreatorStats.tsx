"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type CreatorStatsProps = { products: number; followers: number };

const pill = "flex items-center gap-2 rounded-3xl bg-white px-6 py-3 backdrop-blur-[20px]";

export function CreatorStats({ products, followers }: CreatorStatsProps) {
  const [following, setFollowing] = useState(false);
  const count = followers + (following ? 1 : 0);

  return (
    <div className="flex flex-wrap items-start justify-between gap-4 text-label-l">
      <ul className="flex flex-wrap gap-4">
        <li className={pill}>
          <span className="text-primary">{products}</span>
          <span className="text-shuttle-950">{products === 1 ? "Product" : "Products"}</span>
        </li>
        <li className={pill}>
          <span aria-live="polite" className="text-primary">
            {count}
          </span>
          <span className="text-shuttle-950">{count === 1 ? "Follower" : "Followers"}</span>
        </li>
      </ul>
      <Button
        variant={following ? "outline" : "primary"}
        aria-pressed={following}
        onClick={() => setFollowing((value) => !value)}
      >
        {following ? "Following" : "Follow"}
      </Button>
    </div>
  );
}
