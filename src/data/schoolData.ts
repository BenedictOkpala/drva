/**
 * DRVA — Deeper Real Vision Academy
 * Centralized School Information & Verified Content Registry
 * 
 * Verified School Information:
 * - Name: Deeper Real Vision Academy (DRVA)
 * - Location: Behind St. Anthony Catholic Church, Sheretti, Abuja, Nigeria
 * - Founded: October 2016
 * - Educational Stages: Creche, Nursery, Primary, Junior Secondary (JSS1–JSS3)
 * - Future Expansion: Senior Secondary School (Future Plan)
 * - Motto: IN GOD WE TRUST
 * - Phone: 08036135006
 * - Leadership: Mrs Okpala Priscilla (School Leadership)
 * - Milestone: 2016 — 2026 (A decade of learning and growth)
 */

export const SCHOOL_INFO = {
  brand: "DRVA",
  fullName: "Deeper Real Vision Academy",
  shortName: "DRVA",
  motto: "IN GOD WE TRUST",
  location: "Behind St. Anthony Catholic Church, Sheretti, Abuja, Nigeria",
  addressLine1: "Behind St. Anthony Catholic Church",
  addressLine2: "Sheretti, Abuja, Nigeria",
  cityState: "Sheretti, Abuja",
  phone: "08036135006",
  phoneTel: "tel:08036135006",
  founded: "October 2016",
  foundedYear: 2016,
  milestoneYears: "2016 — 2026",
  milestoneTag: "A decade of learning and growth",
  levels: ["Creche", "Nursery", "Primary", "Junior Secondary"] as const,
  juniorSecondaryScope: "JSS1 – JSS3",
  futureExpansion: "Looking ahead, DRVA plans to expand into Senior Secondary School, continuing the learning journey through an additional stage of education.",
  futureStage: "Senior Secondary (Planned Future Expansion)",
  tagline: "Bright minds. Good people.",
  leadership: {
    name: "Mrs Okpala Priscilla",
    role: "School Leadership",
    message:
      "At DRVA, we believe education should prepare a child not only for the classroom, but for life. Our responsibility is to help each learner grow in knowledge, character and confidence while providing the guidance and support they need at every stage of their development.",
  },
} as const;

export const SCHOOL_CONTACT = {
  address: {
    label: "Campus Location",
    value: "Behind St. Anthony Catholic Church, Sheretti, Abuja, Nigeria",
    note: "Visiting by scheduled appointment.",
  },
  phone: {
    label: "Phone Line",
    value: "08036135006",
    tel: "tel:08036135006",
    note: "Direct telephone line for school and admissions enquiries.",
  },
  officeHours: {
    label: "School Office",
    value: "Monday – Friday, Term Time",
    note: "Visiting by scheduled appointment.",
  },
};

export const SCHOOL_STORY = {
  title: "Our Story",
  eyebrow: "THE DRVA STORY",
  paragraphs: [
    "Deeper Real Vision Academy has been part of the Abuja community since 2016. Established with a commitment to giving children a strong foundation for learning and life, DRVA has continued to grow with the families and community it serves.",
    "Today, the Academy supports learners from Creche through Junior Secondary, with an environment that encourages curiosity, discipline, confidence and steady academic growth.",
    "As DRVA marks a decade of learning and growth, the journey continues. With plans to expand into Senior Secondary School, the Academy looks ahead to serving its learners through even more stages of their education.",
  ],
};

export const SCHOOL_MISSION_VISION = {
  mission: {
    heading: "Our Mission",
    statement:
      "To provide a supportive learning environment where every child can build strong academic foundations, develop good character, grow in confidence and discover a lasting desire to learn.",
  },
  vision: {
    heading: "Our Vision",
    statement:
      "To raise knowledgeable, responsible and confident young people who are prepared for the next stage of their education and equipped to make meaningful contributions to their communities.",
  },
};

// Aliased for backward compatibility with existing imports
export const PROVISIONAL_MISSION_VISION = SCHOOL_MISSION_VISION;

