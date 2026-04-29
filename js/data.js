// ─── LEAD CITY BOOK BANK · DATA ──────────────────────────────────────────────
// Edit this file to add/remove faculties, departments, and resources.

const FACULTIES = [
  {
    slug: "applied-sciences",
    name: "Faculty of Applied Sciences",
    shortName: "FONAS",
    degree: "B.Sc",
    icon: "🔬",
    accent: "#1B4FA8",
    description: "Natural sciences, computing, technology and applied disciplines.",
    departments: [
      { slug: "chemistry", name: "Chemistry" },
      { slug: "physics", name: "Physics" },
      { slug: "physics-electronics", name: "Physics with Electronics" },
      { slug: "biology", name: "Biology" },
      { slug: "microbiology", name: "Microbiology" },
      { slug: "science-lab-tech", name: "Science Laboratory Technology" },
      { slug: "env-management", name: "Environmental Management & Toxicology" },
      { slug: "cs-economics", name: "Computer Science with Economics" },
      { slug: "cs-electronics", name: "Computer Science with Electronics" },
      { slug: "computer-info-science", name: "Computer & Information Science" },
      { slug: "information-technology", name: "Information Technology" },
      { slug: "information-systems", name: "Information Systems" },
      { slug: "forensic-science", name: "Forensic Science" },
      { slug: "cyber-security", name: "Cyber Security" },
      { slug: "software-engineering", name: "Software Engineering" }
    ]
  },
  {
    slug: "engineering",
    name: "Faculty of Engineering",
    shortName: "FENG",
    degree: "B.Eng",
    icon: "⚙️",
    accent: "#E8198A",
    description: "Engineering disciplines shaping modern infrastructure and technology.",
    departments: [
      { slug: "wood-products-eng", name: "Wood Products Engineering" },
      { slug: "electrical-electronics", name: "Electrical & Electronics Engineering" },
      { slug: "telecommunications", name: "Telecommunications Engineering" },
      { slug: "computer-engineering", name: "Computer Engineering" },
      { slug: "civil-engineering", name: "Civil Engineering" },
      { slug: "mechanical-engineering", name: "Mechanical Engineering" }
    ]
  },
  {
    slug: "law",
    name: "Faculty of Law",
    shortName: "FLAW",
    degree: "LLB / BLD",
    icon: "⚖️",
    accent: "#1B4FA8",
    description: "Legal education, diplomacy and international law.",
    departments: [
      { slug: "bachelor-of-laws", name: "Bachelor of Laws (LLB)" },
      { slug: "law-diplomacy", name: "Law & Diplomacy (BLD)" }
    ]
  },
  {
    slug: "social-management",
    name: "Faculty of Social & Management Sciences",
    shortName: "FSMS",
    degree: "B.Sc",
    icon: "📊",
    accent: "#E8198A",
    description: "Business, social sciences, and management disciplines.",
    departments: [
      { slug: "accounting", name: "Accounting" },
      { slug: "business-admin", name: "Business Administration" },
      { slug: "economics", name: "Economics & Development Studies" },
      { slug: "criminology", name: "Criminology & Security Studies" },
      { slug: "politics", name: "Politics & International Relations" },
      { slug: "banking-finance", name: "Banking & Finance" },
      { slug: "entrepreneurship", name: "Entrepreneurship" },
      { slug: "industrial-relations", name: "Industrial Relations & Human Resources" },
      { slug: "marketing", name: "Marketing" },
      { slug: "psychology", name: "Psychology" },
      { slug: "sociology", name: "Sociology" },
      { slug: "public-admin", name: "Public Administration" },
      { slug: "info-media-studies", name: "Information Science & Media Studies" },
      { slug: "social-work", name: "Social Work" },
      { slug: "tourism-hospitality", name: "Tourism and Hospitality Management" },
      { slug: "library-info-science", name: "Library and Information Science (B.LS)" }
    ]
  },
  {
    slug: "communication-info",
    name: "Faculty of Communication & Information Science",
    shortName: "FCIS",
    degree: "B.Sc",
    icon: "📡",
    accent: "#1B4FA8",
    description: "Mass communication, media, library and information management.",
    departments: [
      { slug: "mass-communication", name: "Mass Communication & Media Tech." },
      { slug: "library-archival", name: "Library, Archival & Information Studies" },
      { slug: "office-info-mgt", name: "Office and Information Management" },
      { slug: "health-info-mgt", name: "Health Information Management" }
    ]
  },
  {
    slug: "environmental-design",
    name: "Faculty of Environmental Design & Management",
    shortName: "FEDM",
    degree: "B.Sc / B.Arch",
    icon: "🏗️",
    accent: "#E8198A",
    description: "Architecture, planning, building and environmental sciences.",
    departments: [
      { slug: "architecture", name: "Architecture" },
      { slug: "urban-regional-planning", name: "Urban and Regional Planning" },
      { slug: "building", name: "Building" },
      { slug: "estate-management", name: "Estate Management" },
      { slug: "quantity-surveying", name: "Quantity Surveying" },
      { slug: "surveying-geoinformatics", name: "Surveying and Geoinformatics" }
    ]
  }
];

