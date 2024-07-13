import React from 'react'

const GridImageL = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <img
                alt='Custom Cocktails'
                src='fine_cocktail.webp'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>
          </div>

          <div className='relative flex items-center bg-gray-100'>
            <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>
                From milestone celebrations to gatherings, a private bartender
                elevates every moment with expert mixology, delivering exquisite
                flavors that captivate the palate and elevate the experience.
              </h2>

              <p className='mt-4 text-gray-600'>
                Experience the artistry of cocktail craftsmanship and the
                sophistication of mixology excellence at our events. From
                meticulously crafted cocktail menus to stunning bar setups, we
                ensure every sip is a celebration. Elevate your occasion with
                our curated selection of signature cocktails and seamless
                service. Here's to unforgettable moments and the perfect pour!
                Cheers!
              </p>

              <a
                href='#'
                className='mt-8 inline-block rounded border bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-12 py-3 text-sm font-medium text-white hover:bg-lime-500 hover:text-white focus:outline-none focus:ring active:text-indigo-500'
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GridImageL
