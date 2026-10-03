import React from "react";
import Link from "next/link";
import { SchoolCrest } from "../brand/SchoolCrest";
import { SCHOOL_INFO } from "@/data/schoolData";

export function SchoolStory() {
  return (
    <section className="py-20 sm:py-26 lg:py-30 bg-[#102A43] text-white relative overflow-hidden border-b border-[#24415F]">
      {/* Fine grid pattern */}
      <div className="absolute inset-0 pattern-fine-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Crest, Motto & Historical Foundation */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 bg-[#0B1D2F] border border-slate-700/80 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <SchoolCrest variant="dark" size="md" priority />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[var(--blue-soft)] block">
                    FOUNDED OCTOBER 2016
                  </span>
                  <span className="font-heading text-base font-bold text-white">
                    Sheretti, Abuja
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--red)] block">
                  OFFICIAL MOTTO
                </span>
                <p className="font-heading font-bold text-2xl text-white">
                  &ldquo;{SCHOOL_INFO.motto}&rdquo;
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The enduring principle that guides our teaching, mentorship,
                  and moral nurture across every classroom.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Creche &bull; Nursery</span>
                <span>Primary &bull; JSS1&ndash;JSS3</span>
              </div>
            </div>
          </div>

          {/* Right: Institutional Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs uppercase tracking-wider font-bold text-slate-300">
                THE DRVA STORY &amp; ETHOS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.14]">
              Anchored in faith. Dedicated to excellence.
            </h2>

            <p className="font-heading font-medium text-lg sm:text-xl text-slate-200 leading-relaxed">
              Founded in October 2016 in Sheretti, Abuja, Deeper Real Vision Academy
              was established to provide children with a disciplined, uplifting,
              and values-driven education.
            </p>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              From our earliest foundation years to Junior Secondary (JSS1&ndash;JSS3),
              we believe intellectual capability must always be accompanied by sound
              moral judgment, empathy, and respect. Our educators know every pupil by
              name and walk alongside them with patient, steady guidance.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide text-[var(--navy)] bg-white hover:bg-[#F7F8FA] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
              >
                Learn More About DRVA
              </Link>
              <Link
                href="/academics"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-white hover:text-[var(--blue-soft)] border border-slate-600 hover:border-slate-400 transition-all duration-150"
              >
                Explore Academic Stages &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
