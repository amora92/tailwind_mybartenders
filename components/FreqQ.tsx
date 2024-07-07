import React from 'react'

const FreqQ = () => {
  return (
    <div>
      <div className='divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white'>
        <details
          className='group p-6 [&_summary::-webkit-details-marker]:hidden'
          open
        >
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='text-lg font-medium'>
              How long will it take for you to get a response?
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
            As is this service is not searching for clients, we will get back to
            you as soon as conveniently possible.
          </p>
        </details>

        <details className='group p-6 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='text-lg font-medium'>
              Why is it currently not searching for clients?
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
            Under construction.
          </p>
        </details>
      </div>
    </div>
  )
}

export default FreqQ
