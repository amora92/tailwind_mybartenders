import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'
import '../app/globals.css'
import Masonry_Grid from '@/components/Masonry_Grid'

// Import the Inter font
const inter = Inter({ subsets: ['latin'] })

const Gallery = () => {
  return (
    <div className={inter.className}>
      <Navbar />
      <main className='relative overflow-hidden'>
        <section className='container mx-auto px-6 lg:px-20 py-12'>
          <h1 className='text-4xl font-bold mb-8 text-center'>Gallery</h1>

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
          <Masonry_Grid />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery
