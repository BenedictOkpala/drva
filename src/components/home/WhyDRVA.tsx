import React from "react";
import { PILLARS } from "@/data/homeData";

export function WhyDRVA() {
  return (
    <section className="py-20 sm:py-26 lg:py-30 bg-white border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20 pb-10 border-b border-[#E4E7EB] items-end">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                WHY DRVA
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
              Distinctive in purpose, uncompromising in care.
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

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 sm:gap-y-16">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col pt-6 border-t border-[#E4E7EB] relative group"
            >
              {/* Pillar Number & Title */}
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs font-bold tracking-wider text-[var(--red)] uppercase">
                  Pillar {pillar.number}
                </span>
                <span className="text-xs tracking-wider uppercase text-[var(--muted)] font-semibold">
                  Foundational Value
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-[var(--navy)] tracking-tight mb-2">
                {pillar.title}
              </h3>

              <p className="font-heading font-medium text-base text-[var(--navy)]/90 mb-3">
                {pillar.summary}
              </p>

              <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed font-normal">
                {pillar.elaboration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
