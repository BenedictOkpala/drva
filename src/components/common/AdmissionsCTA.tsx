import React from "react";
import Link from "next/link";
import { SectionEyebrow } from "./SectionEyebrow";

interface AdmissionsCTAProps {
  eyebrow?: string;
  heading?: string;
  italicHeading?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export function AdmissionsCTA({
  eyebrow = "ADMISSIONS",
  heading = "A place to learn,",
  italicHeading = "belong and grow.",
  description = "Visit the school, meet the team and discover whether DRVA is the right community for your child.",
  primaryCtaText = "Begin an enquiry",
  primaryCtaHref = "/contact",
  secondaryCtaText = "Explore academics",
  secondaryCtaHref = "/academics",
  className = "",
}: AdmissionsCTAProps) {
  return (
    <section
      id="admissions-cta"
      className={`py-24 sm:py-32 lg:py-36 bg-[var(--ivory)] relative overflow-hidden border-b border-[var(--line)] ${className}`}
    >
      {/* Subtle Depth Background Lines */}
      <div className="absolute inset-0 pattern-fine-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--line)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Framing Box with Subtle Depth Motif */}
        <div className="relative p-8 sm:p-14 lg:p-18 bg-[var(--paper)] border border-[var(--line)] shadow-[0_4px_24px_rgba(16,42,67,0.03)]">
          {/* Subtle Corner Markers */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[var(--navy)]/30 pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[var(--navy)]/30 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[var(--navy)]/30 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[var(--navy)]/30 pointer-events-none" />

          {/* Eyebrow */}
          <div className="flex justify-center mb-5">
            <SectionEyebrow text={eyebrow} centered />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mb-6">
            {heading}
            {italicHeading && (
              <span className="block italic font-normal text-[var(--navy)]/90 mt-1">
                {italicHeading}
              </span>
            )}
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCtaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-white bg-[var(--navy)] hover:bg-[var(--navy-light)] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2 shadow-xs"
            >
              {primaryCtaText}
            </Link>
            {secondaryCtaText && (
              <Link
                href={secondaryCtaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-sm font-medium tracking-wide text-[var(--navy)] hover:text-[var(--navy-light)] bg-[var(--ivory)] hover:bg-[var(--ivory-dark)] border border-[var(--line)] transition-all duration-150"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>

          {/* Quiet Stage Note */}
          <div className="mt-8 pt-6 border-t border-[var(--line)]/60 text-xs font-mono tracking-wider uppercase text-[var(--muted)]">
            Enrolling for Creche, Nursery, Primary & Junior Secondary (JSS1&ndash;JSS3) Sessions
          </div>
        </div>
      </div>
    </section>
  );
}

