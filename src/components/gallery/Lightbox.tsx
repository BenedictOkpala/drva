"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/galleryData";
import { PlaceholderFrame } from "@/components/common/PlaceholderFrame";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1); // loop
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0); // loop
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1D2F]/95 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Container to prevent backdrop click close when clicking content */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#0B1D2F] border border-slate-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/80 bg-slate-900/80 text-white">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider px-2.5 py-1 bg-slate-800 text-[var(--blue-soft)] border border-slate-700 font-bold">
              {currentItem.category}
            </span>
            {currentItem.dateOrTerm && (
              <span className="text-xs text-slate-400 hidden sm:inline font-medium">
                {currentItem.dateOrTerm}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 font-semibold">
              {currentIndex + 1} / {items.length}
            </span>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close photo viewer (Escape)"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Center media viewer area */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] max-h-[60vh] flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 overflow-hidden">
          {/* Navigation Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 text-white bg-slate-900/80 hover:bg-[var(--navy)] border border-slate-700 backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous photograph (Left arrow)"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Navigation Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 text-white bg-slate-900/80 hover:bg-[var(--navy)] border border-slate-700 backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next photograph (Right arrow)"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Image with fallback */}
          <div className="w-full max-w-3xl h-full flex items-center justify-center">
            <LightboxMedia item={currentItem} />
          </div>
        </div>

        {/* Bottom details / caption bar */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 border-t border-slate-700/80 bg-[#0B1D2F] text-white space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
              {currentItem.title}
            </h3>
            {currentItem.badge && (
              <span className="text-xs uppercase tracking-wider px-2 py-0.5 border border-slate-600 text-slate-300 font-semibold">
                {currentItem.badge}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
            {currentItem.caption}
          </p>
          <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
            <span>Deeper Real Vision Academy &bull; Sheretti, Abuja</span>
            <span className="hidden sm:inline">Press Esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LightboxMedia({ item }: { item: GalleryItem }) {
  const [imgError, setImgError] = React.useState(false);

  if (item.src && !imgError) {
    return (
      <div className="relative w-full h-full max-h-[55vh] flex items-center justify-center">
        <Image
          src={item.src}
          alt={item.alt}
          width={1200}
          height={800}
          className="max-h-[55vh] w-auto max-w-full object-contain border border-slate-700/60 shadow-lg"
          onError={() => setImgError(true)}
          priority
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl">
      <PlaceholderFrame
        aspectRatio="wide"
        theme="dark"
        label={item.title}
        sublabel={item.caption}
        badge={item.badge || item.category.toUpperCase()}
      />
    </div>
  );
}
