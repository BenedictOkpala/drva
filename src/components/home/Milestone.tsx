import React from "react";
import Link from "next/link";
import { SchoolCrest } from "../brand/SchoolCrest";
import { MILESTONE_DATA } from "@/data/homeData";

export function Milestone() {
  return (
    <section className="py-18 sm:py-24 bg-[var(--ivory)] border-b border-[var(--line)] relative overflow-hidden">
      {/* Subtle fine grid texture */}
      <div className="absolute inset-0 pattern-fine-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 bg-[var(--paper)] border border-[var(--line)] relative shadow-xs">
          {/* Subtle architectural corner accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[var(--navy)]/30 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[var(--navy)]/30 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[var(--navy)]/30 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[var(--navy)]/30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Crest & Milestone Date Stamp */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-[var(--ivory)] border border-[var(--line)] text-center">
              <SchoolCrest size="lg" priority />
              <div className="mt-5 pt-4 border-t border-[var(--line)] w-full">
                <span className="font-serif text-2xl sm:text-3xl text-[var(--navy)] tracking-tight block">
                  {MILESTONE_DATA.years}
                </span>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--red)] font-semibold mt-1 block">
                  A DECADE OF DRVA
                </span>
              </div>
            </div>

            {/* Right: Commemorative Narrative & Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-px bg-[var(--red)]" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[var(--navy)]">
                  {MILESTONE_DATA.eyebrow}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[var(--navy)] tracking-tight leading-[1.15]">
                Ten years of learning,{" "}
                <span className="italic font-normal">character and community.</span>
              </h3>

              <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed font-normal">
                {MILESTONE_DATA.description}
              </p>

              {/* Verified Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[var(--line)]">
                {MILESTONE_DATA.details.map((item, idx) => (
                  <div key={idx}>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--muted)] block">
                      {item.label}
                    </span>
                    <span className="font-serif text-sm font-medium text-[var(--navy)] mt-0.5 block">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Natural Link to About */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[var(--navy)] hover:text-[var(--red)] group transition-colors"
                >
                  <span>Read our story & background</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
