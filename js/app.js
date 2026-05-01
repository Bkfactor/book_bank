// ─── LEAD CITY BOOK BANK · APP LOGIC ─────────────────────────────────────────

function param(key) {
  return new URLSearchParams(window.location.search).get(key) || '';
}

function buildResourceCard(r) {
  var label = TYPE_LABEL[r.type] || r.type;
  var cls   = TYPE_CLASS[r.type] || 'tag-notes';
  return '<a href="' + r.drive_link + '" target="_blank" rel="noopener" class="resource-card">' +
    '<span class="resource-type-tag ' + cls + '">' + label + '</span>' +
    '<div class="rc-title">' + r.title + '</div>' +
    '<div class="rc-course">' + r.course + '</div>' +
    '<div class="rc-meta">' +
      '<span class="rc-level">' + r.level + 'L · Sem ' + r.semester + '</span>' +
      '<span>' + r.uploaded + '</span>' +
    '</div>' +
  '</a>';
}

function buildEmptyState(msg) {
  return '<div class="empty-state">' +
    '<div class="empty-state-icon">📂</div>' +
    '<h3>No materials yet</h3>' +
    '<p>' + (msg || 'Materials will appear here once submitted by Academic Directors.') + '</p>' +
  '</div>';
}

function renderGrid(containerId, resources) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = resources.length
    ? resources.map(buildResourceCard).join('')
    : buildEmptyState();
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function buildNavBrand() {
  return '<a href="index.html" class="nav-brand">' +
    '<div class="nav-logo-box">' +
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">' +
        '<rect x="2" y="4" width="6" height="12" rx="1" fill="white" opacity="0.9"/>' +
        '<rect x="9" y="3" width="6" height="13" rx="1" fill="white"/>' +
        '<rect x="2" y="14" width="13" height="1.5" rx="0.75" fill="#E8198A"/>' +
      '</svg>' +
    '</div>' +
    '<div class="nav-brand-text">' +
      '<span class="line1">Lead City Book Bank</span>' +
      '<span class="line2">Lead City University</span>' +
    '</div>' +
  '</a>';
}

function buildNav(activePage) {
  var links = [
    { href: 'index.html',          label: 'Home' },
    { href: 'index.html#faculties',label: 'Faculties' },
    { href: 'upload.html',         label: 'Submit Material' }
  ].map(function(p) {
    var active = activePage === p.label ? ' style="color:var(--blue);font-weight:600"' : '';
    return '<a href="' + p.href + '"' + active + '>' + p.label + '</a>';
  }).join('');

  return '<nav>' +
    '<div class="nav-inner">' +
      buildNavBrand() +
      '<div class="nav-search" onclick="focusSearch()">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>' +
        '<input type="text" id="nav-search-input" placeholder="Search materials…" onkeydown="handleNavSearch(event)">' +
      '</div>' +
      '<div class="nav-links">' + links +
        '<a href="upload.html" class="nav-cta">+ Submit</a>' +
      '</div>' +
    '</div>' +
  '</nav>';
}

