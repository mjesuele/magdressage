# MAG Dressage

Static Astro website for the MAG Dressage full-training program in North Salem, New York. The site origin is [magdressage.com](https://magdressage.com).

## Local preview

```sh
npm ci
npm run build
npm run preview
```

Open the URL printed by Astro, typically `http://localhost:4321/`. For editing with live reload, use `npm run dev`.

Cloudflare Pages builds the static site with `npm run build` and serves `dist/`. A push to `main` triggers production deployment. Builds default to `noindex`. At launch, set `MAG_SITE_INDEXABLE=true` in the production build environment. Cloudflare preview deployments also carry Cloudflare's platform-level `noindex` header.

## Editing

- **Facility copy** lives in `src/content/facility.ts`. Edit headings, introduction paragraphs, and amenity lists there.
- **Photo slots** are defined in `src/content/photography.ts`. Keep originals in `resources/assets/` and import the selected source as the slot's `image`. Intentional crops go in `src/assets/photography/`. Record the original filename, permission, credit, descriptive `alt` text, and focal points for desktop and mobile. A focal point is a CSS position such as `'45% 35%'`. For the Home hero, provide alt text that describes both the primary and alternate sources. Astro generates the responsive AVIF, WebP, and JPEG sizes during the build. Check both crops in the preview. Empty slots display filename-specific placeholders.
- **Contact links and page metadata** live in `src/content/site.ts`. The inquiry button opens a message to MAG Dressage in the visitor's email app.
- **Logo and sharing image** use the supplied artwork in `resources/assets/`. Astro resizes the cropped header logo in `src/assets/brand/`. The footer uses the transparent SVG with white lettering and emblem. The sharing image is `public/social-preview.jpg` (1200 × 630). Update the dimensions and alt metadata in `src/layouts/SiteLayout.astro` if a replacement calls for it.
- **Fonts** are the Latin variable WOFF2 files from Fontsource's Cormorant Garamond 5.3.0 and Source Sans 3 5.3.1 packages. The SIL Open Font Licenses are in `public/fonts/`.

Historical business context lives in `resources/`. Astro publishes `public/` assets and generated routes from `src/pages/`.
