import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { ContactForm } from "@/components/contact/ContactForm";
import { SCHOOL_CONTACT, SCHOOL_INFO } from "@/data/schoolData";

export const metadata: Metadata = {
  title: "Contact & Visit Us | DRVA",
  description:
    "Get in touch with Deeper Real Vision Academy (DRVA) in Sheretti, Abuja. Reach our admissions desk on 08036135006 or get directions to visit our campus Behind St. Anthony Catholic Church.",
};

export default function ContactPage() {
  // Verified location destination query for Google Maps navigation
  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=Behind+St.+Anthony+Catholic+Church,+Sheretti,+Abuja";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* 1. Page Hero */}
        <PageHero
          breadcrumbLabel="Contact"
          eyebrow="CONTACT &amp; VISITS"
          title="We'd love to hear from you."
          subtitle="Connecting prospective families with the DRVA office."
          description="Whether you have questions regarding admissions, wish to book a campus visit, or need administrative guidance, our office is ready to assist you."
          badge="OFFICE &amp; ADMISSIONS DESK"
          variant="functional"
          rightSlot={
            <div className="p-4 bg-white border border-[#E4E7EB] text-xs shadow-xs space-y-2 w-full lg:max-w-xs">
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--muted)] block">
                Direct Phone Line
              </span>
              <a
                href={SCHOOL_INFO.phoneTel}
                className="font-heading text-lg font-bold text-[var(--navy)] hover:text-[var(--red)] block transition-colors"
              >
                {SCHOOL_INFO.phone}
              </a>
              <p className="text-xs text-[var(--muted)]">
                Visiting by scheduled appointment
              </p>
            </div>
          }
        />

        {/* 2. Direct Channels & Enquiry Form */}
        <section
          id="office-details"
          className="py-16 sm:py-24 bg-white border-b border-[#E4E7EB]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* LEFT: Contact Details */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <SectionEyebrow text="OFFICE &amp; ENQUIRIES" />
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3 mb-2">
                    Direct channels.
                  </h2>
                  <p className="text-sm text-[var(--muted)] leading-relaxed font-normal">
                    Official communication channels for Deeper Real Vision Academy administration.
                  </p>
                </div>

                {/* Office Contact Details Card */}
                <div className="p-6 sm:p-8 bg-[#F7F8FA] border border-[#E4E7EB] space-y-6 shadow-xs">
                  {/* Phone Number */}
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                      {SCHOOL_CONTACT.phone.label}
                    </span>
                    <a
                      href={SCHOOL_CONTACT.phone.tel}
                      className="font-heading text-xl text-[var(--navy)] font-bold hover:text-[var(--red)] transition-colors inline-block"
                    >
                      {SCHOOL_CONTACT.phone.value}
                    </a>
                    <span className="text-xs text-[var(--muted)] mt-1 block">
                      {SCHOOL_CONTACT.phone.note}
                    </span>
                  </div>

                  {/* Campus Address */}
                  <div className="pt-4 border-t border-[#E4E7EB]">
                    <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                      {SCHOOL_CONTACT.address.label}
                    </span>
                    <p className="text-sm text-[var(--navy)] font-semibold">
                      {SCHOOL_CONTACT.address.value}
                    </p>
                    <span className="text-xs text-[var(--muted)] mt-1 block">
                      {SCHOOL_CONTACT.address.note}
                    </span>
                  </div>

                  {/* Enquiries Note */}
                  <div className="pt-4 border-t border-[#E4E7EB]">
                    <span className="text-xs uppercase tracking-wider text-[var(--red)] font-bold block mb-1">
                      Admissions &amp; General Enquiries
                    </span>
                    <p className="text-xs text-[var(--ink)]/80 leading-relaxed font-normal">
                      For admissions enquiries and tour appointments, please call{" "}
                      <a
                        href={SCHOOL_INFO.phoneTel}
                        className="font-bold text-[var(--navy)] underline hover:text-[var(--red)]"
                      >
                        {SCHOOL_INFO.phone}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT: Enquiry Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* 3. VISIT US & GET DIRECTIONS (Dedicated Location Experience) */}
        <section id="visit-us" className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-[#E4E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Visit Information & Navigation CTA */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-0.5 bg-[var(--red)]" />
                  <span className="text-xs uppercase tracking-wider font-bold text-[var(--navy)]">
                    CAMPUS LOCATION
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] tracking-tight leading-[1.14]">
                  Visit Us.
                </h2>

                <div className="p-5 bg-white border border-[#E4E7EB] shadow-xs space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold block">
                    Verified Address
                  </span>
                  <p className="font-heading font-bold text-lg text-[var(--navy)]">
                    Behind St. Anthony Catholic Church, Sheretti, Abuja.
                  </p>
                  <p className="text-xs text-[var(--muted)] leading-relaxed pt-1 border-t border-[#E4E7EB]">
                    Sheretti community &bull; Federal Capital Territory, Nigeria
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed font-normal">
                  We welcome parents and guardians to tour our classrooms and meet
                  our teachers. Please call our admissions desk ahead to schedule your visit.
                </p>

                {/* Prominent Get Directions Action */}
                <div className="pt-2">
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[var(--navy)] hover:bg-[#1C3C5E] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] shadow-xs"
                  >
                    <span>Get Directions</span>
                    <span className="text-base">&rarr;</span>
                  </a>
                  <span className="block text-xs text-[var(--muted)] mt-2 font-medium">
                    Opens Google Maps for step-by-step navigation
                  </span>
                </div>
              </div>

              {/* Right Column: Clean Map Preview / Locator Frame */}
              <div className="lg:col-span-7">
                <div className="p-3 sm:p-4 bg-white border border-[#E4E7EB] shadow-sm">
                  <div className="relative w-full aspect-[16/10] bg-[#0B1D2F] text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden border border-[#24415F]">
                    {/* Architectural Map Grid Backdrop */}
                    <div className="absolute inset-0 pattern-fine-grid-dark opacity-30 pointer-events-none" />

                    {/* Top Status */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-bold text-[var(--blue-soft)] bg-slate-900/80 px-2.5 py-1 border border-slate-700">
                        LOCATION PREVIEW
                      </span>
                      <span className="text-xs text-slate-300 font-medium">
                        Sheretti &bull; Abuja
                      </span>
                    </div>

                    {/* Landmark Badge & Address Centerpiece */}
                    <div className="relative z-10 my-4 space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--red)] text-white text-xs font-bold uppercase tracking-wider">
                        <svg
                          className="w-3.5 h-3.5 fill-current"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span>Campus Landmark</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                        Deeper Real Vision Academy
                      </h3>
                      <p className="text-sm text-slate-300">
                        Behind St. Anthony Catholic Church, Sheretti, Abuja.
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="relative z-10 pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <span className="text-slate-400">
                        Admissions desk: {SCHOOL_INFO.phone}
                      </span>
                      <a
                        href={mapsSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--blue-soft)] hover:text-white font-bold transition-colors inline-flex items-center gap-1"
                      >
                        <span>Open in Maps</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
