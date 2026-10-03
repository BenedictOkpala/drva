"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlaceholderFrame } from "@/components/common/PlaceholderFrame";

export function LifeAtDRVA() {
  const [photoErrors, setPhotoErrors] = useState<{ [key: string]: boolean }>({});

  const handleImgError = (id: string) => {
    setPhotoErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="life-at-drva" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-18 pb-8 border-b border-[#E4E7EB] items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--navy)]">
                LIFE AT DRVA
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
              Learning, culture and moments worth celebrating.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-4 space-y-4">
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed font-normal">
              A glimpse into everyday learning, school activities and memorable
              moments from the DRVA community.
            </p>
            <div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[var(--navy)] hover:text-[var(--red)] transition-colors group"
              >
                <span>Explore all photographs</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Editorial Photo Showcase (4 Independent Photographs) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* PHOTO 1: Cultural Day Portrait (Pupil in Traditional Beadwork) */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col">
            <div className="bg-[#F7F8FA] p-2.5 sm:p-3 border border-[#E4E7EB] shadow-xs flex flex-col justify-between h-full">
              <div className="relative w-full aspect-[4/5] bg-[#E4E7EB] overflow-hidden">
                {!photoErrors["photo-1"] ? (
                  <Image
                    src="/images/drva/cultural-day/pupil-traditional-beadwork.png"
                    alt="Young DRVA pupil wearing traditional attire with beadwork celebrating Cultural Day"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    onError={() => handleImgError("photo-1")}
                  />
                ) : (
                  <PlaceholderFrame
                    aspectRatio="portrait"
                    theme="light"
                    label="Cultural Day"
                    sublabel="Pupil in traditional ceremonial beadwork"
                    badge="CULTURAL DAY"
                  />
                )}
              </div>
              <div className="pt-3 mt-2 border-t border-[#E4E7EB] flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--navy)]">
                  Cultural Day
                </span>
                <span className="text-xs text-[var(--muted)] font-medium">
                  Heritage Presentation
                </span>
              </div>
            </div>
          </div>

          {/* PHOTO 3: Learning in practice (Pupils Gathered Around Computer) */}
          <div className="md:col-span-6 lg:col-span-8 flex flex-col">
            <div className="bg-[#F7F8FA] p-2.5 sm:p-3 border border-[#E4E7EB] shadow-xs flex flex-col justify-between h-full">
              <div className="relative w-full aspect-[16/10] bg-[#E4E7EB] overflow-hidden">
                {!photoErrors["photo-3"] ? (
                  <Image
                    src="/images/drva/learning/pupils-learning-computing.png"
                    alt="DRVA pupils gathered around a computer during classroom learning"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
                    className="object-cover"
                    onError={() => handleImgError("photo-3")}
                  />
                ) : (
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="light"
                    label="Learning in practice"
                    sublabel="Pupils engaged in classroom discovery"
                    badge="CLASSROOM PRACTICE"
                  />
                )}
              </div>
              <div className="pt-3 mt-2 border-t border-[#E4E7EB] flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--navy)]">
                  Learning in practice
                </span>
                <span className="text-xs text-[var(--muted)] font-medium">
                  Classroom Engagement
                </span>
              </div>
            </div>
          </div>

          {/* PHOTO 2: Cultural Day Portrait (Pupil in Blue Traditional Attire) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col">
            <div className="bg-[#F7F8FA] p-2.5 sm:p-3 border border-[#E4E7EB] shadow-xs flex flex-col justify-between h-full">
              <div className="relative w-full aspect-[4/5] bg-[#E4E7EB] overflow-hidden">
                {!photoErrors["photo-2"] ? (
                  <Image
                    src="/images/drva/cultural-day/pupil-blue-traditional-whisk.png"
                    alt="DRVA pupil in blue traditional attire holding ceremonial whisk at Cultural Day"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover"
                    onError={() => handleImgError("photo-2")}
                  />
                ) : (
                  <PlaceholderFrame
                    aspectRatio="portrait"
                    theme="light"
                    label="Cultural Day"
                    sublabel="Pupil in blue traditional ceremonial attire"
                    badge="CULTURAL DAY"
                  />
                )}
              </div>
              <div className="pt-3 mt-2 border-t border-[#E4E7EB] flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--navy)]">
                  Cultural Day
                </span>
                <span className="text-xs text-[var(--muted)] font-medium">
                  Cultural Festivities
                </span>
              </div>
            </div>
          </div>

          {/* PHOTO 4: Student Achievement (Favour Chima Essay Award) */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col">
            <div className="bg-[#F7F8FA] p-2.5 sm:p-3 border border-[#E4E7EB] shadow-xs flex flex-col justify-between h-full">
              <div className="relative w-full aspect-[16/10] bg-[#E4E7EB] overflow-hidden">
                {!photoErrors["photo-4"] ? (
                  <Image
                    src="/images/drva/achievements/favour-chima-essay-award.png"
                    alt="DRVA pupil Favour Chima receiving her first place certificate for the 2026 International Day of Education Essay Competition"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
                    className="object-cover"
                    onError={() => handleImgError("photo-4")}
                  />
                ) : (
                  <PlaceholderFrame
                    aspectRatio="wide"
                    theme="light"
                    label="Student Achievement"
                    sublabel="Meireer Education Foundation 2026 Essay Competition"
                    badge="STUDENT ACHIEVEMENT"
                  />
                )}
              </div>
              <div className="pt-3 mt-2 border-t border-[#E4E7EB] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-[var(--red)]">
                    Student Achievement
                  </span>
                  <span className="text-xs text-[var(--muted)] font-medium">
                    2026 Milestone
                  </span>
                </div>
                <p className="text-xs text-[var(--ink)]/85 leading-relaxed">
                  Favour Chima placed first in the Junior Secondary category of the
                  Meireer Education Foundation&apos;s 2026 International Day of
                  Education Essay Competition.
                </p>
                <div className="pt-1">
                  <a
                    href="https://themeireerfoundation.org/blog/press-release/mef-international-day-for-education-essay-competition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-[var(--navy)] hover:text-[var(--red)] transition-colors"
                  >
                    <span>Read the story</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
