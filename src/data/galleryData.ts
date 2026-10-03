export type GalleryCategory =
  | "All"
  | "Cultural Day"
  | "Learning"
  | "Achievements";

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  caption: string;
  alt: string;
  aspectRatio: "landscape" | "portrait" | "feature" | "square";
  dateOrTerm?: string;
  src?: string;
  badge?: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Cultural Day",
  "Learning",
  "Achievements",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "cultural-day-traditional-beadwork",
    title: "Cultural Day",
    category: "Cultural Day",
    caption:
      "A young DRVA pupil in traditional cultural attire with ceremonial beadwork celebrating Nigerian heritage during Cultural Day.",
    alt: "Young DRVA pupil wearing traditional attire with ornate beadwork at Cultural Day in Abuja",
    aspectRatio: "portrait",
    dateOrTerm: "Cultural Day",
    badge: "HERITAGE",
    src: "/images/drva/cultural-day/pupil-traditional-beadwork.jpg",
  },
  {
    id: "cultural-day-ceremonial-whisk",
    title: "Cultural Day",
    category: "Cultural Day",
    caption:
      "DRVA pupil dressed in blue traditional attire holding a ceremonial whisk during school cultural festivities.",
    alt: "DRVA pupil in blue traditional attire holding ceremonial whisk at Cultural Day",
    aspectRatio: "portrait",
    dateOrTerm: "Cultural Day",
    badge: "CELEBRATION",
    src: "/images/drva/cultural-day/pupil-blue-traditional-whisk.jpg",
  },
  {
    id: "pupils-learning-practice",
    title: "Learning in practice",
    category: "Learning",
    caption:
      "DRVA pupils gathered around a computer in practical classroom learning.",
    alt: "DRVA pupils working attentively with a computer during classroom learning in Sheretti, Abuja",
    aspectRatio: "landscape",
    dateOrTerm: "Classroom Practice",
    badge: "PRACTICE",
    src: "/images/drva/learning/pupils-learning-computing.jpg",
  },
  {
    id: "favour-chima-essay-award",
    title: "Student Achievement",
    category: "Achievements",
    caption:
      "Favour Chima placed first in the Junior Secondary category of the Meireer Education Foundation's 2026 International Day of Education Essay Competition.",
    alt: "DRVA pupil Favour Chima receiving her award certificate for first place in the 2026 International Day of Education Essay Competition",
    aspectRatio: "landscape",
    dateOrTerm: "2026 Competition",
    badge: "ACHIEVEMENT",
    src: "/images/drva/achievements/favour-chima-essay-award.jpg",
  },
];
