HEAD
# vertex
IntraLogistics - Racking and Storage

# VERTEX Racking & Storage website

A responsive single-page React + Vite + TypeScript website using **Vanilla CSS**.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run typecheck
npm run build
npm run preview
```

## Project structure
- `src/components/` — reusable UI components (sections will be extracted here as the page grows)
- `src/data/` — editable company and product placeholder content
- `src/styles/` — CSS tokens, global rules, layout and responsive styles
- `public/assets/vertex-logo.jpeg` — supplied VERTEX logo artwork

## Before launch
1. Replace demo copy, contact information and stock imagery with approved company assets.
2. Confirm the real product catalogue and technical specifications.
3. Configure a server-side enquiry endpoint and spam protection. Do not put email-service secrets in frontend code.
4. Add the final privacy policy, business details, metadata and verified claims.

The current page is a foundation preview. The enquiry CTA uses a placeholder email until the real company address is supplied.
fdc85b7 (Moved Local Repo)
