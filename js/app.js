// ─── LEAD CITY BOOK BANK · APP LOGIC ─────────────────────────────────────────
// Handles page rendering based on URL params for multi-page navigation.

// ─── SHARED HELPERS ──────────────────────────────────────────────────────────

function param(key) {
  return new URLSearchParams(window.location.search).get(key) || '';
}

function buildResourceCard(r) {
  const label = TYPE_LABEL[r.type] || r.type;
  const cls   = TYPE_CLASS[r.type] || 'tag-notes';
  return `
    <a href="${r.drive_link}" target="_blank" rel="noopener" class="resource-card">
      <span class="resource-type-tag ${cls}">${label}</span>
      <div class="rc-title">${r.title}</div>
      <div class="rc-course">${r.course}</div>
      <div class="rc-meta">
        <span class="rc-level">${r.level}L · Sem ${r.semester}</span>
        <span>${r.uploaded}</span>
      </div>
    </a>`;
}

function buildEmptyState(msg) {
  return `
    <div class="empty-state">
      <div class="empty-state-icon">📂</div>
      <h3>No materials yet</h3>
      <p>${msg || 'Materials will appear here once uploaded by Academic Directors.'}</p>
    </div>`;
}

function renderGrid(containerId, resources) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = resources.length
    ? resources.map(buildResourceCard).join('')
    : buildEmptyState();
}

function buildNavBrand() {
  return `
    <a href="index.html" class="nav-brand">
      <div class="nav-logo-box">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="6" height="12" rx="1" fill="white" opacity="0.9"/>
          <rect x="9" y="3" width="6" height="13" rx="1" fill="white"/>
          <rect x="2" y="14" width="13" height="1.5" rx="0.75" fill="#E8198A"/>
        </svg>
      </div>
      <div class="nav-brand-text">
        <span class="line1">Lead City Book Bank</span>
        <span class="line2">Lead City University</span>
      </div>
    </a>`;
}

function buildNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'index.html#faculties', label: 'Faculties' },
    { href: 'upload.html', label: 'Upload' }
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" ${activePage === p.label ? 'style="color:var(--blue);font-weight:600"' : ''}>${p.label}</a>`
  ).join('');

  return `
    <nav>
      <div class="nav-inner">
        ${buildNavBrand()}
        <div class="nav-search" onclick="focusSearch()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2.5">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input type="text" id="nav-search-input" placeholder="Search materials…" onkeydown="handleNavSearch(event)">
        </div>
        <div class="nav-links">
          ${links}
          <a href="upload.html" class="nav-cta">+ Upload</a>
        </div>
      </div>
    </nav>`;
}

function buildFooter() {
  return `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="nav-logo-box"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="6" height="12" rx="1" fill="white" opacity="0.9"/><rect x="9" y="3" width="6" height="13" rx="1" fill="white"/><rect x="2" y="14" width="13" height="1.5" rx="0.75" fill="#E8198A"/></svg></div>
            <span style="font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;color:white">Lead City Book Bank</span>
          </div>
          <p>A student-built academic resource system for Lead City University. Built by students, for students.</p>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="index.html#faculties">Browse Faculties</a></li>
            <li><a href="index.html#recent">Recent Uploads</a></li>
            <li><a href="index.html#levels">Browse by Level</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contribute</h4>
          <ul>
            <li><a href="upload.html">Upload Material</a></li>
            <li><a href="upload.html#guidelines">Guidelines</a></li>
            <li><a href="upload.html#directors">For Directors</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>University</h4>
          <ul>
            <li><a href="https://lcu.edu.ng" target="_blank">LCU Website</a></li>
            <li><a href="mailto:bookbank@lcu.edu.ng">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Lead City Book Bank · Computing Faculty Student Reps</span>
        <span>Lead City University, Ibadan</span>
      </div>
    </footer>`;
}

function handleNavSearch(e) {
  if (e.key === 'Enter') {
    const q = document.getElementById('nav-search-input').value.trim();
    if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
  }
}

