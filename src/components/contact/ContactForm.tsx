"use client";

import React, { useState } from "react";

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

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Provide immediate acknowledgment feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
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
    <div className="bg-[var(--paper)] border border-[var(--line)] p-6 sm:p-10 relative shadow-xs">
      {/* Corner depth lines */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[var(--navy)]/30 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[var(--navy)]/30 pointer-events-none" />

      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-[var(--navy)] tracking-tight">
          Admissions Enquiry Form
        </h3>
        <p className="text-sm text-[var(--muted)] mt-1">
          Complete the details below to register your interest for Creche, Nursery, Primary, or Junior Secondary (JSS1&ndash;JSS3) enrollment.
        </p>
      </div>

      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="p-8 bg-[var(--ivory)] border border-[var(--line)] text-[var(--ink)] space-y-4"
        >
          <div className="flex items-center gap-2.5 text-[var(--navy)] font-serif text-xl font-medium">
            <svg
              className="w-6 h-6 text-[var(--navy)] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Enquiry Received</span>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-[var(--ink)]/85">
            Thank you, <strong>{formData.parentName || "Parent/Guardian"}</strong>.
            We appreciate your interest in Deeper Real Vision Academy. The admissions office in Kabusa, Abuja will review your enquiry.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setFormData({
                  parentName: "",
                  email: "",
                  phone: "",
                  childStage: "",
                  interestedLevel: "Primary",
                  message: "",
                });
                setSubmitted(false);
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[var(--navy)] bg-white border border-[var(--line)] hover:bg-[var(--paper)] transition-colors shadow-2xs"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Parent/Guardian Name */}
          <div>
            <label
              htmlFor="parentName"
              className="block text-xs font-mono uppercase tracking-wider text-[var(--navy)] font-medium mb-2"
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
              className="w-full px-4 py-3 bg-[var(--ivory)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
            />
          </div>

          {/* Contact Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-[var(--navy)] font-medium mb-2"
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
                className="w-full px-4 py-3 bg-[var(--ivory)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-mono uppercase tracking-wider text-[var(--navy)] font-medium mb-2"
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
                placeholder="+234..."
                className="w-full px-4 py-3 bg-[var(--ivory)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Child's Current Stage & Interested Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="childStage"
                className="block text-xs font-mono uppercase tracking-wider text-[var(--navy)] font-medium mb-2"
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
                className="w-full px-4 py-3 bg-[var(--ivory)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="interestedLevel"
                className="block text-xs font-mono uppercase tracking-wider text-[var(--navy)] font-medium mb-2"
              >
                Interested Educational Stage <span className="text-[var(--red)]">*</span>
              </label>
              <select
                id="interestedLevel"
                name="interestedLevel"
                value={formData.interestedLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[var(--ivory)] border border-[var(--line)] text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
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
              className="block text-xs font-mono uppercase tracking-wider text-[var(--navy)] font-medium mb-2"
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
              className="w-full px-4 py-3 bg-[var(--ivory)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all resize-y"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-white bg-[var(--navy)] hover:bg-[var(--navy-light)] active:scale-[0.99] disabled:opacity-50 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)] focus-visible:ring-offset-2 shadow-xs"
            >
              {isSubmitting ? "Processing..." : "Submit enquiry"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