export interface SchoolValue {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const SCHOOL_VALUES: SchoolValue[] = [
  {
    number: "01",
    title: "Character & Integrity",
    subtitle: "Rooted in our motto: In God We Trust",
    description:
      "Moral clarity is foundational to everything we do. We encourage honesty, kindness, mutual respect, and personal responsibility as living, everyday virtues.",
  },
  {
    number: "02",
    title: "Curiosity & Deep Inquiry",
    subtitle: "Connecting knowledge with understanding",
    description:
      "We encourage questions, attentive observation, and independent thought so learning remains an engaging, lifelong pursuit.",
  },
  {
    number: "03",
    title: "Diligence & Effort",
    subtitle: "Encouraging each child to achieve their best",
    description:
      "We cultivate high standards of diligence, resilience, and pride in one's work across academic studies, creative arts, and personal conduct.",
  },
  {
    number: "04",
    title: "Community & Partnership",
    subtitle: "A partnership of pupils, teachers, and families",
    description:
      "Education flourishes when children feel safe, known, and valued. We build close, respectful relationships between the school and parents.",
  },
];

// Aliased for backward compatibility
export const PROVISIONAL_VALUES = SCHOOL_VALUES;

export interface AcademicStageDetail {
  id: "creche" | "nursery" | "primary" | "junior-secondary";
  stageNumber: string;
  title: string;
  subtitle: string;
  stageCode: string;
  overview: string;
  environmentHighlights: string[];
  focusAreas: string[];
  provisionalFocus: string[]; // alias
}

export const ACADEMIC_STAGES: AcademicStageDetail[] = [
  {
    id: "creche",
    stageNumber: "01",
    title: "Creche",
    subtitle: "A safe, peaceful and nurturing beginning.",
    stageCode: "Stage 01",
    overview:
      "Our Creche provides an intimate, calm, and hygienic environment where infants receive attentive care, emotional warmth, and gentle developmental guidance.",
    environmentHighlights: [
      "Calm, hygienic sleep and care spaces",
      "Attentive caregivers",
      "Sensory discovery and motor development",
      "Close communication with parents",
    ],
    focusAreas: [
      "Sensory & Motor Development",
      "Caregiver Bonding & Comfort",
      "Early Sound & Visual Play",
      "Gentle Developmental Rhythms",
    ],
    provisionalFocus: [
      "Sensory & Motor Development",
      "Caregiver Bonding & Comfort",
      "Early Sound & Visual Play",
      "Gentle Developmental Rhythms",
    ],
  },
  {
    id: "nursery",
    stageNumber: "02",
    title: "Nursery",
    subtitle: "Curiosity, play and strong foundational habits.",
    stageCode: "Stage 02",
    overview:
      "The Nursery stage bridges early discovery with structured learning readiness. Through guided play, early phonics, number discovery, and creative arts, young minds build joyful school habits.",
    environmentHighlights: [
      "Resource-rich learning spaces",
      "Storytelling and early phonics corners",
      "Creative art, movement, and music",
      "Guided cooperative social play",
    ],
    focusAreas: [
      "Phonics & Language Readiness",
      "Foundational Numeracy & Shapes",
      "Creative Expression & Music",
      "Social-Emotional Habits & Manners",
    ],
    provisionalFocus: [
      "Phonics & Language Readiness",
      "Foundational Numeracy & Shapes",
      "Creative Expression & Music",
      "Social-Emotional Habits & Manners",
    ],
  },
  {
    id: "primary",
    stageNumber: "03",
    title: "Primary",
    subtitle: "Confidence, core knowledge and character.",
    stageCode: "Stage 03",
    overview:
      "Our Primary curriculum builds foundational subject mastery within a supportive community. Pupils deepen their understanding of core disciplines, build critical inquiry habits, and develop personal diligence.",
    environmentHighlights: [
      "Equipped primary classrooms",
      "Mathematical reasoning and science inquiry",
      "Language development and reading comprehension",
      "Moral education and character development",
    ],
    focusAreas: [
      "Core Literacy, Grammar & Reading",
      "Mathematics & Quantitative Reasoning",
      "Basic Science & Practical Inquiry",
      "Civic Studies & Moral Education",
    ],
    provisionalFocus: [
      "Core Literacy, Grammar & Reading",
      "Mathematics & Quantitative Reasoning",
      "Basic Science & Practical Inquiry",
      "Civic Studies & Moral Education",
    ],
  },
  {
    id: "junior-secondary",
    stageNumber: "04",
    title: "Junior Secondary",
    subtitle: "Subject mastery and purposeful readiness through JSS3.",
    stageCode: "JSS1 – JSS3",
    overview:
      "Junior Secondary at DRVA provides academic continuity from primary education through JSS3. Students encounter expanded subject disciplines, structured inquiry, and disciplined study habits designed for secondary readiness.",
    environmentHighlights: [
      "Dedicated Junior Secondary learning spaces",
      "Subject-based instructional timetable",
      "Analytical inquiry and group discussions",
      "Leadership opportunities and moral mentorship",
    ],
    focusAreas: [
      "Core Sciences & Intermediate Mathematics",
      "English Language & Literature Studies",
      "Social & Civic Studies",
      "Pre-Vocational & Practical Skills",
    ],
    provisionalFocus: [
      "Core Sciences & Intermediate Mathematics",
      "English Language & Literature Studies",
      "Social & Civic Studies",
      "Pre-Vocational & Practical Skills",
    ],
  },
];

export interface SchoolActivityArea {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  aspectRatio?: "wide" | "portrait" | "video" | "square";
  label: string;
  badge: string;
}

export const BEYOND_CLASSROOM_INTRO =
  "Learning at DRVA extends beyond everyday classroom lessons. Pupils are encouraged to communicate confidently, think creatively, work with others and discover their individual strengths through activities that complement their academic development.";

export const SCHOOL_LIFE_ACTIVITIES: SchoolActivityArea[] = [
  {
    id: "debate-public-speaking",
    title: "Debate & Public Speaking",
    category: "ORAL EXPRESSION",
    tagline: "Fostering articulate thought and reasoned presentation.",
    description:
      "Pupils learn to construct clear arguments, listen respectfully to opposing views, and present their ideas before peers with clarity and confidence.",
    aspectRatio: "wide",
    label: "Debate & Public Speaking",
    badge: "EXPRESSION",
  },
  {
    id: "reading-literacy",
    title: "Reading & Literacy",
    category: "LITERARY DISCOVERY",
    tagline: "Cultivating a lifelong appreciation for books and language.",
    description:
      "Guided reading sessions and storytelling encourage learners to explore diverse literature, develop vocabulary, and deepen comprehension habits.",
    aspectRatio: "portrait",
    label: "Reading & Literacy",
    badge: "LITERACY",
  },
  {
    id: "quiz-academic-activities",
    title: "Quiz & Academic Activities",
    category: "INTELLECTUAL INQUIRY",
    tagline: "Encouraging curiosity and knowledge recall across subjects.",
    description:
      "Team quizzes, mental arithmetic challenges, and knowledge competitions make learning collaborative, stimulating, and fun for all learners.",
    aspectRatio: "square",
    label: "Quiz & Academic Activities",
    badge: "INQUIRY",
  },
  {
    id: "creative-arts",
    title: "Creative Arts",
    category: "CREATIVE PRACTICE",
    tagline: "Giving visual form and musical melody to imagination.",
    description:
      "Drawing, painting, hands-on craft projects, and musical participation allow pupils to express their creativity and appreciate aesthetic detail.",
    aspectRatio: "portrait",
    label: "Creative Arts & Expression",
    badge: "ARTS",
  },
  {
    id: "sports-physical-activity",
    title: "Sports & Physical Activity",
    category: "PHYSICAL WELLBEING",
    tagline: "Building coordination, stamina, and healthy sportsmanship.",
    description:
      "Structured games, movement exercises, and outdoor recreation help pupils stay active, learn teamwork, and build physical resilience.",
    aspectRatio: "wide",
    label: "Sports & Physical Activity",
    badge: "MOVEMENT",
  },
  {
    id: "school-events-celebrations",
    title: "School Events & Celebrations",
    category: "COMMUNITY TRADITIONS",
    tagline: "Bringing pupils, educators, and families together.",
    description:
      "Milestones, cultural presentations, and term assemblies celebrate pupil effort and reinforce our shared school community values.",
    aspectRatio: "wide",
    label: "School Events & Assemblies",
    badge: "CELEBRATIONS",
  },
];

// Aliased for backward compatibility with SchoolLifeFacet
export const SCHOOL_LIFE_FACETS = SCHOOL_LIFE_ACTIVITIES.map((a) => ({
  ...a,
  placeholderLabel: a.label,
}));

export interface AdmissionsStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  actionNote: string;
}

