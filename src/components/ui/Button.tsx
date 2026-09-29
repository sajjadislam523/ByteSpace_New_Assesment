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

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary: "bg-accent text-shuttle-950 hover:bg-accent-hover",
  outline: "border border-shuttle-200 bg-white text-shuttle-950 hover:border-shuttle-400",
  ghost: "bg-transparent text-current hover:bg-shuttle-50",
};

const sizes: Record<Size, string> = {
  md: "gap-2 text-label-l",
  sm: "gap-1 text-label-m",
};

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
