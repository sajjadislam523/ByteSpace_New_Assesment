# ByteSpace

A course marketplace front end built from the ByteSpace Figma design, using Next.js (App Router), TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The component playground is at http://localhost:3000/playground.

| Script          | What it does              |
| --------------- | ------------------------- |
| `npm run dev`   | Start the dev server      |
| `npm run build` | Production build          |
| `npm run start` | Serve the production build|
| `npm run lint`  | Run ESLint                |

## Project structure

```
src/
├── app/
│   ├── fonts.ts            # Poppins, Satoshi, Clash Display (next/font/local)
│   ├── globals.css         # Design tokens (@theme) + grid background utility
│   ├── layout.tsx
│   ├── page.tsx            # Home (shell for now)
│   └── playground/         # Every shared component on one page
├── components/
│   ├── course/CourseCard.tsx
│   ├── icons/              # SVG icons exported from the design
│   ├── layout/             # Header, Footer, Logo, Container, GridBackground
│   └── ui/                 # Button, Input, SearchBar, Chip, Tabs, CategoryChips,
│                           # FilterBar, Pagination, AvatarStack, Rating, Badge
├── data/courses.ts         # Mock course data
├── fonts/                  # Self-hosted font files + licenses
├── lib/cn.ts
└── types/course.ts
```

## Design tokens

All tokens live in `src/app/globals.css` and come straight from the Figma variables.

| Token                  | Value     | Tailwind class example        |
| ---------------------- | --------- | ----------------------------- |
| Persian Blue/800       | `#003BE2` | `bg-primary`, `text-primary`  |
| Electric Lime/400      | `#D4FB20` | `bg-accent`                   |
| Shuttle Gray/50 … 950  | `#F5F5F6` … `#242528` | `text-shuttle-950`, `border-shuttle-200` |
| Black/700              | `#4F4F4F` | `text-black-700`              |

Typography scale (Poppins for headings, Satoshi for body/labels):

| Style      | Size / line height | Class                           |
| ---------- | ------------------ | ------------------------------- |
| Heading S  | 36 / 1.2, 600      | `font-heading text-heading-s`   |
| Heading XS | 20 / 1.2, 600      | `font-heading text-heading-xs`  |
| Body L–XS  | 18–12 / 1.6        | `text-body-l` … `text-body-xs`  |
| Label L–XS | 18–12 / 1.2, 500   | `text-label-l` … `text-label-xs`|

`bg-grid` renders the 120px blueprint grid used behind the blue hero sections.

## Roadmap

- [x] Phase 1 — project setup, tokens, fonts, Header, Footer, grid background
- [x] Phase 2 — shared components + `/playground`
- [ ] Phase 3 — pages: Home, Courses, Course details, Creator, Sign in / Register, 404
- [ ] Phase 4 — responsive polish and interaction states
- [ ] Phase 5 — connect to the Express / MongoDB API

## Fonts

| Font | Used for | License |
| --- | --- | --- |
| [Poppins](https://fonts.google.com/specimen/Poppins) | Headings | SIL Open Font License (`src/fonts/poppins/OFL.txt`) |
| [Satoshi](https://www.fontshare.com/fonts/satoshi) | Body text, labels | Fontshare Free Font License (`src/fonts/satoshi/FFL.txt`) |
| [Clash Display](https://www.fontshare.com/fonts/clash-display) | "ByteSpace" wordmark | Fontshare Free Font License (`src/fonts/clash-display/FFL.txt`) |

All fonts are self-hosted and loaded with `next/font/local`, so no external font requests are made.
