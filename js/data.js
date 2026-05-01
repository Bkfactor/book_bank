// ─── LEAD CITY BOOK BANK · DATA ──────────────────────────────────────────────

const DRIVE_ROOT     = "https://drive.google.com/drive/folders/1cUKueEo9bp9DnI34veQSO5bdsEAJklki";
const FORM_SUBMIT    = "https://forms.gle/41Lh2WAYEGM4zG1x6";   // Material submission
const FORM_FEEDBACK  = "https://forms.gle/xksioGRTY9YXJsP79";   // Feedback / complaints

const FACULTY_DRIVES = {
  "natural-applied-sciences":  null,
  "engineering":               null,
  "law":                       null,
  "management-social":         null,
  "information-communication": null,
  "environmental-design":      null,
  "arts":                      null,
  "education":                 null,
  "college-of-medicine":       null,
  "pharmacy":                  null
};

function getDriveLink(id) {
  return id ? "https://drive.google.com/drive/folders/" + id : DRIVE_ROOT;
}

// duration = number of years (4 | 5 | 6) — controls which level folders exist
// 4 → 100–400L  |  5 → 100–500L  |  6 → 100–600L

const FACULTIES = [
  {
    slug: "natural-applied-sciences",
    name: "Natural & Applied Sciences",
    shortName: "NAS",
    degree: "B.Sc",
    icon: "🧪",
    accentPink: false,
    description: "Sciences, computing, technology and environmental disciplines.",
    departments: [
      { slug: "chemistry",              name: "Chemistry",                          duration: 4 },
      { slug: "physics",                name: "Physics",                            duration: 4 },
      { slug: "physics-electronics",    name: "Physics with Electronics",           duration: 4 },
      { slug: "biology",                name: "Biology",                            duration: 4 },
      { slug: "microbiology",           name: "Microbiology",                       duration: 4 },
      { slug: "science-lab-tech",       name: "Science Laboratory Technology",      duration: 4 },
      { slug: "env-management-tox",     name: "Environmental Management & Toxicology", duration: 4 },
      { slug: "cs-economics",           name: "Computer Science with Economics",    duration: 4 },
      { slug: "cs-electronics",         name: "Computer Science with Electronics",  duration: 4 },
      { slug: "computer-info-science",  name: "Computer & Information Science",     duration: 4 },
      { slug: "information-technology", name: "Information Technology",             duration: 4 },
      { slug: "information-systems",    name: "Information Systems",                duration: 4 },
      { slug: "forensic-science",       name: "Forensic Science",                   duration: 4 },
      { slug: "cyber-security",         name: "Cyber Security",                     duration: 4 },
      { slug: "software-engineering",   name: "Software Engineering",               duration: 4 }
    ]
  },
  {
    slug: "engineering",
    name: "Faculty of Engineering",
    shortName: "FENG",
    degree: "B.Eng",
    icon: "⚙️",
    accentPink: true,
    description: "Engineering disciplines shaping infrastructure, electronics and technology.",
    departments: [
      { slug: "wood-products-eng",       name: "Wood Products Engineering",              duration: 5 },
      { slug: "electrical-electronics",  name: "Electrical & Electronics Engineering",   duration: 5 },
      { slug: "telecommunications",      name: "Telecommunications Engineering",         duration: 5 },
      { slug: "computer-engineering",    name: "Computer Engineering",                   duration: 5 },
      { slug: "civil-engineering",       name: "Civil Engineering",                      duration: 5 },
      { slug: "mechanical-engineering",  name: "Mechanical Engineering",                 duration: 5 }
    ]
  },
  {
    slug: "law",
    name: "Faculty of Law",
    shortName: "FLAW",
    degree: "LLB / BLD",
    icon: "⚖️",
    accentPink: false,
    description: "Legal education, diplomacy and international law studies.",
    departments: [
      { slug: "llb",            name: "Bachelor of Laws (LLB)",   duration: 5 },
      { slug: "law-diplomacy",  name: "Law & Diplomacy (BLD)",    duration: 5 }
    ]
  },
  {
    slug: "management-social",
    name: "Management & Social Sciences",
    shortName: "MSS",
    degree: "B.Sc",
    icon: "📊",
    accentPink: true,
    description: "Business, economics, social sciences and management disciplines.",
    departments: [
      { slug: "accounting",           name: "Accounting",                              duration: 4 },
      { slug: "business-admin",       name: "Business Administration",                 duration: 4 },
      { slug: "economics",            name: "Economics & Development Studies",         duration: 4 },
      { slug: "criminology",          name: "Criminology & Security Studies",          duration: 4 },
      { slug: "politics",             name: "Politics & International Relations",      duration: 4 },
      { slug: "banking-finance",      name: "Banking & Finance",                       duration: 4 },
      { slug: "entrepreneurship",     name: "Entrepreneurship",                        duration: 4 },
      { slug: "industrial-relations", name: "Industrial Relations & Human Resources",  duration: 4 },
      { slug: "marketing",            name: "Marketing",                               duration: 4 },
      { slug: "psychology",           name: "Psychology",                              duration: 4 },
      { slug: "sociology",            name: "Sociology",                               duration: 4 },
      { slug: "public-admin",         name: "Public Administration",                   duration: 4 },
      { slug: "social-work",          name: "Social Work",                             duration: 4 },
      { slug: "tourism-hospitality",  name: "Tourism & Hospitality Management",        duration: 4 }
    ]
  },
  {
    slug: "information-communication",
    name: "Information & Communication Sciences",
    shortName: "ICS",
    degree: "B.Sc",
    icon: "📡",
    accentPink: false,
    description: "Mass communication, media, library and information management.",
    departments: [
      { slug: "mass-communication",  name: "Mass Communication & Media Technology",       duration: 4 },
      { slug: "public-relations",    name: "Public Relations",                            duration: 4 },
      { slug: "journalism",          name: "Journalism",                                  duration: 4 },
      { slug: "advertising",         name: "Advertising",                                 duration: 4 },
      { slug: "media-studies",       name: "Media Studies",                               duration: 4 },
      { slug: "printing-publishing", name: "Printing and Publishing",                     duration: 4 },
      { slug: "library-archival",    name: "Library, Archival & Information Studies",     duration: 4 },
      { slug: "office-info-mgt",     name: "Office and Information Management",           duration: 4 },
      { slug: "health-info-mgt",     name: "Health Information Management",               duration: 4 },
      { slug: "info-science-media",  name: "Information Science & Media Studies",         duration: 4 }
    ]
  },
  {
    slug: "environmental-design",
    name: "Environmental Design",
    shortName: "FEDM",
    degree: "B.Sc / B.Arch",
    icon: "🏗️",
    accentPink: true,
    description: "Architecture, planning, building and environmental management.",
    departments: [
      { slug: "architecture",              name: "Architecture",                   duration: 5 },
      { slug: "urban-regional-planning",   name: "Urban and Regional Planning",    duration: 5 },
      { slug: "building",                  name: "Building",                       duration: 5 },
      { slug: "estate-management",         name: "Estate Management",              duration: 5 },
      { slug: "quantity-surveying",        name: "Quantity Surveying",             duration: 5 },
      { slug: "surveying-geoinformatics",  name: "Surveying and Geoinformatics",   duration: 5 }
    ]
  },
  {
    slug: "arts",
    name: "Faculty of Arts",
    shortName: "FARTS",
    degree: "B.A",
    icon: "📚",
    accentPink: false,
    description: "Language, literature, performing arts, film and religious studies.",
    departments: [
      { slug: "english-literary",     name: "English & Literary Studies",      duration: 4 },
      { slug: "performing-arts-film", name: "Performing Arts & Film Studies",  duration: 4 },
      { slug: "religious-studies",    name: "Religious Studies",               duration: 4 }
    ]
  },
  {
    slug: "education",
    name: "Faculty of Education",
    shortName: "FEDU",
    degree: "B.Ed",
    icon: "🎓",
    accentPink: true,
    description: "Teacher education across sciences, arts, technology and management.",
    departments: [
      { slug: "biology-edu",          name: "Biology Education",          duration: 4 },
      { slug: "chemistry-edu",        name: "Chemistry Education",        duration: 4 },
      { slug: "physics-edu",          name: "Physics Education",          duration: 4 },
      { slug: "computer-science-edu", name: "Computer Science Education", duration: 4 },
      { slug: "mathematics-edu",      name: "Mathematics Education",      duration: 4 },
      { slug: "physical-health-edu",  name: "Physical & Health Education",duration: 4 },
      { slug: "english-edu",          name: "English Education",          duration: 4 },
      { slug: "educational-mgt",      name: "Educational Management",     duration: 4 },
      { slug: "social-studies-edu",   name: "Social Studies Education",   duration: 4 },
      { slug: "business-studies-edu", name: "Business Studies Education", duration: 4 }
    ]
  },
  {
    slug: "college-of-medicine",
    name: "College of Medicine",
    shortName: "COM",
    degree: "MBBS / B.Sc",
    icon: "🩺",
    accentPink: false,
    description: "Basic medical sciences, clinical sciences and public health programmes.",
    subgroups: [
      {
        label: "Basic Medical Sciences",
        departments: [
          { slug: "human-anatomy",        name: "Human Anatomy",                        duration: 4 },
          { slug: "physiology",           name: "Physiology",                           duration: 4 },
          { slug: "biochemistry",         name: "Biochemistry",                         duration: 4 },
          { slug: "medical-micro-para",   name: "Medical Microbiology & Parasitology",  duration: 4 },
          { slug: "pharmacology",         name: "Pharmacology",                         duration: 4 }
        ]
      },
      {
        label: "Clinical Sciences",
        departments: [
          { slug: "nursing",              name: "Nursing",                              duration: 5 },
          { slug: "medical-radiography",  name: "Medical Radiography",                 duration: 5 },
          { slug: "physiotherapy",        name: "Physiotherapy",                       duration: 5 },
          { slug: "medical-lab-science",  name: "Medical Laboratory Science",          duration: 5 },
          { slug: "dentistry",            name: "Dentistry",                           duration: 6 },
          { slug: "medicine",             name: "Medicine",                            duration: 6 }
        ]
      },
      {
        label: "Public Health",
        departments: [
          { slug: "human-nutrition",      name: "Human Nutrition & Dietetics",         duration: 4 },
          { slug: "community-health",     name: "Community Health",                    duration: 4 },
          { slug: "health-promotion",     name: "Health Promotion & Education",        duration: 4 },
          { slug: "health-info-mgt-ph",   name: "Health Information Management",       duration: 4 },
          { slug: "preventive-medicine",  name: "Preventive Medicine & Primary Care",  duration: 4 },
          { slug: "health-policy",        name: "Health Policy & Management",          duration: 4 },
          { slug: "env-health-sciences",  name: "Environmental Health Sciences",       duration: 4 }
        ]
      }
    ],
    get departments() {
      return this.subgroups.flatMap(function(g) { return g.departments; });
    }
  },
  {
    slug: "pharmacy",
    name: "Faculty of Pharmacy",
    shortName: "FPHARM",
    degree: "Pharm.D",
    icon: "💊",
    accentPink: true,
    description: "Pharmaceutical sciences, drug development and clinical pharmacy.",
    departments: [
      { slug: "pharmacy", name: "Pharmacy (Doctor of Pharmacy)", duration: 6 }
    ]
  }
];

