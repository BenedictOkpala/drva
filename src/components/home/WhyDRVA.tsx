import React from "react";
import { PILLARS } from "@/data/homeData";

export function WhyDRVA() {
  return (
    <section className="py-20 sm:py-26 lg:py-32 bg-[var(--paper)] border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20 pb-10 border-b border-[var(--line)] items-end">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[var(--red)]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[var(--navy)]">
                WHY DRVA
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
              Distinctive in purpose,{" "}
              <span className="italic font-normal">uncompromising in care.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal">
              We define our educational approach by the depth of engagement with
              each pupil. These four commitments form the bedrock of everyday life at
              Deeper Real Vision Academy.
            </p>
          </div>
        </div>

        {/* 4 Pillars in an Editorial 2x2 Layout with Clean Numbered Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 sm:gap-y-16">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col pt-6 border-t border-[var(--line)] relative group"
            >
              {/* Pillar Number & Title */}
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-sm font-semibold tracking-widest text-[var(--red)]">
                  {"//"} {pillar.number}
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--muted)]">
                  FOUNDATIONAL PILLAR
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[var(--navy)] tracking-tight mb-2">
                {pillar.title}
              </h3>

              <p className="font-serif italic text-base text-[var(--ink)]/90 mb-4 font-normal">
                {pillar.summary}
              </p>

              <p className="text-sm sm:text-base text-[var(--ink)]/75 leading-relaxed font-normal">
                {pillar.elaboration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
