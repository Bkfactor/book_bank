// ─── LEAD CITY BOOK BANK · DATA ──────────────────────────────────────────────

const DRIVE_ROOT    = "https://drive.google.com/drive/folders/1cUKueEo9bp9DnI34veQSO5bdsEAJklki";
const FORM_SUBMIT   = "https://forms.gle/41Lh2WAYEGM4zG1x6";
const FORM_FEEDBACK = "https://forms.gle/xksioGRTY9YXJsP79";

function driveFolder(id) {
  return "https://drive.google.com/drive/folders/" + id;
}

// ─── FACULTIES ────────────────────────────────────────────────────────────────
// drive_id  = the faculty-level folder ID
// Each department also has drive_id = its own sub-folder ID
// duration  = programme length in years (controls level tabs on dept page)

const FACULTIES = [
  {
    slug: "natural-applied-sciences",
    name: "Natural & Applied Sciences",
    shortName: "NAS",
    degree: "B.Sc",
    icon: "🧪",
    accentPink: false,
    description: "Study materials, past questions and lab reports across all levels — covering Computer Science, IT, Cyber Security, Biology, Chemistry and related programmes.",
    drive_id: "1AMFcGGdT8dswBLptKsJDyHBedjFb8IuH",
    departments: [
      { slug: "chemistry",              name: "Chemistry",                          duration: 4, drive_id: "1uViW7Z43ArYgFXuQxdccm6SrbPClukk6" },
      { slug: "physics",                name: "Physics",                            duration: 4, drive_id: "1c68igR5hODqKuQC1QZfE1Yx4nEmJV4at" },
      { slug: "physics-electronics",    name: "Physics with Electronics",           duration: 4, drive_id: "1FXM5FtndbHAiW-T0rDo_Gmi8SaD1IkeD" },
      { slug: "biology",                name: "Biology",                            duration: 4, drive_id: "1z0qljymGae8Sa2796_U3LQems-FoA1za" },
      { slug: "microbiology",           name: "Microbiology",                       duration: 4, drive_id: "1zFPlsKJo57SU7-0aykJYCGxYd4dJeU5M" },
      { slug: "science-lab-tech",       name: "Science Laboratory Technology",      duration: 4, drive_id: "1twYtraHdOpl4d-rv0hgbWsmhMQn0sUk4" },
      { slug: "env-management-tox",     name: "Environmental Management & Toxicology", duration: 4, drive_id: "1dc42_DL9nt_Jp4Z3ESviU-D2Gw_J9EZJ" },
      { slug: "cs-economics",           name: "Computer Science with Economics",    duration: 4, drive_id: "1-tUGl0LI-lda0jHtszDthahKJO3jVjUu" },
      { slug: "cs-electronics",         name: "Computer Science with Electronics",  duration: 4, drive_id: "1UyTnT9ieBwDUzMiub5PLx6YzbBYoS0Fx" },
      { slug: "computer-info-science",  name: "Computer & Information Science",     duration: 4, drive_id: "17hrzCz8n6e2ZksXkccTjQ2sCA2B9DDRf" },
      { slug: "information-technology", name: "Information Technology",             duration: 4, drive_id: "1wp0bdl-V3GjGhNhiuR2FwWkXmXpMJRIE" },
      { slug: "information-systems",    name: "Information Systems",                duration: 4, drive_id: "1z3aGsK0iLJZOuqUj8uBVOjLp2jf_DrHa" },
      { slug: "forensic-science",       name: "Forensic Science",                   duration: 4, drive_id: "10_4vgzL7fq5GNUEHNuMRRaHfe8EntrS4" },
      { slug: "cyber-security",         name: "Cyber Security",                     duration: 4, drive_id: "18UKInWRHVNB8vR47LtpEQA7oQdQfswwJ" },
      { slug: "software-engineering",   name: "Software Engineering",               duration: 4, drive_id: "18_gHum3hc9NZlr0NcEOzLhrHQTsZVcPF" }
    ]
  },
  {
    slug: "engineering",
    name: "Faculty of Engineering",
    shortName: "FENG",
    degree: "B.Eng",
    icon: "⚙️",
    accentPink: true,
    description: "Past questions, calculation notes and project resources for all engineering disciplines, including Civil, Electrical, Mechanical and Computer Engineering.",
    drive_id: "1peMRXqufqmXVvxfu0FcuspV002ttO4-R",
    departments: [
      { slug: "wood-products-eng",       name: "Wood Products Engineering",             duration: 5, drive_id: "1-h4G4tgzBz8wKi1tNN1OS-dbDNijANG9" },
      { slug: "electrical-electronics",  name: "Electrical & Electronics Engineering",  duration: 5, drive_id: "1D9TlhwDzhJNLQMJyroUwFEEvkYX5j7Qx" },
      { slug: "telecommunications",      name: "Telecommunications Engineering",        duration: 5, drive_id: "11USrQKmgKYvRaQnHLSP7NKFfWod8H-D0" },
      { slug: "computer-engineering",    name: "Computer Engineering",                  duration: 5, drive_id: "1rabWxWsh5TS6gL9CKV26L_Cf7vzasnws" },
      { slug: "civil-engineering",       name: "Civil Engineering",                     duration: 5, drive_id: "1tVPRURvx6N7IHmH1dg_KaGaVLRPeErMA" },
      { slug: "mechanical-engineering",  name: "Mechanical Engineering",                duration: 5, drive_id: "1eCGLGYbN3WiO_idVML-yioUzt9tOtI6p" }
    ]
  },
  {
    slug: "law",
    name: "Faculty of Law",
    shortName: "FLAW",
    degree: "LLB / BLD",
    icon: "⚖️",
    accentPink: false,
    description: "Case summaries, statutes, past questions and revision materials for Law and Law & Diplomacy students.",
    drive_id: "1OGBD9sh-XuFhVveetCf5nEG11SEFczhb",
    departments: [
      { slug: "llb",           name: "Bachelor of Laws (LLB)", duration: 5, drive_id: "1zfdix8GPE6z6fwGFu0a430ubnOuTSAuk" },
      { slug: "law-diplomacy", name: "Law & Diplomacy (BLD)",  duration: 5, drive_id: "1GZQ6C4L9xuPN6MTIg-p0ZwrRB3jBwKaY" }
    ]
  },
  {
    slug: "management-social",
    name: "Management & Social Sciences",
    shortName: "MSS",
    degree: "B.Sc",
    icon: "📊",
    accentPink: true,
    description: "Lecture notes and past questions across Accounting, Business Administration, Economics, Sociology, Psychology, Tourism and related courses.",
    drive_id: "1QgdipQrXF8v_1jDpqBqcmsE8qE0m53gE",
    departments: [
      { slug: "accounting",           name: "Accounting",                             duration: 4, drive_id: "12CRp3_XeyWVEHlJ1i5HPE57qu6GCw6GX" },
      { slug: "business-admin",       name: "Business Administration",                duration: 4, drive_id: "1ZrLCkI2wRDvCEz1ue4WVG_1ydHP8KHC9" },
      { slug: "economics",            name: "Economics & Development Studies",        duration: 4, drive_id: "1HEIO0haAu5UWqjKQYHpYK-w-cMQSx2iw" },
      { slug: "criminology",          name: "Criminology & Security Studies",         duration: 4, drive_id: "19Rr-aIQAUF-dP_gALGd1euodauH-pyeX" },
      { slug: "politics",             name: "Politics & International Relations",     duration: 4, drive_id: "1sdHspp42ec8VcW27ofkOOA-yCBS_o0Gd" },
      { slug: "banking-finance",      name: "Banking & Finance",                      duration: 4, drive_id: "1fNgLqDkvkPOzzY5hW1cz55fP9RGQoQQW" },
      { slug: "entrepreneurship",     name: "Entrepreneurship",                       duration: 4, drive_id: "1A6wTu3_G42WSXQVjKuVbDKS5ly-BD7YZ" },
      { slug: "industrial-relations", name: "Industrial Relations & Human Resources", duration: 4, drive_id: "10JREozQoaHu-GPjDvZBgRGtoFFx9si63" },
      { slug: "marketing",            name: "Marketing",                              duration: 4, drive_id: "1bV0APyZTOz45ejV0p8nM9bk43w7mnasV" },
      { slug: "psychology",           name: "Psychology",                             duration: 4, drive_id: "1qcKn3lKoY3_rTgUQey5FKM6mseayA8yb" },
      { slug: "sociology",            name: "Sociology",                              duration: 4, drive_id: "145HaFpHhJ2v2tUotnsNPpE7NR0GysohP" },
      { slug: "public-admin",         name: "Public Administration",                  duration: 4, drive_id: "1GahStSjWy7pqfl3f6eyQMT-njqloNvjZ" },
      { slug: "social-work",          name: "Social Work",                            duration: 4, drive_id: "1sSaCECfsdBZi1Iypt8Z6SQncveSOSolD" },
      { slug: "tourism-hospitality",  name: "Tourism & Hospitality Management",       duration: 4, drive_id: "1hwrVggAz0aSYgydDzwueRd4ophsxzPcQ" }
    ]
  },
  {
    slug: "information-communication",
    name: "Information & Communication Sciences",
    shortName: "ICS",
    degree: "B.Sc",
    icon: "📡",
    accentPink: false,
    description: "Study materials and past questions for Mass Communication, Journalism, Advertising, Library Science and related programmes.",
    drive_id: "1G_iwGwMMlxELrsDx90aHt400_gEbiqm-",
    departments: [
      { slug: "mass-communication",  name: "Mass Communication & Media Technology",    duration: 4, drive_id: "1DEZEtkvXl2KrTKpZB1sT4Se3BUY00-bx" },
      { slug: "public-relations",    name: "Public Relations",                         duration: 4, drive_id: "1ZlldvAW2eLjszoq4JVYiAH2-qdxGnZvr" },
      { slug: "journalism",          name: "Journalism",                               duration: 4, drive_id: "12FdWl0O7krEIDOSX3j8MlnYHLH3LoSnq" },
      { slug: "advertising",         name: "Advertising",                              duration: 4, drive_id: "1TUdPy-QO_i7RI578Rr-1nCuY7W5xBr6f" },
      { slug: "media-studies",       name: "Media Studies",                            duration: 4, drive_id: "1v2YCUeZLv6C8tLWDtPvc8kv45QoHVmrA" },
      { slug: "printing-publishing", name: "Printing and Publishing",                  duration: 4, drive_id: "1FCGVg-2zLLDB8utVnuhygLMNUKOCdNFG" },
      { slug: "library-archival",    name: "Library, Archival & Information Studies",  duration: 4, drive_id: "1vG3OzaW6MoqDDOjiFdOmN4gZ2Lu-72HZ" },
      { slug: "office-info-mgt",     name: "Office and Information Management",        duration: 4, drive_id: "18GsPEMMq3fQazdUmE2K2ruoE_FD1iPwy" },
      { slug: "health-info-mgt",     name: "Health Information Management",            duration: 4, drive_id: "1ngxTDQU7pROLKMQjfO-rnfUva3jgVRf6" },
      { slug: "info-science-media",  name: "Information Science & Media Studies",      duration: 4, drive_id: "1Wql05pnVaQJoZh3f_3ithhWNWWo7lmlk" }
    ]
  },
  {
    slug: "environmental-design",
    name: "Environmental Design",
    shortName: "FEDM",
    degree: "B.Sc / B.Arch",
    icon: "🏗️",
    accentPink: true,
    description: "Technical notes, project resources and past questions for Architecture, Estate Management, Quantity Surveying and related courses.",
    drive_id: "1-jczQm9rH9dxMPnsww5p-Y7PoBDoEDsc",
    departments: [
      { slug: "architecture",             name: "Architecture",                  duration: 5, drive_id: "16pp00W_LXsu9LEJvSmu09aLjh1pBdSFO" },
      { slug: "urban-regional-planning",  name: "Urban and Regional Planning",   duration: 5, drive_id: "1xrsdrDz3JKFITzhOsGdJKgGn3valt-8p" },
      { slug: "building",                 name: "Building",                      duration: 5, drive_id: "1TFzfdXhrc85dio2XnTlI_fL-rXIMXn6g" },
      { slug: "estate-management",        name: "Estate Management",             duration: 5, drive_id: "1OBavcUcGeZ_js9VHEfbnnCx4Eu-8YIAv" },
      { slug: "quantity-surveying",       name: "Quantity Surveying",            duration: 5, drive_id: "16S8bdkGDz3QOYSgu0xhSHIUfFrIoT9qU" },
      { slug: "surveying-geoinformatics", name: "Surveying and Geoinformatics",  duration: 5, drive_id: "146OtBUVafkK1G-gCUWluH1uXPXZxIiJl" }
    ]
  },
  {
    slug: "arts",
    name: "Faculty of Arts",
    shortName: "FARTS",
    degree: "B.A",
    icon: "📚",
    accentPink: false,
    description: "Lecture materials, essays and past questions for English, Performing Arts and Religious Studies.",
    drive_id: "1RP2EpTZ_5ChHuCF5yrnGl2PHol8Uzwr-",
    departments: [
      { slug: "english-literary",     name: "English & Literary Studies",     duration: 4, drive_id: "1ScghG5cNsiSBIPR8O6Feyi_vWzXeNRFc" },
      { slug: "performing-arts-film", name: "Performing Arts & Film Studies", duration: 4, drive_id: "1kfkbMRBsnEFKJqqHV9iRbdFGbTa-lvH9" },
      { slug: "religious-studies",    name: "Religious Studies",              duration: 4, drive_id: "1cJCFsSpW0Yt1f1BhVlTHeneBJdZS8nlc" }
    ]
  },
  {
    slug: "education",
    name: "Faculty of Education",
    shortName: "FEDU",
    degree: "B.Ed",
    icon: "🎓",
    accentPink: true,
    description: "Course notes, teaching frameworks and past questions across all Education disciplines, including Science, Arts and Business Education.",
    drive_id: "1O2IYhKUaeT7ErhER_nyWYJsuAstPJ1-1",
    departments: [
      { slug: "biology-edu",          name: "Biology Education",          duration: 4, drive_id: "1W-zUBkboKYhXYzjvxcNU1Ga3PdLAN6bZ" },
      { slug: "chemistry-edu",        name: "Chemistry Education",        duration: 4, drive_id: "1zDh-_DkoAzrcSYfV7JWP6-O4Qnx5ck5_" },
      { slug: "physics-edu",          name: "Physics Education",          duration: 4, drive_id: "14cpYWFliNIsyEA0LSEdpFG8NCFOZJLgd" },
      { slug: "computer-science-edu", name: "Computer Science Education", duration: 4, drive_id: "1oy04CxDgujisWh9zma-hQNP-BV87fBwC" },
      { slug: "mathematics-edu",      name: "Mathematics Education",      duration: 4, drive_id: "1aa2XRl1LFZOC5H6wOJjnxtB3JKob37iD" },
      { slug: "physical-health-edu",  name: "Physical & Health Education",duration: 4, drive_id: "1nfdGORBvsa2VbdTGP5L6g_SEsznTHzoA" },
      { slug: "english-edu",          name: "English Education",          duration: 4, drive_id: "1LLZu_X6cV7DfWV-0Lyok47y9tSHKcr1m" },
      { slug: "educational-mgt",      name: "Educational Management",     duration: 4, drive_id: "1q9SoNNZj8hk_hlYteCVpP_WF-EnMqR3T" },
      { slug: "social-studies-edu",   name: "Social Studies Education",   duration: 4, drive_id: "1su5I5avcc-BYz4HYTjzPT2oFVDolvEMV" },
      { slug: "business-studies-edu", name: "Business Studies Education", duration: 4, drive_id: "1G35s4ujK2W94xlVMGPD8J8L7nbSnqVUw" }
    ]
  },
  {
    slug: "college-of-medicine",
    name: "College of Medicine",
    shortName: "COM",
    degree: "MBBS / B.Sc",
    icon: "🩺",
    accentPink: false,
    description: "Study materials and revision resources covering Basic Medical Sciences, Clinical Sciences and Public Health programmes.",
    drive_id: "1rTuz1ZLGiE-mudSJdAnLhfrpN0ScnJrA",
    subgroups: [
      {
        label: "Basic Medical Sciences",
        departments: [
          { slug: "human-anatomy",       name: "Human Anatomy",                       duration: 4, drive_id: "1LAtoiIn_8ZyrvkGcmTRufLnb9Y5R_SdQ" },
          { slug: "physiology",          name: "Physiology",                          duration: 4, drive_id: "1k17D0mKSRu70IgFWvXTIdccjL0GoVXpb" },
          { slug: "biochemistry",        name: "Biochemistry",                        duration: 4, drive_id: "1OsWpKY12FUobPlD4__CZHZKx_o4gvPLb" },
          { slug: "medical-micro-para",  name: "Medical Microbiology & Parasitology", duration: 4, drive_id: "16VFK4KmZvoC6mM7XbzOsMf4KWGmEdlnW" },
          { slug: "pharmacology",        name: "Pharmacology",                        duration: 4, drive_id: "13tlo5R071nJPccBryyPVFIdt4hhPPRMy" }
        ]
      },
      {
        label: "Clinical Sciences",
        departments: [
          { slug: "nursing",             name: "Nursing",                             duration: 5, drive_id: "1uglw8uhyRiyt2o46aDHDrk-04cejhAY9" },
          { slug: "medical-radiography", name: "Medical Radiography",                 duration: 5, drive_id: "1EhoxmvnQUXB994ct_OL7I0n32TcuHtQ_" },
          { slug: "physiotherapy",       name: "Physiotherapy",                       duration: 5, drive_id: "1WnWjdx8a42ImNS4inn-EEey5rljuaJvL" },
          { slug: "medical-lab-science", name: "Medical Laboratory Science",          duration: 5, drive_id: "1AeHkYEHm_I-rhGEsY_yU1cKrOGqFlHGC" },
          { slug: "dentistry",           name: "Dentistry",                           duration: 6, drive_id: "1KVZ7d9sIf6xe6IQY9Odzg6rjgy-gnVA1" },
          { slug: "medicine",            name: "Medicine",                            duration: 6, drive_id: "1mOPTCIs_u5cZEqW3sqWHuwdG9bTTs5lU" }
        ]
      },
      {
        label: "Public Health",
        departments: [
          { slug: "human-nutrition",     name: "Human Nutrition & Dietetics",         duration: 4, drive_id: "12drmc8Op7uhubL-cfSQ9jR9sK8Iw77Sk" },
          { slug: "community-health",    name: "Community Health",                    duration: 4, drive_id: "1su_3sczAi8baIUm87T8sXL_RYdwpR4Gi" },
          { slug: "health-promotion",    name: "Health Promotion & Education",        duration: 4, drive_id: "17JtaPPNwTNYcWc9JS2IStnMQQQMTpYPo" },
          { slug: "health-info-mgt-ph",  name: "Health Information Management",       duration: 4, drive_id: "1FZyvZscClkxfjmyYNOqUM8ikNAO1q-1A" },
          { slug: "preventive-medicine", name: "Preventive Medicine & Primary Care",  duration: 4, drive_id: "1MyIafUv_fn_Krc_GPxI7p-WvWROl__f1" },
          { slug: "health-policy",       name: "Health Policy & Management",          duration: 4, drive_id: "1dDo-r6C3gu-MnXDCtJPzrepRztN23Ma-" },
          { slug: "env-health-sciences", name: "Environmental Health Sciences",       duration: 4, drive_id: "1RrIEKCj_6cgT11fUzET3NMjcfMUKJ5Od" }
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
    description: "Pharmacology notes, past questions and structured study materials for Pharmacy students.",
    drive_id: "1R8PFt-3VvLe2HJmPo2_44A2r-grpiw6M",
    departments: [
      { slug: "pharmacy", name: "Pharmacy (Doctor of Pharmacy)", duration: 6, drive_id: "10kxbnCjnMFwDbV5I_yClD77jcUP47skF" }
    ]
  }
];

// ─── GOOGLE SHEETS LIVE DATABASE ─────────────────────────────────────────────
// This is your live materials database.
// To add a material: add a row to the Sheet — the website updates automatically.
//
// SHEET SETUP (do this once):
// 1. Go to: https://docs.google.com/spreadsheets/
// 2. Create a new sheet called "Lead City Book Bank — Materials"
// 3. Set Row 1 as headers (exact spelling matters):
//    id | title | course | type | level | faculty_slug | dept_slug | semester | uploaded | drive_link
// 4. Share the sheet: File → Share → "Anyone with the link" → Viewer
// 5. Copy the Sheet ID from the URL:
//    docs.google.com/spreadsheets/d/  >>>SHEET_ID<<<  /edit
// 6. Paste it below replacing PASTE_YOUR_SHEET_ID_HERE

const SHEET_ID = "1NdQrFCj5x7ePyuO1GxHt-EABA4FjDSRIHOcd4Rn_6_8";

// This is the URL that returns your sheet as a CSV — no API key needed
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?tqx=out:csv&sheet=Sheet1";

// In-memory cache — populated on page load from the Sheet
var RESOURCES = [];
var RESOURCES_LOADED = false;
var RESOURCES_ERROR  = false;

// Fetch and parse the Sheet CSV into RESOURCES
function loadResourcesFromSheet(callback) {
  if (RESOURCES_LOADED) { callback(RESOURCES); return; }

  // If no Sheet ID set yet, just return empty
  if (SHEET_ID === "PASTE_YOUR_SHEET_ID_HERE") {
    RESOURCES = [];
    RESOURCES_LOADED = true;
    callback(RESOURCES);
    return;
  }

  fetch(SHEET_CSV_URL)
    .then(function(res) {
      if (!res.ok) throw new Error("Sheet fetch failed: " + res.status);
      return res.text();
    })
    .then(function(csv) {
      RESOURCES = parseSheetCSV(csv);
      RESOURCES_LOADED = true;
      callback(RESOURCES);
    })
    .catch(function(err) {
      console.warn("Book Bank: could not load materials sheet.", err);
      RESOURCES = [];
      RESOURCES_LOADED = true;
      RESOURCES_ERROR  = true;
      callback(RESOURCES);
    });
}

// Parse Google Sheets CSV export into resource objects
function parseSheetCSV(csv) {
  var lines = csv.trim().split("\n");
  if (lines.length < 2) return [];

  // Parse a single CSV line respecting quoted fields
  function parseLine(line) {
    var result = [];
    var current = "";
    var inQuotes = false;
    for (var i = 0; i < line.length; i++) {
      var ch = line[i];
      if (ch === '"') {
        // Handle doubled quotes inside a quoted field ("")
        if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
        else { inQuotes = !inQuotes; }
      } else if (ch === ',' && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
    result.push(current.trim());
    return result;
  }

  var headers = parseLine(lines[0]).map(function(h) {
    return h.replace(/^"|"$/g, '').trim().toLowerCase();
  });

  var resources = [];
  for (var i = 1; i < lines.length; i++) {
    var line = lines[i].trim();
    if (!line) continue;
    var values = parseLine(line);

    var obj = {};
    headers.forEach(function(header, idx) {
      obj[header] = (values[idx] || "").replace(/^"|"$/g, '').trim();
    });

    // Skip rows with no title or drive_link
    if (!obj.title || !obj.drive_link) continue;

    resources.push({
      id:           obj.id           || String(i),
      title:        obj.title        || "",
      course:       obj.course       || "",
      type:         obj.type         || "notes",
      level:        obj.level        || "",
      faculty_slug: obj.faculty_slug || "",
      dept_slug:    obj.dept_slug    || "",
      semester:     obj.semester     || "",
      uploaded:     obj.uploaded     || "",
      drive_link:   obj.drive_link   || "#"
    });
  }

  return resources;
}

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

// Strict text search — matches title, course code, type only. Never matches level numbers.
function searchResources(query) {
  var q = query.toLowerCase().trim();
  if (!q) return RESOURCES;
  return RESOURCES.filter(function(r) {
    return r.title.toLowerCase().includes(q) ||
           r.course.toLowerCase().includes(q) ||
           r.type.toLowerCase().includes(q);
  });
}

// Exact level filter — "100" matches only resources where level === "100"
function filterByLevel(level) {
  var l = String(level).trim();
  if (!l) return RESOURCES;
  return RESOURCES.filter(function(r) { return r.level === l; });
}

function getLevelsForDuration(duration) {
  var levels = [];
  for (var i = 1; i <= duration; i++) { levels.push(i * 100); }
  return levels;
}

const TYPE_LABEL = { notes: "Course Notes", past: "Past Questions", text: "Textbook", slides: "Slides", research: "Research" };
const TYPE_CLASS  = { notes: "tag-notes",    past: "tag-past",       text: "tag-text",  slides: "tag-slides", research: "tag-research" };
