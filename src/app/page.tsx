import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

// Phase 1 shell — the full landing page is built in Phase 3.
export default function HomePage() {
  return (
    <>
      <GridBackground>
        <Header active="home" />
        <Container className="flex flex-col items-center gap-8 pt-6 pb-16 text-center lg:pt-11 lg:pb-[69px]">
          <h1 className="font-heading text-heading-s">Get Access to Hundreds Courses Available</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/courses">Browse courses</Button>
            <Button href="/playground" variant="outline">
              View components
            </Button>
          </div>
        </Container>
      </GridBackground>
      <main className="flex-1" />
      <Footer />
    </>
  );
}
