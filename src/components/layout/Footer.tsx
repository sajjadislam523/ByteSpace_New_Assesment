import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

const linkColumns = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/courses#categories" },
      { label: "Business", href: "/courses?category=business" },
      { label: "IT", href: "/courses?category=it" },
      { label: "Design", href: "/courses?category=design" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/courses?category=development" },
      { label: "Marketing", href: "/courses?category=marketing" },
      { label: "Photography", href: "/courses?category=photography" },
      { label: "Finance", href: "/courses?category=finance" },
      { label: "Sport", href: "/courses?category=sport" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/creators/join" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-shuttle-200 bg-white text-shuttle-950">
      <Container className="flex flex-col gap-16 pt-14 pb-12 lg:gap-[130px] lg:pt-[70px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-10 lg:w-[528px] lg:shrink-0 lg:gap-[45px]">
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

          {/* Link columns — titles are visually hidden in the design */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:flex lg:w-[580px] lg:gap-10"
          >
            {linkColumns.map((column) => (
              <div key={column.title} className="lg:w-[167px]">
                <h2 className="sr-only">{column.title}</h2>
                <ul className="flex flex-col gap-4 text-body-s lg:pt-12">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block whitespace-nowrap transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
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
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="whitespace-nowrap transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
