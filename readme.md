# Emmanuel Akpabio — Premium Mobile App Portfolio

This is a polished static portfolio website built for Upwork conversion. It presents mobile app case studies with client-focused messaging, animated interactions, project filters, modals, portfolio frames, and direct Upwork contact actions.

## Included case studies

- Car IQ — AI Automobile Assistant
- INJOY — Social Media Mobile App
- FitJourney — Fitness Training App
- Budgetly — Personal Finance App

Each project includes:

- Portfolio cover
- Desire frame
- Problem frame
- Solution frame
- Client-focused value copy
- Niche-specific colors and visual direction

## Key features

- Premium dark glassmorphism layout
- Project-specific colors and accents
- Animated hero carousel
- Portfolio filtering by niche
- Project detail modal with frame gallery
- Scroll reveal animations
- Magnetic buttons and subtle 3D tilt
- Sticky Upwork CTA
- Fully responsive layout
- All contact actions route to: https://www.upwork.com/freelancers/emmanuela469

## Folder structure

```text
index.html
css/styles.css
js/app.js
assets/projects/*.webp
readme.md
```

## Preview locally

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deploy to Netlify

1. Upload the full folder to GitHub.
2. Go to Netlify and choose **Add new site**.
3. Import the GitHub repository.
4. Leave the build command empty.
5. Set the publish directory to `/` or the project root.
6. Deploy.

## Edit Upwork profile link

The Upwork URL is stored in `js/app.js` as:

```js
const UPWORK_URL = "https://www.upwork.com/freelancers/emmanuela469";
```

It is also used in HTML CTA links for fallback support.
