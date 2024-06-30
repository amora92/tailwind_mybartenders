import React from 'react'

const Hero_Cta_Left = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-lime-50 via-transparent to-transparent pb-12 pt-10 sm:pb-16 lg:pb-24'>
      <div className='relative z-10'>
        <div className='absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]'>
          <svg
            className='h-[60rem] w-[100rem] flex-none stroke-lime-400 opacity-20'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='padded-pattern'
                width='100'
                height='100'
                patternUnits='userSpaceOnUse'
                patternTransform='rotate(45)'
              >
                <rect
                  width='100'
                  height='100'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                ></rect>
                <line
                  x1='0'
                  y1='0'
                  x2='100'
                  y2='100'
                  stroke='currentColor'
                  strokeWidth='2'
                ></line>
                <line
                  x1='100'
                  y1='0'
                  x2='0'
                  y2='100'
                  stroke='currentColor'
                  strokeWidth='2'
                ></line>
              </pattern>
            </defs>
            <rect
              width='100%'
              height='100%'
              strokeWidth='0'
              fill='url(#padded-pattern)'
            ></rect>
          </svg>
        </div>
      </div>

      <div className='relative z-20 mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Cocktail bartender hire, mobile bar, weddings, parties,
            masterclasses:
          </h1>
          <div className='mt-2 text-4xl font-bold tracking-tight text-lime-400 sm:text-6xl'>
            Free Quote
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
              className='isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
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

export default Hero_Cta_Left
