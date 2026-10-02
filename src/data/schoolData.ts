/**
 * DRVA — Deeper Real Vision Academy
 * Centralized School Information & Verified Content Registry
 * 
 * Verified School Information:
 * - Name: Deeper Real Vision Academy (DRVA)
 * - Location: Kabusa, Abuja, Nigeria
 * - Founded: October 2016
 * - Educational Stages: Creche, Nursery, Primary, Junior Secondary (JSS1–JSS3)
 * - Motto: IN GOD WE TRUST
 * - Milestone: 2016 — 2026 (Ten years since founding)
 */

export const SCHOOL_INFO = {
  brand: "DRVA",
  fullName: "Deeper Real Vision Academy",
  motto: "IN GOD WE TRUST",
  location: "Kabusa, Abuja, Nigeria",
  cityState: "Kabusa, Abuja",
  founded: "October 2016",
  foundedYear: 2016,
  milestoneYears: "2016 — 2026",
  milestoneTag: "A decade of DRVA",
  levels: ["Creche", "Nursery", "Primary", "Junior Secondary"] as const,
  juniorSecondaryScope: "JSS1 – JSS3",
  tagline: "Bright minds. Good people.",
} as const;

export const SCHOOL_CONTACT = {
  address: {
    label: "Campus Location",
    value: "Kabusa, Abuja, Nigeria",
    note: "Federal Capital Territory, Nigeria. Visiting by scheduled appointment.",
  },
  officeHours: {
    label: "School Office",
    value: "Monday – Friday, Term Time",
    note: "Visiting by scheduled appointment.",
  },
};

export const SCHOOL_MISSION_VISION = {
  mission: {
    heading: "Our Purpose & Commitment",
    statement:
      "To provide an uplifting, disciplined, and nurturing environment where every child is known, guided with care, and anchored in enduring moral character.",
  },
  vision: {
    heading: "Our Educational Aspiration",
    statement:
      "To be an exemplary learning community recognized for nurturing confident, principled, and curious young minds prepared for lifelong achievement.",
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

export interface SchoolLifeFacet {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  aspectRatio?: "wide" | "portrait" | "video" | "square";
  label: string;
  placeholderLabel?: string; // alias
  badge: string;
}

export const SCHOOL_LIFE_FACETS: SchoolLifeFacet[] = [
  {
    id: "classroom-life",
    title: "Classroom Life",
    category: "ACADEMIC ATMOSPHERE",
    tagline: "Purposeful inquiry, focused attention, and supportive guidance.",
    description:
      "Inside DRVA classrooms, learning is structured and collaborative. Teachers observe pupils closely, tailoring guidance to support comprehension and active participation across all levels.",
    aspectRatio: "wide",
    label: "Classroom Learning & Instruction",
    placeholderLabel: "Classroom Learning & Instruction",
    badge: "DAILY LEARNING",
  },
  {
    id: "creativity-arts",
    title: "Creativity & The Arts",
    category: "EXPRESSIVE ARTS",
    tagline: "Giving voice to imagination, melody, and visual expression.",
    description:
      "Through music, visual arts, drama, and craft activities, pupils are encouraged to explore their creative sensibilities and express themselves with confidence.",
    aspectRatio: "portrait",
    label: "Creative Arts & Music",
    placeholderLabel: "Creative Arts & Music",
    badge: "CREATIVE VOICE",
  },
  {
    id: "sports-movement",
    title: "Sports & Movement",
    category: "PHYSICAL WELLNESS",
    tagline: "Building stamina, teamwork, and healthy sportsmanship.",
    description:
      "Structured outdoor activities, athletics, inter-house sports, and movement drills teach pupils the value of physical fitness, resilience, and gracious teamwork.",
    aspectRatio: "wide",
    label: "Athletics & Physical Training",
    placeholderLabel: "Athletics & Physical Training",
    badge: "PHYSICAL HEALTH",
  },
  {
    id: "clubs-activities",
    title: "Clubs & Activities",
    category: "CO-CURRICULAR CLUBS",
    tagline: "Discovering new interests beyond the regular timetable.",
    description:
      "Afternoon clubs give pupils avenues to explore specialized interests, chess, young science discovery, debate, recitation, and cultural appreciation.",
    aspectRatio: "square",
    label: "Student Clubs & Workshops",
    placeholderLabel: "Student Clubs & Workshops",
    badge: "EXPANDED HORIZONS",
  },
  {
    id: "celebrations-events",
    title: "Celebrations & Events",
    category: "SCHOOL TRADITIONS",
    tagline: "Gathering as a community to honor effort and milestones.",
    description:
      "Our school calendar features meaningful traditions including annual speech days, cultural days, term showcases, and inter-house events.",
    aspectRatio: "wide",
    label: "Assemblies & School Traditions",
    placeholderLabel: "Assemblies & School Traditions",
    badge: "SHARED TRADITIONS",
  },
  {
    id: "trips-excursions",
    title: "Trips & Excursions",
    category: "LEARNING BEYOND CAMPUS",
    tagline: "Connecting classroom lessons with the wider world.",
    description:
      "Supervised educational visits to cultural landmarks, botanical sites, and community centers broaden pupils' horizons and encourage practical curiosity.",
    aspectRatio: "portrait",
    label: "Field Visits & Excursions",
    placeholderLabel: "Field Visits & Excursions",
    badge: "FIELD DISCOVERY",
  },
  {
    id: "community-fellowship",
    title: "Community & Fellowship",
    category: "FAMILY & VALUES",
    tagline: "Cultivating lasting bonds between pupils, educators, and families.",
    description:
      "Family open mornings, community gatherings, and parent-teacher consultations ensure that school life remains a collaborative, welcoming experience.",
    aspectRatio: "wide",
    label: "School Community & Fellowship",
    placeholderLabel: "School Community & Fellowship",
    badge: "COMMUNITY SPIRIT",
  },
];

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
      "Submit an initial enquiry online or contact our admissions office to share details about your child and request general school information across Creche, Nursery, Primary, or Junior Secondary.",
    actionNote: "Enquiry form available on our Contact page.",
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
      "DRVA serves children across four stages: Creche, Nursery, Primary, and Junior Secondary School through JSS3 (JSS1 – JSS3).",
  },
  {
    question: "How can parents arrange a campus visit?",
    answer:
      "Campus visits are scheduled by appointment through the school office to ensure dedicated time for visiting families.",
  },
  {
    question: "What is the admissions process for Junior Secondary (JSS1 – JSS3)?",
    answer:
      "Junior Secondary admissions involve submission of previous academic records, an admissions consultation, and stage placement review.",
  },
  {
    question: "Where is Deeper Real Vision Academy located?",
    answer:
      "DRVA is located in Kabusa, Abuja, Nigeria. Full directions and appointment details are provided by the school office.",
  },
];
