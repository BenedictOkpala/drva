import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import {
  ADMISSIONS_JOURNEY,
  ADMISSIONS_SECTIONS,
  ADMISSIONS_FAQS,
  SCHOOL_INFO,
} from "@/data/schoolData";

export const metadata: Metadata = {
  title: "Admissions | DRVA",
  description:
    "Admissions information for Deeper Real Vision Academy (DRVA) in Sheretti, Abuja. Explore our admissions journey, enrollment guidelines, and enquiry steps.",
};

export default function AdmissionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)]">
      <Header />

      <main className="flex-grow">
        {/* 1. Clear, Reassuring Page Hero */}
        <PageHero
          breadcrumbLabel="Admissions"
          eyebrow="ADMISSIONS"
          title="Your journey to DRVA starts here."
          subtitle="A clear, supportive pathway for prospective families."
          description="We understand that selecting a school is an important decision. Our admissions team is dedicated to making the enrollment journey welcoming, transparent, and straightforward for your family in Sheretti, Abuja."
          badge="ENROLLMENT & GUIDELINES"
          variant="action"
          rightSlot={
            <div className="p-5 bg-white border border-[var(--line)] shadow-xs w-full lg:max-w-xs space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] block">
                Quick Action
              </span>
              <p className="text-xs text-[var(--ink)]/80 leading-relaxed">
                Have questions about enrolling your child for Creche, Nursery, Primary, or Junior Secondary (JSS1–JSS3)?
              </p>
              <a
                href={SCHOOL_INFO.phoneTel}
                className="w-full inline-flex items-center justify-center py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[var(--navy)] hover:bg-[var(--navy-light)] transition-colors"
              >
                Call {SCHOOL_INFO.phone} &rarr;
              </a>
            </div>
          }
        />

        {/* 2. Four-Step Admissions Journey (Dominant Sequence) */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <SectionEyebrow text="ENROLLMENT JOURNEY" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                Four simple, guided steps.
              </h2>
            </div>

            {/* 4 Connected Sequential Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {ADMISSIONS_JOURNEY.map((step) => (
                <div
                  key={step.step}
                  className="p-8 bg-[var(--ivory)] border border-[var(--line)] flex flex-col justify-between relative group hover:border-[var(--navy)] transition-colors"
                >
                  <div>
                    {/* Step Number & Badge */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--line)]">
                      <span className="font-mono text-3xl font-light text-[var(--navy)]">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-white text-[var(--navy)] border border-[var(--line)]">
                        STEP {step.step}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[var(--navy)] mb-1">
                      {step.title}
                    </h3>
                    <p className="font-serif italic text-sm text-[var(--muted)] mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--line)]/70 text-[11px] font-mono text-[var(--muted)]">
                    {step.actionNote}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Essential Admissions Information Matrix */}
        <section className="py-20 sm:py-28 bg-[var(--ivory)] border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-8 border-b border-[var(--line)] items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow text="ESSENTIAL INFORMATION" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                  Criteria, fees and timelines.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pl-6">
                <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--muted)]">
                  Clear, transparent guidance for prospective parents and guardians.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ADMISSIONS_SECTIONS.map((section, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-[var(--paper)] border border-[var(--line)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--line)]">
                      <span className="text-xs font-mono tracking-widest uppercase text-[var(--red)] font-semibold">
                        {"//"} {section.eyebrow}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[var(--navy)] mb-3">
                      {section.title}
                    </h3>
                    <p className="text-sm text-[var(--ink)]/80 leading-relaxed font-normal mb-6">
                      {section.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--line)]/60 text-xs font-mono text-[var(--muted)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--red)]" />
                    <span>{section.statusNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Frequently Asked Questions */}
        <section className="py-20 sm:py-28 bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <SectionEyebrow text="QUESTIONS & ANSWERS" centered />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3">
                Frequently asked questions.
              </h2>
            </div>

            <div className="space-y-6">
              {ADMISSIONS_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-[var(--ivory)] border border-[var(--line)]"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[var(--navy)]">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Clear, Obvious Next-Step Actions */}
        <section className="py-20 sm:py-28 bg-[var(--navy)] text-white border-b border-[var(--color-line-dark)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionEyebrow text="NEXT STEPS" theme="dark" centered />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mt-4 mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
              Connect directly with our admissions desk on {SCHOOL_INFO.phone} or send an enquiry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SCHOOL_INFO.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-[var(--navy)] bg-[var(--ivory)] hover:bg-white active:scale-[0.99] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
              >
                Call {SCHOOL_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-sm font-medium tracking-wide text-white hover:text-slate-200 bg-[var(--navy-dark)] border border-slate-700 hover:border-slate-500 transition-all"
              >
                Enquiry form &amp; location &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
