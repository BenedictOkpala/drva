import React from "react";
import Link from "next/link";
import { SectionEyebrow } from "./SectionEyebrow";

interface AdmissionsCTAProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
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
  subheading,
  italicHeading,
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
      className={`py-20 sm:py-28 bg-[#F7F8FA] relative overflow-hidden border-b border-[#E4E7EB] ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Clean Framing Box */}
        <div className="p-8 sm:p-12 lg:p-16 bg-white border border-[#E4E7EB] shadow-sm">
          {/* Eyebrow */}
          <div className="flex justify-center mb-4">
            <SectionEyebrow text={eyebrow} centered />
          </div>

          {/* Main Heading */}
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mb-5">
            {heading}
            {(subheading || italicHeading || (!subheading && !italicHeading && "belong and grow.")) && (
              <span className="block font-normal text-[var(--navy)]/85 mt-1 text-2xl sm:text-3xl lg:text-4xl">
                {subheading || italicHeading || "belong and grow."}
              </span>
            )}
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[var(--ink)]/80 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCtaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white bg-[var(--navy)] hover:bg-[#1C3C5E] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] shadow-xs"
            >
              {primaryCtaText}
            </Link>
            {secondaryCtaText && (
              <Link
                href={secondaryCtaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-[var(--navy)] hover:bg-[#F7F8FA] bg-white border border-[#E4E7EB] transition-all duration-150"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>

          {/* Stage Note */}
          <div className="mt-8 pt-6 border-t border-[#E4E7EB] text-xs font-medium text-[var(--muted)]">
            Enrolling for Creche, Nursery, Primary &amp; Junior Secondary (JSS1&ndash;JSS3) Sessions
          </div>
        </div>
      </div>
    </section>
  );
}
