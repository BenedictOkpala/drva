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


  // Close mobile menu on Escape key
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
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#FCFBF8]/95 backdrop-blur-md border-b border-[var(--line)] shadow-[0_2px_12px_rgba(16,42,67,0.04)]"
          : "bg-[var(--paper)] border-b border-[var(--line)]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Brand & Real Official School Crest */}
          <Link
            href="/"
            className="group flex items-center gap-3 sm:gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 rounded-sm"
            aria-label="DRVA — Deeper Real Vision Academy Homepage"
          >
            <SchoolCrest size="sm" priority />

            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[var(--navy)] leading-none group-hover:text-[var(--blue)] transition-colors">
                DRVA
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[var(--muted)] mt-1 font-medium">
                Deeper Real Vision Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] ${
                    active
                      ? "text-[var(--navy)] font-semibold"
                      : "text-[var(--ink)]/80 hover:text-[var(--navy)] font-medium"
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

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium tracking-wide text-white bg-[var(--navy)] hover:bg-[var(--navy-light)] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/contact"
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-[var(--navy)] hover:bg-[var(--navy-light)] transition-colors"
            >
              Enquire
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--navy)] hover:text-[var(--red)] hover:bg-[var(--ivory)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
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
                  strokeWidth="1.75"
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

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 sm:top-22 bg-[var(--navy)]/40 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[var(--paper)] border-b border-[var(--line)] shadow-xl px-6 py-8 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-serif py-2 border-b border-[var(--line)]/50 transition-colors flex items-center justify-between ${
                      active
                        ? "text-[var(--navy)] font-semibold"
                        : "text-[var(--ink)] hover:text-[var(--navy)]"
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

            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2.5 pb-1">
                <SchoolCrest size="xs" />
                <span className="font-serif text-xs text-[var(--navy)]">DRVA &bull; Kabusa, Abuja</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-medium text-white bg-[var(--navy)] hover:bg-[var(--navy-light)] transition-colors"
              >
                Enquire for Admissions
              </Link>
              <p className="text-center text-xs tracking-widest uppercase text-[var(--muted)] font-mono mt-1">
                IN GOD WE TRUST
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
