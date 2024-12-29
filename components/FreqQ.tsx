import React from 'react'

const FreqQ = () => {
  return (
    <section
      id='faq'
      className='py-16 bg-gradient-to-b from-white via-pink-50/30 to-white'
      aria-label='Frequently Asked Questions'
    >
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4'>
            Frequently Asked <span className='text-pink-500'>Questions</span>
          </h2>
          <p className='text-lg text-gray-600'>
            Everything you need to know about our{' '}
            <span className='text-pink-500'>premium mobile bar services</span>{' '}
            in Northampton and surrounding areas
          </p>
        </div>

        <div className='divide-y divide-pink-100 rounded-xl border border-pink-100 bg-white shadow-sm'>
          <details
            className='group p-6 [&_summary::-webkit-details-marker]:hidden hover:bg-pink-50/30 transition-colors duration-200'
            open
          >
            <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
              <h2 className='text-lg font-medium'>
                What is your typical response time after contact?
              </h2>

              <span className='relative size-5 shrink-0 text-pink-500'>
                {/* SVGs remain the same but with text-pink-500 class */}
              </span>
            </summary>
            <p className='mt-4 leading-relaxed text-gray-700'>
              We pride ourselves on quick response times - typically within 24
              hours on business days. For urgent inquiries, we recommend calling
              directly.
            </p>
          </details>

          <details
            className='group p-6 [&_summary::-webkit-details-marker]:hidden hover:bg-pink-50/30 transition-colors duration-200'
            open
          >
            <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
              <h2 className='text-lg font-medium'>
                Which areas do you cover with your mobile bar service?
              </h2>

              <span className='relative size-5 shrink-0 text-pink-500'>
                {/* SVGs remain the same but with text-pink-500 class */}
              </span>
            </summary>
            <p className='mt-4 leading-relaxed text-gray-700'>
              While we're based in Northampton, we provide our premium mobile
              bar services across the UK. Our primary service areas include
              Northamptonshire, London, Milton Keynes, and surrounding counties.
              Distance surcharges may apply for locations beyond our core
              service area.
            </p>
          </details>

          <details
            className='group p-6 [&_summary::-webkit-details-marker]:hidden hover:bg-pink-50/30 transition-colors duration-200'
            open
          >
            <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
              <h2 className='text-lg font-medium'>
                How far in advance should I book for my event?
              </h2>

              <span className='relative size-5 shrink-0 text-pink-500'>
                {/* SVGs remain the same but with text-pink-500 class */}
              </span>
            </summary>
            <p className='mt-4 leading-relaxed text-gray-700'>
              For the best availability, we recommend booking 2-3 months in
              advance, especially for peak season events (May-September) and
              weekends. However, we understand that sometimes plans come
              together quickly - we can often accommodate last-minute bookings
              or at the very least attempt to help you.
            </p>
          </details>

          <details
            className='group p-6 [&_summary::-webkit-details-marker]:hidden hover:bg-pink-50/30 transition-colors duration-200'
            open
          >
            <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
              <h2 className='text-lg font-medium'>
                Do you offer non-alcoholic alternatives?
              </h2>

              <span className='relative size-5 shrink-0 text-pink-500'>
                {/* SVGs remain the same but with text-pink-500 class */}
              </span>
            </summary>
            <p className='mt-4 leading-relaxed text-gray-700'>
              Absolutely! We offer an extensive range of non-alcoholic options
              including craft mocktails, premium coffee services, fresh
              smoothies, and alcohol-free spirits and wines. Our mixologists are
              skilled in creating exciting non-alcoholic beverages that are just
              as impressive as their alcoholic counterparts.
            </p>
          </details>

          <details
            className='group p-6 [&_summary::-webkit-details-marker]:hidden hover:bg-pink-50/30 transition-colors duration-200'
            open
          >
            <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
              <h2 className='text-lg font-medium'>
                Are you licensed / certified?
              </h2>

              <span className='relative size-5 shrink-0 text-pink-500'>
                {/* SVGs remain the same but with text-pink-500 class */}
              </span>
            </summary>
            <p className='mt-4 leading-relaxed text-gray-700'>
              We are fully licensed and hold all relevant certifications. Please
              enquire for more information.
            </p>
          </details>

          <details className='group p-6 [&_summary::-webkit-details-marker]:hidden hover:bg-pink-50/30 transition-colors duration-200'>
            <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
              <h2 className='text-lg font-medium'>
                Can you accommodate special dietary requirements?
              </h2>

              <span className='relative size-5 shrink-0 text-pink-500'>
                {/* SVGs remain the same but with text-pink-500 class */}
              </span>
            </summary>

            <p className='mt-4 leading-relaxed text-gray-700'>
              Yes, we take dietary requirements very seriously. We can
              accommodate all dietary restrictions and allergies, including
              gluten-free, dairy-free, and vegan options. We maintain detailed
              ingredient lists and can create custom menus to ensure all your
              guests can enjoy our drinks safely and confidently.
            </p>
          </details>
        </div>

        <div className='mt-8 text-center'>
          <p className='text-gray-600'>
            Still have questions?{' '}
            <a
              href='/contact_us'
              className='text-pink-500 hover:text-pink-600 font-medium'
            >
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FreqQ
