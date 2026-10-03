import type { Metadata } from "next";
import Image from "next/image";
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
    "Explore the academic stages at DRVA in Sheretti, Abuja — Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3). A structured, supportive learning continuum nurturing confidence, knowledge, and character.",
};

export default function AcademicsPage() {
  const creche = ACADEMIC_STAGES.find((s) => s.id === "creche")!;
  const nursery = ACADEMIC_STAGES.find((s) => s.id === "nursery")!;
  const primary = ACADEMIC_STAGES.find((s) => s.id === "primary")!;
  const juniorSecondary = ACADEMIC_STAGES.find((s) => s.id === "junior-secondary")!;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* 1. Page Hero */}
        <PageHero
          breadcrumbLabel="Academics"
          eyebrow="ACADEMICS"
          title="Growing at every stage."
          subtitle="A disciplined and nurturing educational continuum."
          description="From early steps in our Creche through to Junior Secondary (JSS1–JSS3), DRVA provides a continuous, supportive learning journey in Sheretti, Abuja that fosters deep inquiry, confidence, and enduring moral habits."
          badge="CURRICULUM &amp; STAGES"
          variant="progressive"
          rightSlot={
            <div className="flex flex-col gap-2 p-5 bg-white border border-[#E4E7EB] shadow-xs w-full lg:max-w-xs">
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--muted)]">
                Stage Navigation
              </span>
              <div className="space-y-1.5 text-xs">
                <a
                  href="#creche"
                  className="flex items-center justify-between p-2 hover:bg-[#F7F8FA] text-[var(--navy)] font-semibold transition-colors"
                >
                  <span>01. Creche</span>
                  <span className="text-[var(--muted)] text-xs font-normal">Infant Care</span>
                </a>
                <a
                  href="#nursery"
                  className="flex items-center justify-between p-2 hover:bg-[#F7F8FA] text-[var(--navy)] font-semibold transition-colors"
                >
                  <span>02. Nursery</span>
                  <span className="text-[var(--muted)] text-xs font-normal">Early Years</span>
                </a>
                <a
                  href="#primary"
                  className="flex items-center justify-between p-2 hover:bg-[#F7F8FA] text-[var(--navy)] font-semibold transition-colors"
                >
                  <span>03. Primary</span>
                  <span className="text-[var(--muted)] text-xs font-normal">Primary Years</span>
                </a>
                <a
                  href="#junior-secondary"
                  className="flex items-center justify-between p-2 hover:bg-[#F7F8FA] text-[var(--navy)] font-semibold transition-colors"
                >
                  <span>04. Junior Sec.</span>
                  <span className="text-[var(--muted)] text-xs font-normal">JSS1 &ndash; JSS3</span>
                </a>
              </div>
            </div>
          }
        />

        {/* 2. CRECHE */}
        <section id="creche" className="py-20 sm:py-28 bg-white border-b border-[#E4E7EB] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Content Side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-[var(--navy)] text-white uppercase">
                    01
                  </span>
                  <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                    INFANT &amp; TODDLER CARE
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
                  {creche.title}: {creche.subtitle}
                </h2>

                <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  {creche.overview}
                </p>

                {/* Focus Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E4E7EB]">
                  {creche.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F7F8FA] border border-[#E4E7EB] text-xs sm:text-sm text-[var(--navy)] font-semibold flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Frame Side */}
              <div className="lg:col-span-5">
                <div className="p-2 sm:p-3 bg-white border border-[#E4E7EB] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="hero"
                    theme="light"
                    label="Creche Environment"
                    sublabel="Hygienic & peaceful infant discovery space"
                    badge="CRECHE FOUNDATION"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. NURSERY */}
        <section id="nursery" className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-[#E4E7EB] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo Frame Side */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="p-2 sm:p-3 bg-white border border-[#E4E7EB] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="hero"
                    theme="light"
                    label="Nursery Learning Space"
                    sublabel="Phonics corners & creative expression stations"
                    badge="NURSERY STAGE"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-[var(--navy)] text-white uppercase">
                    02
                  </span>
                  <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                    EARLY YEARS FOUNDATIONS
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
                  {nursery.title}: {nursery.subtitle}
                </h2>

                <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  {nursery.overview}
                </p>

                {/* Focus Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E4E7EB]">
                  {nursery.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-[#E4E7EB] text-xs sm:text-sm text-[var(--navy)] font-semibold flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRIMARY */}
        <section id="primary" className="py-20 sm:py-28 bg-white border-b border-[#E4E7EB] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Content Side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-[var(--navy)] text-white uppercase">
                    03
                  </span>
                  <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                    PRIMARY ACADEMIC MASTERY
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
                  {primary.title}: {primary.subtitle}
                </h2>

                <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  {primary.overview}
                </p>

                {/* Focus Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E4E7EB]">
                  {primary.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F7F8FA] border border-[#E4E7EB] text-xs sm:text-sm text-[var(--navy)] font-semibold flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Side: Real DRVA Photography */}
              <div className="lg:col-span-5">
                <div className="p-2 sm:p-3 bg-white border border-[#E4E7EB] shadow-sm">
                  <div className="relative w-full aspect-[4/3] bg-[#E4E7EB] overflow-hidden">
                    <Image
                      src="/images/drva/academics/pupils-learning-computing.jpg"
                      alt="DRVA pupils engaged in classroom learning in Sheretti, Abuja"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 bg-white border-t border-[#E4E7EB] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--navy)]">
                      Learning in practice
                    </span>
                    <span className="text-xs text-[var(--muted)] font-medium">
                      DRVA Classrooms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. JUNIOR SECONDARY */}
        <section id="junior-secondary" className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-[#E4E7EB] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo Frame Side */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="p-2 sm:p-3 bg-white border border-[#E4E7EB] shadow-sm">
                  <PlaceholderFrame
                    aspectRatio="hero"
                    theme="light"
                    label="Junior Secondary Learning"
                    sublabel="Subject-based discovery, inquiry & character mentorship"
                    badge="JUNIOR SECONDARY"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-[var(--navy)] text-white uppercase">
                    04
                  </span>
                  <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                    JUNIOR SECONDARY (JSS1&ndash;JSS3)
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
                  {juniorSecondary.title}: {juniorSecondary.subtitle}
                </h2>

                <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
                  {juniorSecondary.overview}
                </p>

                {/* Focus Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E4E7EB]">
                  {juniorSecondary.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-[#E4E7EB] text-xs sm:text-sm text-[var(--navy)] font-semibold flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Learning Approach Section */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 pb-8 border-b border-[#E4E7EB] items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow text="PEDAGOGICAL APPROACH" />
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
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
              <div className="p-6 sm:p-8 bg-[#F7F8FA] border border-[#E4E7EB]">
                <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-2">
                  Conceptual Mastery
                </span>
                <h3 className="font-heading font-bold text-xl text-[var(--navy)] mb-2">
                  Inquiry-Led Foundations
                </h3>
                <p className="text-sm text-[var(--ink)]/80 leading-relaxed">
                  Pupils are trained to comprehend the &ldquo;why&rdquo; behind
                  every mathematical theorem, scientific principle, and grammar rule.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-[#F7F8FA] border border-[#E4E7EB]">
                <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-2">
                  Observant Mentorship
                </span>
                <h3 className="font-heading font-bold text-xl text-[var(--navy)] mb-2">
                  Attentive Guidance
                </h3>
                <p className="text-sm text-[var(--ink)]/80 leading-relaxed">
                  Educators monitor individual pace, intervene early when help is
                  needed, and provide stretch opportunities for advanced discovery.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-[#F7F8FA] border border-[#E4E7EB]">
                <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-2">
                  Moral Reflection
                </span>
                <h3 className="font-heading font-bold text-xl text-[var(--navy)] mb-2">
                  Integrated Values
                </h3>
                <p className="text-sm text-[var(--ink)]/80 leading-relaxed">
                  Every academic pursuit is connected with humility, ethical
                  responsibility, and service to the broader community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Curriculum Structure */}
        <section className="py-20 sm:py-28 bg-[#0B1D2F] text-white border-b border-[#24415F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <SectionEyebrow text="SUBJECTS &amp; ENRICHMENT" theme="dark" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mt-3">
                Curriculum structure.
              </h2>
              <p className="mt-3 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Balanced educational scope across core academic disciplines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Core Subjects */}
              <div className="p-8 bg-slate-900/80 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--blue-soft)] font-bold block mb-2">
                    Core Languages
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">
                    Languages &amp; Humanities
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    English reading, phonics, grammar, composition, literature,
                    social studies, and civic understanding.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                  Grammar, phonics, reading fluency &amp; civic education.
                </div>
              </div>

              {/* Column 2: STEM & Logic */}
              <div className="p-8 bg-slate-900/80 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--blue-soft)] font-bold block mb-2">
                    Numeracy &amp; Inquiry
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">
                    Mathematics &amp; Science
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    Foundational numeracy, mental arithmetic, problem solving,
                    experimental science, and environmental discovery.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                  Arithmetic, scientific inquiry &amp; problem-solving.
                </div>
              </div>

              {/* Column 3: Co-Curricular & Creative */}
              <div className="p-8 bg-slate-900/80 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--blue-soft)] font-bold block mb-2">
                    Creative &amp; Co-Curricular
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">
                    Creative Arts &amp; Skills
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    Visual arts, music performance, drama, practical computing literacy, and
                    creative craft explorations.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                  Hands-on expression, computer literacy &amp; creative skills.
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
          description="Speak with our admissions team on 08036135006 to discuss placement assessments and tour schedules."
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
