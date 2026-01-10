# Arken

A modern, high-performance landing page website built with the latest web technologies.

## About The Project

This project serves as the landing page for [Arken](https://arken-chi.vercel.app/). It showcases the brand's improved digital presence with focus on:

- **Aesthetics**: Premium, modern design with smooth animations.
- **Performance**: Optimized for speed and SEO using Next.js 16.
- **Responsiveness**: Fully responsive layout for all devices.

## Tech Stack

Built with a cutting-edge stack:

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) & [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
- **Animations**: [Motion](https://motion.dev)
- **Icons**: [Lucide React](https://lucide.dev)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)

## Project Structure

A clean and organized structure for scalability:

```text
├── app/                  # App Router pages and layouts
│   ├── (marketing)/      # Marketing route group (landing pages)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles and tailwind directives
├── components/           # Reusable UI components
│   ├── global/           # Layout components (Navbar, Footer)
│   ├── sections/         # Feature-rich page sections
│   └── ui/               # shadcn/ui primitives
├── lib/                  # Utility functions and helpers
├── public/               # Static assets (images, fonts, icons)
└── types/                # TypeScript type definitions
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