function focusSearch() {
  document.getElementById('nav-search-input')?.focus();
}

// ─── INDEX PAGE ───────────────────────────────────────────────────────────────
function initIndex() {
  document.getElementById('nav-slot').innerHTML = buildNav('Home');
  document.getElementById('footer-slot').innerHTML = buildFooter();

  document.getElementById('total-materials').textContent = RESOURCES.length;
  document.getElementById('total-faculties').textContent = FACULTIES.length;
  document.getElementById('total-depts').textContent = FACULTIES.reduce((a, f) => a + f.departments.length, 0);

  // Faculty grid
  const facultyGrid = document.getElementById('faculty-grid');
  facultyGrid.innerHTML = FACULTIES.map((f, i) => {
    const isPink = i % 2 !== 0;
    return `
      <a href="faculty.html?slug=${f.slug}" class="faculty-card ${isPink ? 'pink-accent' : ''}">
        <div class="fc-icon">${f.icon}</div>
        <div class="fc-short">${f.shortName}</div>
        <div class="fc-name">${f.name}</div>
        <p class="fc-desc">${f.description}</p>
        <div class="fc-footer">
          <span class="fc-degree">${f.degree}</span>
          <span class="fc-count">${f.departments.length} departments</span>
        </div>
      </a>`;
  }).join('');

  // Recent resources (last 8)
  const recent = [...RESOURCES].reverse().slice(0, 8);
  renderGrid('recent-grid', recent);

  // Filter tabs
  document.querySelectorAll('#type-filter .filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#type-filter .filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.type;
      const filtered = type === 'all' ? [...RESOURCES].reverse().slice(0, 8) : RESOURCES.filter(r => r.type === type);
      renderGrid('recent-grid', filtered);
    });
  });

  // Hero search
  document.getElementById('hero-search-btn').addEventListener('click', doHeroSearch);
  document.getElementById('hero-search-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') doHeroSearch();
  });
}

function doHeroSearch() {
  const q = document.getElementById('hero-search-input').value.trim();
  if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
}

// ─── FACULTY PAGE ─────────────────────────────────────────────────────────────
function initFaculty() {
  document.getElementById('nav-slot').innerHTML = buildNav();
  document.getElementById('footer-slot').innerHTML = buildFooter();

  const slug    = param('slug');
  const faculty = getFacultyBySlug(slug);

  if (!faculty) {
    document.getElementById('faculty-content').innerHTML = `
      <div class="container" style="padding:80px 5%;text-align:center">
        <h2>Faculty not found</h2>
        <p>The faculty you're looking for doesn't exist.</p>
        <a href="index.html" style="color:var(--blue);font-weight:600">← Back to Home</a>
      </div>`;
    return;
  }

  document.title = `${faculty.name} · Lead City Book Bank`;

  // Breadcrumb
  document.getElementById('breadcrumb').innerHTML = `
    <div class="breadcrumb-inner">
      <a href="index.html">Home</a>
      <span class="sep">›</span>
      <a href="index.html#faculties">Faculties</a>
      <span class="sep">›</span>
      <span class="current">${faculty.shortName}</span>
    </div>`;

  // Hero
  document.getElementById('faculty-hero').innerHTML = `
    <div class="page-hero-inner">
      <span class="page-hero-badge">${faculty.shortName}</span>
      <h1>${faculty.name.replace(faculty.shortName.length > 4 ? '' : '', '')}</h1>
      <p>${faculty.description}</p>
      <div class="page-hero-meta">
        <span class="meta-pill">📚 ${faculty.degree}</span>
        <span class="meta-pill">🏛️ ${faculty.departments.length} Departments</span>
        <span class="meta-pill">📄 ${RESOURCES.filter(r => r.faculty_slug === slug).length} Materials</span>
      </div>
    </div>`;

  // Departments
  const deptGrid = document.getElementById('dept-grid');
  const isPink = FACULTIES.findIndex(f => f.slug === slug) % 2 !== 0;
  deptGrid.innerHTML = faculty.departments.map(d => `
    <a href="department.html?faculty=${slug}&dept=${d.slug}" class="dept-card ${isPink ? 'pink' : ''}">
      <span class="dept-card-name">${d.name}</span>
      <span class="dept-arrow">›</span>
    </a>`).join('');
}

