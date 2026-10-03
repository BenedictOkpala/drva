import React from "react";
import Link from "next/link";
import { SCHOOL_MOMENTS } from "@/data/homeData";
import { PlaceholderFrame } from "../common/PlaceholderFrame";

export function NewsPreview() {
  return (
    <section className="py-20 sm:py-26 lg:py-30 bg-white border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 pb-8 border-b border-[#E4E7EB] gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-4 h-0.5 bg-[var(--red)]" />
              <span className="text-xs tracking-wider uppercase font-bold text-[var(--navy)]">
                NEWS &amp; STORIES
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
              Dispatches from DRVA.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Highlights and showcases from student life, academic inquiry, and
              community traditions at Deeper Real Vision Academy.
            </p>
          </div>
        </div>

        {/* 3 Story Previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SCHOOL_MOMENTS.map((story, index) => (
            <article
              key={index}
              className="flex flex-col justify-between group border-b md:border-b-0 pb-8 md:pb-0 border-[#E4E7EB]"
            >
              <div>
                {/* Visual Thumbnail Frame */}
                <div className="relative mb-6 overflow-hidden border border-[#E4E7EB] bg-white p-1.5 transition-transform duration-200 group-hover:-translate-y-0.5 shadow-2xs">
                  <PlaceholderFrame
                    aspectRatio="video"
                    theme="light"
                    label={story.category}
                    sublabel="Deeper Real Vision Academy"
                    badge={story.tag}
                  />
                </div>

                {/* Category & Status */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="uppercase tracking-wider text-[var(--navy)] font-bold">
                    {story.category}
                  </span>
                  <span className="text-[var(--muted)] font-medium">{story.dateOrStatus}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--navy)] group-hover:text-[var(--red)] transition-colors tracking-tight leading-snug mb-3">
                  {story.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[var(--ink)]/75 leading-relaxed font-normal">
                  {story.excerpt}
                </p>
              </div>

              {/* Story Read Link */}
              <div className="mt-6 pt-4 border-t border-[#E4E7EB] flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
                  DRVA Dispatch
                </span>
                <Link
                  href={story.href || "/school-life"}
                  className="text-xs uppercase tracking-wider font-bold text-[var(--navy)] group-hover:text-[var(--red)] group-hover:translate-x-1 transition-all flex items-center gap-1"
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
