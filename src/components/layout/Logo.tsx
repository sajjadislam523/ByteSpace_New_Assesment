import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "light" | "dark";
  markOnly?: boolean;
  className?: string;
};

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      width="28.875"
      height="31.5"
      viewBox="0 0 29 32"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
        fill="#D4FB20"
      />
      <path
        d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
        fill="#D4FB20"
      />
      <path
        d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
        fill="#D4FB20"
      />
    </svg>
  );
}

export function Logo({ tone = "light", markOnly = false, className }: LogoProps) {
  if (markOnly) {
    return (
      <Link
        href="/"
        aria-label="ByteSpace home"
        className={cn("inline-flex w-fit transition-opacity hover:opacity-80", className)}
      >
        <LogoMark />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn(
        "inline-flex items-start gap-[8.125px] transition-opacity hover:opacity-80",
        className,
      )}
    >
      <LogoMark />
      <span
        className={cn(
          "mt-[7px] font-display text-2xl leading-[30px] font-bold",
          tone === "light" ? "text-shuttle-50" : "text-shuttle-950",
        )}
      >
        ByteSpace
      </span>
    </Link>
  );
}
