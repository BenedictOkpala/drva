import type { Metadata } from "next";
import Link from "next/link";
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
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* 1. Page Hero */}
        <PageHero
          breadcrumbLabel="School Life"
          eyebrow="SCHOOL LIFE"
          title="Beyond the classroom."
          subtitle="A vibrant community of discovery, creativity, athletics, and fellowship."
          description={BEYOND_CLASSROOM_INTRO}
          badge="BEYOND THE CLASSROOM"
          variant="visual"
          rightSlot={
            <div className="p-4 bg-[#0B1D2F] text-white border border-[#24415F] max-w-xs text-xs">
              <span className="text-xs uppercase tracking-wider text-[var(--blue-soft)] font-bold block mb-1">
                COMPLEMENTARY ACTIVITIES
              </span>
              <p className="text-slate-300 leading-relaxed text-xs">
                Debate &bull; Literacy &bull; Quizzes &bull; Creative Arts &bull; Sports &bull; Celebrations
              </p>
            </div>
          }
        />

        {/* 2. Feature Moment 01: Debate & Public Speaking */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-4">
                <SectionEyebrow text={debateFacet.category} />
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15]">
                  {debateFacet.title}.
                </h2>
                <p className="font-heading font-medium text-lg text-[var(--muted)]">
                  {debateFacet.tagline}
                </p>
                <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed font-normal">
                  {debateFacet.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="p-2 sm:p-3 bg-white border border-[#E4E7EB] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="light"
                    label={debateFacet.label}
                    sublabel="Articulate presentation & peer discussion"
                    badge={debateFacet.badge}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Paired Composition: Creative Arts & Sports/Movement */}
        <section className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <SectionEyebrow text="EXPRESSION & PHYSICAL RESILIENCE" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                Creativity and movement.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Creative Arts Side */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-2 sm:p-3 bg-white border border-[#E4E7EB] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="portrait"
                    theme="light"
                    label={artsFacet.label}
                    sublabel="Visual art, melody, and craft activities"
                    badge={artsFacet.badge}
                  />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                    {artsFacet.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--navy)] mb-2">
                    {artsFacet.title}
                  </h3>
                  <p className="font-heading font-medium text-base text-[var(--muted)] mb-3">
                    {artsFacet.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed font-normal">
                    {artsFacet.description}
                  </p>
                </div>
              </div>

              {/* Sports Side */}
              <div className="lg:col-span-6 space-y-6 lg:pt-10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                    {sportsFacet.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--navy)] mb-2">
                    {sportsFacet.title}
                  </h3>
                  <p className="font-heading font-medium text-base text-[var(--muted)] mb-3">
                    {sportsFacet.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed font-normal">
                    {sportsFacet.description}
                  </p>
                </div>

                <div className="p-2 sm:p-3 bg-white border border-[#E4E7EB] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="light"
                    label={sportsFacet.label}
                    sublabel="Movement games and outdoor physical activity"
                    badge={sportsFacet.badge}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Photo-Grid: Reading, Quiz & Celebrations */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-8 border-b border-[#E4E7EB] items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow text="ENRICHED EXPERIENCES" />
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
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
              <div className="p-6 bg-[#F7F8FA] border border-[#E4E7EB] flex flex-col justify-between shadow-xs">
                <div>
                  <div className="mb-5 p-1 bg-white border border-[#E4E7EB]">
                    <PlaceholderFrame
                      aspectRatio="square"
                      theme="light"
                      label={readingFacet.label}
                      sublabel="Guided reading and literature"
                      badge={readingFacet.badge}
                    />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                    {readingFacet.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[var(--navy)] mb-2">
                    {readingFacet.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                    {readingFacet.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E4E7EB] text-xs font-semibold text-[var(--muted)]">
                  Language &amp; Comprehension
                </div>
              </div>

              {/* Card 2: Quiz & Academic Activities */}
              <div className="p-6 bg-[#F7F8FA] border border-[#E4E7EB] flex flex-col justify-between shadow-xs">
                <div>
                  <div className="mb-5 p-1 bg-white border border-[#E4E7EB]">
                    <PlaceholderFrame
                      aspectRatio="square"
                      theme="light"
                      label={quizFacet.label}
                      sublabel="Collaborative team quizzes and puzzles"
                      badge={quizFacet.badge}
                    />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                    {quizFacet.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[var(--navy)] mb-2">
                    {quizFacet.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                    {quizFacet.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E4E7EB] text-xs font-semibold text-[var(--muted)]">
                  Collaborative Inquiry
                </div>
              </div>

              {/* Card 3: School Events & Celebrations */}
              <div className="p-6 bg-[#F7F8FA] border border-[#E4E7EB] flex flex-col justify-between shadow-xs">
                <div>
                  <div className="mb-5 p-1 bg-white border border-[#E4E7EB]">
                    <PlaceholderFrame
                      aspectRatio="square"
                      theme="light"
                      label={eventsFacet.label}
                      sublabel="Term assemblies and milestones"
                      badge={eventsFacet.badge}
                    />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                    {eventsFacet.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[var(--navy)] mb-2">
                    {eventsFacet.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                    {eventsFacet.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E4E7EB] flex items-center justify-between text-xs">
                  <span className="text-[var(--muted)] font-semibold">Shared School Traditions</span>
                  <Link
                    href="/gallery"
                    className="text-[var(--navy)] hover:text-[var(--red)] font-bold transition-colors flex items-center gap-1"
                  >
                    <span>View Gallery</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Community & Fellowship */}
        <section className="py-20 sm:py-28 bg-[#0B1D2F] text-white border-b border-[#24415F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <SectionEyebrow text="COMMUNITY &amp; FELLOWSHIP" theme="dark" />
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                  A supportive school family.
                </h2>
                <p className="font-heading font-medium text-lg text-slate-300">
                  Cultivating lasting bonds between pupils, educators, and families.
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  At DRVA, school life is anchored in a caring community where every child
                  is recognized and encouraged. Together with parents, our educators guide
                  learners with patience, high expectations, and moral clarity.
                </p>
                <div className="pt-4 border-t border-slate-700 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                  <span>Motto: In God We Trust</span>
                  <span>&bull;</span>
                  <span>Parent-Teacher Partnership</span>
                  <span>&bull;</span>
                  <span>Sheretti, Abuja</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-2 sm:p-3 bg-slate-900/80 border border-slate-700 shadow-xl">
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="dark"
                    label="School Community &amp; Fellowship"
                    sublabel="Pupil growth and community gatherings"
                    badge="FELLOWSHIP"
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
