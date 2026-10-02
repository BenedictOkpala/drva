import React from "react";

interface SectionEyebrowProps {
  text: string;
  theme?: "light" | "dark";
  centered?: boolean;
  className?: string;
}

export function SectionEyebrow({
  text,
  theme = "light",
  centered = false,
  className = "",
}: SectionEyebrowProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`inline-flex items-center gap-2.5 ${
        centered ? "justify-center" : ""
      } ${className}`}
    >
      <span
        className={`w-5 h-px ${
          isDark ? "bg-[var(--red)]" : "bg-[var(--red)]"
        }`}
      />
      <span
        className={`text-xs font-mono tracking-[0.2em] uppercase font-semibold ${
          isDark ? "text-slate-200" : "text-[var(--navy)]"
        }`}
      >
        {text}
      </span>
      {centered && (
        <span
          className={`w-5 h-px ${
            isDark ? "bg-[var(--red)]" : "bg-[var(--red)]"
          }`}
        />
      )}
    </div>
  );
}

