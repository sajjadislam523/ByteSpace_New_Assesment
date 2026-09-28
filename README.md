# ByteSpace

ByteSpace is an online course marketplace front end, built from the ByteSpace Figma design. Students can browse courses by category, search the catalogue and move through results page by page. The UI follows the design's 1440px desktop layout and stays usable on tablet and mobile.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=fff)

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Pages](#pages)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Components](#components)
- [Data](#data)
- [Accessibility](#accessibility)
- [Roadmap](#roadmap)
- [Fonts and assets](#fonts-and-assets)
- [Author](#author)

---

## Features

- **Design tokens from Figma.** Colours, the type scale and spacing are defined once as Tailwind v4 theme tokens (`bg-primary`, `text-heading-xs`, `text-label-m` …).
- **Course catalogue.** The course grid has category filters, keyword search and pagination. Filter, search and page state are kept in the URL, so every view can be shared.
- **Reusable UI kit.** Buttons, inputs, tabs, chips, pagination, rating, avatar stacks and badges are all typed React components.
- **Component playground.** `/playground` renders every shared component on a single page for quick visual review.
- **Responsive layout.** The desktop layout matches the 1440px frames; tablet and mobile get a collapsible menu, fewer grid columns and horizontally scrolling category chips.
- **Self-hosted fonts.** Poppins, Satoshi and Clash Display are loaded with `next/font/local`, so the site makes no external font requests and avoids layout shift while fonts load.
- **Optimised images.** Course and avatar images are served through `next/image` with responsive `sizes`.

## Tech stack

| Area       | Tools                                                  |
| ---------- | ------------------------------------------------------ |
| Framework  | [Next.js 16](https://nextjs.org) (App Router), React 19 |
| Language   | TypeScript (strict)                                    |
| Styling    | Tailwind CSS v4 (CSS-first `@theme` config)            |
| Fonts      | `next/font/local`                                      |
| Linting    | ESLint (`eslint-config-next`)                          |

## Pages

| Route         | Description                                                                 | Status      |
| ------------- | --------------------------------------------------------------------------- | ----------- |
| `/`           | Landing page (hero shell for now)                                           | In progress |
| `/courses`    | "Find Your Next Course": search, filters, category chips, course grid, pagination | Done        |
| `/playground` | Every shared component on one page                                          | Done        |

The `/courses` page accepts these query parameters:

| Param      | Example                    | Effect                         |
| ---------- | -------------------------- | ------------------------------ |
| `q`        | `/courses?q=figma`         | Filters courses by title or creator |
| `category` | `/courses?category=Marketing` | Selects a category chip      |
| `page`     | `/courses?page=3`          | Opens a results page           |

## Getting started

**Requirements:** Node.js 20.9 or newer and npm.

```bash
# 1. Clone the repository
git clone https://github.com/sajjadislam523/ByteSpace_New_Assesment.git
cd ByteSpace_New_Assesment

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The course catalogue is at [/courses](http://localhost:3000/courses) and the component playground at [/playground](http://localhost:3000/playground).

No environment variables are needed yet; all course data is mocked locally.

## Available scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
src/
├── app/
│   ├── courses/page.tsx       # Course catalogue (reads q, category, page)
│   ├── playground/            # Component playground
│   ├── fonts.ts               # Poppins, Satoshi, Clash Display (next/font/local)
│   ├── globals.css            # Design tokens (@theme) + grid background utility
│   ├── layout.tsx             # Root layout, fonts, metadata
│   └── page.tsx               # Landing page
├── components/
│   ├── course/
│   │   ├── CourseBrowser.tsx  # Filters + grid + pagination (client)
│   │   └── CourseCard.tsx
│   ├── icons/                 # SVG icon components
│   ├── layout/                # Header, MobileNav, Footer, Logo, Container, GridBackground
│   └── ui/                    # Button, Input, SearchBar, Chip, Tabs, CategoryChips,
│                              # FilterBar, Pagination, AvatarStack, Rating, Badge
├── data/courses.ts            # Mock courses, categories and catalogue helpers
├── fonts/                     # Self-hosted font files and licences
├── lib/cn.ts                  # className helper
└── types/course.ts            # Course type
public/
└── images/                    # Course thumbnails and student avatars
```

## Design system

All tokens live in [`src/app/globals.css`](src/app/globals.css) and mirror the Figma variables.

### Colours

| Token                 | Hex       | Usage                           | Class example                     |
| --------------------- | --------- | ------------------------------- | --------------------------------- |
| Persian Blue / 800    | `#003BE2` | Hero backgrounds, prices, links | `bg-primary`, `text-primary`      |
| Electric Lime / 400   | `#D4FB20` | Primary buttons, active chips   | `bg-accent`                       |
| Shuttle Gray / 50     | `#F5F5F6` | Pills, light text on blue       | `bg-shuttle-50`                   |
| Shuttle Gray / 200    | `#CED0D3` | Borders, dividers               | `border-shuttle-200`              |
| Shuttle Gray / 400    | `#82868E` | Placeholders, muted text        | `text-shuttle-400`                |
| Shuttle Gray / 700    | `#4B4C53` | Secondary text                  | `text-shuttle-700`                |
| Shuttle Gray / 950    | `#242528` | Body text                       | `text-shuttle-950`                |
| Black / 700           | `#4F4F4F` | Card meta text                  | `text-black-700`                  |

### Typography

Headings use **Poppins**, and body text and labels use **Satoshi**.

| Style      | Size / line height / weight | Classes                          |
| ---------- | --------------------------- | -------------------------------- |
| Heading S  | 36px / 1.2 / 600            | `font-heading text-heading-s`    |
| Heading XS | 20px / 1.2 / 600            | `font-heading text-heading-xs`   |
| Body L     | 18px / 1.6 / 400            | `text-body-l`                    |
| Body M     | 16px / 24px / 400           | `text-body-m`                    |
| Body S     | 14px / 1.6 / 400            | `text-body-s`                    |
| Body XS    | 12px / 1.6 / 400            | `text-body-xs`                   |
| Label L    | 18px / 1.2 / 500            | `text-label-l`                   |
| Label M    | 16px / 1.2 / 500            | `text-label-m`                   |
| Label S    | 14px / 1.2 / 500            | `text-label-s`                   |
| Label XS   | 12px / 1.2 / 500            | `text-label-xs`                  |

### Layout

- Content is 1200px wide inside a 1440px frame (`<Container />`: 120px side padding on desktop).
- `bg-grid` draws the 120px blueprint grid used behind every blue hero section.

## Components

| Component        | Path                              | Notes                                                        |
| ---------------- | --------------------------------- | ------------------------------------------------------------ |
| `Header`         | `components/layout/Header.tsx`    | `active` highlights a nav item; `minimal` shows the logo only (auth pages) |
| `Footer`         | `components/layout/Footer.tsx`    | Newsletter form, link columns, legal links                   |
| `GridBackground` | `components/layout/GridBackground.tsx` | Blue hero wrapper with the 120px grid                   |
| `Button`         | `components/ui/Button.tsx`        | `primary` / `outline` / `ghost`, `md` / `sm`, icons, renders a `Link` when `href` is set |
| `Input`          | `components/ui/Input.tsx`         | Label, icon, error message, bordered or borderless           |
| `SearchBar`      | `components/ui/SearchBar.tsx`     | Search field + scope button; submits to `/courses?q=`        |
| `Tabs`           | `components/ui/Tabs.tsx`          | Accessible tabs with arrow-key navigation                    |
| `CategoryChips`  | `components/ui/CategoryChips.tsx` | Controlled or uncontrolled chip filter                       |
| `FilterBar`      | `components/ui/FilterBar.tsx`     | Filter / Level / Category / sort buttons                     |
| `Pagination`     | `components/ui/Pagination.tsx`    | Windowed page numbers with previous/next                     |
| `AvatarStack`    | `components/ui/AvatarStack.tsx`   | Overlapping avatars + counter bubble (32px or 43px)          |
| `Rating`         | `components/ui/Rating.tsx`        | Score + star                                                 |
| `GlassBadge`, `LevelBadge` | `components/ui/Badge.tsx` | Frosted image badges and level pill                       |
| `CourseCard`     | `components/course/CourseCard.tsx`| Whole card is clickable; creator link stays separate          |

Example:

```tsx
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/icons";

<Button rightIcon={<ChevronDownIcon />}>Courses</Button>
<Button href="/register">Join Us</Button>
<Button variant="outline" size="sm">Filter</Button>
```

## Data

Course data is mocked in [`src/data/courses.ts`](src/data/courses.ts) and typed by [`src/types/course.ts`](src/types/course.ts). `filterCatalog({ category, query })` powers the catalogue page, which makes it easy to replace with API calls later.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and one `h1` per page
- Keyboard-friendly tabs (arrow keys, Home/End) with correct ARIA roles
- Visible focus rings on every interactive element
- `aria-current` on the active nav item and current page number
- Labelled form fields, error messages linked with `aria-describedby`
- Decorative images use empty `alt`; ratings expose a readable label

## Roadmap

- [x] **Phase 1:** Project setup, design tokens, fonts, header, footer, grid background
- [x] **Phase 2:** Shared UI components and component playground
- [ ] **Phase 3:** Pages
  - [x] Courses (search, filters, pagination)
  - [ ] Home
  - [ ] Course details (About / Lessons / Reviews)
  - [ ] Creator profile
  - [ ] Sign in / Register
  - [ ] 404
- [ ] **Phase 4:** Responsive polish, hover/focus/loading states
- [ ] **Phase 5:** Connect to an Express + MongoDB API

## Fonts and assets

| Font                                                              | Used for             | Licence                                              |
| ----------------------------------------------------------------- | -------------------- | ---------------------------------------------------- |
| [Poppins](https://fonts.google.com/specimen/Poppins)              | Headings             | SIL Open Font License (`src/fonts/poppins/OFL.txt`)  |
| [Satoshi](https://www.fontshare.com/fonts/satoshi)                | Body text, labels    | Fontshare Free Font License (`src/fonts/satoshi/FFL.txt`) |
| [Clash Display](https://www.fontshare.com/fonts/clash-display)    | "ByteSpace" wordmark | Fontshare Free Font License (`src/fonts/clash-display/FFL.txt`) |

Icons follow the Material icon set used in the design. Course images and avatars come from the ByteSpace Figma file.

## Author

**Sajjadul**, Frontend Developer

- GitHub: [@sajjadislam523](https://github.com/sajjadislam523)
- Email: [sajjad.islam523@gmail.com](mailto:sajjad.islam523@gmail.com)
