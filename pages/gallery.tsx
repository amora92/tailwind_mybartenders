import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'
import '../app/globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Gallery = () => {
  return (
    <div className={inter.className}>
      <Head>
        <title>
          Luxury Mobile Bar Gallery | Premium Cocktail Events in Northampton &
          UK
        </title>
        <meta
          name='description'
          content='Explore our premium mobile bar gallery showcasing bespoke cocktail creations, professional mixology services, and exceptional event experiences across Northampton and the UK. View our stunning portfolio of corporate events, weddings, and private celebrations.'
        />
        <meta
          name='keywords'
          content='mobile bar hire, cocktail gallery, event bartending, mixology services, Northampton bars, UK events, luxury drinks, corporate events, wedding bar service, cocktail masterclass'
        />
        <link rel='canonical' href='https://www.mybartenders.co.uk/gallery' />
      </Head>

      <Navbar />
      <main className='relative overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white'>
        <section className='container mx-auto px-6 lg:px-20 py-16 mt-16'>
          <div className='max-w-4xl mx-auto mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 text-center'>
              Exceptional <span className='text-pink-500'>Mobile Bar</span>{' '}
              Experiences
            </h1>
            <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
              Crafting Memorable Moments Through Premium Mixology
            </h2>
            <div className='space-y-4 text-center text-gray-600'>
              <p className='text-lg'>
                Welcome to our curated gallery of premium mobile bar
                experiences. Each image showcases our commitment to excellence
                in mixology and event service across Northampton and the UK.
              </p>
              <p className='text-lg'>
                From sophisticated corporate gatherings to intimate
                celebrations, discover how we transform events with our{' '}
                <span className='text-pink-500'>
                  professional bartending services
                </span>
                , stunning cocktail presentations, and bespoke drink
                experiences.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {/* Gallery Item 1 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/IMG-20240224-WA0027.webp'
                  alt='Luxury Parisian Absinthe Fountain Service - Premium Mobile Bar Events'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/IMG-20240224-WA0048.webp'
                  alt='Signature White Russian Cocktail - Professional Mixology Services'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/IMG-20240224-WA0053.webp'
                  alt='Artisanal White Russian with Layered Cream - Luxury Cocktail Creation'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/IMG-20240224-WA0056.webp'
                  alt='Signature Cinnamon White Russian - Bespoke Cocktail Experience'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/IMG_20220323_122115_003.webp'
                  alt='Stolichnaya Vodka, Belvedere Vodka, Au Vodka, Absinthe Fountain, Premium Vodka Selection'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/fire.webp'
                  alt='Firebreathing Bartender, Flair Bartending, Entertainment Services'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 7 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/FB_IMG_1563583948109.jpg'
                  alt='Creamy, Nightcap Cocktail, Bourbon, Cherries, Fruit'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 8 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/2014.jpg'
                  alt='Louis XIII Cognac, Martini Glass, Mixologist'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 9 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/201111.jpg'
                  alt='Professional Mobile Bar Setup - SuperCar Fest Event Service'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 10 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/picture1.jpg'
                  alt='Luxury Outdoor Bar Service - Corporate Event Excellence'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 11 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/55555.jpg'
                  alt='Bespoke Cocktail Creation - Premium Mobile Bar Experience'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Gallery Item 12 */}
            <div className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                <img
                  src='/aaaa.jpg'
                  alt='Professional Event Bartending - Luxury Mobile Bar Service'
                  className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Added SEO-rich content section */}
          <div className='max-w-4xl mx-auto mt-16 p-8 bg-white/50 rounded-xl border border-pink-100'>
            <div className='space-y-6 text-gray-700'>
              <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                Professional{' '}
                <span className='text-pink-500'>Mobile Bar Services</span> for
                Every Occasion
              </h3>
              <p>
                Our gallery showcases the versatility and excellence of our
                mobile bar services, featuring highlights from prestigious
                events across Northampton and surrounding areas. From our
                signature cocktail creations to our professional bartending
                team, each image represents our commitment to delivering
                exceptional experiences.
              </p>
              <h4 className='text-xl font-semibold text-gray-900 mt-6 mb-3'>
                Featured Services Include:
              </h4>
              <ul className='grid md:grid-cols-2 gap-4 list-none'>
                <li className='flex items-center space-x-2'>
                  <span className='text-pink-500'>•</span>
                  <span>Corporate Event Bar Services</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='text-pink-500'>•</span>
                  <span>Wedding Reception Bars</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='text-pink-500'>•</span>
                  <span>Luxury Private Celebrations</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='text-pink-500'>•</span>
                  <span>Mixology Masterclasses</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery
