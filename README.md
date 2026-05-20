# ng-marvinapp

A minimal Angular application that displays random quotes from Douglas Adams' *The Hitchhiker's Guide to the Galaxy* universe — featuring the beloved Marvin the Paranoid Android and friends.

## Tech Stack

| Technology | Version |
|---|---|
| Angular | 21 |
| Tailwind CSS | 4 |
| TypeScript | 5.9 |
| Vitest | 4 |

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 11

### Installation

```bash
npm install
```

### Development

Start the dev server with live reload:

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Production Build

```bash
npm run build
```

Output is written to `dist/ng-marvinapp/`.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start development server on port 4200 |
| `npm run build` | Production build |
| `npm run watch` | Development build in watch mode |
| `npm test` | Run unit tests via Vitest |
| `npm run test:coverage` | Run unit tests with coverage report |

## Project Structure

```
src/
└── app/
    ├── app.ts              # Root component
    ├── app.config.ts       # Application providers (router, error listeners)
    ├── app.routes.ts       # Route definitions
    └── quote-card/         # Quote feature component
        ├── quote-card.ts   # Component logic (Angular signals)
        ├── quote-card.html # Template
        └── quote-card.css  # Component styles
```

## Architecture Notes

- **Standalone components** — no NgModules; each component declares its own `imports`
- **Angular Signals** — component state uses `signal()` and `computed()` instead of observables
- **Tailwind CSS v4** via PostCSS for utility-first styling
- **Prettier** configured in `package.json` (100 char width, single quotes, Angular HTML parser)
- Component selector prefix: `app-`

## Generating Components

```bash
ng generate component <name>
```
