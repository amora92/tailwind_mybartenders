import React, { useState } from 'react'

const Pricing_Cta = () => {
  const [annual, setAnnual] = useState(false)

  return (
    <div>
      <section>
        <div className='px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl'>
          <div>
            <h1 className='text-4xl font-semibold tracking-tighter text-gray-900'>
              Flexible Pricing Plans,
              <span className='text-gray-600'>suitable for all needs</span>
            </h1>
            <p className='mt-4 text-base font-medium text-gray-500'>
              Choose the plan that fits your project requirements the best.
              <span className='md:block'>
                Flexible options for startups, SMBs, and enterprises.
              </span>
            </p>
            <div className='md:max-w-sm'>
              <div className='inline-flex w-full border rounded-lg mt-6 overflow-hidden bg-chalk p-0.5 z-0'>
                <button
                  className={`block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-md ${
                    !annual ? 'bg-gray-100 text-black' : ''
                  }`}
                  onClick={() => setAnnual(false)}
                  type='button'
                >
                  Monthly
                </button>
                <button
                  className={`block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-md ${
                    annual ? 'bg-gray-100 text-black' : ''
                  }`}
                  onClick={() => setAnnual(true)}
                  type='button'
                >
                  Annual
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='grid gap-2 p-2 mt-24 overflow-hidden border md:grid-cols-2 rounded-3xl lg:grid-cols-4'>
              <div className='flex flex-col justify-between h-full p-8 bg-white border shadow-2xl rounded-2xl'>
                <div>
                  <span className='text-lg font-medium text-black'>Hobby</span>
                  <div className='mt-4'>
                    <span className='text-xl text-black'>
                      {annual ? '$7.00' : '$15.00'}
                    </span>
                    <span className='text-sm font-medium text-gray-500'>
                      /m
                      {annual && <span>(billed annually)</span>}
                    </span>
                  </div>
                </div>
                <div>
                  <p className='mt-12 text-lg font-medium text-black'>
                    includes
                  </p>
                  <ul
                    className='gap-4 mt-4 space-y-3 text-sm font-medium text-gray-500 list-none lg:gap-6'
                    role='list'
                  >
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Unlimited deploys </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Unlimited members </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> 5 TB cloud storage </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Growth oriented </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Marketing campaigns </span>
                    </li>
                  </ul>
                  <div className='flex w-full mt-6'>
                    <button
                      className='inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                      aria-describedby='planDescription'
                      aria-label='Button'
                      type='button'
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-between h-full p-8 bg-white border shadow-2xl rounded-2xl'>
                <div>
                  <span className='text-lg font-medium text-black'>Pro</span>
                  <div className='mt-4'>
                    <span className='text-xl text-black'>
                      {annual ? '$15.00' : '$30.00'}
                    </span>
                    <span className='text-sm font-medium text-gray-500'>
                      /m
                      {annual && <span>(billed annually)</span>}
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
                      ⏤ <span> Unlimited deploys </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Unlimited members </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> 5 TB cloud storage </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Growth oriented </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Marketing campaigns </span>
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
                      Button
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-between h-full p-8 bg-white border shadow-2xl rounded-2xl'>
                <div>
                  <span className='text-lg font-medium text-black'>Hobby</span>
                  <div className='mt-4'>
                    <span className='text-xl text-black'>
                      {annual ? '$30.00' : '$60.00'}
                    </span>
                    <span className='text-sm font-medium text-gray-500'>
                      /m
                      {annual && <span>(billed annually)</span>}
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
                      ⏤ <span> Unlimited deploys </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Unlimited members </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> 5 TB cloud storage </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Growth oriented </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      ⏤ <span> Marketing campaigns </span>
                    </li>
                  </ul>
                  <div className='flex w-full mt-6'>
                    <button
                      className='inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                      aria-describedby='planDescription'
                      aria-label='Button'
                      type='button'
                    >
                      Button
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
