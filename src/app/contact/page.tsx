import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/common/PageHero";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { PlaceholderFrame } from "@/components/common/PlaceholderFrame";
import { ContactForm } from "@/components/contact/ContactForm";
import { SCHOOL_CONTACT, SCHOOL_INFO } from "@/data/schoolData";

export const metadata: Metadata = {
  title: "Contact DRVA",
  description:
    "Get in touch with Deeper Real Vision Academy (DRVA) in Sheretti, Abuja. Reach our admissions desk on 08036135006 or visit our campus Behind St. Anthony Catholic Church.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* 1. Page Hero */}
        <PageHero
          breadcrumbLabel="Contact"
          eyebrow="CONTACT"
          title="We'd love to hear from you."
          subtitle="Connecting prospective families with the DRVA office."
          description="Whether you have questions regarding admissions, wish to book a campus walk, or need administrative assistance, our office is ready to assist you."
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

        {/* 2. Direct Channels + Form */}
        <section
          id="office-details"
          className="py-16 sm:py-24 bg-white border-b border-[#E4E7EB]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* LEFT: Contact Details & Location Area */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <SectionEyebrow text="OFFICE &amp; VISITING DETAILS" />
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--navy)] tracking-tight leading-[1.15] mt-3 mb-2">
                    Direct channels.
                  </h2>
                  <p className="text-sm text-[var(--muted)] leading-relaxed font-normal">
                    Official channels for Deeper Real Vision Academy administration.
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

                {/* Location Area */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                    <span className="uppercase tracking-wider font-bold text-[var(--navy)]">
                      Campus Location &amp; Access
                    </span>
                  </div>
                  <div className="p-2 bg-white border border-[#E4E7EB] shadow-xs">
                    <PlaceholderFrame
                      aspectRatio="wide"
                      theme="light"
                      label="Campus Location"
                      sublabel="Behind St. Anthony Catholic Church, Sheretti, Abuja"
                      badge="CAMPUS ACCESS"
                    />
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
      </main>

      <Footer />
    </div>
  );
}
