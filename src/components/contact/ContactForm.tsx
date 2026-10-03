"use client";

import React, { useState } from "react";
import { SCHOOL_INFO } from "@/data/schoolData";

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  childStage: string;
  interestedLevel: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    email: "",
    phone: "",
    childStage: "",
    interestedLevel: "Primary",
    message: "",
  });

  const [contactPromptActive, setContactPromptActive] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactPromptActive(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white border border-[#E4E7EB] p-6 sm:p-10 relative shadow-sm">
      <div className="mb-8">
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[var(--navy)] tracking-tight">
          Admissions Enquiry
        </h3>
        <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
          For all enrollment questions across Creche, Nursery, Primary, or Junior Secondary (JSS1&ndash;JSS3), please connect directly with our school office.
        </p>
      </div>

      {contactPromptActive ? (
        <div
          role="status"
          aria-live="polite"
          className="p-8 bg-[#F7F8FA] border border-[#E4E7EB] text-[var(--ink)] space-y-5"
        >
          <div className="flex items-center gap-2.5 text-[var(--navy)] font-heading text-xl font-bold">
            <svg
              className="w-6 h-6 text-[var(--red)] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span>Direct Admissions Contact</span>
          </div>

          <p className="text-base leading-relaxed text-[var(--ink)]/85">
            For admissions enquiries, please contact DRVA on{" "}
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="font-bold text-[var(--navy)] underline hover:text-[var(--red)] transition-colors"
            >
              {SCHOOL_INFO.phone}
            </a>
            .
          </p>

          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            Our school desk in Sheretti, Abuja is available to provide guidance on
            stage placement, documentation, and campus walk appointments.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-wider font-bold text-white bg-[var(--navy)] hover:bg-[#1C3C5E] active:scale-[0.99] transition-all shadow-xs"
            >
              Call {SCHOOL_INFO.phone}
            </a>
            <button
              type="button"
              onClick={() => setContactPromptActive(false)}
              className="inline-flex items-center justify-center px-5 py-3 text-xs uppercase tracking-wider font-bold text-[var(--navy)] bg-white border border-[#E4E7EB] hover:bg-[#F7F8FA] transition-colors"
            >
              Back to Form
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Telephone Advisory */}
          <div className="p-4 bg-[#F7F8FA] border border-[#E4E7EB] flex items-center justify-between gap-3 text-xs">
            <span className="text-[var(--ink)]/80 font-normal">
              Direct telephone line:
            </span>
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="font-bold text-[var(--navy)] hover:text-[var(--red)] transition-colors"
            >
              {SCHOOL_INFO.phone}
            </a>
          </div>

          {/* Parent/Guardian Name */}
          <div>
            <label
              htmlFor="parentName"
              className="block text-xs uppercase tracking-wider text-[var(--navy)] font-bold mb-2"
            >
              Parent / Guardian Name <span className="text-[var(--red)]">*</span>
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. Mrs. Adebayo"
              className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E4E7EB] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
            />
          </div>

          {/* Contact Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-[var(--navy)] font-bold mb-2"
              >
                Email Address <span className="text-[var(--red)]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E4E7EB] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-wider text-[var(--navy)] font-bold mb-2"
              >
                Phone Number <span className="text-[var(--red)]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="080..."
                className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E4E7EB] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Child's Current Stage & Interested Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="childStage"
                className="block text-xs uppercase tracking-wider text-[var(--navy)] font-bold mb-2"
              >
                Child&apos;s Current Class / Stage (Optional)
              </label>
              <input
                type="text"
                id="childStage"
                name="childStage"
                value={formData.childStage}
                onChange={handleChange}
                placeholder="e.g. Entering Primary 1"
                className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E4E7EB] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="interestedLevel"
                className="block text-xs uppercase tracking-wider text-[var(--navy)] font-bold mb-2"
              >
                Interested Educational Stage <span className="text-[var(--red)]">*</span>
              </label>
              <select
                id="interestedLevel"
                name="interestedLevel"
                value={formData.interestedLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E4E7EB] text-sm text-[var(--ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
              >
                <option value="Creche">Creche</option>
                <option value="Nursery">Nursery</option>
                <option value="Primary">Primary</option>
                <option value="Junior Secondary">Junior Secondary (JSS1 – JSS3)</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider text-[var(--navy)] font-bold mb-2"
            >
              Enquiry / Questions (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share any questions regarding admission details, tour appointments, or specific needs."
              className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E4E7EB] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all resize-y"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white bg-[var(--navy)] hover:bg-[#1C3C5E] active:scale-[0.99] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] shadow-xs"
            >
              Submit enquiry
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
