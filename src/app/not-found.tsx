import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)]">
      <Header />

      <main className="flex-grow flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          {/* Subtle Monogram Box */}
          <div className="inline-flex items-center justify-center w-14 h-14 border border-[var(--navy)] bg-[var(--ivory)] mb-8">
            <div className="w-10 h-10 border border-[var(--navy)]/20 flex items-center justify-center">
              <span className="font-serif text-sm font-semibold text-[var(--navy)]">
                404
              </span>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <SectionEyebrow text="ERROR 404 // NOT FOUND" centered />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--navy)] tracking-tight leading-[1.15] mb-4">
            Page not found.
          </h1>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8">
            The page you are looking for may have moved, been renamed, or is not
            available on our school website.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide text-white bg-[var(--navy)] hover:bg-[var(--navy-light)] active:scale-[0.99] transition-all"
            >
              Return home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium tracking-wide text-[var(--navy)] hover:text-[var(--blue)] bg-[var(--ivory)] hover:bg-[var(--ivory-dark)] border border-[var(--line)] transition-all"
            >
              Contact school office
            </Link>
          </div>

          <div className="mt-12 pt-6 border-t border-[var(--line)]/70 text-xs font-mono tracking-widest uppercase text-[var(--muted)]">
            Deeper Real Vision Academy &bull; In God We Trust
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

