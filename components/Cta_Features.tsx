import React from 'react'

const Cta_Features = () => {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto'>
          <div className='relative w-full text-center lg:text-left lg:w-2/4'>
            <h2 className='text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0'>
              Enjoy an effortless experience, overseen by experts of the drinks
              industry.
            </h2>
          </div>
          <div className='relative w-full text-center lg:text-left lg:w-2/4'>
            <p className='text-lg font-normal text-gray-500 mb-5'>
              We will consult you based on our experience, but ultimately abide
              to your requirements
            </p>
            <a
              href='https://www.mybartenders.co.uk/gallery'
              className='flex flex-row items-center justify-center gap-2 text-base font-semibold text-green-400 lg:justify-start hover:text-green-500'
            >
              Ideas for your party!{' '}
              <img src='/idea.svg' alt='Idea Icon' width='30' height='30' />
            </a>
          </div>
        </div>
        <div className='flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8'>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-green-600'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <img
                src='/emotion-happy-line.svg'
                alt='Happy Icon'
                width='40'
                height='40'
              />
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              Here to help!
            </h4>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              Experienced, professional team which can help you with any
              enquiry.
            </p>
          </div>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-green-600'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <img src='/award.svg' alt='Award Icon' width='40' height='40' />
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              We take pride in our service
            </h4>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              We are award winning industry experts, with decades of combined
              experience.
            </p>
          </div>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-green-600'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <img src='/fresh.svg' alt='Fresh Icon' width='40' height='40' />
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              Responsibly sourced, fresh ingredients{' '}
            </h4>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              We have access to a wide range of suppliers with a long history of
              working with them.
            </p>
          </div>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-green-600'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <img
                src='/cocktail.svg'
                alt='Cocktail Icon'
                width='40'
                height='40'
              />
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              Timeless cocktails
            </h4>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              Our selection of drinks and service packages makes any occasion
              special. We've done it all.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta_Features
