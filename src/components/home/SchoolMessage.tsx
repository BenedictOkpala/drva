import React from "react";
import { PlaceholderFrame } from "../common/PlaceholderFrame";
import { SCHOOL_INFO } from "@/data/schoolData";

export function SchoolMessage() {
  return (
    <section className="py-20 sm:py-26 lg:py-30 bg-[#F7F8FA] border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait Placeholder Frame */}
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="relative bg-white p-2.5 sm:p-3 border border-[#E4E7EB] shadow-sm">
                <PlaceholderFrame
                  aspectRatio="portrait"
                  theme="light"
                  label={SCHOOL_INFO.leadership.name}
                  sublabel={`${SCHOOL_INFO.leadership.role} • DRVA`}
                  badge="LEADERSHIP &amp; VALUES"
                />
              </div>

              {/* Portrait Caption */}
              <div className="mt-4 text-center sm:text-left">
                <span className="font-heading text-sm font-bold text-[var(--navy)] block">
                  {SCHOOL_INFO.leadership.name}
                </span>
                <span className="text-xs text-[var(--muted)] font-medium">
                  {SCHOOL_INFO.leadership.role} &bull; DRVA
                </span>
              </div>
            </div>
          </div>

          {/* Right: Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                MESSAGE FROM LEADERSHIP
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15]">
              Education prepared for life.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
              <p className="font-heading font-medium text-[var(--navy)] text-lg sm:text-xl leading-relaxed">
                &ldquo;{SCHOOL_INFO.leadership.message}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed font-normal">
                Serving learners across Creche, Nursery, Primary, and Junior
                Secondary (JSS1&ndash;JSS3) in Sheretti, Abuja, our commitment is
                to walk alongside every family with steady encouragement and
                uncompromising integrity.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-[#E4E7EB] flex items-center justify-between">
              <div>
                <span className="font-heading text-lg font-bold text-[var(--navy)] block">
                  {SCHOOL_INFO.leadership.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                  {SCHOOL_INFO.leadership.role}
                </span>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--muted)] block">
                  MOTTO
                </span>
                <span className="font-heading text-sm font-bold text-[var(--navy)]">
                  {SCHOOL_INFO.motto}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
