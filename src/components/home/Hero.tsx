import React from "react";
import Link from "next/link";
import { PlaceholderFrame } from "../common/PlaceholderFrame";
import { SchoolCrest } from "../brand/SchoolCrest";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--paper)] border-b border-[var(--line)]">
      {/* Background Architectural Grid Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[var(--line)]/50 hidden lg:block pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full pattern-fine-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Editorial Authority Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow with Crest and Location Indicator */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <SchoolCrest size="xs" priority />
              <span className="w-4 h-px bg-[var(--red)]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[var(--navy)]">
                SHERETTI, ABUJA &bull; EST. 2016
              </span>
            </div>

            {/* School Identity & Display Typography */}
            <div className="mb-2">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] block mb-1">
                Deeper Real Vision Academy
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] tracking-tight leading-[1.10] mb-5">
                <span className="block font-normal">Bright minds.</span>
                <span className="block italic font-normal text-[var(--navy)]/90">
                  Good people.
                </span>
              </h1>
            </div>

            {/* Restrained Supporting Copy */}
            <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal">
              A purposeful learning community in Sheretti, Abuja, serving pupils
              across Creche, Nursery, Primary, and Junior Secondary (JSS1&ndash;JSS3).
              Where children are known, guided, and given room to flourish.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide text-white bg-[var(--navy)] hover:bg-[var(--navy-light)] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2 shadow-xs"
              >
                Admissions
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-[var(--navy)] hover:text-[var(--blue)] bg-[var(--ivory)] hover:bg-[var(--ivory-dark)] border border-[var(--line)] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)]"
              >
                <span>Explore DRVA</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Educational Stages Progression Strip */}
            <div className="mt-10 pt-8 border-t border-[var(--line)] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              <Link href="/academics#creche" className="group">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--blue)] transition-colors block">
                  Stage 01
                </span>
                <span className="font-serif text-sm font-medium text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors mt-0.5 block">
                  Creche
                </span>
              </Link>
              <Link href="/academics#nursery" className="group">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--blue)] transition-colors block">
                  Stage 02
                </span>
                <span className="font-serif text-sm font-medium text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors mt-0.5 block">
                  Nursery
                </span>
              </Link>
              <Link href="/academics#primary" className="group">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--blue)] transition-colors block">
                  Stage 03
                </span>
                <span className="font-serif text-sm font-medium text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors mt-0.5 block">
                  Primary
                </span>
              </Link>
              <Link href="/academics#junior-secondary" className="group">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--blue)] transition-colors block">
                  Stage 04
                </span>
                <span className="font-serif text-sm font-medium text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors mt-0.5 block">
                  Junior Sec. <span className="text-[10px] font-mono text-[var(--muted)] font-normal block">JSS1&ndash;JSS3</span>
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Photography Hero Composition */}
          <div className="lg:col-span-6 relative">
            {/* Double layered architectural frame lines */}
            <div className="absolute -inset-2.5 border border-[var(--line)] pointer-events-none hidden sm:block" />
            <div className="absolute -inset-5 border border-[var(--line)]/40 pointer-events-none hidden lg:block" />

            <div className="relative bg-white p-2.5 sm:p-3.5 border border-[var(--line)] shadow-sm">
              <PlaceholderFrame
                aspectRatio="hero"
                theme="light"
                label="DRVA Campus & Classrooms"
                sublabel="Creche, Nursery, Primary & Junior Secondary Environments"
                badge="SHERETTI, ABUJA"
                captionLines={[
                  "DEEPER REAL VISION ACADEMY.",
                  "SERVING YOUNG MINDS IN ABUJA.",
                  "FOUNDED OCTOBER 2016.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
