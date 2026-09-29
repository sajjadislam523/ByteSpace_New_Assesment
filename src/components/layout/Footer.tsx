import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

type FooterLink = { label: string; href?: string };

const linkColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/courses#categories" },
      { label: "Business", href: "/courses?category=Business" },
      { label: "IT", href: "/courses?category=IT" },
      { label: "Design", href: "/courses?category=Design" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/courses?category=Development" },
      { label: "Marketing", href: "/courses?category=Marketing" },
      { label: "Photography", href: "/courses?category=Photography" },
      { label: "Finance", href: "/courses?category=Finance" },
      { label: "Sport", href: "/courses?category=Sport" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/register?role=creator" },
      { label: "Affiliate Program" },
      { label: "Contact" },
      { label: "Help" },
      { label: "About" },
    ],
  },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export function Footer() {
  return (
    <footer className="border-t border-shuttle-200 bg-white text-shuttle-950">
      <Container className="flex flex-col gap-16 pt-14 pb-12 lg:gap-[130px] lg:pt-[70px]">
        <div className="flex flex-col gap-12 min-[1440px]:flex-row min-[1440px]:gap-[92px]">
          <div className="flex flex-col gap-10 lg:gap-[45px] min-[1440px]:w-[528px] min-[1440px]:shrink-0">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" className="self-start" />
              <p className="text-body-s">
                Stay Up to date with our latest features and releases by joining our
                newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <NewsletterForm />
              <p className="max-w-[504px] text-body-xs">
                By subscribing, you agree to our Privacy Policy and consent to receive
                updates from our company.
              </p>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 min-[1440px]:flex min-[1440px]:w-[580px] min-[1440px]:gap-10"
          >
            {linkColumns.map((column) => (
              <div key={column.title} className="min-[1440px]:w-[167px]">
                <h2 className="sr-only">{column.title}</h2>
                <ul className="flex flex-col gap-4 text-body-s min-[1440px]:pt-12">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <Link
                          href={link.href}
                          className="block whitespace-nowrap transition-colors hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span className="block whitespace-nowrap">{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-[22px] border-t border-shuttle-200 pt-[22px] text-body-xs md:flex-row md:items-start md:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((label) => (
              <li key={label} className="whitespace-nowrap">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
