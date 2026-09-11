# pedroh's devlog

My personal dev blog — documenting my full-stack and game dev journey, one commit at a time.

Built with the Next.js App Router, MDX content compiled by [Velite](https://velite.js.org/), syntax highlighting via Shiki, and an RSS feed.

## Tech stack

| Area           | Choice                                            |
| -------------- | ------------------------------------------------- |
| Framework      | Next.js 16 (App Router, Turbopack) + React 19     |
| Content        | MDX files in `content/`, processed by Velite      |
| Styling        | Tailwind CSS v4 + `@tailwindcss/typography`       |
| Code blocks    | Shiki (`github-dark`) via `@shikijs/rehype`       |
| RSS            | `feed` — served at `/rss.xml`                     |
| Icons          | `@phosphor-icons/react`                           |
| Animation      | `motion`                                          |
| Tooling        | Biome (lint + format), pnpm, TypeScript           |

## Getting started

Requires Node 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

`pnpm dev` runs Velite in watch mode alongside `next dev`, so edits to files in
`content/` are picked up automatically. The site is served at
http://localhost:3000.

## Scripts

| Script                | What it does                                        |
| --------------------- | -------------------------------------------------- |
| `pnpm dev`            | Velite watch + Next dev server                      |
| `pnpm build`          | Production build (`next build`)                     |
| `pnpm start`          | Serve the production build                          |
| `pnpm content-build`  | Build the content collection once                   |
| `pnpm content-watch`  | Rebuild content on change                           |
| `pnpm lint`           | `biome check`                                       |
| `pnpm format`         | `biome format --write`                              |

## Writing a post

Add an `.mdx` file under `content/`. Frontmatter schema (see `velite.config.ts`):

```mdx
---
title: My Post Title
date: 2026-07-16
tags: ["Next.js", "TypeScript"]
description: Optional summary used for SEO and the RSS feed.
published: true # optional, defaults to true — set false to keep it as a draft
---

## Your content here

Regular MDX. Fenced code blocks are highlighted with Shiki.
```

The file name becomes the slug: `content/my-post.mdx` → `/posts/my-post`.

## Project structure

```
content/                 MDX posts
src/
  app/
    (main)/              home, about, projects
    posts/[slug]/        post page
    rss.xml/route.ts     RSS 2.0 feed
    sitemap.ts, robots.ts
  components/            UI + MDX renderers (code-block, inline-code, alerts…)
  lib/utils/             helpers (getSiteUrl, formatDate, cn…)
velite.config.ts         content collection + MDX pipeline
```

## Deployment

Deployed on Vercel. `getSiteUrl()` (in `src/lib/utils`) resolves the canonical
URL from `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`, falling back to
`http://localhost:3000` in local dev — this drives metadata, the sitemap, and
feed URLs.
