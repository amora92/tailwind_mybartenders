import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hire Mobile Bartenders Northampton, National, Mixologist, Wedding',
  description:
    'Hire mobile bartenders and bars for weddings or events in Northampton or nationwide? Our mixologists are skilled in the art of mixology and ready to serve your guests with style.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-F9CJ3VRL5N' />
    </html>
  )
}
