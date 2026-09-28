"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Chip } from "./Chip";

type CategoryChipsProps = {
  categories: readonly string[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

export function CategoryChips({
  categories,
  defaultValue,
  value,
  onValueChange,
  className,
}: CategoryChipsProps) {
  const [internal, setInternal] = useState(defaultValue ?? categories[0]);
  const current = value ?? internal;

  return (
    <div
      role="group"
      aria-label="Filter by category"
      className={cn(
        "-mx-5 flex gap-4 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 xl:justify-between xl:gap-0",
        className,
      )}
    >
      {categories.map((category) => (
        <Chip
          key={category}
          active={category === current}
          aria-pressed={category === current}
          onClick={() => {
            if (value === undefined) setInternal(category);
            onValueChange?.(category);
          }}
        >
          {category}
        </Chip>
      ))}
    </div>
  );
}
