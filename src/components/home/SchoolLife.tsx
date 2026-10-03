import React from "react";
import Link from "next/link";
import { PlaceholderFrame } from "../common/PlaceholderFrame";

export function SchoolLife() {
  const facets = [
    {
      category: "ACADEMICS & DISCOVERY",
      title: "Classroom Collaboration",
      description: "Inquiry-led discussions, laboratory investigations, and attentive guided instruction.",
    },
    {
      category: "CREATIVITY & EXPRESSION",
      title: "Arts & Music Performance",
      description: "Visual arts, choral singing, cultural showcases, and young innovators workshops.",
    },
    {
      category: "MOVEMENT & HEALTH",
      title: "Physical Education & Athletics",
      description: "Team sports, track disciplines, outdoor movement, and inter-house athletic camaraderie.",
    },
  ];

  return (
    <section id="school-life" className="py-20 sm:py-26 lg:py-30 bg-[#0B1D2F] text-white relative overflow-hidden border-b border-[#24415F]">
      {/* Fine grid overlay */}
      <div className="absolute inset-0 pattern-fine-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-18 pb-8 border-b border-[#24415F] items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs uppercase tracking-wider font-bold text-slate-200">
                LIFE AT DRVA
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
              Learning happens everywhere.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Education at DRVA extends across classrooms, athletic fields,
              creative studios, and shared fellowship moments that build lasting
              friendships and character.
            </p>
          </div>
        </div>

        {/* 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          {/* Left: Category Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {facets.map((facet, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-900/80 border border-slate-700/80 hover:border-[var(--red)] transition-colors"
                >
                  <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                    {facet.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mb-1.5">
                    {facet.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {facet.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/school-life"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide text-[var(--navy)] bg-white hover:bg-[#F7F8FA] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
              >
                Explore School Life &rarr;
              </Link>
            </div>
          </div>

          {/* Right: Reserved Photo Slots */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 p-2 bg-slate-900/80 border border-slate-700 shadow-lg">
              <PlaceholderFrame
                aspectRatio="wide"
                theme="dark"
                label="Classroom Learning &amp; Inquiry"
                sublabel="Pupils Engaged in Active Discovery"
                badge="CLASSROOM LIFE"
              />
            </div>
            <div className="p-2 bg-slate-900/80 border border-slate-700 shadow-lg">
              <PlaceholderFrame
                aspectRatio="square"
                theme="dark"
                label="Creative Arts &amp; Drama"
                sublabel="Visual &amp; Performing Arts"
                badge="CREATIVITY"
              />
            </div>
            <div className="p-2 bg-slate-900/80 border border-slate-700 shadow-lg">
              <PlaceholderFrame
                aspectRatio="square"
                theme="dark"
                label="Sports &amp; Athletics"
                sublabel="Athletic Movement &amp; Team Spirit"
                badge="ATHLETICS"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
