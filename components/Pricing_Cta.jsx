import React, { useState } from 'react'

const Pricing_Cta = () => {
  const [wetHire, setWetHire] = useState(false)

  return (
    <div>
      <section>
        <div className='px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl'>
          <div>
            <h1 className='text-4xl font-semibold tracking-tighter text-gray-900'>
              Flexible Hire Plans,
              <span className='text-gray-600'>suitable for all events</span>
            </h1>
            <p className='mt-4 text-base font-medium text-gray-500'>
              Choose the hire plan that fits your event needs the best.
              <span className='md:block'>
                Flexible options for weddings, corporate events, and private
                parties.
              </span>
            </p>
            <div className='md:max-w-sm'>
              <div className='inline-flex w-full border rounded-lg mt-6 overflow-hidden bg-chalk p-0.5 z-0'>
                <button
                  className={`block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-md ${
                    !wetHire ? 'bg-gray-100 text-black' : ''
                  }`}
                  onClick={() => setWetHire(false)}
                  type='button'
                >
                  Dry Hire
                </button>
                <button
                  className={`block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-md ${
                    wetHire ? 'bg-gray-100 text-black' : ''
                  }`}
                  onClick={() => setWetHire(true)}
                  type='button'
                >
                  Wet Hire
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='grid gap-2 p-2 mt-24 overflow-hidden border md:grid-cols-2 rounded-3xl lg:grid-cols-3'>
              <div className='flex flex-col justify-between h-full p-8 bg-white border shadow-2xl rounded-2xl'>
                <div>
                  <span className='text-lg font-medium text-black'>Basic</span>
                  <div className='mt-4'>
                    <span className='text-xl text-black'>
                      {wetHire ? '£ Get a Quote' : '£ Get a Quote'}
                    </span>
                    <span className='text-sm font-medium text-gray-500'>
                      /event
                    </span>
                  </div>
                </div>
                <div>
                  <p className='mt-12 text-lg font-medium text-black'>
                    Includes
                  </p>
                  <ul
                    className='gap-4 mt-4 space-y-3 text-sm font-medium text-gray-500 list-none lg:gap-6'
                    role='list'
                  >
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Basic bar setup </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Limited drink menu </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> 1 bartender </span>
                    </li>
                  </ul>
                  <div className='flex w-full mt-6'>
                    <button
                      className='inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                      aria-describedby='planDescription'
                      aria-label='Button'
                      type='button'
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-between h-full p-8 bg-white border shadow-2xl rounded-2xl'>
                <div>
                  <span className='text-lg font-medium text-black'>
                    Standard
                  </span>
                  <div className='mt-4'>
                    <span className='text-xl text-black'>
                      {wetHire ? '£ Get a Quote' : '£ Get a Quote'}
                    </span>
                    <span className='text-sm font-medium text-gray-500'>
                      /event
                    </span>
                  </div>
                </div>
                <div>
                  <p className='mt-12 text-lg font-medium text-black'>
                    Includes
                  </p>
                  <ul
                    className='gap-4 mt-4 space-y-3 text-sm font-medium text-gray-500 list-none lg:gap-6'
                    role='list'
                  >
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Advanced bar setup </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Customizable drink menu </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> 2 bartenders </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Glassware and ice </span>
                    </li>
                  </ul>
                  <div className='flex w-full mt-6'>
                    <button
                      className='inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black'
                      href='#_'
                      aria-describedby='planDescriptionLink'
                      aria-label='Learn More about Plan'
                      role='button'
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-between h-full p-8 bg-white border shadow-2xl rounded-2xl'>
                <div>
                  <span className='text-lg font-medium text-black'>
                    Premium
                  </span>
                  <div className='mt-4'>
                    <span className='text-xl text-black'>
                      {wetHire ? '£ Get a Quote' : '£ Get a Quote'}
                    </span>
                    <span className='text-sm font-medium text-gray-500'>
                      /event
                    </span>
                  </div>
                </div>
                <div>
                  <p className='mt-12 text-lg font-medium text-black'>
                    Includes
                  </p>
                  <ul
                    className='gap-4 mt-4 space-y-3 text-sm font-medium text-gray-500 list-none lg:gap-6'
                    role='list'
                  >
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Premium bar setup </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Fully customizable drink menu </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> 3 bartenders </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Glassware, ice, and garnishes </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Cocktail masterclass </span>
                    </li>
                  </ul>
                  <div className='flex w-full mt-6'>
                    <button
                      className='inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                      aria-describedby='planDescription'
                      aria-label='Button'
                      type='button'
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              </div>

              {/* Repeat similar structure for other pricing tiers */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing_Cta
