export type GalleryCategory =
  | "All"
  | "Cultural Day"
  | "Graduation"
  | "School Life"
  | "Events";

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
  "Graduation",
  "School Life",
  "Events",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "cultural-day-attire",
    title: "Heritage & Cultural Attire Presentation",
    category: "Cultural Day",
    caption:
      "Pupils proudly showcasing traditional attire representing Nigeria's diverse cultural heritages during the annual DRVA Cultural Day celebration.",
    alt: "DRVA pupils celebrating Cultural Day in traditional Nigerian attire in Sheretti, Abuja",
    aspectRatio: "feature",
    dateOrTerm: "Annual Cultural Day",
    badge: "HERITAGE",
    src: "/images/gallery/cultural-day-attire.jpg",
  },
  {
    id: "cultural-day-music-dance",
    title: "Traditional Music & Dance Showcase",
    category: "Cultural Day",
    caption:
      "Energetic cultural choreography and rhythmic performances led by pupils across primary and secondary stages.",
    alt: "Students performing traditional cultural dance during school celebration",
    aspectRatio: "landscape",
    dateOrTerm: "Cultural Celebration",
    badge: "PERFORMANCE",
    src: "/images/gallery/cultural-day-dance.jpg",
  },
  {
    id: "cultural-day-exhibition",
    title: "Regional Heritage & Craft Exhibition",
    category: "Cultural Day",
    caption:
      "Interactive displays of regional artifacts, cuisine, and handcrafted projects assembled by our classes.",
    alt: "Cultural artifacts and regional craft exhibition curated by DRVA pupils",
    aspectRatio: "portrait",
    dateOrTerm: "Cultural Exhibition",
    badge: "COMMUNITY",
    src: "/images/gallery/cultural-day-exhibition.jpg",
  },
  {
    id: "graduation-prize-giving",
    title: "Annual Prize Giving & Speech Ceremony",
    category: "Graduation",
    caption:
      "Recognizing outstanding academic diligence, moral exemplary character, and consistent effort at the close of the academic year.",
    alt: "DRVA Prize Giving and Speech Day ceremony in Sheretti, Abuja",
    aspectRatio: "landscape",
    dateOrTerm: "End of Session",
    badge: "EXCELLENCE",
    src: "/images/gallery/graduation-prize-giving.jpg",
  },
  {
    id: "graduation-nursery-transition",
    title: "Early Years Graduation & Milestone",
    category: "Graduation",
    caption:
      "Celebrating our young nursery learners as they complete their foundational stages and advance into Primary 1.",
    alt: "Nursery pupils in graduation caps celebrating advancement to primary school",
    aspectRatio: "portrait",
    dateOrTerm: "Graduation Milestone",
    badge: "EARLY YEARS",
    src: "/images/gallery/graduation-nursery.jpg",
  },
  {
    id: "graduation-valedictory-procession",
    title: "Graduation Procession & Ceremony",
    category: "Graduation",
    caption:
      "Graduating pupils, educators, and parents gathered in celebration of shared accomplishments and purposeful learning.",
    alt: "Graduation ceremony procession with educators and students",
    aspectRatio: "feature",
    dateOrTerm: "Valedictory Service",
    badge: "MILESTONE",
    src: "/images/gallery/graduation-procession.jpg",
  },
  {
    id: "school-life-morning-assembly",
    title: "Morning Assembly & Devotion",
    category: "School Life",
    caption:
      "The DRVA community gathering each morning for prayer, national and school anthems, and moral guidance under our motto 'In God We Trust'.",
    alt: "Pupils and teachers at DRVA morning assembly in Sheretti, Abuja",
    aspectRatio: "landscape",
    dateOrTerm: "Daily Routine",
    badge: "ASSEMBLY",
    src: "/images/gallery/school-life-assembly.jpg",
  },
  {
    id: "school-life-reading-circle",
    title: "Primary Reading Circle & Literacy Hour",
    category: "School Life",
    caption:
      "Guided reading sessions where young pupils develop phonics fluency, comprehension confidence, and a lifelong appreciation for books.",
    alt: "Primary pupils engaged in interactive guided reading session",
    aspectRatio: "portrait",
    dateOrTerm: "Classroom Practice",
    badge: "LITERACY",
    src: "/images/gallery/school-life-reading.jpg",
  },
  {
    id: "school-life-maths-inquiry",
    title: "Collaborative Mathematics & Problem Solving",
    category: "School Life",
    caption:
      "Learners working together with hands-on learning aids and structured numeracy exercises to build problem-solving fluency.",
    alt: "Students collaborating on numeracy and problem-solving exercises in classroom",
    aspectRatio: "square",
    dateOrTerm: "Classroom Learning",
    badge: "NUMERACY",
    src: "/images/gallery/school-life-maths.jpg",
  },
  {
    id: "school-life-creative-crafts",
    title: "Hands-on Creative Arts & Craft",
    category: "School Life",
    caption:
      "Practical exploration through drawing, painting, modeling, and tactile projects encouraging creative expression.",
    alt: "Children creating artwork and colorful crafts in classroom workshop",
    aspectRatio: "portrait",
    dateOrTerm: "Creative Arts",
    badge: "CREATIVITY",
    src: "/images/gallery/school-life-crafts.jpg",
  },
  {
    id: "school-life-outdoor-play",
    title: "Outdoor Recreation & Peer Games",
    category: "School Life",
    caption:
      "Supervised playtime encouraging active movement, camaraderie, fair play, and healthy social development.",
    alt: "Pupils enjoying recreation and outdoor games during break time",
    aspectRatio: "landscape",
    dateOrTerm: "Campus Life",
    badge: "RECREATION",
    src: "/images/gallery/school-life-play.jpg",
  },
  {
    id: "events-inter-house-sports",
    title: "Inter-House Sports & Athletic Competition",
    category: "Events",
    caption:
      "A spirited day of track events, relay races, and team sports fostering athletic resilience, teamwork, and school spirit.",
    alt: "Students competing in track races during DRVA Inter-House Sports competition",
    aspectRatio: "feature",
    dateOrTerm: "Sports Season",
    badge: "ATHLETICS",
    src: "/images/gallery/events-sports.jpg",
  },
  {
    id: "events-literacy-spelling-bee",
    title: "Literacy Week & Spelling Bee Challenge",
    category: "Events",
    caption:
      "Pupils challenging themselves in vocabulary, speech articulation, and spelling competitions before their peers and teachers.",
    alt: "Pupils participating in school spelling bee and literacy contest",
    aspectRatio: "landscape",
    dateOrTerm: "Literacy Week",
    badge: "ACADEMICS",
    src: "/images/gallery/events-spelling-bee.jpg",
  },
  {
    id: "events-independence-day",
    title: "National Independence Day Assembly",
    category: "Events",
    caption:
      "Commemorating Nigerian National Day through historical recitations, national pride, and civic awareness.",
    alt: "DRVA students holding flags during National Independence Day assembly",
    aspectRatio: "portrait",
    dateOrTerm: "Civic Milestone",
    badge: "CIVIC DAY",
    src: "/images/gallery/events-independence.jpg",
  },
  {
    id: "events-end-of-year-carols",
    title: "End-of-Year Thanksgiving & Carol Presentation",
    category: "Events",
    caption:
      "Musical presentations, scripture recitations, and joyous thanksgiving fellowship welcoming families to conclude the term.",
    alt: "Pupils choir performing during end of year thanksgiving and carols",
    aspectRatio: "landscape",
    dateOrTerm: "First Term Close",
    badge: "FELLOWSHIP",
    src: "/images/gallery/events-carols.jpg",
  },
];