// ─── RESOURCES ───────────────────────────────────────────────────────────────
// Add real resources here. drive_link = Google Drive shareable URL.
// type: "notes" | "past" | "text" | "slides" | "research"

const RESOURCES = [
  {
    id: 1,
    title: "Data Structures & Algorithms Notes",
    course: "CSC 201",
    type: "notes",
    level: "200",
    faculty_slug: "applied-sciences",
    dept_slug: "computer-info-science",
    semester: "1",
    uploaded: "Jan 2025",
    drive_link: "#"
  },
  {
    id: 2,
    title: "Introduction to AI — Past Questions (2020–2024)",
    course: "CSC 302",
    type: "past",
    level: "300",
    faculty_slug: "applied-sciences",
    dept_slug: "computer-info-science",
    semester: "2",
    uploaded: "Feb 2025",
    drive_link: "#"
  },
  {
    id: 3,
    title: "Big Data Computing Lecture Slides",
    course: "DTS 312",
    type: "slides",
    level: "300",
    faculty_slug: "applied-sciences",
    dept_slug: "computer-info-science",
    semester: "2",
    uploaded: "Mar 2025",
    drive_link: "#"
  },
  {
    id: 4,
    title: "Statistics for Data Science Textbook",
    course: "DTS 212",
    type: "text",
    level: "200",
    faculty_slug: "applied-sciences",
    dept_slug: "computer-info-science",
    semester: "2",
    uploaded: "Apr 2025",
    drive_link: "#"
  },
  {
    id: 5,
    title: "Network Security Fundamentals Notes",
    course: "CYB 201",
    type: "notes",
    level: "200",
    faculty_slug: "applied-sciences",
    dept_slug: "cyber-security",
    semester: "1",
    uploaded: "Mar 2025",
    drive_link: "#"
  },
  {
    id: 6,
    title: "Software Engineering Principles — Past Q.",
    course: "SEN 301",
    type: "past",
    level: "300",
    faculty_slug: "applied-sciences",
    dept_slug: "software-engineering",
    semester: "1",
    uploaded: "Apr 2025",
    drive_link: "#"
  },
  {
    id: 7,
    title: "Circuit Analysis & Electronics Notes",
    course: "EEE 201",
    type: "notes",
    level: "200",
    faculty_slug: "engineering",
    dept_slug: "electrical-electronics",
    semester: "1",
    uploaded: "Feb 2025",
    drive_link: "#"
  },
  {
    id: 8,
    title: "Constitutional Law Past Questions",
    course: "LAW 301",
    type: "past",
    level: "300",
    faculty_slug: "law",
    dept_slug: "bachelor-of-laws",
    semester: "1",
    uploaded: "Jan 2025",
    drive_link: "#"
  }
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getFacultyBySlug(slug) {
  return FACULTIES.find(f => f.slug === slug) || null;
}

function getDepartmentBySlug(faculty, deptSlug) {
  return faculty?.departments.find(d => d.slug === deptSlug) || null;
}

function getResourcesFor(facultySlug, deptSlug) {
  return RESOURCES.filter(r => r.faculty_slug === facultySlug && r.dept_slug === deptSlug);
}

function getAllResources() { return RESOURCES; }

function searchResources(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return RESOURCES.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.course.toLowerCase().includes(q) ||
    r.type.toLowerCase().includes(q)
  );
}

const TYPE_LABEL = { notes: "Course Notes", past: "Past Questions", text: "Textbook", slides: "Slides", research: "Research" };
const TYPE_CLASS = { notes: "tag-notes", past: "tag-past", text: "tag-text", slides: "tag-slides", research: "tag-research" };
