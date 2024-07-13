import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Portable Bar Hire Northampton, Cocktails, Mixology, Weddings',
  description:
    'Hire mobile bartenders and bars for weddings or events in Northampton or nationwide? Our mixologists are skilled in the art of mixology and ready to serve your guests with style.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preload'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
          as='style'
        />
        <noscript>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
