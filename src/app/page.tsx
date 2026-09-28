import { DiscoverSection } from "@/components/home/DiscoverSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LearningPathsSection } from "@/components/home/LearningPathsSection";
import { LogosSection } from "@/components/home/LogosSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosSection />
      <DiscoverSection />
      <LearningPathsSection />
      <main className="flex-1" />
      <Footer />
    </>
  );
}
