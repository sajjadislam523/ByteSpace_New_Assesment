"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { authNav, mainNav, type NavKey } from "./nav";

export function MobileNav({ active }: { active?: NavKey }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-10 items-center justify-center rounded-full text-shuttle-50 transition-colors hover:bg-white/10"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn(
          "absolute inset-x-5 top-[88px] z-50 flex-col gap-1 rounded-3xl bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,0.16)] [--focus-ring:var(--color-primary)] sm:inset-x-8",
          open ? "flex" : "hidden",
        )}
      >
        {mainNav.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={active === item.key ? "page" : undefined}
            className={cn(
              "rounded-2xl px-4 py-3 text-body-m text-shuttle-950 hover:bg-shuttle-50",
              active === item.key && "font-medium text-primary",
            )}
          >
            {item.label}
          </Link>
        ))}
        <hr className="my-1 border-shuttle-200" />
        {authNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-body-m text-shuttle-950 hover:bg-shuttle-50"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
