import React from "react";
import Link from "next/link";
import { SchoolCrest } from "../brand/SchoolCrest";
import { MILESTONE_DATA } from "@/data/homeData";

export function Milestone() {
  return (
    <section className="py-18 sm:py-24 bg-[#F7F8FA] border-b border-[#E4E7EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-14 bg-white border border-[#E4E7EB] relative shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Crest & Milestone Date Stamp */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-[#F7F8FA] border border-[#E4E7EB] text-center">
              <SchoolCrest size="lg" priority />
              <div className="mt-5 pt-4 border-t border-[#E4E7EB] w-full">
                <span className="font-heading font-bold text-2xl sm:text-3xl text-[var(--navy)] tracking-tight block">
                  {MILESTONE_DATA.years}
                </span>
                <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold mt-1 block">
                  A DECADE OF DRVA
                </span>
              </div>
            </div>

            {/* Right: Commemorative Narrative & Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-0.5 bg-[var(--red)]" />
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--navy)]">
                  {MILESTONE_DATA.eyebrow}
                </span>
              </div>

              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--navy)] tracking-tight leading-[1.15]">
                Ten years of learning, character and community.
              </h3>

              <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed font-normal">
                {MILESTONE_DATA.description}
              </p>

              {/* Verified Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E4E7EB]">
                {MILESTONE_DATA.details.map((item, idx) => (
                  <div key={idx}>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] block">
                      {item.label}
                    </span>
                    <span className="font-heading text-sm font-bold text-[var(--navy)] mt-0.5 block">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Link to About */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[var(--navy)] hover:text-[var(--red)] group transition-colors"
                >
                  <span>Read our story &amp; background</span>
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
