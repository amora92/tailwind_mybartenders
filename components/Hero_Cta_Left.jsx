import React from 'react'
import Image from 'next/image'

const HeroCtaLeft = () => {
  return (
    <section
      id='next-section'
      className='relative overflow-hidden bg-gradient-to-b from-lime-50 via-transparent to-transparent pb-12 pt-10 sm:pb-16 lg:pb-24'
    >
      {/* Remove or optimize large SVG if possible */}
      <div className='relative z-10 mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
            Mobile Bar Hire, Themed Menu's, Cocktail Bartending Masterclass
          </h2>
          <div className='mt-5'>
            <h2 className='mt-4 text-lg font-semibold leading-8 text-center text-gray-600'>
              Looking to elevate your next event with custom made, finest
              cocktails?
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
            <div className='flex flex-col items-center'>
              <Image
                src='/party.jpg'
                alt='Cocktail event'
                width={150}
                height={150}
                className='rounded-full shadow-md'
              />
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                Providing Mixology Services Since 2008
              </h3>
              <p className='text-gray-600'>Award winning since 2011</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='/cocktails.svg'
                alt='Bartender'
                width={150}
                height={150}
                className='rounded-full shadow-md'
              />
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                500+ Signature Cocktails
              </h3>
              <p className='text-gray-600'>Customised to your liking</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='/happy.svg'
                alt='Happy clients'
                width={150}
                height={150}
                className='rounded-full shadow-md'
              />
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                Stress Free, All In One Service
              </h3>
              <p className='text-gray-600'>All we need is a time and a place</p>
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
              className='isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              href='contact_us'
            >
              Contact Us
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
            <p className='text-sm text-gray-500'>
              Got questions?{' '}
              <a href='#faq' className='text-blue-500 underline'>
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
