# Next.js Template

A minimal starter built on the Next.js App Router with TypeScript, Tailwind CSS v4, shadcn/ui, dark mode support, and Clerk authentication.

## Current Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui with the `base-nova` style
- `next-themes` for light, dark, and system themes
- Clerk for authentication
- ESLint and Prettier for code quality and formatting

## Included Setup

- App Router project structure with Geist fonts configured in `app/layout.tsx`
- Global design tokens and theme variables in `app/globals.css`
- shadcn/ui primitives including `Button`, `DropdownMenu`, and `Spinner`
- Sticky header with a theme switcher and auth controls
- Clerk middleware in `proxy.ts` for app and API requests
- Shared `cn()` utility in `lib/utils.ts`

## Getting Started

This repository is currently managed with `pnpm`.

1. Install dependencies:

```bash
pnpm install
```

2. Create `.env` and add your Clerk keys:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

3. Start the development server:

```bash
pnpm dev
```

4. Open `http://localhost:3000`.

## Available Scripts

- `pnpm dev` starts the local development server
- `pnpm build` creates a production build
- `pnpm start` runs the production build
- `pnpm prelint` formats the project with Prettier
- `pnpm lint` runs ESLint

## Prettier Configuration

Prettier is configured in `.prettierrc` with the following behavior:

- `semi: false`
- `prettier-plugin-organize-imports` sorts and groups imports
- `prettier-plugin-tailwindcss` sorts Tailwind utility classes
- `tailwindStylesheet` points to `app/globals.css`
- `tailwindFunctions` includes `cn` and `cva`

## Notes

- `.env*` files and `.clerk/` are ignored by Git.
- The home page is intentionally minimal so the repository can serve as a reusable starter template.
