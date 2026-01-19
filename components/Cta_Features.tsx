import React from 'react'
import Image from 'next/image'

const features = [
  {
    icon: '/emotion-happy-line.svg',
    title: 'Full Event Service',
    description: 'Professional bartending for weddings, corporate events, and private parties throughout Northamptonshire.'
  },
  {
    icon: '/award.svg',
    title: '15+ Years Experience',
    description: 'Industry-recognized expertise ensuring exceptional service quality for every event.'
  },
  {
    icon: '/leaf5.svg',
    title: 'Premium Ingredients',
    description: 'Locally sourced, fresh ingredients combined with premium spirits for exceptional cocktails.'
  },
  {
    icon: '/cocktail.svg',
    title: '500+ Cocktails',
    description: 'Extensive menu from classic prohibition-era recipes to modern mixology innovations.'
  }
]

const Cta_Features = () => {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <span className='inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-4'>
            Why Choose Us
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Exceptional Service, Every Time
          </h2>
          <p className='text-lg text-gray-600'>
            We bring the art of mixology directly to your venue with our premium mobile bar service.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100'
            >
              <div className='w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-pink-500 transition-colors'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className='group-hover:brightness-0 group-hover:invert transition-all'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-16 text-center'>
          <a
            href='/gallery'
            className='inline-flex items-center gap-2 text-pink-500 font-medium hover:text-pink-600 transition-colors group'
          >
            View Our Gallery
            <svg
              className='w-4 h-4 transition-transform group-hover:translate-x-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cta_Features
