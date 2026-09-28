import { CreatorToolsSection } from "@/components/home/CreatorToolsSection";
import { DiscoverSection } from "@/components/home/DiscoverSection";
import { GrowthBackdrop } from "@/components/home/GrowthBackdrop";
import { GrowthSection } from "@/components/home/GrowthSection";
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
      <GrowthBackdrop>
        <GrowthSection />
        <CreatorToolsSection />
      </GrowthBackdrop>
      <main className="flex-1" />
      <Footer />
    </>
  );
}
