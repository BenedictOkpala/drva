"use client";

import React, { useState, useMemo } from "react";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GalleryCategory,
  GalleryItem,
} from "@/data/galleryData";
import { GalleryImageCard } from "./GalleryImageCard";
import { Lightbox } from "./Lightbox";

interface GalleryViewProps {
  initialCategory?: GalleryCategory;
}

export function GalleryView({ initialCategory = "All" }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems: GalleryItem[] = useMemo(() => {
    if (activeCategory === "All") {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<GalleryCategory, number> = {
      All: GALLERY_ITEMS.length,
      "Cultural Day": 0,
      Graduation: 0,
      "School Life": 0,
      Events: 0,
    };
    GALLERY_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Bar */}
        <div className="mb-12 border-b border-[#E4E7EB] pb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center flex-wrap gap-2 sm:gap-3" role="tablist" aria-label="Gallery category filters">
              {GALLERY_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const count = categoryCounts[category];

                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] ${
                      isActive
                        ? "text-[var(--navy)] bg-white border border-[#E4E7EB] shadow-xs"
                        : "text-[var(--muted)] hover:text-[var(--navy)] hover:bg-[#F7F8FA]"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[var(--navy)] text-white"
                          : "bg-[#F7F8FA] text-[var(--muted)]"
                      }`}
                    >
                      {count}
                    </span>

                    {/* Active underline accent */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--red)]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Displaying count info */}
            <div className="text-xs text-[var(--muted)] font-medium hidden md:block">
              Showing {filteredItems.length} {filteredItems.length === 1 ? "moment" : "moments"}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <GalleryImageCard
                key={item.id}
                item={item}
                priority={index < 3}
                onClick={() => handleOpenLightbox(index)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-[#F7F8FA] border border-[#E4E7EB] p-8">
            <p className="font-heading font-bold text-xl text-[var(--navy)] mb-2">
              No photographs available in this category yet.
            </p>
            <p className="text-sm text-[var(--muted)] max-w-md mx-auto">
              Please check back soon or explore our other photo collections.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={handleCloseLightbox}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
}
