import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "sm";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & { href?: undefined };
type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  // Electric Lime pill — "Continue", "Sign In", "Courses", newsletter button
  primary: "bg-accent text-shuttle-950 hover:bg-accent-hover",
  // White pill with grey border — filter bar, pagination arrows
  outline: "border border-shuttle-200 bg-white text-shuttle-950 hover:border-shuttle-400",
  ghost: "bg-transparent text-current hover:bg-shuttle-50",
};

const sizes: Record<Size, string> = {
  // 18px Label L, 24/12 padding -> 46px tall (48px with a 24px icon)
  md: "gap-2 text-label-l",
  // 16px Label M, 16/12 padding -> 48px tall with a 24px icon
  sm: "gap-1 text-label-m",
};

// Figma strokes sit inside the box, so bordered buttons lose 1px of padding.
const paddings: Record<Size, { plain: string; bordered: string }> = {
  md: { plain: "px-6 py-3", bordered: "px-[23px] py-[11px]" },
  sm: { plain: "px-4 py-3", bordered: "px-[15px] py-[11px]" },
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center rounded-3xl whitespace-nowrap transition-colors",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    paddings[size][variant === "outline" ? "bordered" : "plain"],
    className,
  );

  const content = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (typeof rest.href === "string") {
    return (
      <Link {...(rest as Omit<ButtonAsLink, keyof BaseProps>)} className={classes}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<ButtonAsButton, keyof BaseProps>;
  return (
    <button type={type} {...buttonProps} className={classes}>
      {content}
    </button>
  );
}
