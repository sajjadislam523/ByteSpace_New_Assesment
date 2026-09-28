import Link from "next/link";
import { ShoppingBagIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { authNav, mainNav, type NavKey } from "./nav";

type HeaderProps = {
  active?: NavKey;
  minimal?: boolean;
  className?: string;
};

export function Header({ active, minimal = false, className }: HeaderProps) {
  return (
    <header className={cn("relative z-20 text-shuttle-50", className)}>
      <Container className="grid h-[88px] grid-cols-[1fr_auto] items-center lg:h-[120px] lg:grid-cols-[1fr_auto_1fr] lg:items-start">
        <Logo tone="light" markOnly={minimal} className="lg:mt-[35px] xl:ml-0.5" />

        {!minimal && (
          <>
            <nav aria-label="Main" className="hidden lg:mt-[47px] lg:block">
              <ul className="flex items-start gap-6">
                {mainNav.map((item) => {
                  const isActive = item.key === active;
                  return (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "block transition-opacity hover:opacity-80",
                          isActive ? "text-label-m" : "text-body-m leading-[1.6]",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center justify-end gap-2 lg:mt-12 lg:items-start lg:gap-6">
              <ul className="hidden items-start gap-6 lg:flex">
                {authNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-body-m transition-opacity hover:opacity-80"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/cart"
                aria-label="Shopping bag"
                className="flex size-10 items-center justify-center transition-opacity hover:opacity-80 lg:size-6"
              >
                <ShoppingBagIcon />
              </Link>
              <MobileNav active={active} />
            </div>
          </>
        )}
      </Container>
    </header>
  );
}
