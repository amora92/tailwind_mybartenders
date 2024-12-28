'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ImageRotator from '@/components/Image_Rotator'

const ServicesSection = () => {
  const services = [
    {
      title: 'Masterclass',
      description:
        'Join our masterclass to learn the art of cocktail making from experienced mixologists. Perfect for enthusiasts and professionals alike.',
      image: 'masterclass.webp',
      price: '£ Custom',
      options:
        'Prohibition Style Cocktails, Modern Cocktails, Party Cocktails, Spirits Masterclass, Shots, Vodka & Caviar, Cocktail History & More',
      additionalInfo: 'Includes all necessary equipment and ingredients.',
      capacity: 'Up to 50 participants',
      lengthOfService: 'Minimum 1 hour'
    },
    {
      title: 'Wedding',
      description:
        'Make your special day even more memorable with our bespoke wedding cocktail service. Tailored drinks that match your theme and style.',
      image: 'wedding.webp',
      price: '£ Custom',
      options:
        'Champagne Tower, Her & His Bespoke Cocktails, Custom Menu for the evening.',
      additionalInfo: 'Customized cocktail menu and professional bartenders.',
      capacity: 'Up to 250 guests',
      lengthOfService: 'Flexible duration'
    },
    {
      title: 'Tasting Session',
      description:
        'Experience a variety of exquisite cocktails through our guided tasting sessions. Discover new flavors and enjoy the perfect sip.',
      image: 'closeup.webp',
      price: '£ Custom',
      options: 'A flight of cocktails, Spirit & Shot Tasting, Mocktails',
      additionalInfo: 'Guided tasting with a selection of premium cocktails.',
      capacity: 'Up to 30 participants',
      lengthOfService: 'Minimum 3 hours'
    },
    {
      title: 'Private Party',
      description:
        'Elevate your private party with custom cocktails and professional bartending service. Enjoy a unique and unforgettable experience.',
      image: 'party_cocktails.webp',
      price: '£ Custom',
      options: 'From Welcome Drinks to Shots, Sharers & fine Cocktails.',
      additionalInfo: 'Personalized cocktail menu and dedicated bartender.',
      capacity: 'Up to 250 guests',
      lengthOfService: 'Minimum 4 hours'
    },
    {
      title: 'Birthday Bash',
      description:
        'Celebrate your birthday with our exclusive cocktail service. Choose from a range of birthday themed cocktails and enjoy the party!',
      image: 'birthday.webp',
      price: '£ Custom',
      options: 'Themed and custom menu, celebratory concotions.',
      additionalInfo:
        'Tailored cocktails for your birthday theme. A huge shot menu to choose from.',
      capacity: 'Up to 200 guests',
      lengthOfService: 'Minimum 2 hours'
    },
    {
      title: 'Corporate Event',
      description:
        'Enhance your corporate event with our professional cocktails. Impress your guests with our premium selection, branding, decorations and the bar for maximum impact!',
      image: 'corporate.webp',
      price: '£ Custom',
      options: 'Branded drinks & presentation, custom bar decorations.',
      additionalInfo:
        'Customized cocktail menu, corporate branding, branded menu development.',
      capacity: 'Up to 200 guests',
      lengthOfService: 'Minimum 2 hours'
    }
  ]

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0)

  const handleNextService = () => {
    setSelectedServiceIndex(prevIndex => (prevIndex + 1) % services.length)
  }

  const handlePrevService = () => {
    setSelectedServiceIndex(prevIndex =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    )
  }

  const selectedService = services[selectedServiceIndex]

  return (
    <section
      id='next-section'
      className='container mx-auto px-2 md:px-4 lg:px-6 relative flex flex-col'
    >
      <section
        id='next-section'
        className='container mx-auto px-4 lg:px-6 py-16 flex flex-col items-center'
      >
        <ImageRotator />
      </section>

      <div className='py-24 lg:py-32 bg-gray-50'>
        <h1 className='sr-only'>Professional Cocktail and Bar Services</h1>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center mb-20'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight'>
                Our Services
              </h2>
              <p className='text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
                From intimate gatherings to grand celebrations, we offer bespoke
                bar services tailored to your unique event needs.
              </p>
              <div className='w-24 h-1 bg-pink-500 mx-auto rounded-full'></div>
            </motion.div>
          </div>

          <div className='max-w-7xl mx-auto mb-16'>
            <motion.div
              className='flex flex-wrap justify-center gap-3 md:gap-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === selectedServiceIndex
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-pink-50'
                  }`}
                  onClick={() => setSelectedServiceIndex(index)}
                >
                  {service.title}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='lg:w-1/2'
              >
                <div className='relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl'>
                  <motion.img
                    key={selectedServiceIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={selectedService.image}
                    alt={selectedService.title}
                    className='w-full h-full object-cover'
                  />

                  <div className='absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none'>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={handlePrevService}
                      className='p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 pointer-events-auto'
                      aria-label='Previous service'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 19l-7-7 7-7'
                        />
                      </svg>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={handleNextService}
                      className='p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 pointer-events-auto'
                      aria-label='Next service'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='lg:w-1/2 bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100'
              >
                <motion.div
                  key={selectedServiceIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='space-y-6'
                >
                  <h3 className='text-3xl font-bold text-gray-900'>
                    {selectedService.title}
                  </h3>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    {selectedService.description}
                  </p>

                  <div className='space-y-4'>
                    <div className='flex items-center space-x-2 text-pink-500'>
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='font-medium'>
                        {selectedService.lengthOfService}
                      </span>
                    </div>
                    <div className='flex items-center space-x-2 text-pink-500'>
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                        />
                      </svg>
                      <span className='font-medium'>
                        {selectedService.capacity}
                      </span>
                    </div>
                  </div>

                  <div className='border-t border-gray-100 pt-6 mt-6'>
                    <h4 className='text-lg font-semibold text-gray-900 mb-4'>
                      What's Included:
                    </h4>
                    <ul className='space-y-3'>
                      {selectedService.options
                        .split(',')
                        .map((option, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className='flex items-start space-x-3'
                          >
                            <svg
                              className='w-5 h-5 text-pink-500 mt-1'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                clipRule='evenodd'
                              />
                            </svg>
                            <span className='text-gray-600'>
                              {option.trim()}
                            </span>
                          </motion.li>
                        ))}
                    </ul>
                  </div>

                  <div className='pt-6'>
                    <a
                      href='/contact_us'
                      className='inline-flex items-center px-6 py-3 text-base font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors duration-300'
                    >
                      Book This Service
                      <motion.svg
                        className='ml-2 w-5 h-5'
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </motion.svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
