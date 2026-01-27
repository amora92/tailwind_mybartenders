# MyBartenders Website - Admin & Maintenance Guide

> A comprehensive guide for maintaining, updating, and managing the MyBartenders website.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Admin Dashboard](#admin-dashboard)
3. [Content Management](#content-management)
4. [Changing Images & Media](#changing-images--media)
5. [Updating Text Content](#updating-text-content)
6. [Understanding the Codebase](#understanding-the-codebase)
7. [Styling & Branding](#styling--branding)
8. [API Reference](#api-reference)
9. [Security Features](#security-features)
10. [Deployment & Maintenance](#deployment--maintenance)
11. [Troubleshooting](#troubleshooting)
12. [Future Enhancement Ideas](#future-enhancement-ideas)

---

## Quick Start

### Running the Website Locally

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for code issues
npm run lint
```

The development server runs at `http://localhost:3000`

### Key URLs

| URL | Purpose |
|-----|---------|
| `/admin/login` | Admin login page |
| `/admin` | Admin dashboard |
| `/admin/new-article` | Create new article |
| `/admin/gallery` | Manage gallery images |
| `/admin/edit-article/[slug]` | Edit existing article |

---

## Admin Dashboard

### Accessing the Admin Panel

1. Navigate to `/admin/login`
2. Enter your admin credentials
3. You'll be redirected to the dashboard

### Dashboard Features

The admin dashboard (`/admin`) provides:

- **Total Articles Count** - All articles including drafts
- **Total Views** - Combined views across all articles
- **Articles by Status** - Draft vs Published breakdown
- **Popular Categories** - Top 5 categories with article counts
- **Recent Articles** - Latest 5 articles with quick actions
- **Top Viewed Articles** - Most popular content

### Managing Articles

| Action | How To |
|--------|--------|
| Create Article | Click "New Article" or go to `/admin/new-article` |
| Edit Article | Click "Edit" button on any article |
| Delete Article | Click "Delete" button (confirmation required) |
| Preview Article | Use the preview toggle in the editor |
| Publish/Unpublish | Change status dropdown in editor |

### Article Content Types

When creating articles, you can add these content blocks:

- **Text** - Rich text with formatting (headings, bold, italic, lists)
- **Images** - Single images with captions
- **Videos** - YouTube embed support
- **Quotes** - Styled blockquotes
- **Code Blocks** - Syntax highlighted code
- **CTAs** - Call-to-action buttons
- **Galleries** - Multiple images with layout options
- **Recipes** - Full recipe cards with ingredients, steps, nutrition
- **Methods/Steps** - Step-by-step instructions

### Gallery Management

Access at `/admin/gallery`:

1. **Upload Images** - Click "Upload" button, max 10MB per image
2. **Categorize** - Choose: Cocktails, Events, or Setup
3. **Set Display Size** - Normal, Wide, or Featured
4. **Add Alt Text** - Important for SEO (describe the image)
5. **Delete** - Remove unwanted images

---

## Content Management

### Article Categories

Available categories for articles:

- Wedding
- Educational
- Entertainment
- News
- Cocktails
- Events
- Tips & Tricks
- Behind the Scenes

### Article Metadata

When creating articles, fill in:

| Field | Purpose | Tips |
|-------|---------|------|
| Title | Main headline | Keep under 60 characters for SEO |
| Slug | URL path | Auto-generated, can be edited |
| Description | Meta description | 150-160 characters for SEO |
| Featured Image | Main article image | Use 1200x630px for best social sharing |
| Category | Content category | Choose most relevant |
| Author Name | Byline | Your name or team member |
| Read Time | Estimated minutes | Calculate ~200 words/minute |
| Tags | Keywords | Comma-separated, 3-5 tags recommended |
| Status | Draft/Published | Draft = hidden from public |

---

## Changing Images & Media

### Where Images Are Stored

All static images live in the `/public/` directory:

```
/public/
├── mybartenders.co.uk_logo_svg.svg    # Main logo (SVG)
├── mybartenders.co.uk_logo_png.png    # Main logo (PNG)
├── transparent_logo.svg               # Transparent logo variant
├── favicon.ico                        # Browser tab icon
├── icon-192.png                       # Web app icon
├── icon-512.png                       # Web app icon (large)
├── apple-touch-icon.png               # Apple device icon
├── wedding.webp                       # Wedding service image
├── corporate.webp                     # Corporate service image
├── party_cocktails.webp               # Party service image
├── masterclass.webp                   # Masterclass service image
├── cocktail_foam.webp                 # Featured cocktail image
├── Branding_Video_2.compressed.mp4    # Hero video
└── /uploads/articles/                 # Admin-uploaded images
```

### Changing the Logo

1. **Prepare your logo files:**
   - SVG version (preferred for quality)
   - PNG version (fallback)
   - Sizes: Keep similar dimensions to existing

2. **Replace these files in `/public/`:**
   - `mybartenders.co.uk_logo_svg.svg`
   - `mybartenders.co.uk_logo_png.png`
   - `transparent_logo.svg`

3. **Update favicons (if logo changes significantly):**
   - `favicon.ico` (32x32 or 16x16)
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)
   - `apple-touch-icon.png` (180x180)
   - `icon-maskable-192.png` (192x192)
   - `icon-maskable-512.png` (512x512)

### Changing Hero/Background Images

Edit `/constants/siteConfig.ts`:

```typescript
export const SITE_IMAGES = {
  hero: '/your-new-hero-video.mp4',           // Hero video
  ctaBackground: '/your-new-cta-bg.jpg',      // CTA section
  aboutHero: '/your-new-about-hero.jpg',      // About page
  servicesCta: '/your-new-services-cta.jpg',  // Services CTA
}
```

### Changing Service Category Images

Edit `/constants/siteConfig.ts`:

```typescript
export const SERVICE_IMAGES = {
  weddings: '/wedding.webp',
  corporate: '/corporate.webp',
  parties: '/party_cocktails.webp',
  masterclass: '/masterclass.webp',
}
```

### Updating the Static Gallery

Edit `/constants/siteConfig.ts` - look for `GALLERY_IMAGES`:

```typescript
export const GALLERY_IMAGES = [
  {
    src: '/your-image.webp',
    alt: 'Description for SEO',
    category: 'cocktails', // or 'events' or 'setup'
    span: 'col-span-1', // or 'col-span-2' for wide
  },
  // ... more images
]
```

### Image Best Practices

| Use Case | Recommended Format | Recommended Size |
|----------|-------------------|------------------|
| Photos | WebP or JPEG | Max 1920px wide |
| Logos/Icons | SVG | N/A (vector) |
| Thumbnails | WebP | 400x300px |
| Featured Images | WebP or JPEG | 1200x630px |
| Gallery Images | WebP | 800-1200px wide |

---

## Updating Text Content

### Company Information

**File: `/constants/contact.ts`**

```typescript
export const CONTACT_INFO = {
  phone: '+44 7482 612532',      // Your phone number
  email: 'contact@mybartenders.co.uk',  // Contact email
}

export const BUSINESS_INFO = {
  name: 'MyBartenders',
  tagline: 'Your tagline here',
  description: 'Your company description',
  foundingYear: 2009,
  location: 'Northampton, UK',
  serviceArea: 'UK Nationwide',
}
```

### Navigation Links

**File: `/constants/index.ts`**

```typescript
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/gallery', key: 'gallery', label: 'Gallery' },
  { href: '/articles', key: 'articles', label: 'Articles' },
  { href: '/contact_us', key: 'contact', label: 'Contact Us' },
]
```

### Footer Links

**File: `/constants/index.ts`**

```typescript
export const FOOTER_LINKS = [
  {
    title: 'Company',
    links: ['About Us', 'FAQ', 'Privacy Policy'],
  },
  // ... more sections
]

export const FOOTER_CONTACT_INFO = {
  phone: '+44 7482 612532',
  email: 'contact@mybartenders.co.uk',
}
```

### Company Statistics

**File: `/constants/siteConfig.ts`**

```typescript
export const COMPANY_STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Events Completed' },
  { value: '50k+', label: 'Cocktails Served' },
  { value: '5.0', label: 'Average Rating' },
  { value: '100%', label: 'Satisfaction Rate' },
]
```

### Trust Indicators

**File: `/constants/siteConfig.ts`**

```typescript
export const TRUST_INDICATORS = [
  { icon: 'shield', text: 'Free Consultation' },
  { icon: 'check', text: 'No Hidden Fees' },
  { icon: 'star', text: 'Customized Packages' },
  { icon: 'globe', text: 'UK Nationwide' },
]
```

### Service Features

**File: `/constants/siteConfig.ts`**

```typescript
export const SERVICE_FEATURES = {
  standard: [
    'Professional Bartenders',
    'Premium Spirits & Mixers',
    // ...
  ],
  optional: [
    'Fire Breathing Show',
    'Cocktail Masterclass',
    // ...
  ],
}
```

### Social Media Links

**File: `/constants/index.ts`**

```typescript
export const SOCIALS = [
  { src: '/facebook.svg', href: 'https://facebook.com/yourpage' },
  { src: '/instagram.svg', href: 'https://instagram.com/yourpage' },
  { src: '/twitter.svg', href: 'https://twitter.com/yourpage' },
]
```

---

## Understanding the Codebase

### Directory Structure

```
/tailwind_mybartenders/
│
├── /app/                    # Next.js App Router (new)
│   ├── layout.tsx          # Root HTML layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── GoogleAnalytics.tsx # Analytics tracking
│
├── /pages/                  # Next.js Pages Router (legacy)
│   ├── /api/               # Backend API routes
│   │   ├── /auth/          # Login/logout/verify
│   │   ├── /articles/      # Article CRUD
│   │   ├── /gallery/       # Gallery CRUD
│   │   ├── contact.ts      # Contact form
│   │   └── upload.ts       # File uploads
│   │
│   ├── /admin/             # Admin panel pages
│   ├── articles.tsx        # Articles listing
│   ├── gallery.tsx         # Public gallery
│   ├── services.tsx        # Services page
│   ├── contact_us.tsx      # Contact form
│   └── [other pages]
│
├── /components/             # Reusable UI components
│   ├── /admin/             # Admin-only components
│   ├── /article/           # Article components
│   ├── Hero.tsx            # Homepage hero section
│   ├── AboutSection.tsx    # About section
│   ├── ServicesSection.tsx # Services display
│   ├── Gallery.tsx         # Gallery component
│   ├── FAQ.tsx             # FAQ accordion
│   └── [43 more components]
│
├── /constants/              # Configuration files
│   ├── index.ts            # Navigation, footer, features
│   ├── siteConfig.ts       # Images, gallery, stats
│   ├── contact.ts          # Contact information
│   └── brandStyles.ts      # Design tokens
│
├── /lib/                    # Utility functions
│   ├── mongodb.js          # Database connection
│   ├── rateLimit.ts        # API rate limiting
│   ├── sanitize.ts         # Content sanitization
│   └── logger.ts           # Logging utility
│
├── /middleware/             # Request interceptors
│   └── auth.ts             # JWT authentication
│
├── /public/                 # Static assets
│   ├── [images]            # All images
│   ├── [icons]             # SVG icons
│   ├── [videos]            # Video files
│   └── /uploads/           # User uploads
│
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

### Key Components Explained

| Component | Location | Purpose |
|-----------|----------|---------|
| `Hero.tsx` | `/components/` | Homepage hero section with video/CTA |
| `AboutSection.tsx` | `/components/` | About us section |
| `ServicesSection.tsx` | `/components/` | Services showcase cards |
| `Gallery.tsx` | `/components/` | Image gallery with filtering |
| `FAQ.tsx` | `/components/` | Expandable FAQ accordion |
| `TestimonialsSection.tsx` | `/components/` | Customer testimonials |
| `HowItWorksSection.tsx` | `/components/` | Service process steps |
| `FinalCtaSection.tsx` | `/components/` | Footer call-to-action |
| `ConsentBanner.tsx` | `/components/` | Cookie consent popup |
| `OptimizedImage.tsx` | `/components/` | Next.js image wrapper |

### How Pages Work

**App Router (`/app/`):**
- Modern Next.js approach
- Handles root layout and home page
- Server-side rendering by default

**Pages Router (`/pages/`):**
- Traditional Next.js approach
- Handles all other public pages
- All API routes live here

---

## Styling & Branding

### Color Palette

**File: `/constants/brandStyles.ts`**

```typescript
export const BRAND_COLORS = {
  primary: {
    pink: '#EC4899',
    rose: '#F43F5E',
    amber: '#F59E0B',
  },
  dark: {
    950: '#030712', // Darkest
    900: '#111827',
    800: '#1F2937',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#9CA3AF', // Gray-400
    accent: '#EC4899',    // Pink
  },
}
```

### Changing Brand Colors

1. Edit `/constants/brandStyles.ts`
2. Update the `BRAND_COLORS` object
3. Update `BRAND_GRADIENTS` to match
4. Rebuild: `npm run build`

### Gradients

```typescript
export const BRAND_GRADIENTS = {
  primary: 'bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500',
  hover: 'hover:from-pink-600 hover:via-rose-600 hover:to-amber-600',
  text: 'bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent',
}
```

### Typography Scale

| Type | Classes | Use For |
|------|---------|---------|
| Hero | `text-4xl md:text-6xl` | Main page titles |
| Section | `text-4xl md:text-5xl` | Section headings |
| Subsection | `text-3xl md:text-4xl` | Sub-headings |
| Card Title | `text-2xl font-semibold` | Card headings |
| Body Large | `text-xl` | Intro paragraphs |
| Body | `text-base` | Regular text |
| Small | `text-sm` | Captions, meta |

### Tailwind Configuration

**File: `/tailwind.config.ts`**

Key customizations:
- Extended breakpoints: `xs` (400px), `3xl` (1680px), `4xl` (2200px)
- Custom border radius: `5xl` (40px)
- DaisyUI theme integration

---

## API Reference

### Authentication

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth/login` | POST | Admin login |
| `/api/auth/logout` | POST | Admin logout |
| `/api/auth/verify` | GET | Verify token |

### Articles

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/articles` | GET | List all articles |
| `/api/articles` | POST | Create article |
| `/api/articles/[slug]` | GET | Get single article |
| `/api/articles/[slug]` | PUT | Update article |
| `/api/articles/[slug]` | DELETE | Delete article |

### Gallery

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/gallery` | GET | List all images |
| `/api/gallery` | POST | Add image |
| `/api/gallery?id=xxx` | DELETE | Delete image |

### Other

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/contact` | POST | Submit contact form |
| `/api/upload` | POST | Upload file |

---

## Security Features

### Authentication System

- **JWT Tokens** - 1-hour expiry, HTTP-only cookies
- **Password Hashing** - bcrypt with salt rounds
- **Protected Routes** - Middleware checks all `/admin/*` pages

### Rate Limiting

| Endpoint | Limit |
|----------|-------|
| Login | 5 attempts per minute per IP |
| Contact Form | 5 submissions per minute per IP |

### Content Security

- **HTML Sanitization** - DOMPurify removes malicious content
- **CSP Headers** - Restrict script/style sources
- **XSS Protection** - Enabled via headers
- **Clickjacking Prevention** - X-Frame-Options: DENY

### Security Headers

All responses include:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` (configured in next.config.js)

---

## Deployment & Maintenance

### Pre-Deployment Checklist

- [ ] Run `npm run lint` - fix any errors
- [ ] Run `npm run build` - ensure it builds successfully
- [ ] Test all forms work
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Test admin login/logout
- [ ] Verify contact form sends emails

### Environment Variables

Required for production (set in hosting platform):

```
JWT_SECRET=your-secure-secret
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD_HASH=your-bcrypt-hash
MONGODB_URI=your-mongodb-connection
MONGODB_DB=your-database-name
NEXT_PUBLIC_TINYMCE_API_KEY=your-tinymce-key
RESEND_API_KEY=your-resend-key
```

### Database Backup

MongoDB collections to backup:
- `articles` - All blog articles
- `gallery` - Gallery images
- `users` - Admin accounts

### Regular Maintenance Tasks

| Task | Frequency | How |
|------|-----------|-----|
| Check broken links | Monthly | Use online checker |
| Update dependencies | Quarterly | `npm update` |
| Review analytics | Weekly | Google Analytics |
| Backup database | Weekly | MongoDB tools |
| Clear unused uploads | Quarterly | Manual review |
| Test contact form | Monthly | Send test email |

---

## Troubleshooting

### Common Issues

**"Cannot connect to database"**
- Check `MONGODB_URI` is correct
- Verify IP whitelist in MongoDB Atlas
- Check database name matches `MONGODB_DB`

**"Admin login not working"**
- Verify `ADMIN_USERNAME` is set
- Check `ADMIN_PASSWORD_HASH` is valid bcrypt hash
- Clear cookies and retry

**"Images not loading"**
- Check file exists in `/public/`
- Verify file path in code (case-sensitive)
- Check file size (max 10MB for uploads)

**"Contact form not sending"**
- Verify `RESEND_API_KEY` is set
- Check email configuration
- Review server logs for errors

**"Build failing"**
- Run `npm run lint` to find errors
- Check for TypeScript errors
- Verify all imports exist

### Useful Commands

```bash
# Check for issues
npm run lint

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules && npm install

# Generate password hash (for new admin)
node scripts/hashPassword.js

# Create admin user
node scripts/createAdmin.js
```

---

## Future Enhancement Ideas

### High Priority

1. **SEO Improvements**
   - Add structured data (JSON-LD) for articles
   - Create XML sitemap for articles
   - Add Open Graph images for social sharing
   - Implement canonical URLs

2. **Performance Optimization**
   - Lazy load below-fold images
   - Implement image CDN (Cloudinary/ImageKit)
   - Add service worker for offline support
   - Optimize font loading

3. **Content Management**
   - Add article scheduling (publish later)
   - Article preview links (shareable drafts)
   - Bulk article operations
   - Article revision history

### Medium Priority

4. **User Engagement**
   - Newsletter signup integration
   - Social sharing buttons on articles
   - Related articles suggestions
   - Popular articles widget

5. **Analytics & Insights**
   - Admin dashboard analytics charts
   - Article performance reports
   - Contact form submission analytics
   - User engagement tracking

6. **Gallery Enhancements**
   - Drag-and-drop image ordering
   - Bulk image upload
   - Image cropping tool
   - Lightbox gallery viewer

### Nice to Have

7. **Booking System**
   - Online booking calendar
   - Quote request form
   - Automated quote emails
   - Booking confirmation system

8. **Testimonials Management**
   - Admin panel for testimonials
   - Google Reviews integration
   - Customer submission form
   - Star rating display

9. **Multi-Language Support**
   - i18n framework setup
   - Language switcher
   - Translated content management

10. **Advanced Features**
    - A/B testing for CTAs
    - Live chat widget
    - Event portfolio pages
    - Video testimonials section

### Technical Improvements

11. **Developer Experience**
    - Add unit tests (Jest)
    - Add E2E tests (Playwright)
    - Set up CI/CD pipeline
    - Add Storybook for components

12. **Security Hardening**
    - Two-factor authentication for admin
    - Session management
    - Audit logging
    - CAPTCHA on contact form

13. **Infrastructure**
    - Redis for session storage
    - CDN for static assets
    - Error monitoring (Sentry)
    - Uptime monitoring

---

## Quick Reference Card

### Update Contact Info
`/constants/contact.ts`

### Update Navigation
`/constants/index.ts`

### Update Statistics
`/constants/siteConfig.ts`

### Update Gallery Images
Admin panel or `/constants/siteConfig.ts`

### Update Brand Colors
`/constants/brandStyles.ts`

### Replace Logo
`/public/mybartenders.co.uk_logo_*.{svg,png}`

### Add New Page
Create file in `/pages/`

### Add New Component
Create file in `/components/`

---

*Last Updated: January 2026*

*This guide should be updated whenever significant changes are made to the website structure or functionality.*
