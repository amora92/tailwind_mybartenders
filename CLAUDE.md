# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyBartenders - A mobile bar hire service website built with Next.js 14, TypeScript, and Tailwind CSS. Features include service showcase, article blog, gallery, contact forms, and admin panel.

## Commands

```bash
npm run dev      # Development server at localhost:3000
npm run build    # Production build + sitemap generation
npm start        # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Hybrid Routing
The project uses both Next.js App Router (`/app`) and Pages Router (`/pages`):
- **App Router (`/app`)**: Root layout, home page, global styles, Google Analytics
- **Pages Router (`/pages`)**: Public pages, admin pages, all API routes

### Key Directories
- `/components` - Reusable React components organized by feature (admin/, article/)
- `/lib/mongodb.js` - MongoDB connection with development pooling (singleton pattern)
- `/middleware/auth.ts` - JWT token validation for protected routes
- `/constants` - Navigation links, footer data, feature configurations
- `/data/articles.js` - Static article content data
- `/scripts` - CLI utilities (admin creation, JWT secret generation, password hashing)

### Authentication Flow
- JWT-based auth with bcrypt password hashing
- HTTP-only secure cookies for token storage
- API routes: `/api/auth/login`, `/api/auth/logout`, `/api/auth/verify`

### Backend
- API routes in `/pages/api/`
- MongoDB for data persistence
- Resend API for transactional emails (`/api/contact.ts`)

## Tech Stack
- Next.js 14.2.4 (React 18)
- TypeScript 5.7.2
- Tailwind CSS 3.4.1 + DaisyUI 4.12.8
- Framer Motion for animations
- MongoDB 6.12.0

## Configuration

### Tailwind (`tailwind.config.ts`)
Custom color palette with gold as primary brand color. Extended breakpoints (xs, 3xl, 4xl) and custom border radius (5xl: 40px).

### Next.js (`next.config.js`)
- Image optimization for mybartenders.co.uk domain
- HTTPS redirect in production
- Content Security Policy for images

### TypeScript
Path alias `@/*` maps to project root. Strict mode enabled.

## Environment Variables
Required variables (see `.env.example`):
- `JWT_SECRET` - Secret for JWT signing
- `ADMIN_USERNAME`, `ADMIN_PASSWORD_HASH` - Admin credentials
- `NEXT_PUBLIC_TINYMCE_API_KEY` - Rich text editor API key
- `MONGODB_URI`, `MONGODB_DB` - Database connection
- `RESEND_API_KEY` - Email service
