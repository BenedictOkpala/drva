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
      "An intimate, calm environment tailored to early infant growth. Dedicated caregivers prioritize emotional security, sensory discovery, and gentle developmental care in a hygienic, supportive setting.",
    stageBadge: "Stage 01",
    ageRange: "Stage 01",
    focusAreas: ["Sensory Development", "Caregiver Bonding", "Early Motor Skills", "Calm Routine"],
    anchor: "/academics#creche",
  },
  {
    number: "02",
    stageCode: "STAGE 02",
    title: "Nursery",
    subtitle: "Curiosity, play and strong foundational habits.",
    description:
      "Joyful exploration designed to spark a natural love for learning. Children build early literacy, phonics, number awareness, expressive arts, and collaborative social habits within attentive classrooms.",
    stageBadge: "Stage 02",
    ageRange: "Stage 02",
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
    stageBadge: "Stage 03",
    ageRange: "Stage 03",
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
    stageBadge: "JSS1 – JSS3",
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
    tag: "PHYSICAL ACTIVITY",
    title: "Sports & Movement Showcases",
    excerpt:
      "Pupils participate in games, movement exercises, and athletic teamwork celebrating sportsmanship, physical coordination, and healthy activity.",
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
    title: "Admissions Information for Creche, Nursery, Primary & JSS",
    excerpt:
      "Prospective families seeking enrollment guidelines, placement details, and campus appointment schedules can connect directly with our school desk on 08036135006.",
    dateOrStatus: "Admissions Desk",
    href: "/admissions",
  },
];
