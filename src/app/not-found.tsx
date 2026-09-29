import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <GridBackground className="flex-1" style={{ backgroundImage: "none" }}>
        <Header />
        <Container
          as="main"
          className="flex flex-col items-center pt-6 pb-16 text-center lg:pt-10 xl:pb-[125px]"
        >
          <p
            aria-hidden="true"
            className="mb-[-0.248em] bg-[linear-gradient(180deg,#d4fb20_0%,rgb(212_251_32/0.96)_25%,rgb(212_251_32/0.81)_50.5%,rgb(212_251_32/0.61)_68%,rgb(255_255_255/0)_100%)] bg-clip-text font-heading text-[clamp(160px,33.34vw,480px)] leading-none font-semibold tracking-[-0.01em] whitespace-nowrap text-transparent select-none"
          >
            404
          </p>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid"
            style={{ backgroundColor: "transparent" }}
          />
          <h1 className="sr-only">Page not found</h1>
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="max-w-[935px] font-heading text-heading-l text-white max-lg:text-heading-m max-sm:text-[32px] max-sm:tracking-[-0.32px]">
              The page you are looking for doesn’t exist
            </h2>
            <p className="text-body-l text-shuttle-100 lg:whitespace-nowrap">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Button href="/">Back to Home</Button>
          </div>
        </Container>
      </GridBackground>
      <Footer />
    </>
  );
}
