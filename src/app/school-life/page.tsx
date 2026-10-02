import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { PlaceholderFrame } from "@/components/common/PlaceholderFrame";
import { AdmissionsCTA } from "@/components/common/AdmissionsCTA";
import { SCHOOL_LIFE_FACETS } from "@/data/schoolData";

export const metadata: Metadata = {
  title: "School Life | DRVA",
  description:
    "Discover school life at DRVA — creative arts, sports, co-curricular clubs, assemblies, and community moments that enrich our pupils' everyday experience.",
};

export default function SchoolLifePage() {
  const classroomFacet = SCHOOL_LIFE_FACETS.find((f) => f.id === "classroom-life")!;
  const artsFacet = SCHOOL_LIFE_FACETS.find((f) => f.id === "creativity-arts")!;
  const sportsFacet = SCHOOL_LIFE_FACETS.find((f) => f.id === "sports-movement")!;
  const clubsFacet = SCHOOL_LIFE_FACETS.find((f) => f.id === "clubs-activities")!;
  const eventsFacet = SCHOOL_LIFE_FACETS.find((f) => f.id === "celebrations-events")!;
  const tripsFacet = SCHOOL_LIFE_FACETS.find((f) => f.id === "trips-excursions")!;
  const communityFacet = SCHOOL_LIFE_FACETS.find((f) => f.id === "community-fellowship")!;

  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)]">
      <Header />

      <main className="flex-grow">
        {/* 1. Visual, Energetic Page Hero */}
        <PageHero
          breadcrumbLabel="School Life"
          eyebrow="SCHOOL LIFE"
          title="Learning happens everywhere."
          subtitle="A vibrant community of discovery, creativity, athletics, and fellowship."
          description="At DRVA, education extends far beyond textbooks and desks. Every day is filled with opportunities for friendship, creative expression, athletic movement, and shared community traditions."
          badge="STUDENT EXPERIENCE & CULTURE"
          variant="visual"
          rightSlot={
            <div className="p-4 bg-[var(--navy)] text-white border border-[var(--color-line-dark)] max-w-xs text-xs font-mono">
              <span className="text-[10px] uppercase tracking-widest text-[var(--blue-soft)] block mb-1">
                CO-CURRICULAR LIFE
              </span>
              <p className="text-slate-300 leading-relaxed text-xs">
                Clubs &bull; Athletics &bull; Arts &bull; Debates &bull; Assemblies &bull; Excursions
              </p>
            </div>
          }
        />

        {/* 2. Feature Moment 01: Large Featured Landscape — Classroom Life & Everyday Energy */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-10">
              <div className="lg:col-span-5 space-y-4">
                <SectionEyebrow text={classroomFacet.category} />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15]">
                  {classroomFacet.title}.
                </h2>
                <p className="font-serif italic text-lg text-[var(--muted)]">
                  {classroomFacet.tagline}
                </p>
                <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed font-normal">
                  {classroomFacet.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="light"
                    label={classroomFacet.placeholderLabel}
                    sublabel="Active classroom collaboration and instruction"
                    badge={classroomFacet.badge}
                    captionLines={[
                      "PURPOSEFUL CLASSROOMS.",
                      "ACTIVE LEARNING & MUTUAL RESPECT.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Paired Composition: Expressive Arts & Athletics in Juxtaposition */}
        <section className="py-20 sm:py-28 bg-[var(--ivory)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <SectionEyebrow text="EXPRESSION & PHYSICAL RESILIENCE" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                Creativity and movement.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Arts Side (Tall Portrait Frame) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="portrait"
                    theme="warm"
                    label={artsFacet.placeholderLabel}
                    sublabel="Music, drama, and fine arts workshop"
                    badge={artsFacet.badge}
                    captionLines={[
                      "CREATIVE CONFIDENCE.",
                      "MUSIC, DRAMA & FINE ARTS.",
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
                    label={sportsFacet.placeholderLabel}
                    sublabel="Athletics field and movement training"
                    badge={sportsFacet.badge}
                    captionLines={[
                      "SPORTSMANSHIP & HEALTH.",
                      "INTER-HOUSE ATHLETICS.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Editorial Photo-Grid: Clubs, Traditions & Excursions */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-8 border-b border-[var(--line)] items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow text="ENRICHED EXPERIENCES" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                  Clubs, events and excursions.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pl-6">
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Specialized afternoons, termly ceremonies, and guided field
                  trips expand our pupils&apos; perspectives and ignite curiosity.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Clubs */}
              <div className="p-6 bg-[var(--ivory)] border border-[var(--line)] flex flex-col justify-between">
                <div>
                  <div className="mb-5 p-1 bg-white border border-[var(--line)]">
                    <PlaceholderFrame
                      aspectRatio="square"
                      theme="light"
                      label={clubsFacet.placeholderLabel}
                      sublabel="Specialized clubs"
                      badge={clubsFacet.badge}
                      showOverlayMotif={false}
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--red)] font-semibold block mb-1">
                    {clubsFacet.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--navy)] mb-2">
                    {clubsFacet.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                    {clubsFacet.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)] text-xs font-mono text-[var(--muted)]">
                  Weekly Afternoon Workshops
                </div>
              </div>

              {/* Card 2: Celebrations & Events */}
              <div className="p-6 bg-[var(--ivory)] border border-[var(--line)] flex flex-col justify-between">
                <div>
                  <div className="mb-5 p-1 bg-white border border-[var(--line)]">
                    <PlaceholderFrame
                      aspectRatio="square"
                      theme="light"
                      label={eventsFacet.placeholderLabel}
                      sublabel="Assembly & stage events"
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
                  Annual Speech Day & Showcases
                </div>
              </div>

              {/* Card 3: Trips & Excursions */}
              <div className="p-6 bg-[var(--ivory)] border border-[var(--line)] flex flex-col justify-between">
                <div>
                  <div className="mb-5 p-1 bg-white border border-[var(--line)]">
                    <PlaceholderFrame
                      aspectRatio="square"
                      theme="light"
                      label={tripsFacet.placeholderLabel}
                      sublabel="Field trips & discovery"
                      badge={tripsFacet.badge}
                      showOverlayMotif={false}
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--red)] font-semibold block mb-1">
                    {tripsFacet.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--navy)] mb-2">
                    {tripsFacet.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                    {tripsFacet.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)] text-xs font-mono text-[var(--muted)]">
                  Supervised Educational Outings
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
                <SectionEyebrow text={communityFacet.category} theme="dark" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                  {communityFacet.title}.
                </h2>
                <p className="font-serif italic text-lg text-slate-300">
                  {communityFacet.tagline}
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {communityFacet.description}
                </p>
                <div className="pt-4 border-t border-slate-700 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                  <span>Motto: In God We Trust</span>
                  <span>&bull;</span>
                  <span>Parent-Teacher Partnership</span>
                  <span>&bull;</span>
                  <span>Community Service</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-2 sm:p-3 bg-[var(--navy-dark)] border border-slate-700 shadow-2xl">
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="dark"
                    label={communityFacet.placeholderLabel}
                    sublabel="Family open days and community fellowship"
                    badge={communityFacet.badge}
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
          italicHeading="Book an appointment for a campus walk."
          description="We welcome prospective families to observe our classes, explore our grounds, and discover the vibrant community waiting for your child."
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
