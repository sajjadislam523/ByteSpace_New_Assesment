import { HeroSection } from "@/components/home/HeroSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main className="flex-1" />
      <Footer />
    </>
  );
}
