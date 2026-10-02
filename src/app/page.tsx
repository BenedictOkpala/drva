import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { LearningJourney } from "@/components/home/LearningJourney";
import { Milestone } from "@/components/home/Milestone";
import { SchoolLife } from "@/components/home/SchoolLife";
import { WhyDRVA } from "@/components/home/WhyDRVA";
import { SchoolMessage } from "@/components/home/SchoolMessage";
import { NewsPreview } from "@/components/home/NewsPreview";
import { VisitAdmissions } from "@/components/home/VisitAdmissions";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)]">
      {/* 1. Header with Official Crest */}
      <Header />

      <main className="flex-grow">
        {/* 2. Photographic Authority Hero */}
        <Hero />

        {/* 3. Editorial Introduction (Est. October 2016, Sheretti, Abuja) */}
        <Introduction />

        {/* 4. Connected Learning Journey (Stages 01–04) */}
        <LearningJourney />

        {/* 5. Ten-Year Milestone Commemoration (2016 — 2026) */}
        <Milestone />

        {/* 6. Photographic School Life */}
        <SchoolLife />

        {/* 7. Why DRVA — Four Foundational Pillars */}
        <WhyDRVA />

        {/* 8. Message from the School Leadership */}
        <SchoolMessage />

        {/* 9. News & Stories Editorial Preview */}
        <NewsPreview />

        {/* 10. Visit DRVA & Admissions Ending Composition */}
        <VisitAdmissions />
      </main>

      {/* 11. Footer with Official Crest */}
      <Footer />
    </div>
  );
}
