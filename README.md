# PLR Projects

A responsive static website for The PLR Group, providing professional grounds maintenance and related site services.

## Pages

- `index.html` - Home page
- `services.html` - Services page
- `contact.html` - Contact page
- `404.html` - Branded not-found page

## Features

- Responsive layout for desktop and mobile screens
- Grounds maintenance service cards
- Equipment and project imagery
- Accreditation and trust section
- Contact and call-to-action links
- GitHub Pages-compatible 404 page

## Run locally

No build tools or dependencies are required. Open `index.html` in a browser, or serve the folder with any static web server.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
.
├── 404.html
├── contact.html
├── index.html
├── services.html
├── styles.css
└── images/
```

## Deployment

This project can be hosted as a static site on GitHub Pages or any standard web host. Set the published source to the repository's main branch and root folder when using GitHub Pages.
