import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { AdmissionsCTA } from "@/components/common/AdmissionsCTA";
import { SchoolCrest } from "@/components/brand/SchoolCrest";
import { SchoolAnthemSection } from "@/components/about/SchoolAnthemSection";
import {
  SCHOOL_INFO,
  SCHOOL_STORY,
  SCHOOL_MISSION_VISION,
  SCHOOL_VALUES,
} from "@/data/schoolData";

export const metadata: Metadata = {
  title: "About DRVA | Deeper Real Vision Academy",
  description:
    "Learn about Deeper Real Vision Academy (DRVA) in Sheretti, Abuja. Our educational approach, foundational values, leadership, and commitment to purposeful learning from Creche through Junior Secondary (JSS3).",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* 1. Page Hero */}
        <PageHero
          breadcrumbLabel="About"
          eyebrow="ABOUT DRVA"
          title="Education with purpose."
          subtitle="A community where children are known, challenged, and guided with care."
          description="Deeper Real Vision Academy is an educational institution in Sheretti, Abuja dedicated to intellectual curiosity, moral values, and personal growth across Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3)."
          variant="story"
          rightSlot={
            <div className="p-4 bg-[#F7F8FA] border border-[#E4E7EB] max-w-xs text-xs">
              <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold block mb-1">
                Educational Stages
              </span>
              <span className="font-heading text-sm sm:text-base text-[var(--navy)] block mb-2 font-bold">
                Creche &bull; Nursery &bull; Primary &bull; Junior Secondary
              </span>
              <span className="text-xs text-[var(--ink)]/75 leading-relaxed block font-normal">
                Serving pupils from infant care through JSS3 in Sheretti, Abuja.
              </span>
            </div>
          }
        />

        {/* 2. Our Story Composition */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Institutional Profile & Fact Summary */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="p-6 sm:p-8 bg-[#F7F8FA] border border-[#E4E7EB] space-y-6 shadow-xs">
                  <div className="flex items-center gap-4 pb-5 border-b border-[#E4E7EB]">
                    <SchoolCrest size="sm" priority />
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-[var(--red)] block">
                        INSTITUTIONAL FOUNDATION
                      </span>
                      <span className="font-heading text-base font-bold text-[var(--navy)]">
                        Sheretti, Abuja
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] block mb-1">
                        ESTABLISHED
                      </span>
                      <span className="font-heading text-sm font-bold text-[var(--navy)]">
                        2015
                      </span>
                    </div>

                    <div className="pt-3 border-t border-[#E4E7EB]">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] block mb-1">
                        CURRENT LEVELS
                      </span>
                      <span className="font-heading text-sm font-bold text-[var(--navy)]">
                        Creche &bull; Nursery &bull; Primary &bull; Junior Secondary (JSS1&ndash;JSS3)
                      </span>
                    </div>

                    <div className="pt-3 border-t border-[#E4E7EB]">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] block mb-1">
                        FUTURE EXPANSION
                      </span>
                      <p className="text-xs text-[var(--ink)]/80 leading-relaxed font-normal">
                        Looking ahead, DRVA plans to expand into Senior Secondary School, continuing the learning journey through an additional stage of education.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E4E7EB]">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] block mb-1">
                        CAMPUS LOCATION
                      </span>
                      <p className="text-xs text-[var(--ink)]/80 leading-relaxed font-normal">
                        Behind St. Anthony Catholic Church, Sheretti, Abuja.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E4E7EB] flex items-center justify-between text-xs text-[var(--muted)]">
                    <span>DRVA Foundation</span>
                    <span className="font-bold text-[var(--navy)]">In God We Trust</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Paragraph Story */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <SectionEyebrow text={SCHOOL_STORY.eyebrow} />

                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15]">
                  {SCHOOL_STORY.title}
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  {SCHOOL_STORY.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Heritage & Motto Plaque (IN GOD WE TRUST + Official Crest) */}
        <section className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 lg:p-16 bg-white border border-[#E4E7EB] relative shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left: Official Crest & Seal */}
                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 border border-[#E4E7EB] bg-[#F7F8FA] text-center shadow-xs">
                  <div className="mb-3">
                    <SchoolCrest size="lg" priority />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold block">
                    Official Seal &amp; Crest
                  </span>
                  <span className="text-xs text-[var(--navy)] font-heading font-bold mt-1">
                    Sheretti, Abuja &bull; Est. 2015
                  </span>
                </div>

                {/* Right: Motto Presentation */}
                <div className="md:col-span-8 space-y-3">
                  <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block">
                    FOUNDATIONAL ANCHOR
                  </span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--navy)]">
                    &ldquo;{SCHOOL_INFO.motto}&rdquo;
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed">
                    Our motto is the moral compass that directs our pastoral care,
                    disciplinary culture, and ethical expectations for teachers and
                    pupils alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Dedicated School Anthem Section */}
        <SchoolAnthemSection />

        {/* 5. Mission & Vision — Split Composition */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <SectionEyebrow text="INSTITUTIONAL DIRECTION" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                Mission and vision.
              </h2>
            </div>

            {/* Split Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#E4E7EB]">
              {/* Mission */}
              <div className="p-8 sm:p-12 bg-[#F7F8FA] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E4E7EB]">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E4E7EB]">
                    <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold">
                      01 OUR MISSION
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                      PURPOSE &amp; COMMITMENT
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--navy)] mb-4 leading-snug">
                    {SCHOOL_MISSION_VISION.mission.heading}
                  </h3>

                  <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed font-normal">
                    {SCHOOL_MISSION_VISION.mission.statement}
                  </p>
                </div>
              </div>

              {/* Vision (Deep Navy Side) */}
              <div className="p-8 sm:p-12 bg-[#0B1D2F] text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#24415F]">
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                      02 OUR VISION
                    </span>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      LONG-TERM ASPIRATION
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4 leading-snug">
                    {SCHOOL_MISSION_VISION.vision.heading}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                    {SCHOOL_MISSION_VISION.vision.statement}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Values as Editorial Principles */}
        <section className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-8 border-b border-[#E4E7EB] items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow text="CORE PRINCIPLES" />
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
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

            {/* 4 Statements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {SCHOOL_VALUES.map((value) => (
                <div
                  key={value.number}
                  className="flex flex-col pt-6 border-t border-[#E4E7EB]"
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-bold tracking-wider text-[var(--red)] uppercase">
                      Value {value.number}
                    </span>
                    <span className="text-xs tracking-wider uppercase text-[var(--muted)] font-semibold">
                      Core Virtue
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--navy)] tracking-tight mb-1">
                    {value.title}
                  </h3>

                  <p className="font-heading font-medium text-sm text-[var(--muted)] mb-3">
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

        {/* 7. Leadership Composition (Mrs Okpala Priscilla) */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto p-8 sm:p-12 lg:p-14 bg-[#F7F8FA] border border-[#E4E7EB] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <SchoolCrest size="xs" />
                <span className="w-4 h-0.5 bg-[var(--red)]" />
                <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                  SCHOOL LEADERSHIP &amp; STEWARDSHIP
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--navy)] tracking-tight leading-[1.15] mb-6">
                Dedicated stewardship.
              </h2>

              <blockquote className="text-lg sm:text-xl font-heading font-medium text-[var(--navy)] leading-relaxed mb-8">
                &ldquo;{SCHOOL_INFO.leadership.message}&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-[#E4E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-heading text-base font-bold text-[var(--navy)] block">
                    {SCHOOL_INFO.leadership.name}
                  </span>
                  <span className="uppercase tracking-wider text-[var(--muted)] font-semibold">
                    {SCHOOL_INFO.leadership.role} &bull; Deeper Real Vision Academy
                  </span>
                </div>
                <span className="font-heading font-bold text-sm text-[var(--navy)]">
                  In God We Trust
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Admissions CTA */}
        <AdmissionsCTA
          eyebrow="JOIN OUR COMMUNITY"
          heading="Discover the DRVA experience."
          italicHeading="Visit our campus in Sheretti, Abuja."
          description="Take the next step in your child's educational journey. Connect with our admissions desk on 08036135006 for information on enrollment across Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3)."
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