// ─── DEPARTMENT PAGE ──────────────────────────────────────────────────────────
function initDepartment() {
  document.getElementById('nav-slot').innerHTML = buildNav();
  document.getElementById('footer-slot').innerHTML = buildFooter();

  const facultySlug = param('faculty');
  const deptSlug    = param('dept');
  const faculty     = getFacultyBySlug(facultySlug);
  const dept        = faculty ? getDepartmentBySlug(faculty, deptSlug) : null;

  if (!faculty || !dept) {
    document.getElementById('dept-content').innerHTML = `
      <div class="container" style="padding:80px 5%;text-align:center">
        <h2>Department not found</h2>
        <a href="index.html" style="color:var(--blue);font-weight:600">← Back to Home</a>
      </div>`;
    return;
  }

  document.title = `${dept.name} · Lead City Book Bank`;

  // Breadcrumb
  document.getElementById('breadcrumb').innerHTML = `
    <div class="breadcrumb-inner">
      <a href="index.html">Home</a>
      <span class="sep">›</span>
      <a href="index.html#faculties">Faculties</a>
      <span class="sep">›</span>
      <a href="faculty.html?slug=${facultySlug}">${faculty.shortName}</a>
      <span class="sep">›</span>
      <span class="current">${dept.name}</span>
    </div>`;

  // Hero
  document.getElementById('dept-hero').innerHTML = `
    <div class="page-hero-inner">
      <span class="page-hero-badge">${faculty.shortName} · ${faculty.degree}</span>
      <h1>${dept.name}</h1>
      <p>${faculty.name}</p>
      <div class="page-hero-meta">
        <span class="meta-pill">📄 ${getResourcesFor(facultySlug, deptSlug).length} Materials</span>
      </div>
    </div>`;

  // Resources with filter
  let allResources = getResourcesFor(facultySlug, deptSlug);
  renderGrid('dept-resource-grid', allResources);

  // Level filter
  document.querySelectorAll('#level-filter .filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#level-filter .filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const level = btn.dataset.level;
      const filtered = level === 'all' ? allResources : allResources.filter(r => r.level === level);
      renderGrid('dept-resource-grid', filtered);
    });
  });

  // Type filter
  document.querySelectorAll('#type-filter-dept .filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#type-filter-dept .filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.type;
      const filtered = type === 'all' ? allResources : allResources.filter(r => r.type === type);
      renderGrid('dept-resource-grid', filtered);
    });
  });
}

// ─── SEARCH PAGE ──────────────────────────────────────────────────────────────
function initSearch() {
  document.getElementById('nav-slot').innerHTML = buildNav();
  document.getElementById('footer-slot').innerHTML = buildFooter();

  const q = param('q');
  document.getElementById('search-query-display').innerHTML =
    `Results for <span>"${q}"</span>`;

  if (document.getElementById('nav-search-input')) {
    document.getElementById('nav-search-input').value = q;
  }

  const results = searchResources(q);
  document.getElementById('search-count').textContent =
    `${results.length} material${results.length !== 1 ? 's' : ''} found`;

  renderGrid('search-grid', results);
}

// ─── UPLOAD PAGE ──────────────────────────────────────────────────────────────
function initUpload() {
  document.getElementById('nav-slot').innerHTML = buildNav('Upload');
  document.getElementById('footer-slot').innerHTML = buildFooter();
}

// ─── AUTO INIT ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'index')      initIndex();
  else if (page === 'faculty')     initFaculty();
  else if (page === 'department')  initDepartment();
  else if (page === 'search')      initSearch();
  else if (page === 'upload')      initUpload();
});
