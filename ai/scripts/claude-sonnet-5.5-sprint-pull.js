/*
  ********************
    AI JS RATIONALE
  ********************

  Live Chat Link: https://claude.ai/share/9fedc5d6-5ffb-4304-8420-4627a661033f

  At my current skill level, this is way beyond me.
  I don't understand what i'm looking at, even if I try to dissect it.
  I half get it, but not really.

  I understoodd that (what was) in line 41, it adjusts the text but I don't want that.

  This is what I removed:
    link.textContent = `Sprint ${s.sprintNumber}: ${s.title}`

*/

const BASE = 'https://programma.fdnd.nl'
const SEMESTERS = ['static-web', 'data-driven-web'] // year 1

async function getCurrentSprint() {
    const lists = await Promise.all(
        SEMESTERS.map(async (slug) => {
            const res = await fetch(`${BASE}/api/${slug}`)
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            const semester = await res.json()
            return semester.sprints.map((s) => ({ ...s, semester: semester.slug }))
        })
    )

    const now = new Date()
    const current = lists
        .flat()
        .filter((s) => s.sprintNumber && s.startdate && new Date(s.startdate) <= now)
        .sort((a, b) => new Date(a.startdate) - new Date(b.startdate))
        .at(-1)

    if (!current) throw new Error('No current sprint found')
    return { ...current, url: `${BASE}/${current.semester}/${current.slug}` }
}

const link = document.getElementById('year1-sprint')
const ready = getCurrentSprint()

// Update the link as soon as the data arrives
ready
    .then((s) => {
        link.href = s.url
    })
    .catch((err) => console.warn('Sprint lookup failed, using fallback link:', err))

// If clicked before the fetch finished, wait for it, then go
link.addEventListener('click', async (e) => {
    if (link.href !== `${BASE}/`) return // already resolved, let the browser navigate
    e.preventDefault()
    try {
        location.href = (await ready).url
    } catch {
        location.href = BASE // fallback
    }
})

// ************
// PROMPT BELOW
// ************

// Rowynn
/*
    How would I pull the current year 1 sprint automatically, and link to it?
 
    https://programma.fdnd.nl
    https://github.com/fdnd/programma.fdnd.nl
*/
// *************************************************************************

// Claude Sonnet 5.5 (Medium)
/* 
I'll look at how the site and repo are structured first.

The site's own menu already highlights the current sprint (Sprint 4 for year 1), so there's some date logic behind it. Let me see how the repo does that.

The fetch tool is rate-limited on GitHub, but I can read the repo directly from the sandbox.

I've read the repo's source and I'm now checking whether the site's public JSON API works, since that's the best way to pull the current sprint.

Yes, you can. The site has a public JSON API that includes each sprint's start date, so you can work out the current sprint from today's date and build the link from its slug. I read this from the repo source, but I couldn't call the live endpoint from here, so test it once before relying on it.

**What I found**
- The menu on programma.fdnd.nl is hardcoded in `Nav.svelte`, so scraping it would break whenever someone updates it by hand. Use the API instead.
- The site serves `GET /api/{semester}` as JSON, with CORS open (`Access-Control-Allow-Origin: *`), so you can call it from a browser too. The response includes `sprints[]` with `title`, `slug`, `sprintNumber` and `startdate`.
- Year 1 is semester 1 (`static-web`) and semester 2 (`data-driven-web`).
- The sprint link format is `https://programma.fdnd.nl/{semester}/{sprint-slug}`.
- Hygraph is the data source behind the API, but its endpoint is in an env var and not public, so use the site's own API.

**Code**
```js
async function currentYear1Sprint() {
  const base = 'https://programma.fdnd.nl';
  const semesters = ['static-web', 'data-driven-web'];

  const lists = await Promise.all(
    semesters.map(async (slug) => {
      const res = await fetch(`${base}/api/${slug}`);
      const semester = await res.json();
      return semester.sprints.map((s) => ({ ...s, semester: semester.slug }));
    })
  );

  const now = new Date();
  const current = lists
    .flat()
    .filter((s) => s.sprintNumber && s.startdate && new Date(s.startdate) <= now) // skips vacations/assessments
    .sort((a, b) => new Date(a.startdate) - new Date(b.startdate))
    .at(-1); // latest sprint that has already started

  return current && { ...current, url: `${base}/${current.semester}/${current.slug}` };
}

const sprint = await currentYear1Sprint();
// <a href={sprint.url}>Sprint {sprint.sprintNumber}: {sprint.title}</a>
```

This uses the same rule the site uses for its highlight: the current sprint is the latest one whose start date has passed.

**Things to know**
- **Today's result:** based on the dates on the homepage, it should return Sprint 4, "Look and Feel", which started 09/11 (Sprint 5 starts 30/11). That gives `https://programma.fdnd.nl/static-web/look-and-feel`, which matches the site's menu.
- **Vacations and assessment weeks:** these have no `sprintNumber`, so the code skips them. During those weeks it keeps showing the last sprint that started.
- **Summer:** after Sprint 12 starts, it keeps returning Sprint 12 until the new year's data goes live.
- **Academic year:** the root domain is always the current year (2026-2027 now). Older years live on subdomains like `2526.programma.fdnd.nl`, so don't use those.
- **Caching:** cache the result for a few hours rather than fetching it on every page view.

If you're changing the repo itself, you could replace the hardcoded `navItems` in `Nav.svelte` with the same logic, using the `Program` query's `semesters[].sprints[]`. Do you want that version, or are you consuming this from another site?

*/

