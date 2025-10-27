# Portfolio-2

A modern portfolio application built with Vite, React 18, and 3D graphics capabilities.

## Tech Stack

- **React 18** - UI framework (JavaScript, TypeScript disabled)
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for react-three-fiber
- **Lucide React** - Icon library
- **jsPDF** - PDF generation
- **html2canvas** - HTML to canvas conversion

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server on port 3000:

```bash
npm run dev
```

The server will automatically open in your browser at `http://localhost:3000`.

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React context providers
├── hooks/          # Custom React hooks
├── data/           # Static data and constants
├── pages/          # Page components
├── styles/         # Global styles and Tailwind config
├── App.jsx         # Root application component
└── main.jsx        # Application entry point
```

## Configuration

### Vite Configuration

- **Dev Server**: Runs on port 3000 with auto-open
- **Path Aliases**: `@` points to `src/`
- **Manual Chunks**: 
  - `react-vendor`: React, React DOM, React Router DOM
  - `3d-vendor`: Three.js, @react-three/fiber, @react-three/drei

### Tailwind CSS

Tailwind CSS v4 is configured with the PostCSS plugin. The configuration file is `tailwind.config.js`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter (placeholder)
