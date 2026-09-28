import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

/** 1200px content column centred inside the 1440px design frame. */
export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[120px]",
        className,
      )}
      {...props}
    />
  );
}
