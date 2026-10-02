import React from "react";
import { PlaceholderFrame } from "../common/PlaceholderFrame";

export function SchoolMessage() {
  return (
    <section className="py-20 sm:py-26 lg:py-32 bg-[var(--ivory)] border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Reserved Portrait Placeholder Frame */}
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Layered architectural frame lines */}
              <div className="absolute -inset-2.5 border border-[var(--line)] pointer-events-none hidden sm:block" />

              <div className="relative bg-white p-2.5 sm:p-3 border border-[var(--line)] shadow-sm">
                <PlaceholderFrame
                  aspectRatio="portrait"
                  theme="light"
                  label="School Leadership"
                  sublabel="Deeper Real Vision Academy &bull; Kabusa, Abuja"
                  badge="LEADERSHIP & VALUES"
                  captionLines={[
                    "LEADERSHIP WITH PURPOSE.",
                    "COMMITTED TO INTEGRITY.",
                  ]}
                />
              </div>

              {/* Portrait Caption */}
              <div className="mt-4 text-center sm:text-left">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--muted)] block">
                  Office of the Head of School
                </span>
                <span className="font-serif text-sm font-medium text-[var(--navy)]">
                  Deeper Real Vision Academy &bull; Kabusa, Abuja
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Message Letter */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 h-px bg-[var(--red)]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[var(--navy)]">
                MESSAGE FROM THE SCHOOL
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15]">
              From our school to{" "}
              <span className="italic font-normal">your family.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
              <p>
                Choosing a school is among the most important decisions a family
                undertakes. At Deeper Real Vision Academy, we see every child who
                enters our school as a distinct individual with unique gifts,
                potential, and promise.
              </p>

              <p>
                Our mission across Creche, Nursery, Primary, and Junior
                Secondary is to cultivate a supportive environment where moral
                clarity and academic discipline progress side by side. We train
                our pupils to think clearly, act kindly, and take pride in steady
                growth.
              </p>

              <p className="font-serif italic text-[var(--navy)] text-lg sm:text-xl">
                &ldquo;We look forward to welcoming your family to our campus in
                Kabusa, Abuja, and walking alongside you as your child grows.&rdquo;
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
              <div>
                <span className="font-serif text-lg font-medium text-[var(--navy)] block">
                  School Leadership
                </span>
                <span className="text-xs font-mono tracking-wider uppercase text-[var(--muted)]">
                  Deeper Real Vision Academy
                </span>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--navy)]/70 block">
                  MOTTO
                </span>
                <span className="font-serif italic text-sm text-[var(--navy)] font-medium">
                  In God We Trust
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
