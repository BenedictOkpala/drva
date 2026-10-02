import React from "react";
import Link from "next/link";

export function Introduction() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-[var(--ivory)] border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow, Founding Tag & Display Heading */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-5 h-px bg-[var(--red)]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[var(--navy)]">
                OUR SCHOOL & FOUNDATION
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] leading-[1.16] tracking-tight">
              A place children can{" "}
              <span className="italic font-normal">truly belong.</span>
            </h2>

            <div className="mt-8 pt-8 border-t border-[var(--line)] hidden lg:block space-y-4">
              <div className="flex items-center gap-4 text-xs font-mono text-[var(--navy)]">
                <span className="px-2.5 py-1 bg-white border border-[var(--line)] font-semibold uppercase">
                  EST. OCTOBER 2016
                </span>
                <span className="text-[var(--muted)] uppercase">KABUSA, ABUJA</span>
              </div>
              <p className="font-serif italic text-base text-[var(--muted)] leading-relaxed">
                &ldquo;Where academic curiosity is nurtured alongside moral conviction and enduring diligence.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Typographic Narrative & Verified Stage Highlights */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4 text-[var(--ink)]/85">
            <p className="text-xl sm:text-2xl font-serif text-[var(--navy)] leading-relaxed font-normal">
              Deeper Real Vision Academy provides a supportive, purposeful
              environment in Kabusa, Abuja, where children learn with confidence,
              develop unshakeable character, and experience the joy of genuine
              understanding.
            </p>

            <div className="h-px w-16 bg-[var(--red)] my-6" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base leading-relaxed text-[var(--ink)]/80">
              <div>
                <h3 className="font-serif text-lg font-medium text-[var(--navy)] mb-2">
                  Known as Individuals
                </h3>
                <p className="text-sm sm:text-base">
                  From their earliest days in our Creche through to Junior
                  Secondary (JSS1&ndash;JSS3), we ensure every pupil is recognized,
                  listened to, and given the steady guidance they need to
                  progress with confidence.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-medium text-[var(--navy)] mb-2">
                  Anchored in Values
                </h3>
                <p className="text-sm sm:text-base">
                  Rooted in our motto, <em>&ldquo;In God We Trust&rdquo;</em>, we
                  couple intellectual discovery with integrity, kindness, and
                  mutual respect. Sound character and academic discipline go hand
                  in hand.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="p-5 bg-[var(--paper)] border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 bg-[var(--red)]" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)]">
                      Four Progressive Educational Stages
                    </span>
                  </div>
                  <span className="font-serif text-sm sm:text-base text-[var(--navy)] font-medium block">
                    Creche &bull; Nursery &bull; Primary &bull; Junior Secondary (JSS1&ndash;JSS3)
                  </span>
                </div>
                <Link
                  href="/academics"
                  className="text-xs font-mono uppercase tracking-wider font-semibold text-[var(--navy)] hover:text-[var(--red)] flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  <span>Explore stages</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
