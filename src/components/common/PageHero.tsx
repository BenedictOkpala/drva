import React from "react";
import Link from "next/link";
import { SectionEyebrow } from "./SectionEyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  theme?: "light" | "navy" | "subtle";
  badge?: string;
  variant?: "standard" | "story" | "progressive" | "visual" | "action" | "functional";
  rightSlot?: React.ReactNode;
  children?: React.ReactNode;
  breadcrumbLabel?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  theme = "light",
  badge,
  variant = "standard",
  rightSlot,
  children,
  breadcrumbLabel,
}: PageHeroProps) {
  const isNavy = theme === "navy";
  const isSubtle = theme === "subtle";

  const bgClass = isNavy
    ? "bg-[#0B1D2F] text-white border-b border-[#24415F]"
    : isSubtle
    ? "bg-[#F7F8FA] text-[var(--ink)] border-b border-[#E4E7EB]"
    : "bg-white text-[var(--ink)] border-b border-[#E4E7EB]";

  return (
    <section className={`relative overflow-hidden ${bgClass}`}>
      {/* Background Architectural Grid Lines */}
      <div
        className={`absolute inset-0 ${
          isNavy ? "pattern-fine-grid-dark" : "pattern-fine-grid"
        } opacity-30 pointer-events-none`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-15 lg:py-16 relative z-10">
        {/* Breadcrumb row if supplied */}
        {breadcrumbLabel && (
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-xs font-medium mb-6 text-[var(--muted)]"
          >
            <Link
              href="/"
              className="hover:text-[var(--navy)] transition-colors"
            >
              DRVA
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-[var(--navy)] font-semibold">
              {breadcrumbLabel}
            </span>
          </nav>
        )}

        {variant === "story" || variant === "progressive" || variant === "action" || variant === "functional" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              {/* Eyebrow & Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <SectionEyebrow
                  text={eyebrow}
                  theme={isNavy ? "dark" : "light"}
                />
                {badge && (
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 border ${
                      isNavy
                        ? "bg-slate-900/60 text-slate-300 border-slate-700"
                        : "bg-[#F7F8FA] text-[var(--navy)] border-[#E4E7EB]"
                    }`}
                  >
                    {badge}
                  </span>
                )}
              </div>

              {/* Heading */}
              <h1
                className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12] mb-4 ${
                  isNavy ? "text-white" : "text-[var(--navy)]"
                }`}
              >
                {title}
                {subtitle && (
                  <span
                    className={`block font-normal mt-2 text-xl sm:text-2xl lg:text-3xl ${
                      isNavy ? "text-slate-300" : "text-[var(--navy)]/80"
                    }`}
                  >
                    {subtitle}
                  </span>
                )}
              </h1>

              {/* Supporting Copy */}
              {description && (
                <p
                  className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
                    isNavy ? "text-slate-300" : "text-[var(--ink)]/80"
                  }`}
                >
                  {description}
                </p>
              )}

              {children && <div className="mt-8">{children}</div>}
            </div>

            {rightSlot && (
              <div className="lg:col-span-4 flex lg:justify-end">
                {rightSlot}
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-3xl">
            {/* Eyebrow & Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <SectionEyebrow
                text={eyebrow}
                theme={isNavy ? "dark" : "light"}
              />
              {badge && (
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 border ${
                    isNavy
                      ? "bg-slate-900/60 text-slate-300 border-slate-700"
                      : "bg-[#F7F8FA] text-[var(--navy)] border-[#E4E7EB]"
                  }`}
                >
                  {badge}
                </span>
              )}
            </div>

            {/* Heading */}
            <h1
              className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12] mb-4 ${
                isNavy ? "text-white" : "text-[var(--navy)]"
              }`}
            >
              {title}
              {subtitle && (
                <span
                  className={`block font-normal mt-2 text-xl sm:text-2xl lg:text-3xl ${
                    isNavy ? "text-slate-300" : "text-[var(--navy)]/80"
                  }`}
                >
                  {subtitle}
                </span>
              )}
            </h1>

            {/* Supporting Copy */}
            {description && (
              <p
                className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
                  isNavy ? "text-slate-300" : "text-[var(--ink)]/80"
                }`}
              >
                {description}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
