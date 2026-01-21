/**
 * Site Configuration
 * ==================
 * Central configuration for easy management of site-wide settings.
 *
 * HOW TO UPDATE:
 * - Booking year: Automatically uses next year, no changes needed
 * - Images: Update the paths below to swap hero/background images
 * - Contact info: Update in constants/contact.ts
 * - Social links: Update in constants/index.ts (SOCIALS)
 */

// ===========================================
// DYNAMIC YEAR CALCULATION
// ===========================================

/**
 * Returns the booking year (always next year from current date)
 * This ensures "Now Booking for [YEAR]" is always accurate
 */
export const getBookingYear = (): number => {
  return new Date().getFullYear() + 1
}

/**
 * Returns the current year for copyright notices
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

// ===========================================
// HERO & BACKGROUND IMAGES
// ===========================================

/**
 * Background images used across the site
 * To change an image, update the path here
 * Images should be placed in the /public folder
 */
export const SITE_IMAGES = {
  // Home page video background
  heroVideo: '/Branding_Video_2.compressed.mp4',

  // CTA section backgrounds
  ctaBackground: '/FB_IMG_1563583948109.jpg',
  servicesCtaBackground: '/cocktail_foam.webp',

  // About section
  aboutHero: '/FB_IMG_1563583948109.jpg',

  // Service images
  services: {
    weddings: '/wedding.webp',
    corporate: '/corporate.webp',
    parties: '/party_cocktails.webp',
    masterclass: '/masterclass.webp',
  },

  // Gallery preview (home page)
  galleryPreview: [
    '/wedding.webp',
    '/FB_IMG_1563583948109.jpg',
    '/party_cocktails.webp',
    '/corporate.webp',
    '/masterclass.webp',
    '/cocktail_foam.webp',
  ],
} as const

// ===========================================
// GALLERY IMAGES
// ===========================================

/**
 * Gallery page images
 * Add/remove images here to update the gallery
 *
 * Format:
 * {
 *   src: '/filename.webp',        // Path to image in /public
 *   alt: 'Description',           // SEO-friendly description
 *   category: 'cocktails',        // cocktails | events | setup
 *   span?: 'md:col-span-2'        // Optional: make image larger
 * }
 */
export const GALLERY_IMAGES = [
  {
    src: '/IMG-20240224-WA0027.webp',
    alt: 'Luxury Parisian Absinthe Fountain Service',
    category: 'cocktails' as const,
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    src: '/IMG-20240224-WA0048.webp',
    alt: 'Signature White Russian Cocktail',
    category: 'cocktails' as const
  },
  {
    src: '/IMG-20240224-WA0053.webp',
    alt: 'Artisanal White Russian with Layered Cream',
    category: 'cocktails' as const
  },
  {
    src: '/fire.webp',
    alt: 'Fire Breathing Bartender Entertainment',
    category: 'events' as const
  },
  {
    src: '/IMG-20240224-WA0056.webp',
    alt: 'Signature Cinnamon White Russian',
    category: 'cocktails' as const
  },
  {
    src: '/IMG_20220323_122115_003.webp',
    alt: 'Premium Vodka Selection Display',
    category: 'setup' as const
  },
  {
    src: '/cocktail_foam.webp',
    alt: 'Artisan Cocktail with Foam Garnish',
    category: 'cocktails' as const,
    span: 'md:col-span-2'
  },
  {
    src: '/2014.jpg',
    alt: 'Louis XIII Cognac Service',
    category: 'cocktails' as const
  },
  {
    src: '/201111.jpg',
    alt: 'Professional Mobile Bar Setup',
    category: 'setup' as const
  },
  {
    src: '/picture1.jpg',
    alt: 'Luxury Outdoor Bar Service',
    category: 'events' as const
  },
  {
    src: '/55555.jpg',
    alt: 'Bespoke Cocktail Creation',
    category: 'cocktails' as const
  },
  {
    src: '/aaaa.jpg',
    alt: 'Professional Event Bartending',
    category: 'events' as const
  },
  // Additional images to fill the grid
  {
    src: '/cocktail_purple.webp',
    alt: 'Vibrant Purple Signature Cocktail',
    category: 'cocktails' as const
  },
  {
    src: '/cocktail_red_fine.webp',
    alt: 'Elegant Red Berry Cocktail',
    category: 'cocktails' as const
  },
  {
    src: '/closeup.webp',
    alt: 'Cocktail Craftsmanship Close-up',
    category: 'cocktails' as const
  },
  {
    src: '/birthday.webp',
    alt: 'Birthday Celebration Bar Service',
    category: 'events' as const
  },
]

// ===========================================
// COMPANY STATS
// ===========================================

/**
 * Statistics displayed on the site
 * Update these as your business grows
 */
export const COMPANY_STATS = {
  yearsExperience: '15+',
  eventsServed: '500+',
  cocktailsMade: '50k+',
  googleRating: '5.0',
  clientSatisfaction: '100%',
} as const

// ===========================================
// TRUST INDICATORS
// ===========================================

/**
 * Trust badges shown in CTA sections
 * These are factual statements about your service
 */
export const TRUST_INDICATORS = [
  'Free Consultation',
  'No Hidden Fees',
  'Customized Packages',
  'UK Nationwide',
] as const

// ===========================================
// SERVICE FEATURES
// ===========================================

/**
 * Features that can be offered (optional extras noted)
 * Use these consistently across the site
 */
export const SERVICE_FEATURES = {
  standard: [
    'Professional bartending service',
    'Quality spirits and mixers',
    'Custom cocktail menus',
    'Full bar setup and breakdown',
    'All glassware included',
  ],
  optional: [
    'DBS checked staff (available on request)',
    'Public liability insurance (available)',
    'Extended hours coverage',
    'Premium spirits upgrade',
    'Champagne tower service',
  ],
} as const
