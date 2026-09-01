# Jaipal Verma — Portfolio

A personal portfolio site built with plain HTML, CSS, and JavaScript — no
build step, no framework, no dependencies. Open `index.html` and it runs.

**Live site:** _add your GitHub Pages URL here once deployed_

## Features

- **Schematic-inspired design** — blueprint grid background, circuit-node
  diagram, and timeline styling that reflects an embedded-systems + web-dev
  background
- **Dark / light mode** toggle, saved per browser and defaulting to system
  preference
- **Profile photo** with a circular frame and automatic monogram fallback
  if no photo is added
- **Certificate gallery** — upload certificate images or PDFs directly in
  the browser; they're stored locally and persist across visits on that
  device
- **Responsive layout** — works down to mobile, with a collapsible nav menu
- **Sections:** Home, About, Skills, Projects (featured project + web
  projects), Training & Certificates, Education, Contact (with a working
  `mailto:` form)

## File structure

```
.
├── index.html          # page content and structure
├── style.css            # design system and layout
├── script.js             # theme toggle, nav, contact form, certificate gallery
└── assets/
    ├── profile.jpg      # your photo — add this yourself (see below)
    └── README.txt       # notes on the profile photo
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
   git commit -m "Initial portfolio"
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

- **Profile photo** — add a photo named `profile.jpg` to the `assets/`
  folder. Square images work best (400×400px or larger). No code changes
  needed.
- **Web projects** — open `index.html`, search for `Website One` and
  `Website Two` under the Projects section, and replace the placeholder
  names, descriptions, tags, and `href="#"` links with your real sites.
- **Certificates** — use the "Upload Certificate" button on the live site
  itself; no file editing required. Uploads are stored in that browser's
  local storage, so they're private to your device and won't appear for
  visitors on other devices.
- **Content** — all text (skills, projects, education, contact details)
  lives directly in `index.html`; colors, type, and spacing are controlled
  by the CSS custom properties at the top of `style.css`.

## Contact

- Email: jaipalverma808@gmail.com
- GitHub: [github.com/jaipalverma808](https://github.com/jaipalverma808)
- LinkedIn: [linkedin.com/in/jaipal-verma-5037bb37b](https://www.linkedin.com/in/jaipal-verma-5037bb37b)

## License

Personal portfolio — feel free to reference the structure, but please don't
republish the content as your own.
