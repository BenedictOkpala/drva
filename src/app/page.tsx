import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { LearningJourney } from "@/components/home/LearningJourney";
import { SchoolStory } from "@/components/home/SchoolStory";
import { LifeAtDRVA } from "@/components/home/LifeAtDRVA";
import { Milestone } from "@/components/home/Milestone";
import { VisitAdmissions } from "@/components/home/VisitAdmissions";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 1. Header with Official Crest */}
      <Header />

      <main className="flex-grow">
        {/* 2. White Hero (Authority typography + Substantial visual area) */}
        <Hero />

        {/* 3. Cool Neutral Introduction (#F7F8FA) */}
        <Introduction />

        {/* 4. White Connected Learning Journey (Stages 01–04) */}
        <LearningJourney />

        {/* 5. Navy School Story & Ethos (#102A43) */}
        <SchoolStory />

        {/* 6. White Life at DRVA (4 Independent Real Photographs Showcase) */}
        <LifeAtDRVA />

        {/* 7. Deep Navy 10-Year Milestone: 2016 — 2026 (#0B1D2F) */}
        <Milestone />

        {/* 8. Visit DRVA & Admissions Closing Pathway */}
        <VisitAdmissions />
      </main>

      {/* 9. Footer with Official Crest */}
      <Footer />
    </div>
  );
}
