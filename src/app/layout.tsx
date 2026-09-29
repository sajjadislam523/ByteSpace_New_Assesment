import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { clashDisplay, poppins, satoshi } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ByteSpace — Online Courses",
    template: "%s | ByteSpace",
  },
  description:
    "Get access to hundreds of courses. Discover your passion, build your skills and learn from creators on ByteSpace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
