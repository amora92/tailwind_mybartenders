import React from 'react'
import Image from 'next/image'

const GridImageL = () => {
  return (
    <section className='bg-gradient-to-b from-white via-gray-50 to-white'>
      <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:order-last lg:h-full'>
            <Image
              alt='Professional Mixology Services'
              src='/fine_cocktail.webp'
              width={800}
              height={600}
              className='absolute inset-0 h-full w-full object-cover'
              priority
            />
          </div>

          <div className='lg:py-24'>
            <h2 className='text-4xl font-bold text-gray-900 sm:text-5xl'>
              Crafting Unforgettable Moments Through Expert Mixology
            </h2>

            <p className='mt-6 text-lg leading-relaxed text-gray-600'>
              Experience the artistry of cocktail craftsmanship at its finest.
              Our expert mixologists bring sophistication and creativity to
              every event, transforming ordinary gatherings into extraordinary
              celebrations.
            </p>

            <p className='mt-4 text-lg leading-relaxed text-gray-600'>
              From meticulously crafted signature drinks to stunning mobile bar
              setups, we ensure every detail contributes to an unforgettable
              experience. Let us elevate your next event with our premium
              cocktail service.
            </p>

            <div className='mt-8 flex flex-col sm:flex-row sm:gap-4'>
              <a
                href='contact_us'
                className='inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-lg font-medium text-white transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:w-auto'
              >
                Book Your Event
              </a>

              <a
                href='/gallery'
                className='mt-4 sm:mt-0 inline-flex items-center justify-center rounded-full border border-gray-200 px-8 py-3 text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:w-auto'
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GridImageL
