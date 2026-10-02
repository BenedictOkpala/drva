import React from "react";
import Link from "next/link";
import { PROGRAMMES } from "@/data/homeData";

export function LearningJourney() {
  return (
    <section id="academics" className="py-20 sm:py-26 lg:py-32 bg-[var(--paper)] border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Continuity Indicator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-18 pb-8 border-b border-[var(--line)] items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[var(--red)]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[var(--navy)]">
                LEARNING CONTINUUM
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
              Growing at every stage.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed font-normal">
              A carefully connected academic pathway guiding young learners from
              their earliest steps in the Creche through to completion of Junior
              Secondary at JSS3.
            </p>
          </div>
        </div>

        {/* 4 Connected Progression Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-[var(--line)]">
          {PROGRAMMES.map((programme, index) => (
            <div
              key={programme.number}
              className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-[var(--ivory)]/40 relative group ${
                index < PROGRAMMES.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-[var(--line)]"
                  : ""
              }`}
            >
              {/* Stepping Connector Indicator on Desktop */}
              {index < PROGRAMMES.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-3 top-10 w-6 h-6 rounded-full bg-white border border-[var(--line)] text-[10px] text-[var(--muted)] font-mono z-10 shadow-2xs group-hover:border-[var(--red)] transition-colors">
                  &rarr;
                </div>
              )}

              <div>
                {/* Top Number & Stage */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--line)]">
                  <span className="font-mono text-3xl font-light text-[var(--navy)]">
                    {programme.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 bg-[var(--ivory)] text-[var(--navy)] border border-[var(--line)]">
                    {programme.ageRange}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl text-[var(--navy)] tracking-tight">
                  {programme.title}
                </h3>
                <p className="font-serif italic text-sm text-[var(--muted)] mt-1 mb-4">
                  {programme.subtitle}
                </p>

                {/* Body Description */}
                <p className="text-xs sm:text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                  {programme.description}
                </p>
              </div>

              {/* Developmental Pillars & Stage Anchor */}
              <div className="mt-8 pt-5 border-t border-[var(--line)]/70 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] block mb-2">
                    Developmental Focus
                  </span>
                  <ul className="space-y-1.5">
                    {programme.focusAreas.map((area, i) => (
                      <li
                        key={i}
                        className="text-xs text-[var(--ink)]/85 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[var(--red)] shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={programme.anchor}
                    className="text-xs font-mono uppercase tracking-wider font-semibold text-[var(--navy)] hover:text-[var(--red)] group-hover:translate-x-0.5 transition-all flex items-center gap-1.5"
                  >
                    <span>Stage details</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
