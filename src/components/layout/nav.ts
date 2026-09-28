export const mainNav = [
  { key: "home", label: "Home", href: "/" },
  { key: "courses", label: "Courses", href: "/courses" },
  { key: "creators", label: "Creators", href: "/creators" },
] as const;

export type NavKey = (typeof mainNav)[number]["key"];

export const authNav = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
] as const;
