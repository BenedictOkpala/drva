/**
 * DRVA — Deeper Real Vision Academy
 * Centralized School Information & Provisional Content Registry
 * 
 * Known Information:
 * - Brand: DRVA
 * - Full Name: Deeper Real Vision Academy
 * - Levels: Creche, Nursery, Primary, Junior Secondary (through JSS3)
 * - Historical Motto: IN GOD WE TRUST
 * 
 * All other content marked as PROVISIONAL awaits official school documentation.
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

export interface ContactPlaceholder {
  label: string;
  value: string;
  status: "known" | "awaiting_verification";
  note?: string;
}

export const SCHOOL_CONTACT = {
  address: {
    label: "Campus Location",
    value: "Kabusa, Abuja, Nigeria",
    status: "known" as const,
    note: "Federal Capital Territory, Nigeria. Full visiting directions available on appointment.",
  },
  admissionsPhone: {
    label: "Admissions Phone",
    value: "[Admissions Phone Number — Awaiting Verification]",
    status: "awaiting_verification",
    note: "Dedicated admissions enquiry line to be supplied.",
  },
  generalPhone: {
    label: "General Office Phone",
    value: "[General Office Line — Awaiting Verification]",
    status: "awaiting_verification",
    note: "Administrative desk contact line to be supplied.",
  },
  email: {
    label: "Official Email",
    value: "[Official School Email — Awaiting Verification]",
    status: "awaiting_verification",
    note: "Official school administration email to be supplied.",
  },
  officeHours: {
    label: "Administrative Office Hours",
    value: "[Office Hours & Term Visiting Schedule — Awaiting Verification]",
    status: "awaiting_verification",
    note: "Standard school office opening hours to be supplied.",
  },
  socials: {
    label: "Social Channels",
    value: "[DRVA Official Social Profiles — Awaiting Links]",
    status: "awaiting_verification",
    note: "Official DRVA social media handles to be supplied.",
  },
};

export const PROVISIONAL_MISSION_VISION = {
  mission: {
    status: "provisional",
    label: "Provisional Mission Statement",
    heading: "Our Purpose & Commitment",
    statement:
      "To provide an uplifting, disciplined, and nurturing environment where every child discovers their innate potential, develops deep intellectual curiosity, and is anchored in enduring moral character.",
    disclaimer:
      "Provisional placeholder — Official school mission statement to be confirmed by leadership.",
  },
  vision: {
    status: "provisional",
    label: "Provisional Vision Statement",
    heading: "Our Educational Aspiration",
    statement:
      "To be an exemplary learning sanctuary recognized for nurturing confident, principled, and intellectually agile young leaders prepared for lifelong achievement.",
    disclaimer:
      "Provisional placeholder — Official school vision statement to be confirmed by leadership.",
  },
};

export interface ProvisionalValue {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PROVISIONAL_VALUES: ProvisionalValue[] = [
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
      "We encourage questions, hands-on exploration, and independent thought so learning remains an exciting, lifelong journey rather than mere memorization.",
  },
  {
    number: "03",
    title: "Excellence & Effort",
    subtitle: "Encouraging each child to achieve their best",
    description:
      "We cultivate high standards of diligence, resilience, and pride in one's work across academic subjects, creative arts, and personal conduct.",
  },
  {
    number: "04",
    title: "Community & Belonging",
    subtitle: "A partnership of pupils, teachers, and families",
    description:
      "Education flourishes when children feel safe, known, and valued. We build close, supportive relationships between the school and parents.",
  },
];

export interface AcademicStageDetail {
  id: "creche" | "nursery" | "primary" | "junior-secondary";
  stageNumber: string;
  title: string;
  subtitle: string;
  ageRange: string;
  overview: string;
  environmentHighlights: string[];
  curriculumStatus: string;
  provisionalFocus: string[];
}

export const ACADEMIC_STAGES: AcademicStageDetail[] = [
  {
    id: "creche",
    stageNumber: "01",
    title: "Creche",
    subtitle: "A safe and nurturing beginning.",
    ageRange: "3 Months – 18 Months",
    overview:
      "Our Creche provides an intimate, peaceful, and hygienic haven where infants receive attentive care. Early developmental rhythms, sensory exploration, and emotional warmth form the cornerstone of every day.",
    environmentHighlights: [
      "Calm, hygienic sleep and play spaces",
      "Attentive caregivers",
      "Sensory discovery and fine motor activities",
      "Daily parent routine communication",
    ],
    curriculumStatus:
      "Official early-years developmental schedule to be supplied by school administration.",
    provisionalFocus: [
      "Sensory & Perceptual Play",
      "Emotional Security & Bonding",
      "Early Vocalization & Sound Play",
      "Gentle Physical Milestones",
    ],
  },
  {
    id: "nursery",
    stageNumber: "02",
    title: "Nursery",
    subtitle: "Curiosity, play and strong foundations.",
    ageRange: "18 Months – 5 Years",
    overview:
      "The Nursery stage bridges early discovery with structured learning readiness. Through guided play, early phonics, number discovery, and creative arts, young minds develop a vibrant enthusiasm for school life.",
    environmentHighlights: [
      "Resource-rich learning areas",
      "Interactive storytelling and early phonics corners",
      "Creative art, movement, and music stations",
      "Guided cooperative social play",
    ],
    curriculumStatus:
      "Official nursery syllabus and learning framework to be supplied by school administration.",
    provisionalFocus: [
      "Phonics, Pre-Reading & Language",
      "Foundational Numeracy & Shapes",
      "Creative Expression & Music",
      "Social-Emotional Skills & Manners",
    ],
  },
  {
    id: "primary",
    stageNumber: "03",
    title: "Primary",
    subtitle: "Confidence, knowledge and character.",
    ageRange: "5 Years – 11 Years",
    overview:
      "Our Primary curriculum builds foundational subject mastery within a supportive community. Pupils deepen their understanding of core disciplines, build critical thinking habits, and develop personal responsibility.",
    environmentHighlights: [
      "Equipped primary classrooms and reading areas",
      "Mathematical reasoning and basic science inquiry",
      "Language development and reading comprehension",
      "Inter-house activities and character development",
    ],
    curriculumStatus:
      "Official primary national curriculum mapping and subject breakdowns to be supplied by school administration.",
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
    subtitle: "Critical thinking, academic readiness, and purposeful development (JSS1 – JSS3).",
    ageRange: "JSS1 – JSS3 (Approx. 10 – 14 Years)",
    overview:
      "Junior Secondary at DRVA provides academic continuity from primary education through JSS3. Students encounter expanded subject disciplines, structured inquiry, and collaborative study habits designed for secondary readiness.",
    environmentHighlights: [
      "Dedicated Junior Secondary study spaces",
      "Subject-based instructional timetable",
      "Analytical inquiry and group discussions",
      "Leadership opportunities and moral mentorship",
    ],
    curriculumStatus:
      "Official Junior Secondary syllabus, subject offerings, and examination framework to be supplied by school administration.",
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
  placeholderLabel: string;
  badge: string;
}

export const SCHOOL_LIFE_FACETS: SchoolLifeFacet[] = [
  {
    id: "classroom-life",
    title: "Classroom Life",
    category: "ACADEMIC ATMOSPHERE",
    tagline: "Purposeful inquiry, focused attention, and supportive guidance.",
    description:
      "Inside DRVA classrooms, learning is structured and collaborative. Teachers observe pupils closely, tailoring guidance to support foundational comprehension and active participation across all levels.",
    aspectRatio: "wide",
    placeholderLabel: "DRVA Active Classroom",
    badge: "DAILY LEARNING",
  },
  {
    id: "creativity-arts",
    title: "Creativity & The Arts",
    category: "EXPRESSIVE ARTS",
    tagline: "Giving voice to imagination, melody, and visual expression.",
    description:
      "Through music, visual arts, drama, and craft workshops, pupils are encouraged to explore their creative sensibilities and express themselves with confidence.",
    aspectRatio: "portrait",
    placeholderLabel: "Creative Arts & Music Studio",
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
    placeholderLabel: "Athletics & Physical Training Field",
    badge: "PHYSICAL HEALTH",
  },
  {
    id: "clubs-activities",
    title: "Clubs & Activities",
    category: "CO-CURRICULAR CLUBS",
    tagline: "Discovering new interests beyond the regular timetable.",
    description:
      "Afternoon clubs give pupils avenues to explore specialized hobbies, chess, young science discovery, debate, recitation, and cultural appreciation.",
    aspectRatio: "square",
    placeholderLabel: "Specialized Student Club Workshop",
    badge: "EXPANDED HORIZONS",
  },
  {
    id: "celebrations-events",
    title: "Celebrations & Events",
    category: "SCHOOL TRADITIONS",
    tagline: "Gathering as a community to honor effort and milestones.",
    description:
      "Our school calendar features meaningful traditions including annual speech and prize-giving ceremonies, cultural days, term showcases, and inter-house events.",
    aspectRatio: "wide",
    placeholderLabel: "School Assembly & Special Event Stage",
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
    placeholderLabel: "Field Trip & Discovery Excursion",
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
    placeholderLabel: "School Community & Family Gathering",
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

export const PROVISIONAL_ADMISSIONS_JOURNEY: AdmissionsStep[] = [
  {
    step: "01",
    title: "Enquire",
    subtitle: "Begin the conversation",
    description:
      "Submit an initial enquiry online or contact our admissions office to share details about your child and request general school information across Creche, Nursery, Primary, or Junior Secondary.",
    actionNote: "Provisional Step — Enquiry form available on the Contact page.",
  },
  {
    step: "02",
    title: "Visit the School",
    subtitle: "Experience DRVA firsthand",
    description:
      "Schedule a guided campus walk to observe our learning spaces, meet teachers, and experience the warm, purposeful atmosphere.",
    actionNote: "Provisional Step — Visiting schedules to be published by the school.",
  },
  {
    step: "03",
    title: "Apply & Assessment",
    subtitle: "Complete documentation",
    description:
      "Submit the formal registration details along with past developmental or academic records for gentle placement readiness review.",
    actionNote: "Provisional Step — Official application forms and requirements to be supplied.",
  },
  {
    step: "04",
    title: "Join DRVA",
    subtitle: "Welcome to our family",
    description:
      "Upon offer acceptance, receive the welcome pack, uniform guidelines, and term calendar as we prepare for your child's first day.",
    actionNote: "Provisional Step — Orientation details to be confirmed upon enrollment.",
  },
];

export interface PlaceholderSectionInfo {
  title: string;
  eyebrow: string;
  description: string;
  statusNote: string;
}

export const ADMISSIONS_PENDING_SECTIONS: PlaceholderSectionInfo[] = [
  {
    title: "Entry Requirements & Age Guidelines",
    eyebrow: "CRITERIA",
    description:
      "Age eligibility benchmarks for Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3) entrance guidelines, transfer requirements, and placement milestones.",
    statusNote: "Official entry criteria to be supplied by school administration.",
  },
  {
    title: "School Fees & Schedule",
    eyebrow: "FINANCIAL INFORMATION",
    description:
      "Tuition fees, resource levies, meal arrangements, uniform costs, and payment schedules for the academic session across all levels.",
    statusNote: "Official fee schedule to be supplied directly by the school bursary.",
  },
  {
    title: "Term Dates & Academic Session",
    eyebrow: "CALENDAR",
    description:
      "Term start and end dates, mid-term breaks, examination windows, and public holiday observances for the active school year.",
    statusNote: "Official academic calendar to be supplied prior to term commencement.",
  },
  {
    title: "Required Registration Documents",
    eyebrow: "DOCUMENTATION",
    description:
      "Birth certificate copies, immunization/health records, passport photographs, and previous school academic reports (for Primary & JSS entrants).",
    statusNote: "Official documentation checklist to be confirmed by admissions office.",
  },
];

export const ADMISSIONS_FAQS = [
  {
    question: "What educational levels does DRVA currently accommodate?",
    answer:
      "DRVA serves children across four progressive stages: Creche (from 3 months), Nursery (18 months to 5 years), Primary (5 to 11 years), and Junior Secondary School through JSS3 (JSS1 – JSS3).",
    isProvisional: false,
  },
  {
    question: "How can parents arrange a campus visit?",
    answer:
      "Campus visits will be scheduled by appointment through the school office once visiting hours for the upcoming session are finalized.",
    isProvisional: true,
  },
  {
    question: "What is the admissions process for Junior Secondary (JSS1 – JSS3)?",
    answer:
      "Junior Secondary admissions guidelines, transfer procedures, and placement assessments will be published directly in the official admissions pack prior to session commencement.",
    isProvisional: true,
  },
  {
    question: "Are school lunches and transport services provided?",
    answer:
      "Details regarding school catering, meal plans, and authorized transportation routes will be provided directly in the official admissions pack.",
    isProvisional: true,
  },
];
