import React from "react";

interface PlaceholderFrameProps {
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "hero" | "tall" | "panorama";
  theme?: "light" | "dark" | "warm";
  label?: string;
  sublabel?: string;
  badge?: string;
  captionLines?: string[];
  className?: string;
  showOverlayMotif?: boolean;
}

export function PlaceholderFrame({
  aspectRatio = "wide",
  theme = "light",
  label = "Campus Life",
  sublabel = "Deeper Real Vision Academy",
  badge,
  className = "",
}: PlaceholderFrameProps) {
  const aspectClasses = {
    video: "aspect-[16/9]",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/10]",
    hero: "aspect-[4/3] lg:aspect-[5/4]",
    tall: "aspect-[4/5]",
    panorama: "aspect-[21/9]",
  };

  const isDark = theme === "dark";

  const bgStyle = isDark
    ? "bg-[#0B1D2F] text-slate-200 border border-[#24415F]"
    : "bg-[#F7F8FA] text-[var(--ink)] border border-[#E4E7EB]";

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-300 ${aspectClasses[aspectRatio]} ${bgStyle} ${className}`}
      role="img"
      aria-label={`${label} - ${sublabel}`}
    >
      {/* Clean subtle pattern */}
      <div
        className={`absolute inset-0 ${
          isDark ? "pattern-fine-grid-dark" : "pattern-fine-grid"
        } opacity-30`}
      />

      {/* Clean modern interior container */}
      <div className="absolute inset-4 sm:inset-6 flex flex-col justify-between pointer-events-none select-none">
        {/* Top bar / badge */}
        <div className="flex items-center justify-between gap-2">
          {badge ? (
            <span
              className={`text-xs font-semibold px-2.5 py-1 ${
                isDark
                  ? "bg-slate-900/80 text-slate-300 border border-slate-700/60"
                  : "bg-white text-[var(--navy)] border border-[#E4E7EB] shadow-xs"
              }`}
            >
              {badge}
            </span>
          ) : (
            <span
              className={`text-xs font-medium ${
                isDark ? "text-slate-400" : "text-[var(--muted)]"
              }`}
            >
              DRVA &bull; Sheretti, Abuja
            </span>
          )}

          <span
            className={`text-xs ${
              isDark ? "text-slate-400" : "text-[var(--muted)]"
            }`}
          >
            Est. 2015
          </span>
        </div>

        {/* Center clean visual icon and text */}
        <div className="my-auto text-center px-4">
          <div
            className={`inline-flex items-center justify-center w-11 h-11 mb-3 rounded-md border ${
              isDark
                ? "border-slate-700/60 bg-slate-900/40 text-slate-300"
                : "border-[#E4E7EB] bg-white text-[var(--navy)] shadow-xs"
            }`}
          >
            <svg
              className="w-5 h-5 opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <p
            className={`font-heading font-semibold text-base sm:text-lg tracking-tight ${
              isDark ? "text-white" : "text-[var(--navy)]"
            }`}
          >
            {label}
          </p>
          <p
            className={`text-xs mt-1 max-w-xs mx-auto ${
              isDark ? "text-slate-400" : "text-[var(--muted)]"
            }`}
          >
            {sublabel}
          </p>
        </div>

        {/* Bottom clean status */}
        <div
          className={`flex justify-between items-center text-xs ${
            isDark ? "text-slate-400" : "text-[var(--muted)]"
          }`}
        >
          <span>Deeper Real Vision Academy</span>
          <span>In God We Trust</span>
        </div>
      </div>
    </div>
  );
}
