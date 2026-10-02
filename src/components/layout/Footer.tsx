import React from "react";
import Link from "next/link";
import { SCHOOL_INFO, SCHOOL_CONTACT } from "@/data/schoolData";
import { SchoolCrest } from "@/components/brand/SchoolCrest";

export function Footer() {
  return (
    <footer
      id="contact-footer"
      className="bg-[var(--navy)] text-slate-300 border-t border-[var(--color-line-dark)] relative overflow-hidden"
    >
      {/* Background fine grid */}
      <div className="absolute inset-0 pattern-fine-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-14 border-b border-[var(--color-line-dark)]">
          {/* Brand & Motto Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <SchoolCrest variant="dark" size="sm" />
              <div>
                <span className="font-serif text-xl text-white block leading-none">
                  {SCHOOL_INFO.brand}
                </span>
                <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-slate-400 mt-1 block">
                  {SCHOOL_INFO.fullName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A purposeful learning community dedicated to sound values,
              attentive care, and steady academic growth across Creche,
              Nursery, Primary, and Junior Secondary stages.
            </p>

            <div className="pt-2">
              <div className="inline-block py-1.5 px-3 bg-[var(--navy-dark)] border border-slate-700/80">
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block">
                  HISTORICAL MOTTO
                </span>
                <span className="font-serif italic text-sm text-slate-200">
                  {SCHOOL_INFO.motto}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About DRVA
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/school-life" className="hover:text-white transition-colors">
                  School Life
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-white">
              Educational Stages
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/academics#creche" className="hover:text-white transition-colors">
                  Creche (3m &ndash; 18m)
                </Link>
              </li>
              <li>
                <Link href="/academics#nursery" className="hover:text-white transition-colors">
                  Nursery (18m &ndash; 5y)
                </Link>
              </li>
              <li>
                <Link href="/academics#primary" className="hover:text-white transition-colors">
                  Primary (5y &ndash; 11y)
                </Link>
              </li>
              <li>
                <Link href="/academics#junior-secondary" className="hover:text-white transition-colors">
                  Junior Sec. (JSS1 &ndash; JSS3)
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/school-life" className="hover:text-white text-xs font-mono uppercase tracking-wider text-slate-300 transition-colors">
                  Student Life &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information & Placeholders (Explicitly flagged) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-white">
              School Office & Location
            </h3>

            <div className="p-4 bg-[var(--navy-dark)] border border-slate-700/80 space-y-3.5 text-xs">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                  {SCHOOL_CONTACT.address.label}
                </span>
                <span className="text-slate-300 font-mono">
                  {SCHOOL_CONTACT.address.value}
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                  {SCHOOL_CONTACT.admissionsPhone.label}
                </span>
                <span className="text-slate-300 font-mono">
                  {SCHOOL_CONTACT.admissionsPhone.value}
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                  {SCHOOL_CONTACT.email.label}
                </span>
                <span className="text-slate-300 font-mono">
                  {SCHOOL_CONTACT.email.value}
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                  {SCHOOL_CONTACT.socials.label}
                </span>
                <span className="text-slate-300 font-mono">
                  {SCHOOL_CONTACT.socials.value}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {SCHOOL_INFO.fullName} ({SCHOOL_INFO.brand}). All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-[11px]">
            <span>Motto: {SCHOOL_INFO.motto}</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Creche &bull; Nursery &bull; Primary &bull; Junior Secondary</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
