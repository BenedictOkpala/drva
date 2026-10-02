import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { PlaceholderFrame } from "@/components/common/PlaceholderFrame";
import { AdmissionsCTA } from "@/components/common/AdmissionsCTA";
import { SchoolCrest } from "@/components/brand/SchoolCrest";
import {
  SCHOOL_INFO,
  PROVISIONAL_MISSION_VISION,
  PROVISIONAL_VALUES,
} from "@/data/schoolData";

export const metadata: Metadata = {
  title: "About DRVA | Deeper Real Vision Academy",
  description:
    "Learn about Deeper Real Vision Academy (DRVA), our educational approach, foundational values, and commitment to purposeful learning from Creche through Junior Secondary (JSS3).",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)]">
      <Header />

      <main className="flex-grow">
        {/* 1. Quiet, Institutional Page Hero */}
        <PageHero
          breadcrumbLabel="About"
          eyebrow="ABOUT DRVA"
          title="Education with purpose."
          subtitle="A community where children are known, challenged, and guided with care."
          description="Deeper Real Vision Academy is an educational institution dedicated to intellectual curiosity, moral values, and personal growth across Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3)."
          badge="INSTITUTIONAL IDENTITY"
          variant="story"
          rightSlot={
            <div className="p-4 bg-[var(--ivory)] border border-[var(--line)] max-w-xs text-xs font-mono">
              <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] block mb-1">
                Educational Continuum
              </span>
              <span className="font-serif text-sm sm:text-base text-[var(--navy)] block mb-2 font-medium">
                Creche &bull; Nursery &bull; Primary &bull; Junior Secondary
              </span>
              <span className="text-[11px] text-[var(--ink)]/75 leading-relaxed block">
                Serving pupils from infant care through JSS3.
              </span>
            </div>
          }
        />

        {/* 2. Large Asymmetric School-Story Composition */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Large Photography Area */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  {/* Subtle architectural offset frame */}
                  <div className="absolute -inset-2 border border-[var(--line)]/60 pointer-events-none hidden sm:block" />

                  <PlaceholderFrame
                    aspectRatio="portrait"
                    theme="light"
                    label="Campus & Academic Setting"
                    sublabel="Archival School Setting Placeholder"
                    badge="CAMPUS LIFE"
                    captionLines={[
                      "PURPOSEFUL CLASSROOMS.",
                      "A CALM ENVIRONMENT FOR LEARNING.",
                    ]}
                  />
                </div>

                {/* Subtitle Under Image */}
                <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                  <span>DRVA FOUNDATION</span>
                  <span>ESTABLISHED WITH CARE</span>
                </div>
              </div>

              {/* Right Column: Multi-Paragraph Story */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <SectionEyebrow text="THE DRVA STORY" />

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15]">
                  Nurturing minds,{" "}
                  <span className="italic font-normal">shaping character.</span>
                </h2>

                <div className="inline-block px-3 py-1 bg-[var(--ivory)] border border-[var(--line)] text-[10px] font-mono tracking-wider uppercase text-[var(--muted)]">
                  Provisional Narrative &mdash; Official School History To Be Supplied
                </div>

                <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  <p>
                    Deeper Real Vision Academy was conceived with a clear
                    calling: to establish an educational sanctuary where academic
                    curiosity is nurtured alongside moral conviction. We reject
                    the notion of assembly-line schooling. Instead, we see every
                    child as a distinct individual with unique gifts, curiosities,
                    and potential.
                  </p>
                  <p>
                    From our earliest stages in Creche and Nursery through
                    Primary and Junior Secondary education, our teachers
                    prioritize genuine understanding over rote repetition. We
                    encourage an environment where children feel secure,
                    respected, and purposefully challenged to develop their
                    abilities.
                  </p>
                  <p>
                    Our underlying idea of <em>&ldquo;depth&rdquo;</em>—rooted in
                    our name, Deeper—guides how we teach. We encourage pupils to
                    look beneath the surface, ask thoughtful questions, and
                    develop the resilience required to master difficult concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Heritage & Motto Plaque (IN GOD WE TRUST + Future Crest Slot) */}
        <section className="py-16 sm:py-20 bg-[var(--ivory)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 lg:p-16 bg-[var(--paper)] border border-[var(--line)] relative">
              {/* Corner Framing Lines */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[var(--navy)]/30 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[var(--navy)]/30 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[var(--navy)]/30 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[var(--navy)]/30 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left: Official Crest & Seal */}
                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 border border-[var(--line)] bg-[var(--ivory)] text-center shadow-xs">
                  <div className="mb-3">
                    <SchoolCrest size="lg" priority />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] block">
                    Official Seal & Crest
                  </span>
                  <span className="text-xs text-[var(--navy)] font-serif mt-1 font-medium">
                    Kabusa, Abuja &bull; Est. 2016
                  </span>
                </div>

                {/* Right: Historical Motto Presentation */}
                <div className="md:col-span-8 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--red)] font-semibold block">
                    FOUNDATIONAL ANCHOR
                  </span>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-[var(--navy)]">
                    &ldquo;{SCHOOL_INFO.motto}&rdquo;
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed">
                    Our historical motto is not a decorative slogan; it is the
                    moral compass that directs our pastoral care, disciplinary
                    culture, and ethical expectations for teachers and pupils alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Mission & Vision — Split Editorial Composition */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <SectionEyebrow text="INSTITUTIONAL DIRECTION" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                Mission and vision.
              </h2>
              <div className="inline-block mt-3 px-3 py-1 bg-[var(--ivory)] border border-[var(--line)] text-[11px] font-mono tracking-wider uppercase text-[var(--muted)]">
                Provisional Framework &bull; Official Statements Awaiting Final Leadership Ratification
              </div>
            </div>

            {/* Split Composition: Contrasting Paper & Navy Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-[var(--line)]">
              {/* Mission (Warm Paper Side) */}
              <div className="p-8 sm:p-12 bg-[var(--paper)] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--line)]">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--line)]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--red)] font-semibold">
                      {"//"} 01 OUR MISSION
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[var(--muted)]">
                      PURPOSE & COMMITMENT
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--navy)] mb-4 leading-snug">
                    {PROVISIONAL_MISSION_VISION.mission.heading}
                  </h3>

                  <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed font-normal">
                    {PROVISIONAL_MISSION_VISION.mission.statement}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--line)]/60 text-[11px] font-mono text-[var(--muted)]">
                  {PROVISIONAL_MISSION_VISION.mission.disclaimer}
                </div>
              </div>

              {/* Vision (Deep Navy Side) */}
              <div className="p-8 sm:p-12 bg-[var(--navy)] text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-700">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                      {"//"} 02 OUR VISION
                    </span>
                    <span className="text-[10px] font-mono uppercase text-slate-400">
                      LONG-TERM ASPIRATION
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-100 mb-4 leading-snug">
                    {PROVISIONAL_MISSION_VISION.vision.heading}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                    {PROVISIONAL_MISSION_VISION.vision.statement}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-700 text-[11px] font-mono text-slate-400">
                  {PROVISIONAL_MISSION_VISION.vision.disclaimer}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Values as Editorial Principles */}
        <section className="py-20 sm:py-28 bg-[var(--ivory)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-8 border-b border-[var(--line)] items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow text="CORE PRINCIPLES" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                  Four enduring virtues.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pl-6">
                <p className="text-sm text-[var(--muted)] leading-relaxed font-normal">
                  These principles govern how our teachers guide, how our pupils
                  relate, and how our school community thrives together.
                </p>
              </div>
            </div>

            {/* 4 Large Numbered Statements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {PROVISIONAL_VALUES.map((value) => (
                <div
                  key={value.number}
                  className="flex flex-col pt-6 border-t border-[var(--line)]"
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="font-mono text-sm font-semibold tracking-widest text-[var(--red)]">
                      {"//"} {value.number}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[var(--muted)]">
                      EDITORIAL PRINCIPLE
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--navy)] tracking-tight mb-1">
                    {value.title}
                  </h3>

                  <p className="font-serif italic text-sm text-[var(--muted)] mb-3">
                    {value.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed font-normal">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Leadership Visual Composition */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Portrait Frame */}
              <div className="lg:col-span-5">
                <div className="relative max-w-sm mx-auto lg:max-w-none">
                  <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                    <PlaceholderFrame
                      aspectRatio="portrait"
                      theme="light"
                      label="Proprietor / Head of School"
                      sublabel="Official Portrait Slot"
                      badge="LEADERSHIP"
                      captionLines={[
                        "HEAD OF SCHOOL.",
                        "STEWARDSHIP & VISION.",
                      ]}
                    />
                  </div>
                </div>
              </div>

              {/* Message & Title Slot */}
              <div className="lg:col-span-7 space-y-6">
                <SectionEyebrow text="OFFICE OF THE HEADTEACHER" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15]">
                  Dedicated stewardship.
                </h2>

                <div className="inline-block px-3 py-1 bg-[var(--ivory)] border border-[var(--line)] text-[10px] font-mono tracking-wider uppercase text-[var(--muted)]">
                  Leadership Profile Slot &mdash; Awaiting Official Biographies
                </div>

                <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  <p>
                    Leadership at DRVA is committed to fostering academic
                    integrity, educator excellence, and holistic pastoral care.
                    Our administrative team works hand-in-hand with parents to
                    ensure every child receives steady support throughout their
                    school journey.
                  </p>
                  <p className="font-serif italic text-lg sm:text-xl text-[var(--navy)]">
                    &ldquo;Every child entrusted to our care deserves an education
                    that challenges their mind and strengthens their character.&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="font-serif text-base font-medium text-[var(--navy)] block">
                      [Proprietor / Head of School Name]
                    </span>
                    <span className="uppercase text-[var(--muted)]">
                      Head of School, DRVA
                    </span>
                  </div>
                  <span className="font-serif italic text-sm text-[var(--navy)]">
                    In God We Trust
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Admissions CTA */}
        <AdmissionsCTA
          eyebrow="JOIN OUR COMMUNITY"
          heading="Discover the DRVA experience."
          italicHeading="Visit our school and meet our team."
          description="Take the next step in your child's educational journey. Connect with our admissions team for information on enrollment across Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3)."
          primaryCtaText="Begin an enquiry"
          primaryCtaHref="/contact"
          secondaryCtaText="Explore academic stages"
          secondaryCtaHref="/academics"
        />
      </main>

      <Footer />
    </div>
  );
}
