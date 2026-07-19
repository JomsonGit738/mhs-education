# AGENTS.md

## Project overview

MHS Education is a content-led marketing website for a UK education consultancy. It uses Next.js 14's App Router, React 18, and strict TypeScript. The site is mostly statically rendered; interactive areas use small client-component boundaries for navigation, animation, sliders, consent, forms, and toasts.

## Repository map

- `app/` contains routes, route metadata, JSON-LD composition, `robots.ts`, and `sitemap.ts`.
- `src/views/` contains page-level UI assembled by the route files.
- `src/components/` contains reusable site components. Add new shared components here.
- `components/JsonLd.tsx` is the JSON-LD component currently imported by most route files. A second named implementation exists at `src/components/JsonLd.tsx` and is used by the legal pages; do not create further duplicates.
- `src/data/content.ts` is the primary source for navigation, marketing copy, courses, staff/services, testimonials, blog entries, contact details, and shared TypeScript types.
- `src/data/images.ts` imports local images and exposes both URL strings and original Next.js image assets.
- `src/data/universities.ts` owns university logo data.
- `src/lib/seo.ts` owns shared site identity, canonical URL helpers, metadata helpers, and schema builders.
- `src/lib/formValidation.ts` and `src/lib/formSubmission.ts` contain shared form behavior and Web3Forms submission routing.
- `src/assets/` contains the legacy theme CSS, fonts, and site imagery.
- `app/globals.css` contains project-specific global overrides and newer styles.
- `public/` contains public-root assets such as favicons and the metadata logo.
- `tmp_mhs_main.js` and `tmp_mhs_site.html` are large legacy/reference snapshots and are not application source. Do not edit or import them unless a task explicitly targets them.
- `.next/`, `tsconfig.tsbuildinfo`, and `node_modules/` are generated or installed artifacts. Never edit them.

## Common commands

Run commands from the repository root:

```sh
npm install
npm run dev
npm run lint
npm exec tsc -- --noEmit
npm run build
npm run start
```

Prefer `npm ci` when reproducing a clean install from `package-lock.json`. There is currently no automated test command or test suite. Do not claim tests passed when only linting, type-checking, or building was run.

On Windows systems that block PowerShell wrapper scripts, use `npm.cmd` and `node_modules/.bin/tsc.cmd` equivalents.

## Implementation conventions

- Keep route modules server-rendered by default. Add `'use client'` only to the smallest component that needs hooks, event handlers, browser APIs, or a browser-only dependency.
- Keep page layout and presentation in `src/views/`; keep `app/**/page.tsx` focused on route concerns such as metadata, structured data, and selecting the view.
- Reuse content and types from `src/data/content.ts` rather than repeating business copy or contact details in components. When changing site identity, domain, address, phone, or email, also check `src/lib/seo.ts`, metadata, structured data, legal content, sitemap, and public assets for matching values.
- Use local, statically imported images. Register broadly reused images in `src/data/images.ts`; call `getImageAsset` when a component needs the original `StaticImageData` for `next/image`.
- Use Next.js `Link` for internal navigation and ordinary anchors for telephone, email, and external links.
- Preserve strict typing. Avoid `any`, unchecked casts, and weakening `tsconfig.json`. Define props and data shapes explicitly and keep reusable domain types near their data source.
- Follow the style already used in the file being edited. The repository has mixed quote styles and no formatter script, so avoid unrelated formatting churn.
- Maintain semantic HTML, keyboard access, visible focus behavior, useful alt text, and appropriate ARIA relationships when changing interactive UI.

## Styling and UI

- The CSS load order in `app/layout.tsx` is intentional: Bootstrap and legacy plugin/theme styles load before `app/globals.css`.
- Existing markup relies heavily on legacy classes from `src/assets/css/style.css`, Bootstrap classes, icon-font classes, and newer component-specific classes in `app/globals.css`. Search for a class before changing or removing it.
- Prefer extending the existing class naming patterns over inline styles. Use CSS Modules only for an isolated component that already follows that model, such as `TiltedCard`.
- Check responsive behavior at mobile and desktop widths after layout changes. Pay special attention to the header, hero sliders, cards, forms, floating social dock, footer canvas, and consent bar.
- Do not add a new animation or carousel library when AOS, Framer Motion, Swiper, and the existing CSS animations already cover the need.
- Preserve reduced-motion behavior where it exists and avoid introducing unavoidable motion.

## SEO, routes, and content

- Every indexable route should have a unique title, description, canonical URL, Open Graph data, and relevant JSON-LD.
- Prefer helpers in `src/lib/seo.ts` for new metadata and schemas. Keep canonical paths, sitemap entries, breadcrumbs, blog slugs, and content IDs synchronized.
- JSON-LD must contain trusted, serializable data. Do not pass user-provided strings directly into a script block.
- When adding or removing a public route, update `app/sitemap.ts` and verify navigation/footer links. Update `app/robots.ts` only when crawl behavior must change.
- Blog detail routing is currently backed by local placeholder data, not a CMS. Preserve the existing fallback/not-found behavior and do not imply dynamic CMS support unless it is implemented.
- Legal dates and organization details are shared through `src/lib/seo.ts`; keep privacy and terms pages consistent when compliance copy changes.

## Forms and browser state

- Form submissions post directly from the browser to Web3Forms through `src/lib/formSubmission.ts`. The homepage guidance form and the contact/career forms use separate access keys, and each submission includes a hidden `context` value identifying its source.
- Preserve required-field validation, consent gating, disabled/submitting state, and accessible field errors when modifying forms.
- Never add secrets to client code or commit `.env*` files. Public client configuration must be explicitly intended for browser exposure; sensitive submission logic belongs in a server route.
- Cookie consent uses `localStorage`, so access it only from client-side code and guard browser globals during initialization.

## Validation before handoff

For ordinary TypeScript, content, or styling changes, run:

```sh
npm run lint
npm exec tsc -- --noEmit
```

Also run `npm run build` for route, metadata, dependency, image, configuration, or production-behavior changes. The root layout uses `next/font/google`, so a restricted/offline environment can make a production build fail while fetching Poppins; report that environmental failure accurately rather than treating it as an application error.

Because no automated browser tests exist, manually smoke-test affected routes and interactions when possible. At minimum verify relevant navigation, responsive layout, console errors, form validation/submission states, and metadata/schema output.

Keep changes scoped. Do not commit generated build output, opportunistically rewrite legacy assets, or replace working content beyond the request.
