import React from "react";
import Link from "next/link";
import { PROGRAMMES } from "@/data/homeData";

export function LearningJourney() {
  return (
    <section id="academics" className="py-20 sm:py-26 lg:py-30 bg-white border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-18 pb-8 border-b border-[#E4E7EB] items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                LEARNING CONTINUUM
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#E4E7EB]">
          {PROGRAMMES.map((programme, index) => (
            <div
              key={programme.number}
              className={`p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:bg-[#F7F8FA] relative group ${
                index < PROGRAMMES.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-[#E4E7EB]"
                  : ""
              }`}
            >
              <div>
                {/* Top Number & Stage */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E4E7EB]">
                  <span className="font-heading font-extrabold text-2xl text-[var(--navy)]">
                    {programme.number}
                  </span>
                  <span className="text-xs font-semibold uppercase px-2 py-0.5 bg-[#F7F8FA] text-[var(--navy)] border border-[#E4E7EB]">
                    {programme.ageRange}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--navy)] tracking-tight">
                  {programme.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted)] mt-1 mb-4 font-medium">
                  {programme.subtitle}
                </p>

                {/* Body Description */}
                <p className="text-xs sm:text-sm text-[var(--ink)]/80 leading-relaxed font-normal">
                  {programme.description}
                </p>
              </div>

              {/* Developmental Pillars & Stage Anchor */}
              <div className="mt-8 pt-5 border-t border-[#E4E7EB] space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] block mb-2">
                    Developmental Focus
                  </span>
                  <ul className="space-y-1.5">
                    {programme.focusAreas.map((area, i) => (
                      <li
                        key={i}
                        className="text-xs text-[var(--ink)]/85 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={programme.anchor}
                    className="text-xs uppercase tracking-wider font-bold text-[var(--navy)] hover:text-[var(--red)] group-hover:translate-x-0.5 transition-all flex items-center gap-1.5"
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
