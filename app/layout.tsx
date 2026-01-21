// app/layout.tsx (server component)

import { inter } from './fonts'
import './globals.css'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import GoogleAnalytics from './GoogleAnalytics'

const CookieConsent = dynamic(() => import('@/components/CookieConsent'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Luxury Mobile Bar Hire Northampton | Weddings & Events | MyBartenders',
  description:
    'Award-winning mobile bar hire and cocktail service in Northampton. Expert mixologists, premium drinks and stress-free events for weddings, parties and corporate functions. Book now!',
  keywords: ['mobile bar hire', 'cocktail bar', 'wedding bar', 'Northampton', 'event bar', 'mixologist', 'bartender hire'],
  authors: [{ name: 'MyBartenders' }],
  creator: 'MyBartenders',
  publisher: 'MyBartenders',
  metadataBase: new URL('https://mybartenders.co.uk'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mybartenders.co.uk',
    siteName: 'MyBartenders',
    title: 'Luxury Mobile Bar Hire Northampton | Weddings & Events',
    description: 'Award-winning mobile bar hire and cocktail service in Northampton. Expert mixologists, premium drinks and stress-free events for weddings, parties and corporate functions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MyBartenders - Mobile Bar Hire Northampton'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Mobile Bar Hire Northampton | MyBartenders',
    description: 'Award-winning mobile bar hire and cocktail service in Northampton. Expert mixologists for weddings, parties and events.',
    images: ['/og-image.jpg']
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
  description: 'Award-winning mobile bar hire and cocktail service in Northampton. Expert mixologists for weddings, parties and corporate events.',
  url: 'https://mybartenders.co.uk',
  logo: 'https://mybartenders.co.uk/mybartenders.co.uk_logo_svg.svg',
  image: 'https://mybartenders.co.uk/og-image.jpg',
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
  priceRange: '££',
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
    <html lang='en' className={`${inter.variable} font-sans`}>
      <head>
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
