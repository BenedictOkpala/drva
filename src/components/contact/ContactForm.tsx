"use client";

import React, { useState } from "react";

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  interestedLevel: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    email: "",
    phone: "",
    childAge: "",
    interestedLevel: "Primary",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate quick feedback for UI responsiveness
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
    <div className="bg-[var(--paper)] border border-[var(--line)] p-6 sm:p-10 relative">
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
          className="p-6 bg-[var(--blue-soft)] border border-[var(--blue)]/40 text-[var(--ink)] space-y-4"
        >
          <div className="flex items-center gap-2.5 text-[var(--navy)] font-serif text-xl font-medium">
            <svg
              className="w-6 h-6 text-[var(--blue)] shrink-0"
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
            <span>Enquiry Received (Preview Mode)</span>
          </div>

          <p className="text-sm leading-relaxed text-[var(--ink)]/85">
            Thank you, <strong>{formData.parentName || "Parent/Guardian"}</strong>.
            This website is currently in pre-launch preview mode.
          </p>

          <div className="p-3 bg-white/80 border border-[var(--line)] text-xs font-mono text-[var(--muted)]">
            <strong>Note:</strong> Direct online enquiry transmission will be
            connected prior to the official school session launch. Please reach
            out directly via the official administrative office phone once
            published.
          </div>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono uppercase tracking-wider text-[var(--navy)] bg-white border border-[var(--line)] hover:bg-[var(--ivory)] transition-colors"
          >
            Reset Form
          </button>
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
              placeholder="e.g. Mrs. Adebayo / Dr. Smith"
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

          {/* Child's Age & Interested Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="childAge"
                className="block text-xs font-mono uppercase tracking-wider text-[var(--navy)] font-medium mb-2"
              >
                Child&apos;s Age / Current Stage <span className="text-[var(--red)]">*</span>
              </label>
              <input
                type="text"
                id="childAge"
                name="childAge"
                required
                value={formData.childAge}
                onChange={handleChange}
                placeholder="e.g. 4 years old"
                className="w-full px-4 py-3 bg-[var(--ivory)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="interestedLevel"
                className="block text-xs font-mono uppercase tracking-wider text-[var(--navy)] font-medium mb-2"
              >
                Interested Level <span className="text-[var(--red)]">*</span>
              </label>
              <select
                id="interestedLevel"
                name="interestedLevel"
                value={formData.interestedLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[var(--ivory)] border border-[var(--line)] text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all"
              >
                <option value="Creche">Creche (3 Months &ndash; 18 Months)</option>
                <option value="Nursery">Nursery (18 Months &ndash; 5 Years)</option>
                <option value="Primary">Primary (5 Years &ndash; 11 Years)</option>
                <option value="Junior Secondary">Junior Secondary (JSS1 &ndash; JSS3)</option>
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
              placeholder="Please share any questions regarding admission dates, tour requests, or specific needs."
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
              {isSubmitting ? "Processing..." : "Send enquiry"}
            </button>
            <span className="block mt-2 text-[11px] font-mono text-[var(--muted)]">
              Form submission is currently in pre-launch preview mode.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