function buildFooter() {
  return '<footer>' +
    '<div class="footer-grid">' +
      '<div class="footer-brand">' +
        '<div style="display:flex;align-items:center;gap:10px">' +
          '<div class="nav-logo-box"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="6" height="12" rx="1" fill="white" opacity="0.9"/><rect x="9" y="3" width="6" height="13" rx="1" fill="white"/><rect x="2" y="14" width="13" height="1.5" rx="0.75" fill="#E8198A"/></svg></div>' +
          '<span style="font-family:\'Poppins\',sans-serif;font-size:15px;font-weight:700;color:white">Lead City Book Bank</span>' +
        '</div>' +
        '<p>A student-driven academic resource platform for Lead City University. Every material shared is a student helped.</p>' +
      '</div>' +
      '<div class="footer-col"><h4>Browse</h4><ul>' +
        '<li><a href="index.html#faculties">By Faculty</a></li>' +
        '<li><a href="index.html#levels">By Level</a></li>' +
        '<li><a href="search.html?q=notes">Course Notes</a></li>' +
        '<li><a href="search.html?q=past">Past Questions</a></li>' +
      '</ul></div>' +
      '<div class="footer-col"><h4>Contribute</h4><ul>' +
        '<li><a href="upload.html">Submit Material</a></li>' +
        '<li><a href="' + FORM_FEEDBACK + '" target="_blank">Send Feedback</a></li>' +
        '<li><a href="' + FORM_FEEDBACK + '" target="_blank">Report an Issue</a></li>' +
      '</ul></div>' +
      '<div class="footer-col"><h4>LCU</h4><ul>' +
        '<li><a href="https://lcu.edu.ng" target="_blank">LCU Website</a></li>' +
        '<li><a href="mailto:leadcitybookbank@gmail.com">Contact Us</a></li>' +
      '</ul></div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<span>© 2025 Lead City Book Bank · Student Ambassador Team, Lead City University</span>' +
      '<span>Built by Amb. Benjamin Erenose Omonkhodion</span>' +
    '</div>' +
  '</footer>';
}

function handleNavSearch(e) {
  if (e.key === 'Enter') {
    var q = document.getElementById('nav-search-input').value.trim();
    if (q) window.location.href = 'search.html?q=' + encodeURIComponent(q);
  }
}
function focusSearch() {
  var el = document.getElementById('nav-search-input');
  if (el) el.focus();
}

// ─── INDEX PAGE ───────────────────────────────────────────────────────────────
function initIndex() {
  document.getElementById('nav-slot').innerHTML = buildNav('Home');
  document.getElementById('footer-slot').innerHTML = buildFooter();

  // Stats — only count real resources
  document.getElementById('total-materials').textContent = RESOURCES.length;
  document.getElementById('total-faculties').textContent = FACULTIES.length;
  document.getElementById('total-depts').textContent = FACULTIES.reduce(function(a, f) {
    return a + f.departments.length;
  }, 0);

  // Faculty grid
  var facultyGrid = document.getElementById('faculty-grid');
  facultyGrid.innerHTML = FACULTIES.map(function(f) {
    var isPink = f.accentPink;
    return '<a href="faculty.html?slug=' + f.slug + '" class="faculty-card ' + (isPink ? 'pink-accent' : '') + '">' +
      '<div class="fc-icon">' + f.icon + '</div>' +
      '<div class="fc-short">' + f.shortName + '</div>' +
      '<div class="fc-name">' + f.name + '</div>' +
      '<p class="fc-desc">' + f.description + '</p>' +
      '<div class="fc-footer">' +
        '<span class="fc-degree">' + f.degree + '</span>' +
        '<span class="fc-count">' + f.departments.length + ' dept' + (f.departments.length !== 1 ? 's' : '') + '</span>' +
      '</div>' +
    '</a>';
  }).join('');

  // Recently Added — ONLY show if there are real resources
  var recentSection = document.getElementById('recent-section');
  if (RESOURCES.length === 0) {
    if (recentSection) recentSection.style.display = 'none';
  } else {
    if (recentSection) recentSection.style.display = 'block';
    var recent = RESOURCES.slice().reverse().slice(0, 8);
    renderGrid('recent-grid', recent);

    document.querySelectorAll('#type-filter .filter-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('#type-filter .filter-tab').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var type = btn.dataset.type;
        var filtered = type === 'all' ? RESOURCES.slice().reverse().slice(0, 8) : RESOURCES.filter(function(r) { return r.type === type; });
        renderGrid('recent-grid', filtered);
      });
    });
  }

  // Hero search
  var heroBtn = document.getElementById('hero-search-btn');
  var heroInput = document.getElementById('hero-search-input');
  if (heroBtn) heroBtn.addEventListener('click', doHeroSearch);
  if (heroInput) heroInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doHeroSearch();
  });
}

function doHeroSearch() {
  var q = document.getElementById('hero-search-input').value.trim();
  if (q) window.location.href = 'search.html?q=' + encodeURIComponent(q);
}

