import React from 'react'
import Image from 'next/image'

const HeroCtaLeft = () => {
  return (
    <section
      id='next-section'
      className='relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pb-12 pt-10 sm:pb-16 lg:pb-24'
    >
      {/* Remove or optimize large SVG if possible */}
      <div className='relative z-10 mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
            Professional Mobile Bar Services & Expert Mixology Classes in London
          </h2>
          <div className='mt-5'>
            <h2 className='mt-4 text-lg font-semibold leading-8 text-center text-gray-600'>
              Transform your event with premium cocktail experiences and
              professional bartending services
            </h2>
          </div>
          <h2 className='mb-2 mt-5 text-lg font-semibold text-gray-900 dark:text-black'>
            We can help you with:
          </h2>
          <div className='flex justify-center gap-10 mt-5'>
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
          <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3'>
            {/* Add some visually engaging cards */}
            <div className='flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-md'>
              <Image
                src='/party.jpg'
                alt='Professional mixology services'
                width={150}
                height={150}
                className='rounded-full shadow-md'
              />
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                15+ Years of Excellence
              </h3>
              <p className='text-gray-600'>
                Northampton Premier Mobile Bar Service since 2008
              </p>
            </div>
            <div className='flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-md'>
              <Image
                src='/cocktails.svg'
                alt='Signature cocktail menu'
                width={150}
                height={150}
                className='rounded-full shadow-md'
              />
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                Bespoke Cocktail Menus
              </h3>
              <p className='text-gray-600'>
                Crafted to match your event's theme and preferences
              </p>
            </div>
            <div className='flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-md'>
              <Image
                src='/happy.svg'
                alt='Full-service mobile bar'
                width={150}
                height={150}
                className='rounded-full shadow-md'
              />
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                Complete Event Solutions
              </h3>
              <p className='text-gray-600'>
                From setup to service, we handle everything
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className='mt-8'>
            <h2 className='text-2xl font-semibold text-gray-900 dark:text-black'>
              Why Choose Us?
            </h2>
            <div className='mt-4 text-lg text-gray-600'>
              <p>
                {' '}
                Our mobile bar is the ultimate solution for any venue, big or
                small. Its sleek and versatile design ensures it fits seamlessly
                into any space, whether you're hosting a cozy backyard gathering
                or a grand event.
              </p>
              <br></br>
              <p>
                No need to stress about location or layout—we bring the bar to
                you, <strong>wherever</strong> you need it,
                <strong>whenever</strong> you need it. Our team is dedicated to
                making your event a success with personalized menus and
                innovative bar setups.
              </p>
              {/* Add a testimonial */}
              <blockquote className='mt-6 border-l-4 border-green-500 pl-4 text-left'>
                <p className='italic text-gray-800'>
                  “mybartenders.co.uk brought our event to life with their
                  stunning setup and delicious drinks! Highly recommended.”
                </p>
                <footer className='mt-2 text-sm text-gray-600'>
                  - Alex, Event Organizer
                </footer>
              </blockquote>
            </div>
          </div>

          <div className='mt-10 flex flex-col items-center gap-6'>
            <a
              className='group relative inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-lg font-medium text-white transition-all duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
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
                  strokeWidth={2.5}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </a>
            <p className='text-sm text-gray-600'>
              Got questions?{' '}
              <a
                href='#faq'
                className='font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200'
              >
                Read our FAQ
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCtaLeft
