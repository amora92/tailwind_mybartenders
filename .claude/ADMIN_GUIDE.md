# MyBartenders Admin Guide (Private)

This document is for your eyes only. It won't be committed to GitHub.

---

## Quick Reference

### Running the Site

```bash
npm run dev      # Development server at localhost:3000
npm run build    # Production build
npm start        # Start production server
```

---

## Changing Images

All background and hero images are configured in one place:

📁 **File:** `constants/siteConfig.ts`

### Hero Video
```typescript
heroVideo: '/Branding_Video_2.compressed.mp4'
```
- Replace the video file in `/public/`
- Update the path in `siteConfig.ts`

### CTA Background Images
```typescript
ctaBackground: '/FB_IMG_1563583948109.jpg'          // Home page CTA
servicesCtaBackground: '/cocktail_foam.webp'         // Services page CTA
aboutHero: '/FB_IMG_1563583948109.jpg'               // About section
```

### Service Images
```typescript
services: {
  weddings: '/wedding.webp',
  corporate: '/corporate.webp',
  parties: '/party_cocktails.webp',
  masterclass: '/masterclass.webp',
}
```

### Gallery Images
Edit the `GALLERY_IMAGES` array in `siteConfig.ts`:
```typescript
{
  src: '/your-image.webp',      // Path to image in /public
  alt: 'Description',           // SEO description
  category: 'cocktails',        // cocktails | events | setup
  span?: 'md:col-span-2'        // Optional: make larger
}
```

---

## Automatic Values (No Changes Needed)

### Booking Year
The "Now Booking for [YEAR]" badges automatically show next year.
- Function: `getBookingYear()` in `siteConfig.ts`
- No manual updates needed!

### Copyright Year
The footer copyright automatically uses the current year.
- Function: `getCurrentYear()` in `siteConfig.ts`
- No manual updates needed!

---

## Updating Company Stats

📁 **File:** `constants/siteConfig.ts`

```typescript
export const COMPANY_STATS = {
  yearsExperience: '15+',      // Update as needed
  eventsServed: '500+',        // Update as you grow
  cocktailsMade: '50k+',       // Update periodically
  googleRating: '5.0',         // Keep updated
  clientSatisfaction: '100%',
}
```

---

## Trust Indicators

These appear in CTA sections across the site:

📁 **File:** `constants/siteConfig.ts`

```typescript
export const TRUST_INDICATORS = [
  'Free Consultation',
  'No Hidden Fees',
  'Customized Packages',
  'UK Nationwide',
]
```

---

## Contact Information

📁 **File:** `constants/contact.ts`

Update phone, email, and address here. Changes apply site-wide.

### BCC Email for Contact Form
To receive a copy of all contact form submissions at an additional email:

**Option 1: Via Constants**
```typescript
// In constants/contact.ts
bccEmail: 'your-backup@email.com'  // Set to '' to disable
```

**Option 2: Via Environment Variable**
```
CONTACT_FORM_BCC=your-backup@email.com
```
Environment variable takes priority over the constant.

---

## SEO Defaults

📁 **File:** `constants/brandStyles.ts`

Contains default SEO values used across pages:
- Site name
- Site URL
- Default descriptions
- Keywords

---

## Environment Variables

⚠️ **NEVER commit these files:**
- `.env`
- `.env.local`
- `.env.production`

Required variables (see `.env.example`):
```
JWT_SECRET=your-secret-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=bcrypt-hash
MONGODB_URI=mongodb-connection-string
MONGODB_DB=database-name
RESEND_API_KEY=email-api-key
NEXT_PUBLIC_TINYMCE_API_KEY=editor-key
```

---

## File Structure Quick Reference

```
/public/                    # All images and videos go here
/constants/
  ├── siteConfig.ts         # Images, stats, booking year
  ├── brandStyles.ts        # Colors, typography, SEO
  ├── contact.ts            # Contact information
  └── index.ts              # Navigation links, socials
/components/
  ├── Navbar.tsx            # Site navigation
  ├── Footer.tsx            # Site footer
  ├── VideoSection/         # Home page hero
  ├── AboutSection.tsx      # About section
  ├── ServicesSection.tsx   # Services preview
  └── FinalCtaSection.tsx   # CTA sections
/pages/
  ├── services.tsx          # Services page
  ├── gallery.tsx           # Gallery page
  └── contact_us.tsx        # Contact page
```

