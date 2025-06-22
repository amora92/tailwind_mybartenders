'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageRotator from '@/components/Image_Rotator'

const ServicesSection = () => {
  const services = [
    {
      title: 'Masterclass',
      description:
        'Experience our cocktail masterclass led by expert mixologists. Perfect for corporate team building, private parties, and enthusiasts looking to master the art of mixology. Learn techniques, history, and secrets behind classic and contemporary cocktails.',
      image: 'masterclass.webp',
      price: '£ Custom',
      options: [
        'Classic Cocktail Techniques',
        'Modern Mixology',
        'Molecular Cocktails',
        'Premium Spirit Education',
        'Garnishing Masterclass',
        'Bar Equipment Training',
        'Recipe Development',
        'Food Pairing'
      ],
      additionalInfo:
        'All premium ingredients, professional equipment, our stunning mobile bar, recipe cards, and certificates included.',
      capacity: 'Up to 50 participants',
      lengthOfService: 'Minimum 2 hours'
    },
    {
      title: 'Wedding',
      description:
        'Elevate your wedding with our luxury mobile bar service. Our expert mixologists create bespoke cocktail experiences that perfectly complement your special day. From champagne towers to signature cocktails, we ensure unforgettable moments.',
      image: 'wedding.webp',
      price: '£ Custom',
      options: [
        'Luxury Mobile Bar Setup',
        'Champagne Tower Service',
        'Bride & Groom Signature Cocktails',
        'Premium Spirit Selection',
        'Professional Mixologists',
        'Glassware & Ice',
        'Custom Menu Design',
        'Late Night Service'
      ],
      additionalInfo:
        'Full event planning support, custom branding, and premium bar setup included.',
      capacity: 'Up to 250 guests',
      lengthOfService: 'Full day service available'
    },
    {
      title: 'Tasting Session',
      description:
        'Discover finest cocktail experiences through our expert-guided tasting sessions. From rare spirits to innovative cocktail flights, our mixologists guide you through a journey of flavors, techniques, and stories. Perfect for connoisseurs, team events, and special celebrations.',
      image: 'closeup.webp',
      price: '£ Custom',
      options: [
        'Premium Spirit Tasting',
        'Craft Cocktail Flights',
        'Food & Cocktail Pairing',
        'Rare & Exclusive Spirits',
        'Interactive Mixology Sessions',
        'Blind Tasting Experiences',
        'Spirit Education',
        'Take-Home Tasting Notes'
      ],
      additionalInfo:
        'Professional tasting guidance, premium glassware, tasting mats, detailed spirit information packs, and light refreshments included. Optional take-home gift packs available.',
      capacity: 'Up to 30 participants',
      lengthOfService: 'Minimum 3 hours'
    },
    {
      title: 'Private Party',
      description:
        "Transform your private party into an extraordinary experience with our bespoke cocktail services. Whether it's an intimate gathering or a grand celebration, our expert mixologists create a perfect blend of drinks, entertainment, and sophistication.",
      image: 'party_cocktails.webp',
      price: '£ Custom',
      options: [
        'Welcome Drinks',
        'Signature Cocktails',
        'Premium Spirit Selection',
        'Molecular Mixology',
        'Interactive Cocktail Stations',
        'Shot Experiences',
        'Champagne Service',
        'Custom Menu Design',
        'Late Night Service'
      ],
      additionalInfo:
        'Full mobile bar setup, premium glassware, professional bartenders, all ingredients, ice, garnishes, and bar equipment included. Custom branding and themed decorations available.',
      capacity: 'Up to 250 guests',
      lengthOfService: 'Minimum 4 hours'
    },
    {
      title: 'Birthday Party',
      description:
        'Make your birthday celebration unforgettable with our exclusive cocktail service. We create a vibrant atmosphere with stunning cocktails, interactive experiences, and professional service. From sophisticated soirées to high-energy parties, we customize every detail.',
      image: 'birthday.webp',
      price: '£ Custom',
      options: [
        'Birthday Signature Cocktails',
        'Shot Experiences',
        'Cocktail Making Games',
        'Premium Spirit Packages',
        'Champagne Towers',
        'Interactive Stations',
        'Custom Menu Design',
        'Party Packages',
        'VIP Service'
      ],
      additionalInfo:
        'Complete bar setup, professional mixologists, party props, birthday-themed decorations, custom menus, and premium ingredients included. Special birthday cocktail creation service available.',
      capacity: 'Up to 200 guests',
      lengthOfService: 'Minimum 4 hours'
    },
    {
      title: 'Corporate Event',
      description:
        "Elevate your corporate event with our professional cocktail services. From client entertainment to team celebrations, we deliver sophisticated drinking experiences that reflect your brand's excellence. Our corporate packages combine premium service with meticulous attention to detail.",
      image: 'corporate.webp',
      price: '£ Custom',
      options: [
        'Branded Cocktail Experiences',
        'Corporate Packages',
        'Premium Bar Service',
        'Interactive Mixology',
        'International Spirit Selection',
        'Champagne Reception',
        'Business Lunch Packages',
        'Evening Entertainment'
      ],
      additionalInfo:
        'Full event planning support, branded glassware options, corporate styling, professional staff in formal attire, custom menu development, and complete setup/breakdown service. Photography and video services available.',
      capacity: 'Up to 500 guests',
      lengthOfService: 'Flexible duration to suit your schedule'
    }
  ]

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0)

  const handleServiceChange = index => {
    setSelectedServiceIndex(index)
  }

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
    <section className='relative'>
      {/* Image Rotator Section */}
      <div className='container mx-auto px-2 md:px-4 lg:px-6'>
        <div className='container mx-auto px-4 lg:px-6 py-8 flex flex-col items-center'>
          <ImageRotator />
        </div>
      </div>

      {/* Services Section */}
      <div className='py-12 lg:py-16 bg-gray-50'>
        <h1 className='sr-only'>Professional Cocktail and Bar Services</h1>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='max-w-4xl mx-auto text-center mb-16 lg:mb-20'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='space-y-6'
            >
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight'>
                Our Services
              </h2>
              <p className='text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
                From intimate gatherings to grand celebrations, we offer bespoke
                bar services tailored to your unique event needs.
              </p>
              <div className='w-24 h-1 bg-pink-500 mx-auto rounded-full'></div>
            </motion.div>
          </div>

          {/* Service Selector Buttons */}
          <div className='max-w-6xl mx-auto mb-12'>
            <motion.div
              className='flex flex-wrap justify-center gap-3 md:gap-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.button
                  key={service.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === selectedServiceIndex
                      ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25'
                      : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600 shadow-md'
                  }`}
                  onClick={() => handleServiceChange(index)}
                >
                  {service.title}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Main Content */}
          <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='relative'
              >
                <div className='relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl'>
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={selectedServiceIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      src={selectedService.image}
                      alt={`${selectedService.title} - Professional Cocktail Service`}
                      className='w-full h-full object-cover'
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <div className='absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between'>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrevService}
                      className='p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 group'
                      aria-label='Previous service'
                    >
                      <svg
                        className='w-6 h-6 transition-transform group-hover:-translate-x-0.5'
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
                      whileTap={{ scale: 0.9 }}
                      onClick={handleNextService}
                      className='p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 group'
                      aria-label='Next service'
                    >
                      <svg
                        className='w-6 h-6 transition-transform group-hover:translate-x-0.5'
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

                  {/* Service Indicator Dots */}
                  <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2'>
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleServiceChange(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === selectedServiceIndex
                            ? 'bg-white w-8'
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                        aria-label={`Go to ${services[index].title}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100'
              >
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={selectedServiceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className='space-y-6'
                  >
                    <div>
                      <h3 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                        {selectedService.title}
                      </h3>
                      <p className='text-lg text-gray-700 leading-relaxed'>
                        {selectedService.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div className='grid sm:grid-cols-2 gap-4 py-6 border-y border-gray-100'>
                      <div className='flex items-center space-x-3 text-pink-600'>
                        <svg
                          className='w-5 h-5 flex-shrink-0'
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
                        <span className='font-medium text-gray-900'>
                          {selectedService.lengthOfService}
                        </span>
                      </div>
                      <div className='flex items-center space-x-3 text-pink-600'>
                        <svg
                          className='w-5 h-5 flex-shrink-0'
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
                        <span className='font-medium text-gray-900'>
                          {selectedService.capacity}
                        </span>
                      </div>
                    </div>

                    {/* Options */}
                    <div>
                      <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                        What's Included:
                      </h4>
                      <div className='grid sm:grid-cols-2 gap-2'>
                        {selectedService.options.map((option, index) => (
                          <motion.div
                            key={`${selectedServiceIndex}-${index}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className='flex items-start space-x-3'
                          >
                            <svg
                              className='w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                clipRule='evenodd'
                              />
                            </svg>
                            <span className='text-gray-700 text-sm'>
                              {option}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className='bg-pink-50 rounded-xl p-6'>
                      <p className='text-gray-700 text-sm leading-relaxed'>
                        <strong className='text-pink-700'>
                          Additional Information:
                        </strong>{' '}
                        {selectedService.additionalInfo}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className='pt-4'>
                      <motion.a
                        href='/contact_us'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl group'
                      >
                        Book This Service
                        <motion.svg
                          className='ml-3 w-5 h-5'
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
                      </motion.a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
