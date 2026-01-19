/**
 * MyBartenders Brand Style Guide
 * ================================
 * This file contains all brand-related design tokens and styles
 * to ensure consistency across the entire website.
 */

// ===========================================
// COLOR PALETTE
// ===========================================

export const BRAND_COLORS = {
  // Primary Brand Colors
  primary: {
    pink: '#EC4899',      // pink-500
    rose: '#F43F5E',      // rose-500
    amber: '#F59E0B',     // amber-500
  },

  // Gradient Combinations
  gradients: {
    primary: 'from-pink-500 via-rose-500 to-pink-600',
    primaryHover: 'from-pink-600 via-rose-600 to-pink-700',
    accent: 'from-pink-400 via-rose-400 to-amber-400',
    text: 'from-pink-400 to-amber-400',
    subtle: 'from-pink-500/20 to-amber-500/20',
  },

  // Background Colors
  backgrounds: {
    dark: 'bg-gray-950',
    darkAlt: 'bg-gray-900',
    light: 'bg-white',
    lightAlt: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white via-pink-50/30 to-white',
    darkGradient: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black',
  },

  // Overlay Colors
  overlays: {
    dark: 'from-gray-900/95 via-gray-900/90 to-gray-900/80',
    light: 'from-black/70 via-black/20 to-transparent',
  },

  // Text Colors
  text: {
    primary: 'text-white',
    secondary: 'text-gray-400',
    muted: 'text-white/70',
    dark: 'text-gray-900',
    darkSecondary: 'text-gray-600',
    accent: 'text-pink-500',
    accentLight: 'text-pink-400',
  },
} as const

// ===========================================
// TYPOGRAPHY
// ===========================================

export const TYPOGRAPHY = {
  // Heading Sizes
  heading: {
    hero: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    section: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    subsection: 'text-3xl lg:text-4xl font-bold',
    card: 'text-2xl font-semibold',
    small: 'text-xl font-semibold',
  },

  // Body Text
  body: {
    large: 'text-xl',
    default: 'text-lg',
    small: 'text-base',
  },

  // Special Text
  special: {
    badge: 'text-sm font-medium',
    label: 'text-sm font-medium',
    caption: 'text-xs',
  },
} as const

// ===========================================
// COMPONENT STYLES
// ===========================================

export const COMPONENT_STYLES = {
  // Buttons
  buttons: {
    primary: 'inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all',
    secondary: 'inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all',
    light: 'inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors',
    outline: 'inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors',
  },

  // Cards
  cards: {
    dark: 'bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm',
    light: 'bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow',
    glass: 'bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20',
  },

  // Badges
  badges: {
    dark: 'inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20',
    light: 'inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full',
    outline: 'inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full',
  },

  // Sections
  sections: {
    dark: 'relative py-24 lg:py-32 bg-gray-950 overflow-hidden',
    light: 'relative py-24 lg:py-32 bg-white overflow-hidden',
    gradient: 'relative py-24 lg:py-32 bg-gradient-to-b from-white via-pink-50/30 to-white overflow-hidden',
  },

  // Containers
  containers: {
    default: 'container mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto',
    wide: 'max-w-7xl mx-auto',
  },
} as const

// ===========================================
// ANIMATIONS (Framer Motion)
// ===========================================

export const ANIMATIONS = {
  // Fade In Up
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },

  // Fade In
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },

  // Scale In
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  },

  // Stagger Children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // Viewport settings
  viewport: {
    once: true,
    margin: '-100px',
  },
} as const

// ===========================================
// DECORATIVE ELEMENTS
// ===========================================

export const DECORATIVE = {
  // Blur Blobs
  blobs: {
    pink: 'absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl',
    amber: 'absolute w-64 h-64 bg-amber-500/20 rounded-full blur-3xl',
    purple: 'absolute w-64 h-64 bg-purple-500/5 rounded-full blur-3xl',
    large: 'absolute w-96 h-96 bg-pink-500/5 rounded-full blur-3xl',
  },

  // Corner Accents
  corners: {
    topRight: 'absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg',
    bottomLeft: 'absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg',
  },
} as const

// ===========================================
// IMAGE STYLES
// ===========================================

export const IMAGE_STYLES = {
  // Gallery Images
  gallery: {
    container: 'relative overflow-hidden rounded-2xl group cursor-pointer',
    image: 'object-cover transition-transform duration-700 group-hover:scale-110',
    overlay: 'absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  },

  // Card Images
  card: {
    container: 'relative aspect-[4/3] rounded-2xl overflow-hidden',
    image: 'object-cover',
  },
} as const

// ===========================================
// SEO DEFAULTS
// ===========================================

export const SEO_DEFAULTS = {
  siteName: 'MyBartenders',
  siteUrl: 'https://www.mybartenders.co.uk',
  defaultTitle: 'Premium Mobile Bar Hire | MyBartenders',
  defaultDescription: 'Premium mobile bar hire services in Northampton and across the UK. Professional bartenders for weddings, corporate events, and private parties.',
  keywords: [
    'mobile bar hire',
    'cocktail bar hire',
    'wedding bar hire',
    'corporate event bar',
    'bartender hire',
    'Northampton',
    'UK',
    'mixology',
    'cocktail service',
  ],
  social: {
    twitter: '@mybartenders',
    instagram: '@mybartenders',
  },
} as const

// ===========================================
// HELPER FUNCTIONS
// ===========================================

/**
 * Generate gradient text classes
 */
export const gradientText = (gradient: string = BRAND_COLORS.gradients.text) =>
  `text-transparent bg-clip-text bg-gradient-to-r ${gradient}`

/**
 * Generate stagger delay for animations
 */
export const staggerDelay = (index: number, baseDelay: number = 0.1) =>
  index * baseDelay

/**
 * Combine section header classes
 */
export const sectionHeader = {
  wrapper: 'text-center mb-16 lg:mb-20',
  badge: COMPONENT_STYLES.badges.outline,
  title: `${TYPOGRAPHY.heading.section} text-white mb-6`,
  description: `${TYPOGRAPHY.body.large} text-gray-400 max-w-2xl mx-auto`,
}
