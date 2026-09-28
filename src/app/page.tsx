import type { Metadata } from "next";
import { CreatorToolsSection } from "@/components/home/CreatorToolsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { DiscoverSection } from "@/components/home/DiscoverSection";
import { GrowthBackdrop } from "@/components/home/GrowthBackdrop";
import { GrowthSection } from "@/components/home/GrowthSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LearningPathsSection } from "@/components/home/LearningPathsSection";
import { LogosSection } from "@/components/home/LogosSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { absolute: "ByteSpace — Online Courses from Independent Creators" },
  description:
    "Get access to hundreds of courses in design, development, business, marketing and more. Learn from ByteSpace creators, track your progress, or publish your own course.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main className="flex-1">
        <LogosSection />
        <DiscoverSection />
        <LearningPathsSection />
        <GrowthBackdrop>
          <GrowthSection />
          <CreatorToolsSection />
        </GrowthBackdrop>
        <CtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
