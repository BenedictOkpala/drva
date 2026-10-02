import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { PlaceholderFrame } from "@/components/common/PlaceholderFrame";
import { AdmissionsCTA } from "@/components/common/AdmissionsCTA";
import { ACADEMIC_STAGES } from "@/data/schoolData";

export const metadata: Metadata = {
  title: "Academics | DRVA",
  description:
    "Explore the academic stages at DRVA — Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3). A structured, supportive learning continuum nurturing confidence, knowledge, and character.",
};

export default function AcademicsPage() {
  const creche = ACADEMIC_STAGES.find((s) => s.id === "creche")!;
  const nursery = ACADEMIC_STAGES.find((s) => s.id === "nursery")!;
  const primary = ACADEMIC_STAGES.find((s) => s.id === "primary")!;
  const juniorSecondary = ACADEMIC_STAGES.find((s) => s.id === "junior-secondary")!;

  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)]">
      <Header />

      <main className="flex-grow">
        {/* 1. Progressive Intellectual Page Hero */}
        <PageHero
          breadcrumbLabel="Academics"
          eyebrow="ACADEMICS"
          title="Growing at every stage."
          subtitle="A disciplined and nurturing educational continuum."
          description="From early steps in our Creche through to Junior Secondary (JSS1–JSS3), DRVA provides a continuous, supportive learning journey that fosters deep inquiry, confidence, and enduring moral habits."
          badge="CURRICULUM & STAGES"
          variant="progressive"
          rightSlot={
            <div className="flex flex-col gap-2 p-5 bg-white border border-[var(--line)] shadow-xs w-full lg:max-w-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">
                Stage Navigation
              </span>
              <div className="space-y-1.5 text-xs font-mono">
                <a
                  href="#creche"
                  className="flex items-center justify-between p-2 hover:bg-[var(--ivory)] text-[var(--navy)] font-medium transition-colors"
                >
                  <span>01. Creche</span>
                  <span className="text-[var(--muted)] text-[10px]">Infant Care</span>
                </a>
                <a
                  href="#nursery"
                  className="flex items-center justify-between p-2 hover:bg-[var(--ivory)] text-[var(--navy)] font-medium transition-colors"
                >
                  <span>02. Nursery</span>
                  <span className="text-[var(--muted)] text-[10px]">Early Years</span>
                </a>
                <a
                  href="#primary"
                  className="flex items-center justify-between p-2 hover:bg-[var(--ivory)] text-[var(--navy)] font-medium transition-colors"
                >
                  <span>03. Primary</span>
                  <span className="text-[var(--muted)] text-[10px]">Primary Years</span>
                </a>
                <a
                  href="#junior-secondary"
                  className="flex items-center justify-between p-2 hover:bg-[var(--ivory)] text-[var(--navy)] font-medium transition-colors"
                >
                  <span>04. Junior Sec.</span>
                  <span className="text-[var(--muted)] text-[10px]">JSS1 &ndash; JSS3</span>
                </a>
              </div>
            </div>
          }
        />

        {/* 2. STAGE 01: CRECHE (Warm, Nurturing Beginning) */}
        <section id="creche" className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Content Side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-[var(--navy)] text-white">
                    STAGE 01
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-[var(--navy)]">
                    INFANT & TODDLER CARE
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
                  {creche.title}:{" "}
                  <span className="italic font-normal">
                    {creche.subtitle}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  {creche.overview}
                </p>

                {/* Focus Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--line)]">
                  {creche.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[var(--ivory)] border border-[var(--line)] text-xs sm:text-sm text-[var(--navy)] flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--red)] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Frame Side */}
              <div className="lg:col-span-5">
                <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="hero"
                    theme="warm"
                    label="Creche Environment"
                    sublabel="Hygienic & peaceful infant discovery space"
                    badge="STAGE 01 &bull; CRECHE"
                    captionLines={[
                      "CRECHE AT DRVA.",
                      "CALM SLEEP & SENSORY AREAS.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STAGE 02: NURSERY (Reversed Layout — Active Curiosity & Foundations) */}
        <section id="nursery" className="py-20 sm:py-28 bg-[var(--ivory)] border-b border-[var(--line)] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo Frame Side (Reversed Order on Desktop) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="hero"
                    theme="light"
                    label="Nursery Learning Lab"
                    sublabel="Phonics corners & creative expression stations"
                    badge="STAGE 02 &bull; NURSERY"
                    captionLines={[
                      "NURSERY AT DRVA.",
                      "STRUCTURED PLAY & EARLY NUMERACY.",
                    ]}
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-[var(--blue)] text-white">
                    STAGE 02
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-[var(--navy)]">
                    EARLY YEARS FOUNDATIONS
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
                  {nursery.title}:{" "}
                  <span className="italic font-normal">
                    {nursery.subtitle}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  {nursery.overview}
                </p>

                {/* Focus Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--line)]">
                  {nursery.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[var(--paper)] border border-[var(--line)] text-xs sm:text-sm text-[var(--navy)] flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--red)] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. STAGE 03: PRIMARY (Intellectual Rigor & Character Formation) */}
        <section id="primary" className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Content Side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-[var(--navy)] text-white">
                    STAGE 03
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-[var(--navy)]">
                    PRIMARY ACADEMIC MASTERY
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
                  {primary.title}:{" "}
                  <span className="italic font-normal">
                    {primary.subtitle}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  {primary.overview}
                </p>

                {/* Focus Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--line)]">
                  {primary.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[var(--ivory)] border border-[var(--line)] text-xs sm:text-sm text-[var(--navy)] flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--red)] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Frame Side */}
              <div className="lg:col-span-5">
                <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="hero"
                    theme="light"
                    label="Primary Classroom & Inquiry"
                    sublabel="Mathematics, science & civic discussions"
                    badge="STAGE 03 &bull; PRIMARY"
                    captionLines={[
                      "PRIMARY AT DRVA.",
                      "CRITICAL INQUIRY & MORAL CLARITY.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. STAGE 04: JUNIOR SECONDARY (Reversed Layout — Deepening Rigor & Higher Inquiry) */}
        <section id="junior-secondary" className="py-20 sm:py-28 bg-[var(--ivory)] border-b border-[var(--line)] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo Frame Side (Reversed Order on Desktop) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="p-2 sm:p-3 bg-white border border-[var(--line)] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="hero"
                    theme="warm"
                    label="Junior Secondary Environment"
                    sublabel="Subject-based discovery, labs & character mentorship"
                    badge="STAGE 04 &bull; JUNIOR SECONDARY"
                    captionLines={[
                      "JUNIOR SECONDARY AT DRVA.",
                      "JSS1 – JSS3 DISCIPLINED STUDY.",
                    ]}
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-[var(--navy)] text-white">
                    STAGE 04
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-[var(--navy)]">
                    JUNIOR SECONDARY (JSS1&ndash;JSS3)
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
                  {juniorSecondary.title}:{" "}
                  <span className="italic font-normal">
                    {juniorSecondary.subtitle}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  {juniorSecondary.overview}
                </p>

                {/* Focus Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--line)]">
                  {juniorSecondary.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[var(--paper)] border border-[var(--line)] text-xs sm:text-sm text-[var(--navy)] flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--red)] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Distinct Learning Approach Section */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 pb-8 border-b border-[var(--line)] items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow text="PEDAGOGICAL APPROACH" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                  How we cultivate understanding.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pl-6">
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Our teaching approach ensures knowledge is grasped conceptually,
                  tested practically, and retained through disciplined practice.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 sm:p-8 bg-[var(--ivory)] border border-[var(--line)]">
                <span className="text-xs font-mono text-[var(--red)] font-semibold uppercase block mb-2">
                  {"//"} 01 INQUIRY-LED
                </span>
                <h3 className="font-serif text-xl text-[var(--navy)] mb-2">
                  Conceptual Mastery
                </h3>
                <p className="text-sm text-[var(--ink)]/80 leading-relaxed">
                  Pupils are trained to comprehend the &ldquo;why&rdquo; behind
                  every mathematical theorem, scientific discovery, and grammar rule.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-[var(--ivory)] border border-[var(--line)]">
                <span className="text-xs font-mono text-[var(--red)] font-semibold uppercase block mb-2">
                  {"//"} 02 ATTENTIVE GUIDANCE
                </span>
                <h3 className="font-serif text-xl text-[var(--navy)] mb-2">
                  Observant Mentorship
                </h3>
                <p className="text-sm text-[var(--ink)]/80 leading-relaxed">
                  Educators monitor individual pace, intervene early when help is
                  needed, and provide stretch opportunities for advanced discovery.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-[var(--ivory)] border border-[var(--line)]">
                <span className="text-xs font-mono text-[var(--red)] font-semibold uppercase block mb-2">
                  {"//"} 03 INTEGRATED VALUES
                </span>
                <h3 className="font-serif text-xl text-[var(--navy)] mb-2">
                  Moral Reflection
                </h3>
                <p className="text-sm text-[var(--ink)]/80 leading-relaxed">
                  Every academic pursuit is connected with humility, ethical
                  responsibility, and service to the broader community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Reserved Curriculum, Subjects & Extracurricular Matrix */}
        <section className="py-20 sm:py-28 bg-[var(--navy)] text-white border-b border-[var(--color-line-dark)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <SectionEyebrow text="SUBJECTS & ENRICHMENT" theme="dark" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mt-3">
                Curriculum structure.
              </h2>
              <p className="mt-3 text-sm font-mono tracking-wider uppercase text-slate-400">
                Balanced educational scope across core academic disciplines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Core Subjects */}
              <div className="p-8 bg-[var(--navy-dark)] border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--blue-soft)] block mb-2">
                    SCOPE 01
                  </span>
                  <h3 className="font-serif text-2xl text-white mb-3">
                    Languages & Humanities
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    English reading, phonics, grammar, composition, literature,
                    social studies, and civic understanding.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  Grammar, phonics, reading fluency &amp; civic education.
                </div>
              </div>

              {/* Column 2: STEM & Logic */}
              <div className="p-8 bg-[var(--navy-dark)] border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--blue-soft)] block mb-2">
                    SCOPE 02
                  </span>
                  <h3 className="font-serif text-2xl text-white mb-3">
                    Mathematics & Science
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    Foundational numeracy, mental arithmetic, problem solving,
                    experimental science, and environmental discovery.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  Arithmetic, scientific inquiry &amp; problem-solving.
                </div>
              </div>

              {/* Column 3: Co-Curricular & Creative */}
              <div className="p-8 bg-[var(--navy-dark)] border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--blue-soft)] block mb-2">
                    SCOPE 03
                  </span>
                  <h3 className="font-serif text-2xl text-white mb-3">
                    Creative Arts & Skills
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    Visual arts, music performance, drama, ICT literacy, and
                    practical vocational craft explorations.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  Hands-on expression, ICT literacy &amp; creative skills.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Admissions CTA */}
        <AdmissionsCTA
          eyebrow="ACADEMIC ENROLLMENT"
          heading="Begin your child's academic journey."
          italicHeading="Creche, Nursery, Primary & Junior Secondary admissions open."
          description="Speak with our admissions team to discuss placement assessments, age readiness benchmarks, and tour schedules."
          primaryCtaText="Begin an enquiry"
          primaryCtaHref="/contact"
          secondaryCtaText="Review admissions process"
          secondaryCtaHref="/admissions"
        />
      </main>

      <Footer />
    </div>
  );
}
