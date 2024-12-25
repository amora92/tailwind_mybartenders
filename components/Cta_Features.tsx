import React from 'react'

const Cta_Features = () => {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto'>
          <div className='relative w-full text-center lg:text-left lg:w-2/4'>
            <h2 className='text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0'>
              Our Portable Cocktail Bar Will Create A Party Anywhere You Wish!
            </h2>
          </div>
          <div className='relative w-full text-center lg:text-left lg:w-2/4'>
            <p className='text-lg font-normal text-gray-500 mb-5'>
              We cater to all needs, from small - private gatherings, to big
              corporate or family do's.
            </p>
            <a
              href='https://www.mybartenders.co.uk/gallery'
              className='flex flex-row items-center justify-center gap-2 text-base font-semibold text-green-400 lg:justify-start hover:text-green-500'
            >
              Check out our gallery for inspiration.{' '}
              <img src='/idea.svg' alt='Idea Icon' width='30' height='30' />
            </a>
          </div>
        </div>
        <div className='flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8'>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <img
                src='/emotion-happy-line.svg'
                alt='Happy Icon'
                width='40'
                height='40'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              Here to help!
            </h3>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              Weddings, Hen or Stag Do's, Private Parties, Mixology
              Masterclasses, we've done it all!
            </p>
          </div>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <img src='/award.svg' alt='Award Icon' width='40' height='40' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              We take pride in our service
            </h3>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              We compete within the drinks industry and have been winning awards
              since 2011!
            </p>
          </div>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <img src='/leaf5.svg' alt='Fresh Icon' width='40' height='40' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              Responsibly sourced, fresh ingredients{' '}
            </h3>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              We use the best ingredients we can get our hands on.
            </p>
          </div>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <img
                src='/cocktail.svg'
                alt='Cocktail Icon'
                width='40'
                height='40'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              Timeless cocktails
            </h3>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              From 1920s Prohibition Era Cocktails up to Modern Mixology,
              spanning across 1000s of in-house recipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta_Features
