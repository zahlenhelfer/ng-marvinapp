# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server on http://localhost:4200 (live reload)
- `npm run build` — production build to `dist/ng-marvinapp/`
- `npm run watch` — development build in watch mode
- `npm test` — run unit tests (Karma/Jasmine, not yet configured — scaffolded with `--skip-tests`)
- `ng generate component <name>` — scaffold a new standalone component

## Architecture

Angular 21 app using **standalone components** (no NgModules). Tailwind CSS v4 via PostCSS.

- `src/app/app.ts` — root component, imports child components directly
- `src/app/app.config.ts` — application-level providers (router, error listeners)
- `src/app/app.routes.ts` — route definitions (currently empty)
- `src/app/quote-card/` — quote card feature component using Angular signals (`signal`, `computed`)

### Patterns

- **Signals over observables** for component state — use `signal()` and `computed()` from `@angular/core`
- **Standalone components** — every component uses `imports: [...]` directly in `@Component`, no shared modules
- **Tailwind utility classes** in templates — no component CSS needed for layout/styling
- **Prettier** config is in `package.json` (100 char width, single quotes, Angular HTML parser)
- Component selector prefix: `app-`
