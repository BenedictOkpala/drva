import React from "react";
import Link from "next/link";
import { SchoolCrest } from "../brand/SchoolCrest";
import { SCHOOL_INFO } from "@/data/schoolData";

export function VisitAdmissions() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[var(--navy)] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-fine-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Authority & Location Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <SchoolCrest variant="dark" size="sm" />
              <span className="w-4 h-px bg-[var(--red)]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-slate-200">
                VISIT & ENROL &bull; SHERETTI, ABUJA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
              Begin your child&apos;s journey{" "}
              <span className="italic font-normal text-slate-300">
                at DRVA.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              We welcome prospective families to discover our school in Sheretti,
              Abuja. Whether you are enrolling for Creche, Nursery, Primary, or
              Junior Secondary (JSS1&ndash;JSS3), our office is ready to assist you.
            </p>

            {/* Quick Facts Strip */}
            <div className="pt-4 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
              <div className="p-3 bg-[var(--navy-dark)] border border-slate-700">
                <span className="text-[10px] uppercase text-slate-400 block mb-1">LOCATION</span>
                <span className="text-white font-medium">Sheretti, Abuja</span>
              </div>
              <div className="p-3 bg-[var(--navy-dark)] border border-slate-700">
                <span className="text-[10px] uppercase text-slate-400 block mb-1">PROGRAMMES</span>
                <span className="text-white font-medium">Creche to JSS3</span>
              </div>
              <div className="p-3 bg-[var(--navy-dark)] border border-slate-700">
                <span className="text-[10px] uppercase text-slate-400 block mb-1">CAMPUS ACCESS</span>
                <span className="text-white font-medium">By Appointment</span>
              </div>
            </div>

            {/* Dual Pathways CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-[var(--navy)] bg-[var(--ivory)] hover:bg-white active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
              >
                Review admissions process
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-medium tracking-wide text-white hover:text-[var(--blue-soft)] bg-[var(--navy-dark)] border border-slate-700 hover:border-slate-500 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact &amp; book a visit &rarr;
              </Link>
            </div>
          </div>

          {/* Right: Architectural Plaque with Motto & Crest */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 bg-[var(--navy-dark)] border border-slate-700 relative text-center space-y-6 shadow-2xl">
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-slate-600 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-slate-600 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-slate-600 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-slate-600 pointer-events-none" />

              <div className="flex justify-center">
                <SchoolCrest variant="dark" size="xl" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--blue-soft)] block mb-1">
                  {SCHOOL_INFO.fullName}
                </span>
                <span className="font-serif italic text-xl text-white block">
                  &ldquo;{SCHOOL_INFO.motto}&rdquo;
                </span>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                <span>Sheretti &bull; Abuja &bull; Founded October 2016</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
