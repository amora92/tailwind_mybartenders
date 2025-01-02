import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata, Viewport } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Configure font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: 'Portable Bar Hire Northampton, Cocktails, Mixology, Weddings',
  description:
    'Private hire bartenders and bars for weddings or events in Northampton or nationwide? Our mixologists are skilled in the art of mixology and ready to serve your guests with style.'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={inter.className}>
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