export const ADMISSIONS_JOURNEY: AdmissionsStep[] = [
  {
    step: "01",
    title: "Enquire",
    subtitle: "Begin the conversation",
    description:
      "Contact our admissions desk on 08036135006 or visit our campus in Sheretti, Abuja to discuss enrollment across Creche, Nursery, Primary, or Junior Secondary.",
    actionNote: "Phone enquiry line: 08036135006",
  },
  {
    step: "02",
    title: "Visit the School",
    subtitle: "Experience DRVA firsthand",
    description:
      "Schedule a campus walk to observe our learning spaces, meet educators, and experience the warm, purposeful atmosphere.",
    actionNote: "Arranged by appointment through the school office.",
  },
  {
    step: "03",
    title: "Apply & Review",
    subtitle: "Complete documentation",
    description:
      "Submit formal registration details and previous academic or developmental records for stage placement review.",
    actionNote: "Reviewed by the admissions desk.",
  },
  {
    step: "04",
    title: "Join DRVA",
    subtitle: "Welcome to our school family",
    description:
      "Upon offer acceptance, receive the welcome pack, uniform guidelines, and term calendar as we prepare for your child's first day.",
    actionNote: "Orientation and start-of-term guidance.",
  },
];

// Alias for backward compatibility
export const PROVISIONAL_ADMISSIONS_JOURNEY = ADMISSIONS_JOURNEY;

