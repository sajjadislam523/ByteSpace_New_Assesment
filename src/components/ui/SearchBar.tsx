import { ChevronDownIcon, SearchIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Input } from "./Input";

type SearchBarProps = {
  defaultValue?: string;
  placeholder?: string;
  scopeLabel?: string;
  /** Replaces the scope dropdown with a plain submit button (home hero). */
  submitLabel?: string;
  action?: string;
  className?: string;
};

/** White search field + lime button: scope dropdown on /courses, submit button on the home hero. */
export function SearchBar({
  defaultValue,
  placeholder = "Search",
  scopeLabel = "Courses",
  submitLabel,
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
        placeholder={placeholder}
        defaultValue={defaultValue}
        bordered={false}
        icon={<SearchIcon className="shrink-0" />}
        wrapperClassName="sm:w-[461px] sm:shrink-0"
      />
      {submitLabel ? (
        <Button type="submit">{submitLabel}</Button>
      ) : (
        <Button type="button" rightIcon={<ChevronDownIcon />} aria-haspopup="listbox">
          {scopeLabel}
        </Button>
      )}
    </form>
  );
}
