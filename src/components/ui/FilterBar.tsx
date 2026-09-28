import { CategoryIcon, ChevronDownIcon, FilterIcon, SignalIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Button } from "./Button";

/** Filter / Level / Category buttons and the sort dropdown above the course grid. */
export function FilterBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-4", className)}>
      <div className="flex flex-wrap gap-4">
        <Button variant="outline" size="sm" leftIcon={<FilterIcon />}>
          Filter
        </Button>
        <Button variant="outline" size="sm" leftIcon={<SignalIcon />}>
          Level
        </Button>
        <Button variant="outline" size="sm" leftIcon={<CategoryIcon />}>
          Category
        </Button>
      </div>
      <Button
        variant="outline"
        size="sm"
        leftIcon={<ChevronDownIcon />}
        aria-haspopup="listbox"
      >
        Most relevant
      </Button>
    </div>
  );
}
