import React from "react";
import Link from "next/link";
import { SectionEyebrow } from "./SectionEyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  theme?: "light" | "navy" | "ivory";
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
  const isIvory = theme === "ivory";

  const bgClass = isNavy
    ? "bg-[var(--navy)] text-white border-[var(--color-line-dark)]"
    : isIvory
    ? "bg-[var(--ivory)] text-[var(--ink)] border-[var(--line)]"
    : "bg-[var(--paper)] text-[var(--ink)] border-[var(--line)]";

  return (
    <section className={`relative overflow-hidden border-b ${bgClass}`}>
      {/* Background Architectural Grid Lines */}
      <div
        className={`absolute inset-0 ${
          isNavy ? "pattern-fine-grid-dark" : "pattern-fine-grid"
        } opacity-35 pointer-events-none`}
      />

      {/* Rhythmic vertical guideline */}
      <div
        className={`absolute top-0 right-1/3 w-px h-full ${
          isNavy ? "bg-slate-800/40" : "bg-[var(--line)]/50"
        } hidden lg:block pointer-events-none`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-22 relative z-10">
        {/* Breadcrumb row if supplied */}
        {breadcrumbLabel && (
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase mb-6 text-[var(--muted)]"
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
              <div className="flex flex-wrap items-center gap-3.5 mb-5">
                <SectionEyebrow
                  text={eyebrow}
                  theme={isNavy ? "dark" : "light"}
                />
                {badge && (
                  <span
                    className={`text-[9px] sm:text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 border ${
                      isNavy
                        ? "bg-slate-900/60 text-slate-300 border-slate-700"
                        : "bg-white/80 text-[var(--navy)] border-[var(--line)] shadow-xs"
                    }`}
                  >
                    {badge}
                  </span>
                )}
              </div>

              {/* Heading */}
              <h1
                className={`font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.14] mb-5 ${
                  isNavy ? "text-white" : "text-[var(--navy)]"
                }`}
              >
                {title}
                {subtitle && (
                  <span
                    className={`block italic font-normal mt-1 text-2xl sm:text-3xl lg:text-4xl ${
                      isNavy ? "text-slate-300" : "text-[var(--navy)]/90"
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
            <div className="flex flex-wrap items-center gap-3.5 mb-5">
              <SectionEyebrow
                text={eyebrow}
                theme={isNavy ? "dark" : "light"}
              />
              {badge && (
                <span
                  className={`text-[9px] sm:text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 border ${
                    isNavy
                      ? "bg-slate-900/60 text-slate-300 border-slate-700"
                      : "bg-[var(--ivory)] text-[var(--navy)] border-[var(--line)]"
                  }`}
                >
                  {badge}
                </span>
              )}
            </div>

            {/* Heading */}
            <h1
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.14] mb-5 ${
                isNavy ? "text-white" : "text-[var(--navy)]"
              }`}
            >
              {title}
              {subtitle && (
                <span
                  className={`block italic font-normal mt-1 text-2xl sm:text-3xl lg:text-4xl ${
                    isNavy ? "text-slate-300" : "text-[var(--navy)]/90"
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
