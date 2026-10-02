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
  captionLines,
  className = "",
  showOverlayMotif = true,
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
  const isWarm = theme === "warm";

  const bgStyle = isDark
    ? "bg-[var(--navy-dark)] text-slate-200 border border-[var(--color-line-dark)]"
    : isWarm
    ? "bg-[#F3ECE0] text-[var(--ink)] border border-[var(--line)]"
    : "bg-[var(--ivory)] text-[var(--ink)] border border-[var(--line)]";

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-300 group ${aspectClasses[aspectRatio]} ${bgStyle} ${className}`}
      role="img"
      aria-label={`${label} - ${sublabel}`}
    >
      {/* Editorial grid texture */}
      <div
        className={`absolute inset-0 ${
          isDark ? "pattern-fine-grid-dark" : "pattern-fine-grid"
        } opacity-40`}
      />

      {/* Subtle depth layered corner lines */}
      {showOverlayMotif && (
        <>
          <div
            className={`absolute top-3 left-3 w-5 h-5 border-t border-l pointer-events-none transition-opacity duration-300 ${
              isDark ? "border-slate-500/40" : "border-[var(--navy)]/20"
            }`}
          />
          <div
            className={`absolute bottom-3 right-3 w-5 h-5 border-b border-r pointer-events-none transition-opacity duration-300 ${
              isDark ? "border-slate-500/40" : "border-[var(--navy)]/20"
            }`}
          />
        </>
      )}

      {/* Inner editorial composition */}
      <div className="absolute inset-4 sm:inset-6 flex flex-col justify-between pointer-events-none select-none">
        {/* Top bar / badge */}
        <div className="flex items-start justify-between gap-2">
          {badge ? (
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.16em] uppercase font-semibold px-2.5 py-1 ${
                isDark
                  ? "bg-slate-900/70 text-slate-300 border border-slate-700/50"
                  : "bg-white/90 text-[var(--navy)] border border-[var(--line)] shadow-xs"
              }`}
            >
              {badge}
            </span>
          ) : (
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.16em] uppercase font-mono ${
                isDark ? "text-slate-400/80" : "text-[var(--muted)]"
              }`}
            >
              DRVA &bull; KABUSA, ABUJA
            </span>
          )}

          <div
            className={`flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-wider font-mono ${
              isDark ? "text-slate-400/80" : "text-[var(--muted)]"
            }`}
          >
            <span>EST. 2016</span>
          </div>
        </div>

        {/* Center institutional visual graphic */}
        <div className="my-auto text-center px-4">
          <div
            className={`inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 mb-2.5 rounded-none border ${
              isDark
                ? "border-slate-700/60 bg-slate-900/40 text-slate-300"
                : "border-[var(--line)] bg-white/75 text-[var(--navy)] shadow-xs"
            }`}
          >
            {/* Clean book / learning emblem icon */}
            <svg
              className="w-5 h-5 opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.25"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <p
            className={`font-serif text-base sm:text-lg tracking-wide ${
              isDark ? "text-slate-200" : "text-[var(--navy)]"
            }`}
          >
            {label}
          </p>
          <p
            className={`text-xs tracking-normal mt-1 max-w-xs mx-auto ${
              isDark ? "text-slate-400" : "text-[var(--muted)]"
            }`}
          >
            {sublabel}
          </p>
        </div>

        {/* Bottom caption lines if provided */}
        {captionLines && captionLines.length > 0 ? (
          <div
            className={`pt-2 border-t text-[10px] sm:text-[11px] font-mono tracking-[0.14em] uppercase ${
              isDark
                ? "border-slate-800 text-slate-300"
                : "border-[var(--line)] text-[var(--navy)]"
            }`}
          >
            {captionLines.map((line, idx) => (
              <div key={idx} className="leading-tight">
                {line}
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`flex justify-between items-center text-[9px] sm:text-[10px] font-mono tracking-widest uppercase ${
              isDark ? "text-slate-500" : "text-[var(--muted)]/80"
            }`}
          >
            <span>DEEPER REAL VISION ACADEMY</span>
            <span>IN GOD WE TRUST</span>
          </div>
        )}
      </div>
    </div>
  );
}