// *************************************************************************

// Rowynn
/* 
    I'll be consuming this from another site.

    Ideally, I just want to click on an <a> element and be sent to the exact, correct URL using just JS.

    That website is only using HTML, CSS and JS, no sveltekit.
*/

// *************************************************************************

/*

Use an ordinary `<a>` with a fallback `href`, and let JS swap in the exact sprint URL. If the API fails or JS is off, the link still goes to the programma homepage.

```html
<a id="year1-sprint" href="https://programma.fdnd.nl">Huidige sprint (jaar 1)</a>

<script type="module">
  const BASE = 'https://programma.fdnd.nl';
  const SEMESTERS = ['static-web', 'data-driven-web']; // year 1

  async function getCurrentSprint() {
    const lists = await Promise.all(
      SEMESTERS.map(async (slug) => {
        const res = await fetch(`${BASE}/api/${slug}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const semester = await res.json();
        return semester.sprints.map((s) => ({ ...s, semester: semester.slug }));
      })
    );

    const now = new Date();
    const current = lists
      .flat()
      .filter((s) => s.sprintNumber && s.startdate && new Date(s.startdate) <= now)
      .sort((a, b) => new Date(a.startdate) - new Date(b.startdate))
      .at(-1);

    if (!current) throw new Error('No current sprint found');
    return { ...current, url: `${BASE}/${current.semester}/${current.slug}` };
  }

  const link = document.getElementById('year1-sprint');
  const ready = getCurrentSprint();

  // Update the link as soon as the data arrives
  ready
    .then((s) => {
      link.href = s.url;
      link.textContent = `Sprint ${s.sprintNumber}: ${s.title}`;
    })
    .catch((err) => console.warn('Sprint lookup failed, using fallback link:', err));

  // If clicked before the fetch finished, wait for it, then go
  link.addEventListener('click', async (e) => {
    if (link.href !== `${BASE}/`) return; // already resolved, let the browser navigate
    e.preventDefault();
    try {
      location.href = (await ready).url;
    } catch {
      location.href = BASE; // fallback
    }
  });
</script>
```

**Notes**
- **No server needed.** The API sends `Access-Control-Allow-Origin: *`, so `fetch` works from any origin. I read that from the repo's `responseInit.js`, but I haven't tested it live. Run it once in your browser console on your site to confirm.
- **Hardcoded semesters.** The slugs `static-web` and `data-driven-web` are what the homepage links to now. If FDND renames them, update `SEMESTERS`.
- **Caching.** The fetch happens on every page load. If you want to limit requests, cache the result in `sessionStorage` for an hour or so.
- **Today's result.** It should link to `https://programma.fdnd.nl/static-web/look-and-feel` (Sprint 4), until Sprint 5 starts on 30/11.

*/
