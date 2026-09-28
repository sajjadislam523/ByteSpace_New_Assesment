import { useId, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
  icon?: ReactNode;
  error?: string;
  /** Border is used on white surfaces; the search bar on blue has none. */
  bordered?: boolean;
  wrapperClassName?: string;
};

/**
 * 52px text field from the Sign In / Register forms and the search bar.
 */
export function Input({
  label,
  icon,
  error,
  bordered = true,
  id,
  className,
  wrapperClassName,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-2", wrapperClassName)}>
      {label && (
        <label htmlFor={inputId} className="text-label-s text-shuttle-950">
          {label}
        </label>
      )}
      <div
        className={cn(
          "flex h-[52px] w-full items-center gap-2 bg-white px-6 text-shuttle-400 transition-colors",
          // Bordered = Sign In / Register fields (12px radius); borderless = the 24px search bar.
          bordered ? "rounded-xl border" : "rounded-3xl",
          bordered && (error ? "border-red-500" : "border-shuttle-100 focus-within:border-primary"),
        )}
      >
        {icon}
        <input
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={cn(
            "h-full w-full min-w-0 bg-transparent text-body-l text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none",
            className,
          )}
          {...props}
        />
      </div>
      {error && (
        <p id={errorId} className="text-body-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
