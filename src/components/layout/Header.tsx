"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SchoolCrest } from "@/components/brand/SchoolCrest";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key and handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "School Life", href: "/school-life" },
    { label: "Gallery", href: "/gallery" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-200 bg-[#0B1D2F] border-b border-[#24415F] ${
          scrolled ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand & Real Official School Crest */}
            <Link
              href="/"
              className="group flex items-center gap-3 sm:gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              aria-label="DRVA — Deeper Real Vision Academy Homepage"
              onClick={() => setMobileMenuOpen(false)}
            >
              <SchoolCrest variant="dark" size="sm" priority />

              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white leading-none group-hover:text-[var(--blue-soft)] transition-colors">
                  DRVA
                </span>
                <span className="text-[11px] tracking-wide text-slate-300 mt-1 font-medium">
                  Deeper Real Vision Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-7 lg:gap-8"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm tracking-normal transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      active
                        ? "text-white font-semibold"
                        : "text-slate-200 hover:text-white font-medium"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {/* DRVA Red active underline indicator */}
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--red)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: DRVA Red CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[var(--red)] hover:bg-[#991B1B] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-xs"
              >
                Enquire
              </Link>
            </div>

            {/* Mobile Menu Button & Quick CTA */}
            <div className="flex md:hidden items-center gap-3">
              <Link
                href="/contact"
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[var(--red)] hover:bg-[#991B1B] transition-colors shadow-xs"
              >
                Enquire
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="min-w-[40px] min-h-[40px] p-2 text-white hover:text-[var(--red)] hover:bg-slate-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white flex items-center justify-center rounded-sm"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Content */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            role="region"
            aria-label="Mobile Navigation Menu"
            className="md:hidden border-t border-[#24415F] bg-[#0B1D2F] w-full max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 sm:px-6 py-6 shadow-2xl relative z-50"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation Links">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-semibold py-2.5 border-b border-[#24415F] transition-colors flex items-center justify-between ${
                      active
                        ? "text-white font-bold"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-[var(--red)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2 pb-1">
                <SchoolCrest variant="dark" size="xs" />
                <span className="text-xs font-medium text-slate-300">DRVA &bull; Sheretti, Abuja</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-semibold text-white bg-[var(--red)] hover:bg-[#991B1B] transition-colors shadow-xs"
              >
                Enquire for Admissions
              </Link>
              <p className="text-center text-xs tracking-wider uppercase text-slate-400 font-medium mt-1">
                IN GOD WE TRUST
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop Dimmer (behind header z-40) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
