// app/layout.tsx (server component)

import { inter } from './fonts'
import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from './GoogleAnalytics' // we'll create this next

export const metadata: Metadata = {
  title: '✨ Luxury Mobile Bar Hire Northampton | Weddings & Events',
  description:
    '🚀 Award-winning mobile bar hire & cocktail service in Northampton. Expert mixologists, premium drinks & stress-free events. Book now!'
  // ... rest of your metadata
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} font-sans`}>
      <head />
      <body suppressHydrationWarning className={inter.className}>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
        <GoogleAnalytics /> {/* client side consent & GA loader */}
      </body>
    </html>
  )
}
