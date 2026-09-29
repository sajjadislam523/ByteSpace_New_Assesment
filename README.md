# ByteSpace

ByteSpace is an online course marketplace front end, built from the ByteSpace Figma design. Students can explore the landing page, browse and search the course catalogue, read a course's details, lessons and reviews, visit creator profiles, and sign in or register. The UI follows the design's 1440px desktop layout and stays usable on tablet and mobile.

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
- **Course details.** About, Lessons and Reviews tabs whose state lives in `?tab=`, a share button, and a reviews list that can be filtered by rating.
- **Creator profiles.** A profile page per creator with a follow toggle and their courses, plus a creators list page.
- **Auth pages.** Sign in and register forms with client-side validation and accessible error messages.
- **Custom 404 page** for unknown routes and unknown course or creator links.
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

| Route               | Description                                                                          | Status |
| ------------------- | ------------------------------------------------------------------------------------ | ------ |
| `/`                 | Landing page: hero, partners, featured courses, learning paths, growth, creator tools, CTA, testimonials | Done   |
| `/courses`          | "Find Your Next Course": search, filters, category chips, course grid, pagination     | Done   |
| `/courses/[slug]`   | Course details with About / Lessons / Reviews tabs (`?tab=about\|lessons\|reviews`)  | Done   |
| `/creators`         | Creators list                                                                        | Done   |
| `/creators/[slug]`  | Creator profile: bio, stats, follow button and the creator's courses                 | Done   |
| `/login`            | Sign in                                                                              | Done   |
| `/register`         | Create an account                                                                    | Done   |
| 404                 | Custom "page not found" page for unknown routes, courses and creators               | Done   |
| `/playground`       | Every shared component on one page                                                   | Done   |

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

Open [http://localhost:3000](http://localhost:3000). The course catalogue is at [/courses](http://localhost:3000/courses), a course page at [/courses/build-digital-asset](http://localhost:3000/courses/build-digital-asset) and the component playground at [/playground](http://localhost:3000/playground).

No environment variables are needed yet; all course, creator and review data is mocked locally.

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
│   ├── courses/
│   │   ├── page.tsx           # Course catalogue (reads q, category, page)
│   │   └── [slug]/page.tsx    # Course details (static params, metadata, ?tab=)
│   ├── creators/
│   │   ├── page.tsx           # Creators list
│   │   └── [slug]/page.tsx    # Creator profile
│   ├── login/page.tsx         # Sign in
│   ├── register/page.tsx      # Register
│   ├── playground/            # Component playground
│   ├── not-found.tsx          # 404 page
│   ├── fonts.ts               # Poppins, Satoshi, Clash Display (next/font/local)
│   ├── globals.css            # Design tokens (@theme), focus ring, grid background utility
│   ├── layout.tsx             # Root layout, fonts, metadata
│   └── page.tsx               # Landing page
├── components/
│   ├── auth/                  # AuthLayout, AuthCollage, LoginForm, RegisterForm, validation
│   ├── course/                # CourseBrowser (client), CourseCard, CourseGrid
│   ├── course-details/        # CourseHero, CoursePreview, CourseSidebar, CourseTabs,
│   │                          # AboutTab, LessonsTab, ReviewsTab, ReviewList, ReviewCard,
│   │                          # ReviewStars, ShareButton
│   ├── creators/              # CreatorHero, CreatorStats (follow toggle), CreatorCard
│   ├── home/                  # Landing page sections, floating cards and 3D ornaments
│   ├── icons/                 # SVG icon components
│   ├── layout/                # Header, MobileNav, Footer, NewsletterForm, Logo,
│   │                          # Container, GridBackground
│   └── ui/                    # Button, Input, SearchBar, Chip, Tabs, CategoryChips,
│                              # FilterBar, Pagination, AvatarStack, Rating, Badge
├── data/
│   ├── courses.ts             # Mock courses, categories and catalogue helpers
│   ├── course-details.ts      # Course details, lessons, modules and reviews
│   ├── creators.ts            # Creators and their courses
│   └── home.ts                # Landing page content
├── fonts/                     # Self-hosted font files and licences
├── lib/cn.ts                  # className helper
└── types/course.ts            # Course type
public/
└── images/                    # Course, creator, review, auth and landing page images
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

All data is mocked in [`src/data/`](src/data) and read through small helpers, which makes it easy to replace with API calls later:

- [`courses.ts`](src/data/courses.ts): courses (typed by [`src/types/course.ts`](src/types/course.ts)); `filterCatalog({ category, query })` powers the catalogue page.
- [`course-details.ts`](src/data/course-details.ts): `getCourseDetails(slug)` returns a course with its description, lessons, modules and reviews.
- [`creators.ts`](src/data/creators.ts): `getCreator(slug)` and `getCreatorCourses(slug)`.
- [`home.ts`](src/data/home.ts): landing page content.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and one `h1` per page
- Keyboard-friendly tabs (arrow keys, Home/End) with correct ARIA roles
- Visible focus rings on every interactive element; the ring turns lime on blue sections so it keeps its contrast
- `aria-current` on the active nav item and current page number
- Labelled form fields, error messages linked with `aria-describedby`
- Decorative images use empty `alt`; ratings expose a readable label

## Roadmap

- [x] **Phase 1:** Project setup, design tokens, fonts, header, footer, grid background
- [x] **Phase 2:** Shared UI components and component playground
- [x] **Phase 3:** Pages
  - [x] Courses (search, filters, pagination)
  - [x] Home
  - [x] Course details (About / Lessons / Reviews)
  - [x] Creator profile and creators list
  - [x] Sign in / Register
  - [x] 404
- [ ] **Phase 4:** Polish
  - [x] Responsive layouts at 375, 768 and 1440px
  - [x] Hover and keyboard focus states
  - [ ] Loading states
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
