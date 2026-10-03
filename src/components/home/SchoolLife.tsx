"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlaceholderFrame } from "../common/PlaceholderFrame";

export function SchoolLife() {
  const [photoError, setPhotoError] = useState(false);

  const facets = [
    {
      category: "HERITAGE & TRADITIONS",
      title: "Cultural Celebrations & Days",
      description: "Annual Cultural Day presentations celebrating Nigerian heritage, music, and community spirit.",
    },
    {
      category: "CREATIVITY & EXPRESSION",
      title: "Arts, Drama & Speech",
      description: "Visual arts, poetry recitations, stage presentations, and collaborative workshops.",
    },
    {
      category: "MOVEMENT & RESILIENCE",
      title: "Physical Activity & Play",
      description: "Outdoor games, athletic exercises, and team activities fostering camaraderie and health.",
    },
  ];

  return (
    <section id="school-life" className="py-20 sm:py-26 lg:py-30 bg-white text-[var(--navy)] relative overflow-hidden border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-18 pb-8 border-b border-[#E4E7EB] items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--navy)]">
                LIFE AT DRVA
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15]">
              Learning happens everywhere.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed font-normal">
              Education at DRVA extends across classrooms, creative expressions,
              cultural celebrations, and shared fellowship moments that build lasting
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
                  className="p-5 bg-[#F7F8FA] border border-[#E4E7EB] hover:border-[var(--navy)] transition-colors shadow-xs"
                >
                  <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                    {facet.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[var(--navy)] mb-1.5">
                    {facet.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink)]/80 leading-relaxed">
                    {facet.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/school-life"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-[var(--navy)] hover:bg-[#1C3C5E] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] shadow-xs"
              >
                Explore School Life &rarr;
              </Link>
            </div>
          </div>

          {/* Right: Real Cultural Day Photo Feature */}
          <div className="lg:col-span-7">
            <div className="p-2 sm:p-3 bg-[#F7F8FA] border border-[#E4E7EB] shadow-md">
              {!photoError ? (
                <div className="relative w-full aspect-[16/10] bg-[#E4E7EB] overflow-hidden">
                  <Image
                    src="/images/drva/cultural-day/pupil-blue-traditional-whisk.png"
                    alt="DRVA pupil dressed in blue traditional attire holding ceremonial whisk during Cultural Day celebration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                    onError={() => setPhotoError(true)}
                  />
                </div>
              ) : (
                <PlaceholderFrame
                  aspectRatio="wide"
                  theme="light"
                  label="Cultural Day Celebration"
                  sublabel="Pupil in traditional blue ceremonial attire"
                  badge="CULTURAL DAY AT DRVA"
                />
              )}
              <div className="p-4 bg-white border-t border-[#E4E7EB] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[var(--red)] block">
                    CULTURAL DAY &bull; DRVA
                  </span>
                  <p className="text-xs text-[var(--navy)] font-semibold mt-0.5">
                    Celebrating traditions, unity and confidence
                  </p>
                </div>
                <Link
                  href="/gallery"
                  className="text-xs uppercase tracking-wider font-bold text-[var(--navy)] hover:text-[var(--red)] transition-colors shrink-0"
                >
                  View gallery &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
