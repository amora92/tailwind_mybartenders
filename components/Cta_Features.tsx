import React from 'react'
import Image from 'next/image'

const Cta_Features = () => {
  return (
    <section
      className='py-16 bg-gradient-to-b from-white via-pink-50/30 to-white'
      aria-label='Features and Services'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mb-12 lg:mb-16 flex justify-center items-center flex-col gap-y-6 lg:gap-y-8'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 text-center max-w-3xl leading-tight'>
            Elevate Your Events with{' '}
            <span className='text-pink-500'>Professional</span> Mobile
            Bartending <span className='text-pink-500'>Excellence</span>
          </h2>
          <p className='text-xl text-gray-600 text-center max-w-2xl'>
            From intimate gatherings to grand celebrations, we bring the{' '}
            <span className='text-pink-500'>art of mixology</span> directly to
            your venue with our premium mobile bar service in Northampton and
            surrounding areas.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
          <div className='group relative bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-pink-100/50 hover:bg-pink-50/30'>
            <div className='bg-pink-50/50 rounded-xl p-4 mb-6 group-hover:bg-pink-100/50 transition-colors duration-300'>
              <Image
                src='/emotion-happy-line.svg'
                alt='Comprehensive Event Services Icon'
                width={40}
                height={40}
                className='group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              <span className='text-pink-500'>Comprehensive</span> Event
              Services
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Professional bartending for weddings, corporate events, private
              parties, and interactive mixology masterclasses throughout
              Northamptonshire.
            </p>
          </div>

          <div className='group relative bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-pink-100/50 hover:bg-pink-50/30'>
            <div className='bg-pink-50/50 rounded-xl p-4 mb-6 group-hover:bg-pink-100/50 transition-colors duration-300'>
              <Image
                src='/award.svg'
                alt='Award-Winning Excellence Icon'
                width={40}
                height={40}
                className='group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              <span className='text-pink-500'>Award-Winning</span> Excellence
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              15+ years of industry-recognized expertise, ensuring exceptional
              service quality for every event we cater.
            </p>
          </div>

          <div className='group relative bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-pink-100/50 hover:bg-pink-50/30'>
            <div className='bg-pink-50/50 rounded-xl p-4 mb-6 group-hover:bg-pink-100/50 transition-colors duration-300'>
              <Image
                src='/leaf5.svg'
                alt='Premium Ingredients Icon'
                width={40}
                height={40}
                className='group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              <span className='text-pink-500'>Premium</span> Ingredients
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Locally sourced, fresh ingredients combined with premium spirits
              to create exceptional cocktail experiences.
            </p>
          </div>

          <div className='group relative bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-pink-100/50 hover:bg-pink-50/30'>
            <div className='bg-pink-50/50 rounded-xl p-4 mb-6 group-hover:bg-pink-100/50 transition-colors duration-300'>
              <Image
                src='/cocktail.svg'
                alt='Signature Cocktails Icon'
                width={40}
                height={40}
                className='group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              <span className='text-pink-500'>Signature</span> Cocktails
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Extensive menu featuring 500+ cocktails, from classic
              prohibition-era recipes to modern mixology innovations.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center bg-pink-50/30 p-8 rounded-xl'>
          <a
            href='/gallery'
            className='inline-flex items-center gap-3 text-lg font-medium text-pink-500 hover:text-pink-600 transition-colors duration-200'
          >
            Explore Our Event Gallery
            <Image
              src='/idea.svg'
              alt='View Gallery Arrow'
              width={24}
              height={24}
              className='group-hover:translate-x-1 transition-transform duration-200'
            />
          </a>
          <p className='mt-3 text-gray-600'>
            Discover our creative cocktail presentations and previous event
            successes
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cta_Features