// ─── FACULTY PAGE ─────────────────────────────────────────────────────────────
function initFaculty() {
  document.getElementById('nav-slot').innerHTML = buildNav();
  document.getElementById('footer-slot').innerHTML = buildFooter();

  var slug    = param('slug');
  var faculty = getFacultyBySlug(slug);

  if (!faculty) {
    document.getElementById('dept-container').innerHTML =
      '<div style="padding:80px 0;text-align:center"><h2>Faculty not found</h2>' +
      '<a href="index.html" style="color:var(--blue);font-weight:600">← Back to Home</a></div>';
    return;
  }

  document.title = faculty.name + ' · Lead City Book Bank';

  document.getElementById('breadcrumb').innerHTML =
    '<div class="breadcrumb-inner">' +
    '<a href="index.html">Home</a><span class="sep">›</span>' +
    '<a href="index.html#faculties">Faculties</a><span class="sep">›</span>' +
    '<span class="current">' + faculty.name + '</span></div>';

  var totalMaterials = RESOURCES.filter(function(r) { return r.faculty_slug === slug; }).length;
  document.getElementById('faculty-hero').innerHTML =
    '<div class="page-hero-inner">' +
    '<span class="page-hero-badge">' + faculty.shortName + '</span>' +
    '<h1>' + faculty.icon + ' ' + faculty.name + '</h1>' +
    '<p>' + faculty.description + '</p>' +
    '<div class="page-hero-meta">' +
      '<span class="meta-pill">📚 ' + faculty.degree + '</span>' +
      '<span class="meta-pill">🏛️ ' + faculty.departments.length + ' Departments</span>' +
      (totalMaterials > 0 ? '<span class="meta-pill">📄 ' + totalMaterials + ' Materials</span>' : '') +
    '</div></div>';

  var isPink = faculty.accentPink;
  var container = document.getElementById('dept-container');

  if (faculty.subgroups) {
    container.innerHTML = faculty.subgroups.map(function(group) {
      return '<p class="subgroup-label">' + group.label + '</p>' +
        '<div class="dept-grid" style="margin-bottom:8px">' +
        group.departments.map(function(d) {
          var badge = d.duration === 6 ? ' <span class="dur-badge dur-6">6 yrs</span>' :
                      d.duration === 5 ? ' <span class="dur-badge dur-5">5 yrs</span>' : '';
          return '<a href="department.html?faculty=' + slug + '&dept=' + d.slug + '" class="dept-card ' + (isPink ? 'pink' : '') + '">' +
            '<span class="dept-card-name">' + d.name + badge + '</span>' +
            '<span class="dept-arrow">›</span></a>';
        }).join('') + '</div>';
    }).join('');
  } else {
    container.innerHTML = '<div class="dept-grid">' +
      faculty.departments.map(function(d) {
        var badge = d.duration === 6 ? ' <span class="dur-badge dur-6">6 yrs</span>' :
                    d.duration === 5 ? ' <span class="dur-badge dur-5">5 yrs</span>' : '';
        return '<a href="department.html?faculty=' + slug + '&dept=' + d.slug + '" class="dept-card ' + (isPink ? 'pink' : '') + '">' +
          '<span class="dept-card-name">' + d.name + badge + '</span>' +
          '<span class="dept-arrow">›</span></a>';
      }).join('') + '</div>';
  }
}

