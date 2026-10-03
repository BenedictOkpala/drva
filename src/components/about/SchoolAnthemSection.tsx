"use client";

import React, { useState, useRef } from "react";
import { SchoolCrest } from "@/components/brand/SchoolCrest";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { SCHOOL_INFO } from "@/data/schoolData";

interface SchoolAnthemSectionProps {
  /**
   * Path to the real audio file when recorded and uploaded to public/
   * e.g., "/audio/drva-anthem.mp3"
   */
  audioSrc?: string;
}

export function SchoolAnthemSection({ audioSrc }: SchoolAnthemSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioSrc || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "--:--";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-[#E4E7EB] relative overflow-hidden">
      {/* Background Watermark Crest Motif */}
      <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-[0.03] pointer-events-none select-none">
        <SchoolCrest size="xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Context & Heritage */}
          <div className="lg:col-span-6 space-y-6">
            <SectionEyebrow text="OUR ANTHEM" />

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
              The sound of DRVA.
            </h2>

            <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-normal">
              Sung by our learners during morning assemblies and communal gatherings,
              the school anthem serves as a daily reminder of our shared aspirations,
              discipline, and foundational trust in God.
            </p>

            <div className="p-6 bg-white border border-[#E4E7EB] space-y-3 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--red)] shrink-0" />
                <span className="text-xs uppercase tracking-wider text-[var(--navy)] font-bold">
                  FOUNDATIONAL MOTTO
                </span>
              </div>
              <p className="font-heading font-bold text-xl sm:text-2xl text-[var(--navy)]">
                &ldquo;{SCHOOL_INFO.motto}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed font-normal">
                Anchoring our educational mission across Creche, Nursery, Primary,
                and Junior Secondary (JSS1–JSS3).
              </p>
            </div>
          </div>

          {/* Right Column: Audio Player */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 bg-white border border-[#E4E7EB] shadow-xs relative">
              {/* Player Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E4E7EB]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md border border-[#E4E7EB] bg-[#F7F8FA] flex items-center justify-center">
                    <span className="font-heading text-sm font-bold text-[var(--navy)]">
                      D
                    </span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[var(--navy)] font-bold block">
                      DRVA School Anthem
                    </span>
                    <span className="text-xs text-[var(--muted)] font-medium block">
                      Deeper Real Vision Academy
                    </span>
                  </div>
                </div>

                <span className="text-xs tracking-wider uppercase px-2.5 py-0.5 bg-[#F7F8FA] border border-[#E4E7EB] text-[var(--navy)] font-semibold">
                  HERITAGE
                </span>
              </div>

              {/* Player Body / Track Representation */}
              <div className="space-y-6">
                {/* Audio Status Strip */}
                <div className="p-4 bg-[#F7F8FA] border border-[#E4E7EB] flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[var(--navy)] font-bold block">
                      Recording Status
                    </span>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {audioSrc
                        ? "Official school recording ready."
                        : "Official pupil recording in preparation."}
                    </p>
                  </div>

                  {/* Play / Pause Control Button */}
                  {audioSrc ? (
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="w-12 h-12 bg-[var(--navy)] text-white hover:bg-[#1C3C5E] active:scale-95 transition-all flex items-center justify-center shrink-0 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)]"
                      aria-label={isPlaying ? "Pause anthem" : "Play anthem"}
                    >
                      {isPlaying ? (
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 fill-current ml-0.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      )}
                    </button>
                  ) : (
                    <div
                      className="w-12 h-12 bg-white border border-[#E4E7EB] text-[var(--muted)] flex items-center justify-center shrink-0 cursor-not-allowed opacity-80"
                      title="Pupil recording is currently in production"
                    >
                      <svg
                        className="w-5 h-5 fill-current opacity-40 ml-0.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Progress Bar & Timing Track */}
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-[#E4E7EB] relative overflow-hidden rounded-full">
                    <div
                      className="h-full bg-[var(--navy)] transition-all duration-200"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[var(--muted)] font-medium">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Audio Note */}
                <div className="pt-4 border-t border-[#E4E7EB] text-xs text-[var(--ink)]/75 font-normal leading-relaxed">
                  <p>
                    The official DRVA anthem recording by the school choir is
                    scheduled for release. When published, playback will be enabled
                    directly within this player.
                  </p>
                </div>
              </div>

              {/* Hidden HTML5 Audio Element */}
              {audioSrc && (
                <audio
                  ref={audioRef}
                  src={audioSrc}
                  preload="none"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleEnded}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
