# Jaipal Verma — Portfolio

A personal developer portfolio built with plain HTML, CSS, and JavaScript —
no build step, no framework, no dependencies. Open `index.html` and it runs.

**Live site:** _add your GitHub Pages URL here once deployed_

## Features

- **Modern, minimal design** — warm off-white / deep-charcoal color system
  with an indigo accent, generous whitespace, and clean rounded cards
- **Dark / light mode** toggle with a sun/moon icon button, saved per
  browser and defaulting to system preference
- **Profile photo** in a soft rounded frame with a subtle accent glow, and
  an automatic "JV" monogram fallback if no photo is added
- **Working résumé download** — the "Resume" buttons link to a real PDF
- **Static certificate cards** — no upload functionality; certificates are
  fixed content you edit directly in the HTML
- **Subtle scroll-reveal animations** on each section, respecting
  `prefers-reduced-motion`
- **Responsive layout** — tested down to 360px, with a collapsible mobile
  nav and no horizontal scrolling
- **Sections:** Home, About, Skills, Projects (featured project + other
  projects), Experience, Certificates, Education, Achievements, Contact

## File structure

```
.
├── index.html                # page content and structure
├── style.css                  # design system and layout
├── script.js                   # theme toggle, nav, scroll reveal
└── assets/
    ├── profile.jpg            # your photo — add this yourself
    ├── Jaipal_Verma_Resume.pdf # linked from the "Resume" buttons
    ├── README.txt              # notes on the photo and resume
    └── certificates/
        ├── tctc-environmental-awareness.pdf
        ├── c-programming.pdf
        ├── effective-time-management.pdf
        └── README.txt          # notes on adding certificate files
```

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths behave exactly as they will when
  deployed:

  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Push these files to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Redesigned portfolio"
   git branch -M main
   git remote add origin https://github.com/jaipalverma808/portfolio.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`.
5. Save. The site will be live at:
   ```
   https://jaipalverma808.github.io/portfolio/
   ```
   (First deploy can take a minute or two.)

## Customizing

- **Profile photo** — add a photo named `profile.jpg` to `assets/`. Square
  images work best (500×500px or larger). No code changes needed.
- **Résumé** — replace `assets/Jaipal_Verma_Resume.pdf` with an updated
  version whenever it changes, keeping the same filename.
- **Certificates** — add the real certificate files to
  `assets/certificates/` using the filenames referenced in `index.html`
  (see that folder's `README.txt`). The "View Certificate" buttons link
  straight to these files — there's no in-browser upload feature by design.
- **Web projects** — open `index.html`, search for `Solenoid Door Lock`
  and `Responsive Business Website`, and update the descriptions, tags,
  and `href="#"` links with your real project details.
- **Content** — all text (skills, projects, education, experience, contact
  details) lives directly in `index.html`; colors, type, and spacing are
  controlled by the CSS custom properties at the top of `style.css`.

## Contact

- Email: jaipalverma808@gmail.com
- Phone: +91-9306227500
- GitHub: [github.com/jaipalverma808](https://github.com/jaipalverma808)
- LinkedIn: [linkedin.com/in/jaipal-verma-5037bb37b](https://www.linkedin.com/in/jaipal-verma-5037bb37b)

## License

Personal portfolio — feel free to reference the structure, but please don't
republish the content as your own.
