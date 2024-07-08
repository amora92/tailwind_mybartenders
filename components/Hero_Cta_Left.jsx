import React from 'react'

const HeroCtaLeft = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-lime-50 via-transparent to-transparent pb-12 pt-10 sm:pb-16 lg:pb-24'>
      {/* Remove or optimize large SVG if possible */}
      <div className='relative z-10 mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
            Cocktail bartender hire, mobile bar, weddings, parties,
            masterclasses:
          </h1>
          <div className='mt-2 text-4xl font-bold text-lime-500 sm:text-6xl'>
            Free Quote.
          </div>
          <h2 className='mt-4 text-lg font-semibold leading-8 text-gray-600'>
            Looking to elevate your next event with top-notch bartending
            services? Our professional cocktail bartenders are perfect for
            weddings, parties, and special occasions. We offer a fully equipped
            mobile bar and engaging masterclasses to add a touch of class and
            fun to your gathering. Whether you need a bartender for a private
            event or a complete bar setup, we tailor our services to meet your
            specific needs.
          </h2>
          <ul className='mt-4 list-disc list-inside text-left text-gray-600'>
            <li>
              Professional Bartenders: Expertly trained mixologists to craft and
              serve signature cocktails.
            </li>
            <li>
              Customizable Drink Menus: Personalized drink options tailored to
              your event theme and preferences.
            </li>
            <li>
              Fully Equipped Mobile Bar: Portable bar setup including all
              necessary tools and ingredients.
            </li>
          </ul>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              className='isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-main_buttons_1 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              href='/contact_us'
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCtaLeft
