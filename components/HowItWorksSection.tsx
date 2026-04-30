const steps = [
  {
    number: '01',
    title: 'Get in Touch',
    description:
      'Share your event details with us. Tell us about your vision, guest count, and any special requests.',
    icon: (
      <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description:
      'Receive a tailored quote with menu suggestions perfectly matched to your event style and budget.',
    icon: (
      <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Plan Together',
    description:
      "We'll work with you to finalize the cocktail menu, bar setup, and all the details that matter.",
    icon: (
      <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
      </svg>
    )
  },
  {
    number: '04',
    title: 'We Deliver Magic',
    description:
      'Sit back and enjoy. Our team handles everything from setup to service to cleanup.',
    icon: (
      <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
      </svg>
    )
  }
]

const HowItWorksSection = () => {
  return (
    <section className='relative overflow-hidden bg-gray-50 py-24 lg:py-32'>
      <div className='absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-300 to-transparent' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center lg:mb-20'>
          <span className='mb-6 inline-block rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-600'>
            Simple Process
          </span>
          <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>
            How It Works
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-600'>
            From first contact to last call, we make booking your mobile bar effortless.
          </p>
        </div>

        <div className='relative mx-auto max-w-5xl'>
          <div className='absolute left-[10%] right-[10%] top-24 hidden h-0.5 bg-gradient-to-r from-pink-200 via-pink-400 to-amber-400 lg:block' />

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
            {steps.map((step, index) => (
              <div key={step.number} className='relative'>
                <div className='relative h-full rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl lg:p-8'>
                  <div className='absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-lg font-bold text-white shadow-lg'>
                    {step.number}
                  </div>

                  <div className='mb-6 mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-500'>
                    {step.icon}
                  </div>

                  <h3 className='mb-3 text-xl font-bold text-gray-900'>
                    {step.title}
                  </h3>
                  <p className='leading-relaxed text-gray-600'>
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className='my-4 flex justify-center lg:hidden'>
                    <svg className='h-6 w-6 rotate-90 text-pink-300 md:rotate-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='mt-16 text-center'>
          <a
            href='/contact_us'
            className='inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:from-pink-600 hover:to-rose-700 hover:shadow-pink-500/40'
          >
            Start Your Journey
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
