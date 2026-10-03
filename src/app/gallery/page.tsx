import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/common/PageHero";
import { AdmissionsCTA } from "@/components/common/AdmissionsCTA";
import { GalleryView } from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Life at DRVA — Photo Gallery | DRVA",
  description:
    "Explore moments from our classrooms, Cultural Day celebrations, annual graduations, athletic events, and school community at Deeper Real Vision Academy in Sheretti, Abuja.",
};

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <PageHero
          breadcrumbLabel="Gallery"
          eyebrow="GALLERY"
          title="Life at DRVA."
          subtitle="Moments from our classrooms, celebrations, milestones and school community."
          description="A visual window into the daily life, traditions, and memorable events of Deeper Real Vision Academy in Sheretti, Abuja."
          badge="CAMPUS MOMENTS"
          variant="visual"
          rightSlot={
            <div className="p-4 bg-[#0B1D2F] text-white border border-[#24415F] max-w-xs text-xs">
              <span className="text-xs uppercase tracking-wider text-[var(--blue-soft)] font-bold block mb-1">
                PHOTO ARCHIVES
              </span>
              <p className="text-slate-300 leading-relaxed text-xs">
                Cultural Day &bull; Learning &bull; Student Achievements
              </p>
            </div>
          }
        />

        {/* Gallery View with Tabs, Masonry Grid, and Lightbox */}
        <GalleryView />

        {/* Admissions CTA */}
        <AdmissionsCTA
          eyebrow="VISIT OUR CAMPUS"
          heading="Experience life at DRVA in person."
          italicHeading="We invite you to schedule a tour."
          description="Witness our dedicated teachers, active classrooms, and supportive community firsthand. Our admissions team is delighted to welcome prospective families."
          primaryCtaText="Begin an enquiry"
          primaryCtaHref="/contact"
          secondaryCtaText="Admissions process"
          secondaryCtaHref="/admissions"
        />
      </main>

      <Footer />
    </div>
  );
}