export interface EssentialSectionInfo {
  title: string;
  eyebrow: string;
  description: string;
  statusNote: string;
}

export const ADMISSIONS_SECTIONS: EssentialSectionInfo[] = [
  {
    title: "Entry Guidelines & Placement",
    eyebrow: "CRITERIA",
    description:
      "Placement guidelines for Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3) entrance review and transfer requests.",
    statusNote: "Contact the admissions desk for session placement guidance.",
  },
  {
    title: "Tuition & Fees Schedule",
    eyebrow: "FINANCIAL INFORMATION",
    description:
      "Tuition fees, learning resources, uniforms, and payment schedules for the academic session across all levels.",
    statusNote: "Provided directly by the school administrative office.",
  },
  {
    title: "Academic Session Calendar",
    eyebrow: "CALENDAR",
    description:
      "Term start and end dates, mid-term breaks, examination windows, and holiday observances for the school year.",
    statusNote: "Issued to enrolled families at the start of each term.",
  },
  {
    title: "Required Registration Documents",
    eyebrow: "DOCUMENTATION",
    description:
      "Birth certificate copies, immunization/health records, passport photographs, and previous school academic reports (for Primary & JSS entrants).",
    statusNote: "Checklist provided upon registration request.",
  },
];

// Alias for backward compatibility
export const ADMISSIONS_PENDING_SECTIONS = ADMISSIONS_SECTIONS;

export const ADMISSIONS_FAQS = [
  {
    question: "What educational levels does DRVA currently serve?",
    answer:
      "DRVA currently serves children across four stages: Creche, Nursery, Primary, and Junior Secondary School through JSS3 (JSS1 – JSS3). Looking ahead, DRVA plans to expand into Senior Secondary School.",
  },
  {
    question: "How can parents arrange a campus visit?",
    answer:
      "Campus visits are scheduled by appointment. Please call the school on 08036135006 to arrange a convenient time with our administrative team.",
  },
  {
    question: "What is the admissions process for Junior Secondary (JSS1 – JSS3)?",
    answer:
      "Junior Secondary admissions involve submission of previous academic records, an admissions consultation, and stage placement review.",
  },
  {
    question: "Where is Deeper Real Vision Academy located?",
    answer:
      "DRVA is located Behind St. Anthony Catholic Church, Sheretti, Abuja, Nigeria. Full directions and appointment details can be confirmed by calling 08036135006.",
  },
];
