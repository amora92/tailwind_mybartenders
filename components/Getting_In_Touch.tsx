import React from 'react'

const Getting_In_Touch = () => {
  return (
    <div>
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl font-bold sm:text-4xl'>
              We would like to hear from you!
            </h2>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='relative h-64 overflow-hidden sm:h-80 lg:h-full'>
              <img
                alt=''
                src='https://images.pexels.com/photos/12419173/pexels-photo-12419173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div className='lg:py-16'>
              <article className='space-y-4 text-gray-600'>
                <p>
                  Thank you for taking the time to explore our services. We look
                  forward to connecting with you soon!
                </p>

                <p>
                  We're thrilled that you've discovered our services! At
                  mybartenders.co.uk, we're passionate about delivering
                  exceptional experiences. Whether you're seeking innovative
                  solutions, reliable support, or simply have questions, we're
                  here to exceed your expectations. Reach out today and let's
                  embark on a journey of excellence together.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Getting_In_Touch
