import React from 'react'

const GridImageL = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <img
                alt=''
                src='https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>
          </div>

          <div className='relative flex items-center bg-gray-100'>
            <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>
                From milestones to gatherings, a private bartender ensures
                safety and pure enjoyment.
              </h2>

              <p className='mt-4 text-gray-600'>
                Experience impeccable wine service and the elegance of champagne
                towers at our events. From expertly curated wine lists to
                stunning displays, we ensure every pour is a celebration.
                Elevate your occasion with our refined selection and seamless
                hospitality. Cheers to unforgettable moments!
              </p>

              <a
                href='#'
                className='mt-8 inline-block rounded border bg-main_buttons_1 px-12 py-3 text-sm font-medium text-white hover:bg-lime-500 hover:text-white focus:outline-none focus:ring active:text-indigo-500'
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
