"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/galleryData";
import { PlaceholderFrame } from "@/components/common/PlaceholderFrame";

interface GalleryImageCardProps {
  item: GalleryItem;
  onClick: () => void;
  priority?: boolean;
}

export function GalleryImageCard({
  item,
  onClick,
  priority = false,
}: GalleryImageCardProps) {
  const [imgError, setImgError] = useState(false);

  // Map gallery item aspect ratio to PlaceholderFrame aspect ratio
  const placeholderAspect =
    item.aspectRatio === "portrait"
      ? "portrait"
      : item.aspectRatio === "square"
      ? "square"
      : item.aspectRatio === "feature"
      ? "wide"
      : "wide";

  const cardSpanClass =
    item.aspectRatio === "feature"
      ? "md:col-span-2 md:row-span-2"
      : item.aspectRatio === "portrait"
      ? "md:row-span-2"
      : "";

  return (
    <div
      className={`group relative overflow-hidden bg-white border border-[#E4E7EB] shadow-xs transition-all duration-300 hover:shadow-md hover:border-[var(--navy)]/40 cursor-pointer flex flex-col justify-between ${cardSpanClass}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View photograph: ${item.title}`}
    >
      {/* Visual media container */}
      <div className="relative w-full h-full overflow-hidden bg-[#F7F8FA]">
        {item.src && !imgError ? (
          <div className="relative w-full h-full min-h-[260px]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              onError={() => setImgError(true)}
              priority={priority}
            />
          </div>
        ) : (
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <PlaceholderFrame
              aspectRatio={placeholderAspect}
              theme="light"
              label={item.title}
              sublabel={item.category}
              badge={item.badge || item.category.toUpperCase()}
            />
          </div>
        )}

        {/* Hover overlay with zoom icon and badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D2F]/90 via-[#0B1D2F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white pointer-events-none">
          <div className="flex justify-between items-start">
            <span className="text-xs uppercase tracking-wider px-2.5 py-0.5 bg-slate-900/80 text-[var(--blue-soft)] border border-slate-700 font-bold">
              {item.category}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-white leading-snug mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-slate-200 line-clamp-2">
              {item.caption}
            </p>
          </div>
        </div>
      </div>

      {/* Static bottom editorial card meta */}
      <div className="p-4 bg-white border-t border-[#E4E7EB] flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold">
              {item.category}
            </span>
            {item.dateOrTerm && (
              <>
                <span className="text-xs text-[var(--muted)]">&bull;</span>
                <span className="text-xs text-[var(--muted)] font-medium">
                  {item.dateOrTerm}
                </span>
              </>
            )}
          </div>
          <h3 className="font-heading font-bold text-base text-[var(--navy)] truncate group-hover:text-[var(--blue)] transition-colors">
            {item.title}
          </h3>
        </div>

        <span className="text-xs font-bold text-[var(--navy)]/70 group-hover:text-[var(--navy)] transition-colors shrink-0">
          View &rarr;
        </span>
      </div>
    </div>
  );
}
