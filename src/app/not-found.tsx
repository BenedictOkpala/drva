import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          {/* Monogram Box */}
          <div className="inline-flex items-center justify-center w-14 h-14 border border-[#E4E7EB] bg-[#F7F8FA] mb-8 rounded-md">
            <span className="font-heading text-base font-bold text-[var(--navy)]">
              404
            </span>
          </div>

          <div className="flex justify-center mb-4">
            <SectionEyebrow text="ERROR 404 &bull; NOT FOUND" centered />
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mb-4">
            Page not found.
          </h1>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8 font-normal">
            The page you are looking for may have moved, been renamed, or is not
            available on our school website.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-[var(--navy)] hover:bg-[#1C3C5E] active:scale-[0.99] transition-all shadow-xs"
            >
              Return home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-[var(--navy)] hover:bg-[#F7F8FA] bg-white border border-[#E4E7EB] transition-all"
            >
              Contact school office
            </Link>
          </div>

          <div className="mt-12 pt-6 border-t border-[#E4E7EB] text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
            Deeper Real Vision Academy &bull; In God We Trust
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
