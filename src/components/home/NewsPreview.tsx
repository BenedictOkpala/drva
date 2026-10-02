import React from "react";
import Link from "next/link";
import { SCHOOL_MOMENTS } from "@/data/homeData";
import { PlaceholderFrame } from "../common/PlaceholderFrame";

export function NewsPreview() {
  return (
    <section className="py-20 sm:py-26 lg:py-32 bg-[var(--paper)] border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 pb-8 border-b border-[var(--line)] gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[var(--red)]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[var(--navy)]">
                NEWS & STORIES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
              Dispatches from DRVA.
            </h2>
          </div>

          <div className="max-w-md">
            <span className="inline-block px-2.5 py-0.5 bg-[var(--ivory)] border border-[var(--line)] text-[10px] font-mono tracking-wider uppercase text-[var(--muted)] mb-2 font-medium">
              Editorial Dispatches &bull; Placeholders
            </span>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Future student achievements, termly showcases, competitions, and
              administrative notices will be published here.
            </p>
          </div>
        </div>

        {/* 3 Story Previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SCHOOL_MOMENTS.map((story, index) => (
            <article
              key={index}
              className="flex flex-col justify-between group border-b md:border-b-0 pb-8 md:pb-0 border-[var(--line)]"
            >
              <div>
                {/* Visual Thumbnail Placeholder */}
                <div className="relative mb-6 overflow-hidden border border-[var(--line)] bg-white p-1.5 transition-transform duration-200 group-hover:-translate-y-0.5 shadow-2xs">
                  <PlaceholderFrame
                    aspectRatio="video"
                    theme="light"
                    label={story.category}
                    sublabel="Event / Activity Photography Slot"
                    badge={story.tag}
                    showOverlayMotif={false}
                  />
                </div>

                {/* Category & Status */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="uppercase tracking-widest text-[var(--navy)] font-semibold">
                    {story.category}
                  </span>
                  <span className="text-[var(--muted)]">{story.dateOrStatus}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--navy)] group-hover:text-[var(--red)] transition-colors tracking-tight leading-snug mb-3">
                  {story.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[var(--ink)]/75 leading-relaxed font-normal">
                  {story.excerpt}
                </p>
              </div>

              {/* Story Read Link */}
              <div className="mt-6 pt-4 border-t border-[var(--line)]/60 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)]">
                  DRVA DISPATCH
                </span>
                <Link
                  href={story.href || "/school-life"}
                  className="text-xs font-mono tracking-wide font-semibold text-[var(--navy)] group-hover:text-[var(--red)] group-hover:translate-x-1 transition-all flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
