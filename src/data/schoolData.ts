/**
 * DRVA — Deeper Real Vision Academy
 * Centralized School Information & Verified Content Registry
 * 
 * Verified School Information:
 * - Name: Deeper Real Vision Academy (DRVA)
 * - Location: Behind St. Anthony Catholic Church, Sheretti, Abuja, Nigeria
 * - Founded: 2015
 * - Educational Stages: Creche, Nursery, Primary, Junior Secondary (JSS1–JSS3)
 * - Future Expansion: Senior Secondary School (Future Plan)
 * - Motto: IN GOD WE TRUST
 * - Phone: 08036135006
 * - Leadership: Mrs Okpala Priscilla (School Leadership)
 * - Milestone: Since 2015 (Growing with every generation)
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
  founded: "2015",
  foundedYear: 2015,
  milestoneYears: "Since 2015",
  milestoneTag: "Growing with every generation",
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
    note: "Official school premises in Sheretti, Abuja.",
  },
  phone: {
    label: "Phone Line",
    value: "08036135006",
    tel: "tel:08036135006",
    note: "Direct telephone line for school and admissions enquiries.",
  },
  officeHours: {
    label: "Enquiries Desk",
    value: "08036135006",
    note: "Call the school desk for admissions and general enquiries.",
  },
};

export const SCHOOL_STORY = {
  title: "Our Story",
  eyebrow: "THE DRVA STORY",
  paragraphs: [
    "Deeper Real Vision Academy has been part of the Abuja community since 2015. Established with a commitment to giving children a strong foundation for learning and life, DRVA has continued to grow with the families and community it serves.",
    "Today, the Academy supports learners from Creche through Junior Secondary, with an environment that encourages curiosity, discipline, confidence and steady academic growth.",
    "With plans to expand into Senior Secondary School, the Academy looks ahead to serving its learners through even more stages of their education, growing with every generation.",
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
      "An early learning and care stage designed to give young children a supportive beginning to school life in a safe and caring environment.",
    environmentHighlights: [
      "Safe and supportive care setting",
      "Gentle early routines",
      "Early language and sensory exposure",
      "Close parent communication",
    ],
    focusAreas: [
      "Early Language & Sound Play",
      "Caregiver Bonding & Comfort",
      "Sensory Discovery",
      "Early Developmental Care",
    ],
    provisionalFocus: [
      "Early Language & Sound Play",
      "Caregiver Bonding & Comfort",
      "Sensory Discovery",
      "Early Developmental Care",
    ],
  },
  {
    id: "nursery",
    stageNumber: "02",
    title: "Nursery",
    subtitle: "Curiosity, play and strong foundational habits.",
    stageCode: "Stage 02",
    overview:
      "An early-years stage where children begin building foundations for communication, learning and classroom participation.",
    environmentHighlights: [
      "Early literacy and phonics",
      "Foundational numeracy and counting",
      "Creative expression and movement",
      "Collaborative social play",
    ],
    focusAreas: [
      "Phonics & Communication",
      "Foundational Numeracy",
      "Creative Expression",
      "Social Habits & Manners",
    ],
    provisionalFocus: [
      "Phonics & Communication",
      "Foundational Numeracy",
      "Creative Expression",
      "Social Habits & Manners",
    ],
  },
  {
    id: "primary",
    stageNumber: "03",
    title: "Primary",
    subtitle: "Confidence, core knowledge and character.",
    stageCode: "Stage 03",
    overview:
      "A foundational academic stage supporting pupils as they develop knowledge, confidence and readiness for further learning.",
    environmentHighlights: [
      "Core literacy and grammar",
      "Mathematics and reasoning",
      "Basic science inquiry",
      "Moral and civic understanding",
    ],
    focusAreas: [
      "Language, Reading & Grammar",
      "Mathematics & Quantitative Skills",
      "Basic Science",
      "Civic Studies & Values",
    ],
    provisionalFocus: [
      "Language, Reading & Grammar",
      "Mathematics & Quantitative Skills",
      "Basic Science",
      "Civic Studies & Values",
    ],
  },
  {
    id: "junior-secondary",
    stageNumber: "04",
    title: "Junior Secondary",
    subtitle: "Subject mastery and purposeful readiness through JSS3.",
    stageCode: "JSS1 – JSS3",
    overview:
      "DRVA currently serves learners through JSS1–JSS3 as they continue their academic development and prepare for the next stage of education.",
    environmentHighlights: [
      "Subject-based academic disciplines",
      "Intermediate sciences and mathematics",
      "Language and humanities",
      "Personal responsibility and study habits",
    ],
    focusAreas: [
      "Intermediate Sciences & Mathematics",
      "English Language & Literature",
      "Social & Civic Studies",
      "Structured Study Habits",
    ],
    provisionalFocus: [
      "Intermediate Sciences & Mathematics",
      "English Language & Literature",
      "Social & Civic Studies",
      "Structured Study Habits",
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
      "Pupils learn to express ideas clearly, listen respectfully to others, and build confidence presenting before peers and teachers.",
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
      "Reading sessions and language activities encourage learners to explore books, develop vocabulary, and deepen comprehension.",
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
      "Collaborative quizzes and subject activities help pupils engage actively with their lessons and celebrate learning milestones.",
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
      "Drawing, craft activities, and music participation allow pupils to express their creativity and explore artistic interests.",
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
      "Games, movement exercises, and outdoor physical recreation help pupils stay active, learn teamwork, and develop healthy habits.",
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
      "School celebrations, Cultural Day presentations, and term milestones bring our school family together and reinforce shared values.",
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
    subtitle: "Connect with our desk",
    description:
      "Contact the admissions desk on 08036135006 or visit our campus in Sheretti, Abuja for information on Creche, Nursery, Primary, or Junior Secondary (JSS1–JSS3).",
    actionNote: "Phone line: 08036135006",
  },
  {
    step: "02",
    title: "Visit Campus",
    subtitle: "Learn more in person",
    description:
      "Prospective families wishing to see our campus in Sheretti, Abuja can connect with our administrative team to arrange a visit.",
    actionNote: "Contact the school office.",
  },
  {
    step: "03",
    title: "Admissions Guidance",
    subtitle: "Guidance & placement",
    description:
      "Receive enrollment guidance, requirements, and stage placement information directly from the school administration.",
    actionNote: "School administrative desk.",
  },
  {
    step: "04",
    title: "Enrolment",
    subtitle: "Join our school family",
    description:
      "Complete enrollment steps and prepare for your child's educational journey at DRVA.",
    actionNote: "Deeper Real Vision Academy.",
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
    title: "Stage Placement & Levels",
    eyebrow: "EDUCATIONAL SCOPE",
    description:
      "DRVA serves learners across Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3). Connect with our desk for placement details.",
    statusNote: "Call 08036135006 for placement information",
  },
  {
    title: "School Fees & Requirements",
    eyebrow: "FEES & ENQUIRIES",
    description:
      "Information regarding school fees and enrollment requirements is provided directly by the school administrative office.",
    statusNote: "Direct enquiry on 08036135006",
  },
  {
    title: "Campus Location",
    eyebrow: "LOCATION",
    description:
      "DRVA is located Behind St. Anthony Catholic Church, Sheretti, Abuja, Nigeria.",
    statusNote: "Sheretti, Abuja",
  },
  {
    title: "Admissions Enquiries",
    eyebrow: "ADMISSIONS DESK",
    description:
      "Our school administration is available to answer any questions from prospective parents and guardians.",
    statusNote: "Phone: 08036135006",
  },
];

// Alias for backward compatibility
export const ADMISSIONS_PENDING_SECTIONS = ADMISSIONS_SECTIONS;

export const ADMISSIONS_FAQS = [
  {
    question: "What educational levels does DRVA currently serve?",
    answer:
      "DRVA currently serves children across Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3). Looking ahead, DRVA plans to expand into Senior Secondary School.",
  },
  {
    question: "How can parents learn more about the school or arrange a visit?",
    answer:
      "Parents and guardians can call our school desk on 08036135006 for information about DRVA and visiting our campus in Sheretti, Abuja.",
  },
  {
    question: "How can families enquire about admissions for Junior Secondary (JSS1–JSS3)?",
    answer:
      "For Junior Secondary enquiries and stage placement details, please contact the school desk on 08036135006.",
  },
  {
    question: "Where is Deeper Real Vision Academy located?",
    answer:
      "DRVA is located Behind St. Anthony Catholic Church, Sheretti, Abuja, Nigeria. For directions and enquiries, call 08036135006.",
  },
];
