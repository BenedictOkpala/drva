import React from "react";
import Link from "next/link";
import { SCHOOL_INFO, SCHOOL_CONTACT } from "@/data/schoolData";
import { SchoolCrest } from "@/components/brand/SchoolCrest";

export function Footer() {
  return (
    <footer
      id="contact-footer"
      className="bg-[#0B1D2F] text-slate-300 border-t border-[#24415F] relative overflow-hidden"
    >
      {/* Background fine grid */}
      <div className="absolute inset-0 pattern-fine-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-14 border-b border-[#24415F]">
          {/* Brand & Motto Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <SchoolCrest variant="dark" size="sm" />
              <div>
                <span className="font-heading font-bold text-xl text-white block leading-none">
                  {SCHOOL_INFO.brand}
                </span>
                <span className="text-xs text-slate-400 mt-1 block font-medium">
                  {SCHOOL_INFO.fullName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              A purposeful learning community in Sheretti, Abuja dedicated to sound values,
              attentive care, and steady academic growth across Creche,
              Nursery, Primary, and Junior Secondary stages.
            </p>

            <div className="pt-2">
              <div className="inline-block py-1.5 px-3 bg-slate-900/80 border border-slate-700/80 rounded-sm">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block">
                  MOTTO
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {SCHOOL_INFO.motto}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-white">
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
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
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

          {/* Educational Stages */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-white">
              Educational Stages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/academics#creche" className="hover:text-white transition-colors">
                  Creche
                </Link>
              </li>
              <li>
                <Link href="/academics#nursery" className="hover:text-white transition-colors">
                  Nursery
                </Link>
              </li>
              <li>
                <Link href="/academics#primary" className="hover:text-white transition-colors">
                  Primary
                </Link>
              </li>
              <li>
                <Link href="/academics#junior-secondary" className="hover:text-white transition-colors">
                  Junior Secondary (JSS1–JSS3)
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/school-life" className="hover:text-white text-xs uppercase tracking-wider font-semibold text-slate-300 transition-colors">
                  Student Life &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* School Office & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-white">
              School Contact
            </h3>

            <div className="p-5 bg-slate-900/90 border border-slate-700/80 space-y-4 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">
                  {SCHOOL_CONTACT.phone.label}
                </span>
                <a
                  href={SCHOOL_CONTACT.phone.tel}
                  className="text-white hover:text-[var(--blue-soft)] font-semibold text-base transition-colors inline-block"
                >
                  {SCHOOL_CONTACT.phone.value}
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">
                  {SCHOOL_CONTACT.email.label}
                </span>
                <a
                  href={SCHOOL_CONTACT.email.mailto}
                  className="text-white hover:text-[var(--blue-soft)] font-medium text-xs sm:text-sm transition-colors break-all inline-block"
                >
                  {SCHOOL_CONTACT.email.value}
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">
                  {SCHOOL_CONTACT.address.label}
                </span>
                <p className="text-white font-medium text-sm">
                  {SCHOOL_CONTACT.address.value}
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Federal Capital Territory, Nigeria.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[var(--blue-soft)] font-semibold transition-colors"
                >
                  <span>Admissions &amp; Visiting Details</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {SCHOOL_INFO.fullName} ({SCHOOL_INFO.brand}). All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-xs">
            <span>Motto: {SCHOOL_INFO.motto}</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Sheretti, Abuja</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
