export interface ProgrammeItem {
  number: string;
  stageCode: string;
  title: string;
  subtitle: string;
  description: string;
  ageRange: string;
  focusAreas: string[];
  anchor: string;
}

export interface ValuePillar {
  number: string;
  title: string;
  summary: string;
  elaboration: string;
}

export interface StoryPreview {
  category: "School Life" | "Academic Discovery" | "Notice Board" | "Athletics & Sports" | "Arts & Culture";
  tag: string;
  title: string;
  excerpt: string;
  dateOrStatus: string;
  href?: string;
}

export interface MilestoneData {
  years: string;
  tagline: string;
  eyebrow: string;
  description: string;
  details: { label: string; value: string }[];
}

export const MILESTONE_DATA: MilestoneData = {
  years: "2016 — 2026",
  tagline: "A decade of educational purpose.",
  eyebrow: "TEN-YEAR COMMEMORATION",
  description:
    "Founded in October 2016 in Kabusa, Abuja, Deeper Real Vision Academy marks ten years of service to young minds and families. Rooted in our motto, 'In God We Trust', we continue our quiet commitment to character, curiosity, and disciplined learning.",
  details: [
    { label: "FOUNDED", value: "October 2016" },
    { label: "LOCATION", value: "Kabusa, Abuja, Nigeria" },
    { label: "EDUCATIONAL SCOPE", value: "Creche through JSS3" },
    { label: "HISTORICAL MOTTO", value: "IN GOD WE TRUST" },
  ],
};

export const PROGRAMMES: ProgrammeItem[] = [
  {
    number: "01",
    stageCode: "STAGE 01",
    title: "Creche",
    subtitle: "A safe, peaceful and nurturing beginning.",
    description:
      "An intimate, calm environment tailored to the earliest stages of infant growth. Dedicated caregivers prioritize emotional security, sensory discovery, and tender developmental milestones in a hygienic, homelike setting.",
    ageRange: "3 Months – 18 Months",
    focusAreas: ["Sensory Development", "Caregiver Bonding", "Early Motor Skills", "Calm Routine"],
    anchor: "/academics#creche",
  },
  {
    number: "02",
    stageCode: "STAGE 02",
    title: "Nursery",
    subtitle: "Curiosity, play and strong foundational habits.",
    description:
      "Joyful exploration designed to spark a natural love for learning. Children build early literacy, phonics, numbers, expressive arts, and collaborative social habits within attentive classrooms.",
    ageRange: "18 Months – 5 Years",
    focusAreas: ["Phonics & Language", "Foundational Numeracy", "Creative Expression", "Social Habits"],
    anchor: "/academics#nursery",
  },
  {
    number: "03",
    stageCode: "STAGE 03",
    title: "Primary",
    subtitle: "Confidence, core knowledge and character.",
    description:
      "A structured curriculum that encourages young pupils to think thoughtfully, communicate clearly, and take pride in their academic growth, moral reflection, and personal diligence.",
    ageRange: "5 Years – 11 Years",
    focusAreas: ["Critical Inquiry", "Moral & Civic Values", "STEM & Humanities", "Attentive Mentorship"],
    anchor: "/academics#primary",
  },
  {
    number: "04",
    stageCode: "STAGE 04",
    title: "Junior Secondary",
    subtitle: "Subject mastery and purposeful readiness through JSS3.",
    description:
      "Bridging foundational primary learning with intermediate academic disciplines across JSS1 to JSS3. Students develop structured inquiry, disciplined study habits, and personal responsibility.",
    ageRange: "JSS1 – JSS3",
    focusAreas: ["Intermediate Sciences & Math", "Language & Literature", "Social & Civic Studies", "Independent Study Habits"],
    anchor: "/academics#junior-secondary",
  },
];

export const PILLARS: ValuePillar[] = [
  {
    number: "01",
    title: "Purposeful Learning",
    summary: "Academics anchored in genuine understanding.",
    elaboration:
      "We believe learning should never be mechanical. Classrooms at DRVA connect concepts with real-world context, helping pupils build disciplined inquiry, clear expression, and enduring comprehension.",
  },
  {
    number: "02",
    title: "Character & Values",
    summary: "Rooted in our motto: In God We Trust.",
    elaboration:
      "Intellectual growth is paired with moral clarity. We instill integrity, kindness, humility, and personal responsibility as everyday habits rather than abstract slogans.",
  },
  {
    number: "03",
    title: "Individual Attention",
    summary: "Every child is known, observed, and supported.",
    elaboration:
      "With balanced class environments and observant educators, no pupil is overlooked. We identify strengths early, support emerging needs, and provide room for each child to grow.",
  },
  {
    number: "04",
    title: "Community & Partnership",
    summary: "A shared journey between school and home.",
    elaboration:
      "Education thrives when teachers and parents work together. We cultivate close, respectful communication with families to ensure consistent encouragement across home and school.",
  },
];

export const SCHOOL_MOMENTS: StoryPreview[] = [
  {
    category: "Athletics & Sports",
    tag: "INTER-HOUSE ATHLETICS",
    title: "Annual Sports & Field Day Showcase",
    excerpt:
      "Pupils across all houses participate in track events, relay games, and athletic teamwork celebrating sportsmanship and healthy movement.",
    dateOrStatus: "Termly Showcase",
    href: "/school-life",
  },
  {
    category: "Academic Discovery",
    tag: "INQUIRY & STEM",
    title: "Practical Science & Classroom Project Exhibitions",
    excerpt:
      "Hands-on scientific inquiry, experimental demonstrations, and creative project presentations developed during term studies.",
    dateOrStatus: "Academic Spotlight",
    href: "/school-life",
  },
  {
    category: "Notice Board",
    tag: "ADMISSIONS DESK",
    title: "Enquiry Open for Creche, Nursery, Primary & JSS Sessions",
    excerpt:
      "Prospective families seeking enrollment guidelines, placement readiness benchmarks, and campus appointments can connect with our admissions office.",
    dateOrStatus: "Official Notice",
    href: "/admissions",
  },
];
