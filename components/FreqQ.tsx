import React from 'react'

const FreqQ = () => {
  return (
    <div id='faq'>
      <div className='divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white'>
        <details
          className='group p-6 [&_summary::-webkit-details-marker]:hidden'
          open
        >
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='text-lg font-medium'>
              I've submitted the form, when will you get back to me?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>
          <p className='mt-4 leading-relaxed text-gray-700'>
            We usually respond within a business day.
          </p>
        </details>
        <details
          className='group p-6 [&_summary::-webkit-details-marker]:hidden'
          open
        >
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='text-lg font-medium'>What areas do you serve?</h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>
          <p className='mt-4 leading-relaxed text-gray-700'>
            We provide our services nationwide!
          </p>
        </details>
        <details
          className='group p-6 [&_summary::-webkit-details-marker]:hidden'
          open
        >
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='text-lg font-medium'>
              How far in advance should I book your services?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>
          <p className='mt-4 leading-relaxed text-gray-700'>
            As much notice as possible, but we can work within really tight
            timeframes. We suggest at least 3 days of notice.
          </p>
        </details>
        <details
          className='group p-6 [&_summary::-webkit-details-marker]:hidden'
          open
        >
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='text-lg font-medium'>
              Do you offer non-alcoholic options or mocktails?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>
          <p className='mt-4 leading-relaxed text-gray-700'>
            Yes! We offer coffee's, mocktails, smoothies, non alcoholic spirits
            / wines etc.
          </p>
        </details>

        <details
          className='group p-6 [&_summary::-webkit-details-marker]:hidden'
          open
        >
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='text-lg font-medium'>
              Have you got a personal licence to legally serve alcohol?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>
          <p className='mt-4 leading-relaxed text-gray-700'>
            Yes, we are fully certified and licenced.
          </p>
        </details>

        <details className='group p-6 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='text-lg font-medium'>
              Can you accommodate dietary restrictions or allergies?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p className='mt-4 leading-relaxed text-gray-700'>
            Absolutely! Let us know in advance about any dietary preferences,
            restrictions, or allergies, and we’ll ensure our drinks are crafted
            with your guests’ needs in mind.
          </p>
        </details>
      </div>
    </div>
  )
}

export default FreqQ
