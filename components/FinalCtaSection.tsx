'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CONTACT_INFO } from '@/constants/contact'
import { getBookingYear, SITE_IMAGES, TRUST_INDICATORS } from '@/constants/siteConfig'

const FinalCtaSection = () => {
  return (
    <section className='relative py-24 lg:py-32 overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src={SITE_IMAGES.ctaBackground}
          alt='Background'
          fill
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80' />
      </div>

      {/* Decorative elements */}
      <div className='absolute top-20 right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl' />
      <div className='absolute bottom-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
            </span>
            <span className='text-white/90 text-sm font-medium'>
              Now Booking for {getBookingYear()}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'
          >
            Ready to Create Something
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
              Extraordinary?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl text-white/70 mb-10 max-w-2xl mx-auto'
          >
            Let's discuss your vision and craft an unforgettable cocktail
            experience for your next event. No obligation, just great
            conversation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
          >
            <a
              href='/contact_us'
              className='inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all text-lg group'
            >
              Get Your Free Quote
              <svg
                className='w-5 h-5 transition-transform group-hover:translate-x-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
            <a
              href={CONTACT_INFO.phoneHref}
              className='inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all text-lg'
            >
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
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
              Call Us Today
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-white/50 text-sm'
          >
            {TRUST_INDICATORS.map(item => (
              <div key={item} className='flex items-center gap-2'>
                <svg
                  className='w-5 h-5 text-green-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FinalCtaSection
