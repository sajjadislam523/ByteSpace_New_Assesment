import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { AuthCollage } from "./AuthCollage";

type AuthLayoutProps = {
  /** Small intro title in the left column, e.g. "Sign in with ease". */
  title: string;
  description: string;
  /** The form, rendered inside the white card. */
  children: ReactNode;
};

/** Sign In / Register page: blue grid, logo-only header, intro + collage on the left, form card on the right. */
export function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <GridBackground className="min-h-screen xl:min-h-[1024px]">
      <Header minimal />
      <Container
        as="main"
        className="grid gap-10 pb-16 lg:grid-cols-[minmax(0,1fr)_579px] lg:gap-8 xl:gap-0 xl:pb-[120px]"
      >
        <div className="relative w-full max-lg:mx-auto max-lg:max-w-[579px] xl:ml-0.5">
          <div className="flex max-w-[475px] flex-col gap-4">
            <p className="font-heading text-heading-xs">{title}</p>
            <p className="text-body-m sm:text-body-l">{description}</p>
          </div>
          {/* Figma places the collage at 97, 305 in the frame: 25px left of the text, 185px down.
              Below 1440 it is scaled down so it never reaches the form card. */}
          <AuthCollage className="top-[185px] left-[-25px] hidden origin-top-left lg:block lg:max-xl:scale-[0.56] xl:max-[1440px]:scale-[0.84]" />
        </div>

        <div className="flex w-full flex-col rounded-3xl bg-white p-6 text-shuttle-950 max-lg:mx-auto max-lg:max-w-[579px] sm:p-10 xl:h-[784px] xl:px-[63px] xl:pt-[61px] xl:pb-10">
          {children}
        </div>
      </Container>
    </GridBackground>
  );
}
