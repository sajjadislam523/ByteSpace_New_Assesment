import { ChevronDownIcon, SearchIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Input } from "./Input";

type SearchBarProps = {
  defaultValue?: string;
  scopeLabel?: string;
  action?: string;
  className?: string;
};

/** "Find Your Next Course" search: white field + lime scope button. */
export function SearchBar({
  defaultValue,
  scopeLabel = "Courses",
  action = "/courses",
  className,
}: SearchBarProps) {
  return (
    <form
      role="search"
      action={action}
      className={cn("flex w-full max-w-[624px] flex-col gap-4 sm:flex-row sm:items-start", className)}
    >
      <Input
        type="search"
        name="q"
        aria-label="Search courses"
        placeholder="Search"
        defaultValue={defaultValue}
        bordered={false}
        icon={<SearchIcon className="shrink-0" />}
        wrapperClassName="sm:w-[461px] sm:shrink-0"
      />
      <Button type="button" rightIcon={<ChevronDownIcon />} aria-haspopup="listbox">
        {scopeLabel}
      </Button>
    </form>
  );
}
