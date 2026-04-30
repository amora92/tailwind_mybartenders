// app/layout.tsx (server component)

import { inter } from './fonts'
import './globals.css'
import { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'

const GoogleAnalytics = dynamic(() => import('./GoogleAnalytics'), {
  ssr: false
})

const CookieConsent = dynamic(() => import('@/components/CookieConsent'), {
  ssr: false
})

export const viewport: Viewport = {
  themeColor: '#EC4899',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover'
}

export const metadata: Metadata = {
  title: 'Private Bartender Hire & Mobile Cocktail Bar | MyBartenders',
  description:
    'Private bartender hire, mixologist hire and mobile cocktail bar services for weddings, private parties and corporate events in Northampton and across the UK.',
  keywords: ['private bartender hire', 'mixologist hire', 'mobile cocktail bar', 'wedding bar hire', 'private party bartender', 'corporate event bartender', 'Northampton'],
  authors: [{ name: 'MyBartenders' }],
  creator: 'MyBartenders',
  publisher: 'MyBartenders',
  metadataBase: new URL('https://mybartenders.co.uk'),
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MyBartenders'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/branding/logo-icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/branding/logo-icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/branding/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mybartenders.co.uk',
    siteName: 'MyBartenders',
    title: 'Private Bartender Hire & Mobile Cocktail Bar | MyBartenders',
    description: 'Private bartender hire, mixologist hire and mobile cocktail bar services for weddings, private parties and corporate events.',
    images: [
      {
        url: '/corporate.jpg',
        width: 1200,
        height: 630,
        alt: 'MyBartenders - Mobile Bar Hire Northampton'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Bartender Hire & Mobile Cocktail Bar | MyBartenders',
    description: 'Private bartender hire, mixologist hire and mobile cocktail bar services for weddings, private parties and corporate events.',
    images: ['/corporate.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

// JSON-LD structured data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MyBartenders',
  description: 'Private bartender hire, mixologist hire and mobile cocktail bar services for weddings, private parties and corporate events.',
  url: 'https://mybartenders.co.uk',
  logo: 'https://mybartenders.co.uk/branding/logo-icon-512.png',
  image: 'https://mybartenders.co.uk/corporate.jpg',
  telephone: '+447482612532',
  email: 'contact@mybartenders.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Northampton',
    addressRegion: 'Northamptonshire',
    addressCountry: 'GB'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.2405,
    longitude: -0.9027
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 52.2405,
      longitude: -0.9027
    },
    geoRadius: '50000'
  },
  priceRange: 'GBP',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '23:00'
  },
  sameAs: [
    'https://www.facebook.com/mybartenders',
    'https://www.instagram.com/mybartenders'
  ]
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en-GB' className={`${inter.variable} font-sans`}>
      <head>
        {/* Structured data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        {children}
        <GoogleAnalytics />
        <CookieConsent />
      </body>
    </html>
  )
}
