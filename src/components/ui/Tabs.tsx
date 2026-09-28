"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Chip } from "./Chip";

export type TabItem = {
  value: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  listClassName?: string;
};

/** About / Lessons / Reviews tabs from the course details page. */
export function Tabs({
  items,
  defaultValue,
  value,
  onValueChange,
  className,
  listClassName,
}: TabsProps) {
  const baseId = useId();
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const current = value ?? internal;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(next: string) {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = items.findIndex((item) => item.value === current);
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % items.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + items.length) % items.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = items.length - 1;
    else return;
    event.preventDefault();
    select(items[nextIndex].value);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <div
        role="tablist"
        onKeyDown={onKeyDown}
        className={cn("flex flex-wrap gap-4", listClassName)}
      >
        {items.map((item, index) => {
          const selected = item.value === current;
          return (
            <Chip
              key={item.value}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              id={`${baseId}-tab-${item.value}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.value}`}
              tabIndex={selected ? 0 : -1}
              active={selected}
              onClick={() => select(item.value)}
            >
              {item.label}
            </Chip>
          );
        })}
      </div>

      {items.map((item) =>
        item.value === current ? (
          <div
            key={item.value}
            role="tabpanel"
            id={`${baseId}-panel-${item.value}`}
            aria-labelledby={`${baseId}-tab-${item.value}`}
            tabIndex={0}
          >
            {item.content}
          </div>
        ) : null,
      )}
    </div>
  );
}