// ─── RESOURCES ────────────────────────────────────────────────────────────────
// Add materials here once uploaded to Google Drive.
// type: "notes" | "past" | "text" | "slides" | "research"

const RESOURCES = [];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function getFacultyBySlug(slug) {
  return FACULTIES.find(function(f) { return f.slug === slug; }) || null;
}

function getDepartmentBySlug(faculty, deptSlug) {
  if (!faculty) return null;
  return faculty.departments.find(function(d) { return d.slug === deptSlug; }) || null;
}

function getResourcesFor(facultySlug, deptSlug) {
  return RESOURCES.filter(function(r) {
    return r.faculty_slug === facultySlug && r.dept_slug === deptSlug;
  });
}

function searchResources(query) {
  var q = query.toLowerCase().trim();
  if (!q) return RESOURCES;
  return RESOURCES.filter(function(r) {
    return r.title.toLowerCase().includes(q) ||
           r.course.toLowerCase().includes(q) ||
           r.type.toLowerCase().includes(q) ||
           r.level.includes(q);
  });
}

function getLevelsForDuration(duration) {
  var levels = [];
  for (var i = 1; i <= duration; i++) {
    levels.push(i * 100);
  }
  return levels;
}

const TYPE_LABEL = {
  notes:    "Course Notes",
  past:     "Past Questions",
  text:     "Textbook",
  slides:   "Slides",
  research: "Research"
};

const TYPE_CLASS = {
  notes:    "tag-notes",
  past:     "tag-past",
  text:     "tag-text",
  slides:   "tag-slides",
  research: "tag-research"
};
