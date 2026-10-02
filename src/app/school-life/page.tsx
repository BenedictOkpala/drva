import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { PlaceholderFrame } from "@/components/common/PlaceholderFrame";
import { AdmissionsCTA } from "@/components/common/AdmissionsCTA";
import {
  BEYOND_CLASSROOM_INTRO,
  SCHOOL_LIFE_ACTIVITIES,
} from "@/data/schoolData";

export const metadata: Metadata = {
  title: "School Life | DRVA",
  description:
    "Discover school life at DRVA in Sheretti, Abuja — debate, literacy, quiz, creative arts, physical activity, and community celebrations.",
};

export default function SchoolLifePage() {
  const debateFacet = SCHOOL_LIFE_ACTIVITIES.find((f) => f.id === "debate-public-speaking")!;
  const readingFacet = SCHOOL_LIFE_ACTIVITIES.find((f) => f.id === "reading-literacy")!;
  const quizFacet = SCHOOL_LIFE_ACTIVITIES.find((f) => f.id === "quiz-academic-activities")!;
  const artsFacet = SCHOOL_LIFE_ACTIVITIES.find((f) => f.id === "creative-arts")!;
  const sportsFacet = SCHOOL_LIFE_ACTIVITIES.find((f) => f.id === "sports-physical-activity")!;
  const eventsFacet = SCHOOL_LIFE_ACTIVITIES.find((f) => f.id === "school-events-celebrations")!;

  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)]">
      <Header />

      <main className="flex-grow">
        {/* 1. Visual, Energetic Page Hero */}
        <PageHero
          breadcrumbLabel="School Life"
          eyebrow="SCHOOL LIFE"
          title="Beyond the classroom."
          subtitle="A vibrant community of discovery, creativity, athletics, and fellowship."
          description={BEYOND_CLASSROOM_INTRO}
          badge="BEYOND THE CLASSROOM"
          variant="visual"
          rightSlot={
            <div className="p-4 bg-[var(--navy)] text-white border border-[var(--color-line-dark)] max-w-xs text-xs font-mono">
              <span className="text-[10px] uppercase tracking-widest text-[var(--blue-soft)] block mb-1">
                COMPLEMENTARY ACTIVITIES
              </span>
              <p className="text-slate-300 leading-relaxed text-xs">
                Debate &bull; Literacy &bull; Quizzes &bull; Creative Arts &bull; Sports &bull; Celebrations
              </p>
            </div>
          }
        />

        {/* 2. Feature Moment 01: Debate & Public Speaking */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-4">
                <SectionEyebrow text={debateFacet.category} />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15]">
                  {debateFacet.title}.
                </h2>
                <p className="font-serif italic text-lg text-[var(--muted)]">
                  {debateFacet.tagline}
                </p>
                <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed font-normal">
                  {debateFacet.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="light"
                    label={debateFacet.label}
                    sublabel="Articulate presentation & peer discussion"
                    badge={debateFacet.badge}
                    captionLines={[
                      "DEBATE & EXPRESSION.",
                      "CONFIDENT COMMUNICATION & INQUIRY.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Paired Composition: Creative Arts & Sports/Movement */}
        <section className="py-20 sm:py-28 bg-[var(--ivory)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <SectionEyebrow text="EXPRESSION & PHYSICAL RESILIENCE" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                Creativity and movement.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Creative Arts Side (Tall Portrait Frame) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="portrait"
                    theme="warm"
                    label={artsFacet.label}
                    sublabel="Visual art, melody, and craft activities"
                    badge={artsFacet.badge}
                    captionLines={[
                      "CREATIVE PRACTICE.",
                      "DRAWING, CRAFT & MUSIC.",
                    ]}
                  />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--red)] font-semibold block mb-1">
                    {artsFacet.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--navy)] mb-2">
                    {artsFacet.title}
                  </h3>
                  <p className="font-serif italic text-base text-[var(--muted)] mb-3">
                    {artsFacet.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed font-normal">
                    {artsFacet.description}
                  </p>
                </div>
              </div>

              {/* Sports Side (Wide Athletic Frame) */}
              <div className="lg:col-span-6 space-y-6 lg:pt-10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--red)] font-semibold block mb-1">
                    {sportsFacet.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--navy)] mb-2">
                    {sportsFacet.title}
                  </h3>
                  <p className="font-serif italic text-base text-[var(--muted)] mb-3">
                    {sportsFacet.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed font-normal">
                    {sportsFacet.description}
                  </p>
                </div>

                <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="light"
                    label={sportsFacet.label}
                    sublabel="Movement games and outdoor physical activity"
                    badge={sportsFacet.badge}
                    captionLines={[
                      "SPORTSMANSHIP & HEALTH.",
                      "ACTIVE PHYSICAL EXERCISE.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Editorial Photo-Grid: Reading, Quiz & Celebrations */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-8 border-b border-[var(--line)] items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow text="ENRICHED EXPERIENCES" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                  Literacy, quizzes and celebrations.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pl-6">
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Carefully chosen activities expand our pupils&apos; perspectives,
                  deepen academic curiosity, and celebrate steady growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Reading & Literacy */}
              <div className="p-6 bg-[var(--ivory)] border border-[var(--line)] flex flex-col justify-between">
                <div>
                  <div className="mb-5 p-1 bg-white border border-[var(--line)]">
                    <PlaceholderFrame
                      aspectRatio="square"
                      theme="light"
                      label={readingFacet.label}
                      sublabel="Guided reading and literature"
                      badge={readingFacet.badge}
                      showOverlayMotif={false}
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--red)] font-semibold block mb-1">
                    {readingFacet.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--navy)] mb-2">
                    {readingFacet.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                    {readingFacet.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)] text-xs font-mono text-[var(--muted)]">
                  Language & Comprehension
                </div>
              </div>

              {/* Card 2: Quiz & Academic Activities */}
              <div className="p-6 bg-[var(--ivory)] border border-[var(--line)] flex flex-col justify-between">
                <div>
                  <div className="mb-5 p-1 bg-white border border-[var(--line)]">
                    <PlaceholderFrame
                      aspectRatio="square"
                      theme="light"
                      label={quizFacet.label}
                      sublabel="Collaborative team quizzes and puzzles"
                      badge={quizFacet.badge}
                      showOverlayMotif={false}
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--red)] font-semibold block mb-1">
                    {quizFacet.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--navy)] mb-2">
                    {quizFacet.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                    {quizFacet.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)] text-xs font-mono text-[var(--muted)]">
                  Collaborative Inquiry
                </div>
              </div>

              {/* Card 3: School Events & Celebrations */}
              <div className="p-6 bg-[var(--ivory)] border border-[var(--line)] flex flex-col justify-between">
                <div>
                  <div className="mb-5 p-1 bg-white border border-[var(--line)]">
                    <PlaceholderFrame
                      aspectRatio="square"
                      theme="light"
                      label={eventsFacet.label}
                      sublabel="Term assemblies and milestones"
                      badge={eventsFacet.badge}
                      showOverlayMotif={false}
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--red)] font-semibold block mb-1">
                    {eventsFacet.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--navy)] mb-2">
                    {eventsFacet.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                    {eventsFacet.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)] text-xs font-mono text-[var(--muted)]">
                  Shared School Traditions
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Full-Width Navy Feature: Community & Fellowship */}
        <section className="py-20 sm:py-28 bg-[var(--navy)] text-white border-b border-[var(--color-line-dark)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <SectionEyebrow text="COMMUNITY & FELLOWSHIP" theme="dark" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                  A supportive school family.
                </h2>
                <p className="font-serif italic text-lg text-slate-300">
                  Cultivating lasting bonds between pupils, educators, and families.
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  At DRVA, school life is anchored in a caring community where every child
                  is recognized and encouraged. Together with parents, our educators guide
                  learners with patience, high expectations, and moral clarity.
                </p>
                <div className="pt-4 border-t border-slate-700 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                  <span>Motto: In God We Trust</span>
                  <span>&bull;</span>
                  <span>Parent-Teacher Partnership</span>
                  <span>&bull;</span>
                  <span>Sheretti, Abuja</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-2 sm:p-3 bg-[var(--navy-dark)] border border-slate-700 shadow-2xl">
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="dark"
                    label="School Community & Fellowship"
                    sublabel="Pupil growth and community gatherings"
                    badge="FELLOWSHIP"
                    captionLines={[
                      "COMMUNITY & BELONGING.",
                      "PARTNERSHIP IN EDUCATION.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Admissions CTA */}
        <AdmissionsCTA
          eyebrow="EXPERIENCE DRVA"
          heading="Come and see school life in action."
          italicHeading="Visit our campus in Sheretti, Abuja."
          description="We welcome prospective families to observe our classes, meet our team, and discover the supportive community waiting for your child."
          primaryCtaText="Begin an enquiry"
          primaryCtaHref="/contact"
          secondaryCtaText="Learn about admissions"
          secondaryCtaHref="/admissions"
        />
      </main>

      <Footer />
    </div>
  );
}