---

## Adding New Images to Gallery

### Option 1: Admin Panel (Recommended)
1. Go to `/admin/gallery`
2. Upload images directly or add by URL
3. Set category and description
4. Images appear on gallery page immediately

### Option 2: Config File
1. Add image to `/public/` folder (prefer .webp format)
2. Open `constants/siteConfig.ts`
3. Add to `GALLERY_IMAGES` array:
   ```typescript
   {
     src: '/new-image.webp',
     alt: 'Descriptive alt text for SEO',
     category: 'cocktails',  // or 'events' or 'setup'
   }
   ```
4. Save and the gallery updates automatically

---

## Article Management

### Creating Articles
1. Go to `/admin` dashboard
2. Click "New Article"
3. Fill in title, description, and content sections

### Article Drafts
- Toggle "Draft" status to save without publishing
- Drafts are visible only in admin, not on public site
- Dashboard shows draft/published count separately

### Article Content Sections
Available section types:
- **Text**: Rich text content
- **Image**: Single image with caption
- **Gallery**: Multiple images in a grid layout (new!)
- **Video**: YouTube embed
- **Quote**: Styled blockquote
- **Code**: Code block with syntax highlighting
- **CTA**: Call-to-action button

### Adding a Gallery Section
1. In article editor, click "+ Gallery"
2. Upload images or add by URL
3. Add captions to each image
4. Optional: Add gallery title
5. Images display in a responsive grid on the article page

---

## Common Tasks

### Change the hero video
1. Add new video to `/public/`
2. Update `heroVideo` in `siteConfig.ts`

### Add a new service
1. Add service data in `/pages/services.tsx`
2. Add corresponding image to `/public/`
3. Update `SITE_IMAGES.services` in `siteConfig.ts`

### Update navigation links
1. Edit `/constants/index.ts`
2. Update `NAV_LINKS` array

### Update social media links
1. Edit `/components/Footer.tsx`
2. Update `socialLinks` array

---

## Admin Dashboard Overview

### Dashboard Stats
- **Total Articles**: All articles including drafts
- **Published/Draft Count**: Track content pipeline
- **Total Views**: Aggregate view count across all articles
- **Top Categories**: See which categories perform best

### Quick Actions
- View recent articles
- See top performing articles by views
- Quick search through all articles
- One-click edit/delete

---

## Gallery Management (`/admin/gallery`)

### Features
- **Upload from local files**: Click or drag & drop
- **Add by URL**: Paste external image URLs
- **Category assignment**: Cocktails, Events, or Setup
- **Size options**: Normal, Wide, or Featured (large)
- **Quick delete**: Remove images with one click

### Image Requirements
- Max size: 10MB
- Formats: PNG, JPG, WEBP
- Recommended: Use .webp for better performance

---

## Cookie Consent

The site uses a GDPR-compliant cookie consent banner:
- **Necessary**: Always active (cannot be disabled)
- **Analytics**: Google Analytics tracking
- **Marketing**: Reserved for future use

Users can manage their preferences at any time.

---

## Performance Tips

### For Better Page Speed
1. Use .webp format for images
2. Keep images under 500KB when possible
3. Video should be compressed (MP4, <10MB)

### Current Optimizations
- Lazy loading for below-fold content
- Image optimization via Next.js
- Video poster image for faster initial paint
- Preload hints for critical resources

---

## Security Notes

✅ `.env` files are in `.gitignore` - they won't be committed
✅ Admin credentials use bcrypt hashing
✅ JWT tokens for authentication
✅ HTTP-only cookies for security

Never share your `.env` file contents with anyone!

---

## Troubleshooting

### Video not playing
- Check video format (MP4 recommended)
- Verify file path in `siteConfig.ts`
- Mobile browsers may require user interaction

### Images not showing
- Verify file exists in `/public/`
- Check file path matches exactly (case-sensitive)
- For remote images, check `next.config.js` allowed domains

### Admin login issues
- Clear browser cookies
- Check JWT_SECRET is set
- Verify password hash is correct

---

Last updated: January 2026
