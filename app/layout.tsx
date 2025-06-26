// app/layout.tsx
import { inter } from './fonts'
import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '✨ Luxury Mobile Bar Hire Northampton | Weddings & Events',
  description:
    '🚀 Award-winning portable bar hire & cocktail service in Northampton. Expert mixologists, premium drinks & stress-free events. Book now!',
  keywords: [
    'mobile bar hire northampton',
    'portable bar hire',
    'wedding cocktail service northampton',
    'private bartenders northampton',
    'event mixologists',
    'luxury mobile bar hire'
  ],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    url: 'https://mybartenders.co.uk',
    title: '✨ Luxury Mobile Bar Hire Northampton | Weddings & Events',
    description:
      'Award-winning portable bar hire & cocktail service in Northampton. Expert mixologists for weddings & corporate events.',
    siteName: 'MyBartenders',
    images: [
      {
        url: 'https://mybartenders.co.uk/_next/image?url=%2FIMG-20240224-WA0053.webp&w=1200&q=75',
        width: 1200,
        height: 630,
        alt: 'MyBartenders luxury mobile bar service in Northampton'
      }
    ],
    locale: 'en_GB'
  },
  twitter: {
    card: 'summary_large_image',
    title: '✨ Luxury Mobile Bar Hire Northampton | Weddings & Events',
    description:
      'Award-winning portable bar hire & cocktail service in Northampton. Expert mixologists for weddings & corporate events.',
    images: [
      'https://mybartenders.co.uk/_next/image?url=%2FIMG-20240224-WA0053.webp&w=1200&q=75'
    ]
  },
  alternates: {
    canonical: 'https://mybartenders.co.uk'
  }
}

const GA_TRACKING_ID = 'G-ZBM8HLM8DZ'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} font-sans`}>
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `
          }}
        />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