// ─── DEPARTMENT PAGE ──────────────────────────────────────────────────────────
function initDepartment() {
  document.getElementById('nav-slot').innerHTML = buildNav();
  document.getElementById('footer-slot').innerHTML = buildFooter();

  var facultySlug = param('faculty');
  var deptSlug    = param('dept');
  var faculty     = getFacultyBySlug(facultySlug);
  var dept        = faculty ? getDepartmentBySlug(faculty, deptSlug) : null;

  if (!faculty || !dept) {
    document.getElementById('dept-content').innerHTML =
      '<div class="container" style="padding:80px 5%;text-align:center">' +
      '<h2>Department not found</h2>' +
      '<a href="index.html" style="color:var(--blue);font-weight:600">← Back to Home</a></div>';
    return;
  }

  document.title = dept.name + ' · Lead City Book Bank';

  document.getElementById('breadcrumb').innerHTML =
    '<div class="breadcrumb-inner">' +
    '<a href="index.html">Home</a><span class="sep">›</span>' +
    '<a href="faculty.html?slug=' + facultySlug + '">' + faculty.shortName + '</a><span class="sep">›</span>' +
    '<span class="current">' + dept.name + '</span></div>';

  var allResources = getResourcesFor(facultySlug, deptSlug);
  var durationYears = dept.duration || 4;

  // Duration badge text
  var durText = durationYears + '-Year Programme';

  document.getElementById('dept-hero').innerHTML =
    '<div class="page-hero-inner">' +
    '<span class="page-hero-badge">' + faculty.shortName + ' · ' + durText + '</span>' +
    '<h1>' + dept.name + '</h1>' +
    '<p>' + faculty.name + '</p>' +
    '<div class="page-hero-meta">' +
      '<span class="meta-pill">📅 ' + durationYears + ' Years</span>' +
      '<span class="meta-pill">📄 ' + allResources.length + ' Materials</span>' +
    '</div></div>';

  // Dynamic level strip based on duration
  var levels = getLevelsForDuration(durationYears);
  var levelGrid = document.getElementById('level-filter');
  if (levelGrid) {
    levelGrid.innerHTML = '<button class="filter-tab active" data-level="all">All Levels</button>' +
      levels.map(function(l) {
        return '<button class="filter-tab" data-level="' + l + '">' + l + 'L</button>';
      }).join('');
  }

  renderGrid('dept-resource-grid', allResources);

  // Level filter
  document.querySelectorAll('#level-filter .filter-tab').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#level-filter .filter-tab').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var level = btn.dataset.level;
      renderGrid('dept-resource-grid', level === 'all' ? allResources : allResources.filter(function(r) { return r.level === level; }));
    });
  });

  // Type filter
  document.querySelectorAll('#type-filter-dept .filter-tab').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#type-filter-dept .filter-tab').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var type = btn.dataset.type;
      renderGrid('dept-resource-grid', type === 'all' ? allResources : allResources.filter(function(r) { return r.type === type; }));
    });
  });
}

// ─── SEARCH PAGE ──────────────────────────────────────────────────────────────
function initSearch() {
  document.getElementById('nav-slot').innerHTML = buildNav();
  document.getElementById('footer-slot').innerHTML = buildFooter();

  var q = param('q');
  document.getElementById('search-query-display').innerHTML = 'Results for <span>"' + q + '"</span>';

  var navInput = document.getElementById('nav-search-input');
  if (navInput) navInput.value = q;

  var results = searchResources(q);
  document.getElementById('search-count').textContent =
    results.length + ' material' + (results.length !== 1 ? 's' : '') + ' found';

  renderGrid('search-grid', results);
}

// ─── UPLOAD PAGE ──────────────────────────────────────────────────────────────
function initUpload() {
  document.getElementById('nav-slot').innerHTML = buildNav('Submit Material');
  document.getElementById('footer-slot').innerHTML = buildFooter();

  // Wire up form links
  var submitBtns = document.querySelectorAll('.submit-form-link');
  submitBtns.forEach(function(btn) { btn.href = FORM_SUBMIT; });

  var feedbackBtns = document.querySelectorAll('.feedback-form-link');
  feedbackBtns.forEach(function(btn) { btn.href = FORM_FEEDBACK; });
}

// ─── AUTO INIT ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  var page = document.body.dataset.page;
  if      (page === 'index')      initIndex();
  else if (page === 'faculty')    initFaculty();
  else if (page === 'department') initDepartment();
  else if (page === 'search')     initSearch();
  else if (page === 'upload')     initUpload();
});
