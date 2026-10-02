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
  label = "School Scene",
  sublabel = "DRVA Campus Life",
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
        } opacity-50`}
      />

      {/* Subtle depth layered corner lines */}
      {showOverlayMotif && (
        <>
          <div
            className={`absolute top-3 left-3 w-6 h-6 border-t border-l pointer-events-none transition-opacity duration-300 ${
              isDark ? "border-slate-500/40" : "border-[var(--navy)]/20"
            }`}
          />
          <div
            className={`absolute bottom-3 right-3 w-6 h-6 border-b border-r pointer-events-none transition-opacity duration-300 ${
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
              className={`text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 ${
                isDark
                  ? "bg-slate-900/70 text-slate-300 border border-slate-700/50"
                  : "bg-white/90 text-[var(--navy)] border border-[var(--line)] shadow-xs"
              }`}
            >
              {badge}
            </span>
          ) : (
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-mono ${
                isDark ? "text-slate-400/80" : "text-[var(--muted)]"
              }`}
            >
              DRVA ARCHIVE
            </span>
          )}

          <div
            className={`flex items-center gap-1.5 text-[10px] tracking-wider font-mono ${
              isDark ? "text-slate-400/80" : "text-[var(--muted)]"
            }`}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--blue)] opacity-70" />
            <span className="uppercase text-[9px]">PHOTOGRAPHY</span>
          </div>
        </div>

        {/* Center editorial focal graphic */}
        <div className="my-auto text-center px-4">
          <div
            className={`inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 mb-2.5 rounded-none border ${
              isDark
                ? "border-slate-700/60 bg-slate-900/40 text-slate-300"
                : "border-[var(--line)] bg-white/75 text-[var(--navy)] shadow-xs"
            }`}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.25"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
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
            <span>CAMPUS LIFE</span>
          </div>
        )}
      </div>
    </div>
  );
}
