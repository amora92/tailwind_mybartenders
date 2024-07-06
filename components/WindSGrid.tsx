import React from 'react'

const WindSGrid = () => {
  return (
    <div>
      <section>
        <div className='px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl'>
          <div>
            <h1 className='text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl text-balance'>
              Building one pagers together,
              <span className='text-gray-600'>wherever and anywhere</span>
            </h1>
            <p className='mt-4 text-base font-medium text-gray-500 text-balance'>
              Control and added security. With decentralization, users have more
              control over their data and transactions, and the platform is less
              susceptible to malicious attacks.
            </p>
          </div>
          <div className='space-y-2'>
            <div className='grid gap-2 mt-12 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3'>
              <div className='max-w-lg min-w-full mx-auto'>
                <div className='flex h-full'>
                  <div className='flex flex-col justify-center p-8 border bg-gray-50 rounded-3xl max-w-none'>
                    <h2 className='font-medium text-gray-900'>
                      No additional restrictions
                    </h2>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      You may not impose any additional legal terms or
                      technological measures on the work that restrict the
                      freedoms granted by the CC BY 3.0 License. This means you
                      can't add extra conditions or restrictions beyond what the
                      license allows.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:col-span-2'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src='/cocktail_red_fine.jpg'
                    className='object-cover h-full border shadow-2xl rounded-2xl'
                    alt='Placeholder'
                  />
                </div>
              </div>
            </div>
            <div className='grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3'>
              <div className='max-w-lg min-w-full mx-auto lg:col-start-3'>
                <div className='flex h-full'>
                  <div className='flex flex-col justify-center p-8 border bg-gray-50 rounded-3xl max-w-none'>
                    <h2 className='font-medium text-gray-900'>
                      Rule of Attribution
                    </h2>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      You must give appropriate credit to the original creator
                      of the work. This typically includes providing the name of
                      the author or licensor, a link to the original work, and
                      indicating if changes were made.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:col-start-1 lg:col-span-2'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src='/cocktail_color_fine.jpg'
                    className='object-cover h-full border shadow-2xl rounded-2xl'
                    alt='Placeholder'
                  />
                </div>
              </div>
            </div>
            <div className='grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3'>
              <div className='max-w-lg min-w-full mx-auto'>
                <div className='flex h-full'>
                  <div className='flex flex-col justify-center p-8 border bg-gray-50 rounded-3xl max-w-none'>
                    <h2 className='font-medium text-gray-900'>
                      Share alike (SA) absence
                    </h2>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      The CC BY 3.0 License does not include a "Share Alike"
                      (SA) provision. Unlike some other Creative Commons
                      licenses, it does not require you to license any
                      derivative works under the same terms. You can create
                      adaptations or derivatives and license them differently if
                      you choose.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:col-span-2'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src='/cocktail_foam.jpg'
                    className='object-cover h-full border shadow-2xl rounded-2xl'
                    alt='Placeholder'
                  />
                </div>
              </div>
            </div>
            <div className='grid gap-2 mt-2 text-center md:grid-cols-3'>
              <div className='p-2 overflow-hidden border rounded-3xl'>
                <img
                  src='../images/placeholders/rectangle1.svg'
                  alt='Placeholder'
                  className='w-full h-full mx-auto rounded-2xl'
                />
              </div>
              <div className='p-2 overflow-hidden border rounded-3xl'>
                <img
                  src='../images/placeholders/rectangle1.svg'
                  alt='Placeholder'
                  className='w-full h-full mx-auto rounded-2xl'
                />
              </div>
              <div className='p-2 overflow-hidden border rounded-3xl'>
                <img
                  src='../images/placeholders/rectangle1.svg'
                  alt='Placeholder'
                  className='w-full h-full mx-auto rounded-2xl'
                />
              </div>
              <div className='mt-4'>
                <p className='font-medium text-gray-900'>
                  No warranty disclaimer
                </p>
                <p className='mt-2 text-sm text-gray-500'>
                  The license comes with no warranties. The licensor provides
                  the work "as is," and users must use it at their own risk.
                </p>
              </div>
              <div className='px-8 mt-4'>
                <p className='font-medium text-gray-900'>
                  Modification Freedom
                </p>
                <p className='mt-2 text-sm text-gray-500'>
                  You can adapt, remix, transform, and build upon the licensed
                  work.
                </p>
              </div>
              <div className='px-8 mt-4'>
                <p className='font-medium text-gray-900'>
                  Commercial use allowed
                </p>
                <p className='mt-2 text-sm text-gray-500'>
                  You are allowed to use the licensed work for both
                  non-commercial and commercial purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WindSGrid
