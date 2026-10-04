import React from "react";
import Link from "next/link";
import { SchoolCrest } from "../brand/SchoolCrest";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#E4E7EB]">
      {/* Background Architectural Grid Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[#E4E7EB]/40 hidden lg:block pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full pattern-fine-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Confident Text-Led Opening */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow with Crest and Location Indicator */}
            <div className="flex items-center gap-3 mb-6">
              <SchoolCrest size="xs" priority />
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                SHERETTI, ABUJA &bull; EST. 2015
              </span>
            </div>

            {/* Core Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.08] mb-6">
              Bright minds.
              <span className="block text-[var(--navy)]/80 mt-1 font-bold">
                Good people.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[var(--ink)]/80 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
              A supportive learning community where children are known, guided
              and encouraged to grow in knowledge, character and confidence.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[var(--navy)] hover:bg-[#1C3C5E] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] shadow-xs"
              >
                Admissions
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide text-[var(--navy)] hover:bg-[#F7F8FA] bg-white border border-[#E4E7EB] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)]"
              >
                <span>Explore DRVA</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT: Structured Educational Stages Panel */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 bg-[#F7F8FA] border border-[#E4E7EB] shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E4E7EB]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)]" />
                  <span className="text-xs uppercase tracking-wider font-bold text-[var(--navy)]">
                    EDUCATIONAL STAGES
                  </span>
                </div>
                <span className="text-xs font-semibold text-[var(--muted)]">
                  Creche &ndash; JSS3
                </span>
              </div>

              <div className="divide-y divide-[#E4E7EB]">
                <Link
                  href="/academics#creche"
                  className="py-3.5 flex items-center justify-between group hover:pl-1 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--red)] group-hover:text-[var(--navy)] transition-colors">
                      01
                    </span>
                    <div>
                      <span className="font-heading text-sm font-bold text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors block">
                        Creche
                      </span>
                      <span className="text-xs text-[var(--muted)] font-normal">
                        Infant Care &amp; Early Nurture
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--muted)] group-hover:text-[var(--navy)] transition-colors">
                    &rarr;
                  </span>
                </Link>

                <Link
                  href="/academics#nursery"
                  className="py-3.5 flex items-center justify-between group hover:pl-1 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--red)] group-hover:text-[var(--navy)] transition-colors">
                      02
                    </span>
                    <div>
                      <span className="font-heading text-sm font-bold text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors block">
                        Nursery
                      </span>
                      <span className="text-xs text-[var(--muted)] font-normal">
                        Early Literacy &amp; Discovery
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--muted)] group-hover:text-[var(--navy)] transition-colors">
                    &rarr;
                  </span>
                </Link>

                <Link
                  href="/academics#primary"
                  className="py-3.5 flex items-center justify-between group hover:pl-1 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--red)] group-hover:text-[var(--navy)] transition-colors">
                      03
                    </span>
                    <div>
                      <span className="font-heading text-sm font-bold text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors block">
                        Primary
                      </span>
                      <span className="text-xs text-[var(--muted)] font-normal">
                        Confidence &amp; Core Knowledge
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--muted)] group-hover:text-[var(--navy)] transition-colors">
                    &rarr;
                  </span>
                </Link>

                <Link
                  href="/academics#junior-secondary"
                  className="py-3.5 flex items-center justify-between group hover:pl-1 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--red)] group-hover:text-[var(--navy)] transition-colors">
                      04
                    </span>
                    <div>
                      <span className="font-heading text-sm font-bold text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors block">
                        Junior Secondary
                      </span>
                      <span className="text-xs text-[var(--muted)] font-normal">
                        Disciplined Study &bull; JSS1&ndash;JSS3
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--muted)] group-hover:text-[var(--navy)] transition-colors">
                    &rarr;
                  </span>
                </Link>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E4E7EB] flex items-center justify-between text-xs text-[var(--muted)]">
                <span>Sheretti, Abuja</span>
                <span className="font-semibold text-[var(--navy)]">In God We Trust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
