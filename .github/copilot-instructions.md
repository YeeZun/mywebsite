<!-- .github/copilot-instructions.md: Guidance for AI coding agents working on this repo -->
# Quick guide for AI agents

This is a small, static multi-page website. Keep instructions tight and action-oriented — make edits directly to HTML/CSS unless the user adds a build step.

- **Big picture:** static site with pages in the repo root (`index.html`, `about.html`, `contact.html`, `music.html`, `video.html`) and assets under `images/` and `media/`. Styling is centralized in `style.css`.

- **Key files:**
  - `index.html` — home page, shows pattern for centered content and navigation buttons.
  - `about.html`, `contact.html`, `music.html` — other pages following the same layout.
  - `style.css` — global styles (see `.content`, `.buttons`, `button`, `img`).

- **Patterns & examples to follow (concrete):**
  - Navigation uses inline buttons: `<button onclick="location.href='about.html'">About Me</button>` — preserve this approach when adding pages unless the user requests a nav bar.
  - Images live in `images/` and are referenced with relative paths: `images/photo1.jpg`.
  - Audio/media live in `media/` and use native elements: `<audio controls><source src="media/song.mp3" type="audio/mpeg"></audio>`.
  - Keep CSS edits in `style.css` and prefer adding class styles (e.g., `.content`, `.buttons`) rather than inline styles.

- **Developer workflow (how humans preview changes):**
  - No build tool or framework configured. To preview locally, run a simple static server from the project root, e.g.:
    ```sh
    python -m http.server 8000
    # or
    npx serve .
    ```
  - Edits are saved directly to files and can be validated by opening `http://localhost:8000`.

- **Conventions and guardrails:**
  - Use relative links between pages (e.g., `about.html`). Do not introduce absolute paths.
  - Add new images to `images/` and reference them with relative paths; optimize size if uploading large files.
  - Follow existing class names for layout: center content using `.content` and group buttons with `.buttons`.
  - No JavaScript bundler or framework — if JS is needed, add a small inline script or a single `scripts.js` and note the change to the user.

- **When modifying or adding pages:**
  - Copy the structure of `index.html` or `about.html` and update the content sections and buttons. Example minimal page skeleton mirrors existing files.

- **What not to do:**
  - Do not add backend code, database configs, or CI pipelines — nothing in the repo indicates those are required.
  - Avoid adding heavy dev tooling unless the user requests it.

- **Examples to reference when making edits:**
  - Navigation buttons: [index.html](index.html)
  - Styles and layout: [style.css](style.css)
  - Media usage: [music.html](music.html)

If anything here is unclear or you want the agent to follow stricter rules (naming, commit messages, accessibility checks, image optimization), tell me which areas to expand.
