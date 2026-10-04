import React from "react";
import Link from "next/link";
import { SchoolCrest } from "../brand/SchoolCrest";
import { SCHOOL_INFO } from "@/data/schoolData";

export function VisitAdmissions() {
  return (
    <section className="py-16 sm:py-22 lg:py-26 bg-[#0B1D2F] text-white relative overflow-hidden border-b border-[#24415F]">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-fine-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Authority & Location Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <SchoolCrest variant="dark" size="sm" />
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs tracking-wider uppercase font-bold text-slate-200">
                VISIT &amp; ENROL &bull; SHERETTI, ABUJA
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
              Begin your child&apos;s journey at DRVA.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              We welcome prospective families to discover our school in Sheretti,
              Abuja. Whether you are enquiring for Creche, Nursery, Primary, or
              Junior Secondary (JSS1&ndash;JSS3), our office is ready to assist you.
            </p>

            {/* Quick Facts Strip */}
            <div className="pt-4 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="p-3.5 bg-slate-900/80 border border-slate-700/80">
                <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">LOCATION</span>
                <span className="font-heading text-sm font-bold text-white">Sheretti, Abuja</span>
              </div>
              <div className="p-3.5 bg-slate-900/80 border border-slate-700/80">
                <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">PROGRAMMES</span>
                <span className="font-heading text-sm font-bold text-white">Creche to JSS3</span>
              </div>
              <div className="p-3.5 bg-slate-900/80 border border-slate-700/80">
                <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">ENQUIRIES</span>
                <span className="font-heading text-sm font-bold text-white">Admissions Desk</span>
              </div>
            </div>

            {/* Dual Pathways CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-[var(--navy)] bg-white hover:bg-[#F7F8FA] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
              >
                Admissions information
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide text-white hover:text-[var(--blue-soft)] bg-slate-900/80 border border-slate-700 hover:border-slate-500 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact DRVA &rarr;
              </Link>
            </div>
          </div>

          {/* Right: Architectural Plaque with Motto & Crest */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 bg-slate-900/90 border border-slate-700/80 relative text-center space-y-5 shadow-xl">
              <div className="flex justify-center">
                <SchoolCrest variant="dark" size="xl" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[var(--blue-soft)] block mb-1">
                  {SCHOOL_INFO.fullName}
                </span>
                <span className="font-heading font-bold text-xl text-white block">
                  &ldquo;{SCHOOL_INFO.motto}&rdquo;
                </span>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                <span>Sheretti &bull; Abuja &bull; Founded 2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
