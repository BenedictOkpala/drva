export interface ProgrammeItem {
  number: string;
  stageCode: string;
  title: string;
  subtitle: string;
  description: string;
  stageBadge: string;
  focusAreas: string[];
  anchor: string;
  ageRange?: string; // alias for backward compatibility
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
  years: "Since 2015",
  tagline: "Growing with every generation.",
  eyebrow: "SINCE 2015",
  description:
    "Established in 2015 in Sheretti, Abuja, Deeper Real Vision Academy is committed to learning and character development. As DRVA continues its journey, plans are underway to expand into Senior Secondary School, serving learners through even more stages of their education.",
  details: [
    { label: "FOUNDED", value: "2015" },
    { label: "LOCATION", value: "Sheretti, Abuja, Nigeria" },
    { label: "EDUCATIONAL SCOPE", value: "Creche through JSS3" },
    { label: "FUTURE EXPANSION", value: "Senior Secondary (Planned)" },
  ],
};

export const PROGRAMMES: ProgrammeItem[] = [
  {
    number: "01",
    stageCode: "STAGE 01",
    title: "Creche",
    subtitle: "A safe, peaceful and nurturing beginning.",
    description:
      "An early learning and care stage designed to give young children a supportive beginning to school life in a safe, caring setting.",
    stageBadge: "Stage 01",
    ageRange: "Stage 01",
    focusAreas: ["Early Language Play", "Caregiver Bonding", "Sensory Discovery", "Gentle Early Care"],
    anchor: "/academics#creche",
  },
  {
    number: "02",
    stageCode: "STAGE 02",
    title: "Nursery",
    subtitle: "Curiosity, play and strong foundational habits.",
    description:
      "An early-years stage where children begin building foundations for communication, learning and classroom participation.",
    stageBadge: "Stage 02",
    ageRange: "Stage 02",
    focusAreas: ["Phonics & Communication", "Foundational Numeracy", "Creative Expression", "Social Habits"],
    anchor: "/academics#nursery",
  },
  {
    number: "03",
    stageCode: "STAGE 03",
    title: "Primary",
    subtitle: "Confidence, core knowledge and character.",
    description:
      "A foundational academic stage supporting pupils as they develop knowledge, confidence and readiness for further learning.",
    stageBadge: "Stage 03",
    ageRange: "Stage 03",
    focusAreas: ["Reading & Language", "Numeracy & Mathematics", "Basic Science", "Moral & Civic Values"],
    anchor: "/academics#primary",
  },
  {
    number: "04",
    stageCode: "STAGE 04",
    title: "Junior Secondary",
    subtitle: "Subject mastery and purposeful readiness through JSS3.",
    description:
      "DRVA currently serves learners through JSS1–JSS3 as they continue their academic development and prepare for the next stage of education.",
    stageBadge: "JSS1 – JSS3",
    ageRange: "JSS1 – JSS3",
    focusAreas: ["Intermediate Sciences & Math", "Language & Literature", "Social & Civic Studies", "Structured Study Habits"],
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
      "With attentive class environments and observant educators, no pupil is overlooked. We identify strengths early, support emerging needs, and provide room for each child to grow.",
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
    tag: "PHYSICAL ACTIVITY",
    title: "Sports & Movement Activities",
    excerpt:
      "Pupils participate in games, movement exercises, and outdoor recreation that build physical wellbeing and sportsmanship.",
    dateOrStatus: "School Life",
    href: "/school-life",
  },
  {
    category: "Academic Discovery",
    tag: "INQUIRY & DEBATE",
    title: "Quiz, Academic Activities & Public Speaking",
    excerpt:
      "Pupils build confidence through debate, collaborative team quizzes, and reading activities that complement their academic development.",
    dateOrStatus: "School Life",
    href: "/school-life",
  },
  {
    category: "Notice Board",
    tag: "ADMISSIONS DESK",
    title: "Admissions Enquiries for Creche, Nursery, Primary & JSS",
    excerpt:
      "Prospective families seeking enrollment guidelines and stage placement details can connect directly with our school desk on 08036135006.",
    dateOrStatus: "Admissions Desk",
    href: "/admissions",
  },
];
