import React from 'react'
import Image from 'next/image'

const Cta_Features = () => {
  return (
    <section className='py-16 bg-gradient-to-b from-white via-gray-50 to-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mb-12 lg:mb-16 flex justify-center items-center flex-col gap-y-6 lg:gap-y-8'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 text-center max-w-3xl leading-tight'>
            Elevate Your Events with Professional Mobile Bartending Excellence
          </h2>
          <p className='text-xl text-gray-600 text-center max-w-2xl'>
            From intimate gatherings to grand celebrations, we bring the art of
            mixology directly to your venue with our premium mobile bar service.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
          <div className='group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100'>
            <div className='bg-gray-50 rounded-xl p-4 mb-6 group-hover:bg-gray-900/5 transition-colors duration-300'>
              <Image
                src='/emotion-happy-line.svg'
                alt='Comprehensive Event Services'
                width={40}
                height={40}
                className='group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Comprehensive Event Services
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Expert bartending for weddings, corporate events, private parties,
              and interactive mixology masterclasses.
            </p>
          </div>

          <div className='group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100'>
            <div className='bg-gray-50 rounded-xl p-4 mb-6 group-hover:bg-gray-900/5 transition-colors duration-300'>
              <Image
                src='/award.svg'
                alt='Award-Winning Excellence'
                width={40}
                height={40}
                className='group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Award-Winning Excellence
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Industry-recognized expertise with prestigious awards since 2011,
              ensuring top-tier service quality.
            </p>
          </div>

          <div className='group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100'>
            <div className='bg-gray-50 rounded-xl p-4 mb-6 group-hover:bg-gray-900/5 transition-colors duration-300'>
              <Image
                src='/leaf5.svg'
                alt='Premium Ingredients'
                width={40}
                height={40}
                className='group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Premium Ingredients
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Carefully sourced, fresh ingredients for exceptional cocktails
              that delight your guests.
            </p>
          </div>

          <div className='group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100'>
            <div className='bg-gray-50 rounded-xl p-4 mb-6 group-hover:bg-gray-900/5 transition-colors duration-300'>
              <Image
                src='/cocktail.svg'
                alt='Signature Cocktails'
                width={40}
                height={40}
                className='group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Signature Cocktails
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              From classic prohibition-era recipes to modern mixology
              innovations, featuring over 1000 unique cocktails.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <a
            href='/gallery'
            className='inline-flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200'
          >
            Explore Our Event Gallery
            <Image
              src='/idea.svg'
              alt='View Gallery'
              width={24}
              height={24}
              className='group-hover:translate-x-1 transition-transform duration-200'
            />
          </a>
          <p className='mt-3 text-gray-600'>
            Get inspired by our previous events and creative cocktail
            presentations
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cta_Features
