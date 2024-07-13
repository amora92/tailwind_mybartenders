// pages/gallery.js

import Head from 'next/head'
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
      <Head>
        <title>
          Mobile Bar Hire Gallery | Cocktail Events & Bartending Services
        </title>
        <meta
          name='description'
          content='Explore our stunning gallery showcasing mobile bar hire, cocktail events, and professional bartending services in the UK.'
        />
      </Head>

      <Navbar />
      <main className='relative overflow-hidden'>
        <section className='container mx-auto px-6 lg:px-20 py-12'>
          <h1 className='text-4xl font-bold mb-8 text-center'>Gallery</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
            {/* Gallery Items */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0027.webp'
                alt='Parisian Absinthe Fountain'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>

            {/* Repeat for other items... */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0048.webp'
                alt='White Russian Cocktail Layered'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
                width={400}
                height={300}
              />
            </div>
            {/* Add other gallery items here... */}
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
