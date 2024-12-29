import React from 'react'
import Image from 'next/image'

const HeroCtaLeft = () => {
  return (
    <section
      id='next-section'
      className='relative overflow-hidden bg-gradient-to-b from-pink-50/40 via-white to-white pb-12 pt-10 sm:pb-16 lg:pb-24 min-h-[800px] flex items-center'
    >
      {/* Remove or optimize large SVG if possible */}
      <div className='relative z-10 mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
            Professional <span className='text-pink-500'>Mobile Bar</span>{' '}
            Services & Expert <span className='text-pink-500'>Mixology</span>{' '}
            Classes in Northampton
          </h2>
          <div className='mt-5'>
            <h2 className='mt-4 text-lg font-semibold leading-8 text-center text-gray-600'>
              <span className='text-pink-500'>Transform</span> your event with
              premium cocktail experiences and professional bartending services
            </h2>
          </div>
          <div className='flex justify-center gap-10'>
            {/* Services List */}
            <ul className='space-y-4 text-left text-gray-500 dark:text-gray-400'>
              {/* List of items */}
              {/* Repeatable SVG & text */}
            </ul>
            <ul className='space-y-4 text-left text-gray-500 dark:text-gray-400'>
              {/* List of items */}
            </ul>
          </div>

          {/* New section to fill space */}
          <div className='mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-4 lg:grid-cols-3'>
            {/* Add some visually engaging cards */}
            <div className='flex flex-col items-center p-6 rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:bg-pink-50/50 border border-pink-100/50'>
              <div className='bg-pink-100/30 p-4 rounded-xl w-full flex justify-center mb-4'>
                <Image
                  src='/party.jpg'
                  alt='Professional mixology services'
                  width={150}
                  height={150}
                  className='rounded-xl shadow-md'
                />
              </div>
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                <span className='text-pink-500'>15+</span> Years of Excellence
              </h3>
              <p className='text-gray-600'>
                Northampton Premier Mobile Bar Service since 2008
              </p>
            </div>
            <div className='flex flex-col items-center p-6 rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:bg-pink-50/50 border border-pink-100/50'>
              <div className='bg-pink-100/30 p-4 rounded-xl w-full flex justify-center mb-4'>
                <Image
                  src='/cocktails.svg'
                  alt='Signature cocktail menu'
                  width={150}
                  height={150}
                  className='rounded-xl shadow-md'
                />
              </div>
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                <span className='text-pink-500'>Bespoke</span> Cocktail Menus
              </h3>
              <p className='text-gray-600'>
                Crafted to match your event's theme and preferences
              </p>
            </div>
            <div className='flex flex-col items-center p-6 rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:bg-pink-50/50 border border-pink-100/50'>
              <div className='bg-pink-100/30 p-4 rounded-xl w-full flex justify-center mb-4'>
                <Image
                  src='/happy.svg'
                  alt='Full-service mobile bar'
                  width={150}
                  height={150}
                  className='rounded-xl shadow-md'
                />
              </div>
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                <span className='text-pink-500'>Complete</span> Event Solutions
              </h3>
              <p className='text-gray-600'>
                From setup to service, we handle everything
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className='mt-8 bg-gradient-to-r from-pink-50/30 via-white to-pink-50/30 p-6 rounded-xl'>
            <h2 className='text-2xl font-semibold text-gray-900 dark:text-black'>
              About <span className='text-pink-500'>Us</span>
            </h2>
            <div className='mt-4 text-lg text-gray-600'>
              <p>
                We are a group of experienced mixologists who have been working
                in the industry for over 15 years. We don't actively advertise
                and rely on word of mouth to get our name out there.
              </p>

              {/* Add a testimonial */}
              {/* <blockquote className='mt-6 border-l-4 border-pink-300 pl-4 text-left bg-pink-50/30 p-4 rounded-r-lg'>
                <p className='italic text-gray-800'>
                  “mybartenders.co.uk brought our event to life with their
                  stunning setup and delicious drinks! Highly recommended.”
                </p>
                <footer className='mt-2 text-sm text-gray-600'>
                  - Alex, Event Organizer
                </footer>
              </blockquote> */}
            </div>
          </div>

          <div className=' mt-4 flex flex-col items-center gap-6'>
            <a
              className='group relative inline-flex items-center justify-center rounded-lg bg-pink-500 px-8 py-3 text-lg font-medium text-white transition-all duration-200 ease-in-out hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 shadow-sm hover:shadow-md'
              href='contact_us'
            >
              <span className='mr-3'>Contact Us</span>
              <svg
                className='w-6 h-6 transition-transform duration-200 ease-out group-hover:translate-x-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </a>
            <p className='text-sm text-gray-600'>
              Got questions?{' '}
              <a
                href='#faq'
                className='font-medium text-pink-500 hover:text-pink-600 transition-colors duration-200'
              >
                Read our FAQ
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className='absolute top-0 right-0 -translate-y-12 translate-x-12 transform opacity-20'>
        <div className='h-48 w-48 rounded-full bg-pink-100'></div>
      </div>
      <div className='absolute bottom-0 left-0 translate-y-12 -translate-x-12 transform opacity-20'>
        <div className='h-48 w-48 rounded-full bg-pink-100'></div>
      </div>
      <div className='absolute top-1/2 left-0 transform -translate-x-1/2 opacity-10'>
        <div className='h-96 w-96 rounded-full bg-pink-100'></div>
      </div>
    </section>
  )
}

export default HeroCtaLeft
