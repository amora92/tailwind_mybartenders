import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'
import '../app/globals.css'
import Masonry_Grid from '@/components/Masonry_Grid'
import Head from 'next/head'

// Import the Inter font
const inter = Inter({ subsets: ['latin'] })

const Gallery = () => {
  return (
    <div className={inter.className}>
      <Head>
        <title>Mobile Bar Hire Gallery | Cocktail Events & Services</title>
        <meta
          name='description'
          content='Explore our stunning gallery showcasing mobile bar hire, cocktail events, and professional bartending services in the UK.'
        />
        <link rel='canonical' href='https://www.mybartenders.co.uk/gallery' />
      </Head>

      <Navbar />
      <main className='relative overflow-hidden'>
        <section className='container mx-auto px-6 lg:px-20 py-12'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h1 className='text-4xl font-bold mb-8 text-center mt-10 pt-3'>
              Gallery
            </h1>
            <h2 className='text-2xl font-semibold mb-6 text-center text-gray-700'>
              Discover Our Passion for Mixology and Event Excellence
            </h2>
            <p className='text-lg mb-12 text-center text-gray-600'>
              Browse through our gallery to see highlights from our past events,
              including custom cocktails, beautifully designed mobile bars, and
              our talented bartenders in action. Each image captures the essence
              of what makes MYBARTENDERS.CO.UK the premier choice for mobile bar
              hire and bartending services in the UK.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
            {/* Gallery Item 1 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0027.webp'
                alt='Parisian Absinthe Fountain'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>

            {/* Gallery Item 2 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0048.webp'
                alt='White Russian Cocktail Layered'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>

            {/* Gallery Item 3 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0053.webp'
                alt='White Russian Cocktail Layered Cream'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>

            {/* Gallery Item 4 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0056.webp'
                alt='White Russian Cocktail Layered Cream Cinnamon'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>

            {/* Gallery Item 5 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG_20220323_122115_003.webp'
                alt='Parisian Absinthe Fountain And Premium Vodka'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>

            {/* Gallery Item 6 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/fire.webp'
                alt='Firebreathing bartenders'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>

            {/* Gallery Item 7 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20220528_173621.webp'
                alt='Garden Cocktail Party SuperCar Fest 2022'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>

            {/* Gallery Item 8 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20220528_183404.webp'
                alt='Garden Cocktail Party SuperCar Fest 2022 Drivers Lounge Menu'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>

            {/* Gallery Item 9 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20220528_173609.webp'
                alt='Garden Cocktail Party SuperCar Fest 2022 Service'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className='mt-10'>
            <Masonry_Grid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery
