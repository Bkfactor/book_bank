# 📚 Lead City Book Bank

> A student-built academic resource platform for Lead City University — organised by faculty and department.

**Live site:** [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)  
**Built by:** Computing Faculty Student Representatives, LCU

---

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Search, faculty grid, recent materials |
| Faculty | `faculty.html?slug=applied-sciences` | Departments for a faculty |
| Department | `department.html?faculty=...&dept=...` | Resources for a department |
| Search | `search.html?q=query` | Search results |
| Upload | `upload.html` | Guide + form for Academic Directors |

## File Structure

```
bookbank/
├── index.html
├── faculty.html
├── department.html
├── search.html
├── upload.html
├── css/
│   └── style.css
├── js/
│   ├── data.js      ← Edit this to add materials
│   └── app.js
└── README.md
```

## Adding a New Material

Open `js/data.js` and add an object to the `RESOURCES` array:

```js
{
  id: 9,                            // unique number
  title: "Operating Systems Notes",
  course: "CSC 303",
  type: "notes",                    // notes | past | text | slides | research
  level: "300",
  faculty_slug: "applied-sciences",
  dept_slug: "computer-info-science",
  semester: "1",
  uploaded: "May 2025",
  drive_link: "https://drive.google.com/your-link"
}
```

Then commit and push — Vercel auto-deploys in ~30 seconds.

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import GitHub repo
3. No build settings needed (static site) → Deploy
4. Done. Share the Vercel URL.

## Colours (LCU Brand)

| Token | Hex | Use |
|-------|-----|-----|
| `--blue` | `#1B4FA8` | Primary brand, links, buttons |
| `--pink` | `#E8198A` | Accent, CTAs, tags |
| `--blue-dark` | `#0D2E6E` | Headings, nav bg |

---

*Lead City University · Ibadan, Nigeria*
