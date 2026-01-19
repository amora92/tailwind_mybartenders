'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Your Perfect Day, Perfectly Served',
    description: 'From champagne towers to signature cocktails named after the happy couple, we create magical moments that your guests will remember forever.',
    image: '/wedding.webp',
    features: ['Bespoke cocktail menu design', 'Champagne tower service', 'Premium bar setup', 'Full day coverage'],
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    subtitle: 'Impress Your Clients & Team',
    description: 'Elevate your brand with sophisticated cocktail experiences. From product launches to annual celebrations, we deliver excellence.',
    image: '/corporate.webp',
    features: ['Branded cocktail experiences', 'Professional uniformed staff', 'Flexible packages', 'Large-scale capability'],
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'parties',
    title: 'Private Parties',
    subtitle: 'Celebrations Made Extraordinary',
    description: 'Birthday milestones, anniversaries, or just because - transform your gathering into an unforgettable experience.',
    image: '/party_cocktails.webp',
    features: ['Interactive cocktail stations', 'Custom themed menus', 'Premium spirits selection', 'Flexible venue setup'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'masterclass',
    title: 'Masterclasses',
    subtitle: 'Learn from the Experts',
    description: 'Hands-on mixology experiences perfect for team building, hen parties, or anyone wanting to master the art of cocktail making.',
    image: '/masterclass.webp',
    features: ['Professional instruction', 'All equipment provided', 'Take-home recipes', 'Competition formats available'],
    color: 'from-emerald-500 to-teal-600'
  }
]

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0)
  const service = services[activeService]

  return (
    <section id='next-section' className='relative py-24 lg:py-32 bg-gray-950 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16 lg:mb-20'
        >
          <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
            Our Services
          </span>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
            Tailored to Your
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'>
              Perfect Event
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Every celebration deserves exceptional service. Choose your experience.
          </p>
        </motion.div>

        {/* Service Selector Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-16'
        >
          {services.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setActiveService(index)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeService === index
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'
              }`}
            >
              {activeService === index && (
                <motion.div
                  layoutId='activeService'
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${s.color}`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className='relative z-10'>{s.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Service Content */}
        <div className='max-w-7xl mx-auto'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'
            >
              {/* Image */}
              <div className='relative'>
                <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-3xl blur-2xl opacity-20`} />
                <div className='relative aspect-[4/3] rounded-2xl overflow-hidden'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent' />

                  {/* Floating Badge */}
                  <div className='absolute bottom-6 left-6 right-6'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20'>
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span className='text-white text-sm font-medium'>{service.subtitle}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='space-y-8'>
                <div>
                  <h3 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
                    {service.title}
                  </h3>
                  <p className='text-lg text-gray-400 leading-relaxed'>
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className='flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5'
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                        <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </div>
                      <span className='text-gray-300 text-sm'>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                  <a
                    href='/contact_us'
                    className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg`}
                  >
                    Book This Service
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                  </a>
                  <a
                    href='/services'
                    className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors'
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
