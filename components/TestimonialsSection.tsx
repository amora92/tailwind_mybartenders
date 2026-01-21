'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: 'The attention to detail was extraordinary. Each cocktail was a masterpiece - from the hand-carved ice to the carefully selected garnishes. Our corporate event was elevated beyond expectations.',
    author: 'Jeff Davidson',
    role: 'Marketing Director',
    company: 'London Tech Summit',
    image: '/testimonial-1.webp'
  },
  {
    id: 2,
    rating: 5,
    quote: "The bespoke menu they created for my wife's 40th matched our theme perfectly. The molecular mixology demonstrations were the highlight - smoking cocktails had everyone amazed.",
    author: 'Richard Lawrence',
    role: 'Private Client',
    company: 'Northamptonshire',
    image: '/testimonial-2.webp'
  },
  {
    id: 3,
    rating: 5,
    quote: "Their mixology masterclass was transformative. I learned professional techniques and insider tips. Now I'm confident creating signature cocktails for my own events.",
    author: 'Karen Griffiths',
    role: 'Event Planner',
    company: 'Celebrations London',
    image: '/testimonial-3.webp'
  },
  {
    id: 4,
    rating: 5,
    quote: 'From the initial consultation to the last drink served, everything was flawless. Our wedding guests are still talking about the champagne tower and signature cocktails.',
    author: 'Sarah & James',
    role: 'Wedding Clients',
    company: 'Milton Keynes',
    image: '/testimonial-4.webp'
  }
]

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className='relative py-16 sm:py-24 lg:py-32 bg-gray-50 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-50 to-transparent' />
      <div className='absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-100/30 rounded-full blur-3xl' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-3xl mb-10 sm:mb-16 lg:mb-20'
        >
          <span className='inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-4 sm:mb-6'>
            Client Stories
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6'>
            Trusted by Hundreds of
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500'>
              Happy Clients
            </span>
          </h2>
          <p className='text-lg sm:text-xl text-gray-700'>
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center'>
          {/* Testimonial Content */}
          <div className='relative overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='space-y-6 sm:space-y-8'
              >
                {/* Quote icon */}
                <svg className='w-12 h-12 sm:w-16 sm:h-16 text-pink-200' fill='currentColor' viewBox='0 0 32 32'>
                  <path d='M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z' />
                </svg>

                {/* Stars */}
                <div className='flex gap-1'>
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className='w-5 h-5 sm:w-6 sm:h-6 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className='text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-900 leading-relaxed'>
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className='flex items-center gap-3 sm:gap-4'>
                  <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0'>
                    {testimonials[activeIndex].author.charAt(0)}
                  </div>
                  <div className='min-w-0'>
                    <p className='font-semibold text-gray-900 text-base sm:text-lg truncate'>{testimonials[activeIndex].author}</p>
                    <p className='text-gray-600 text-sm sm:text-base truncate'>{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className='flex items-center gap-3 sm:gap-4 mt-8 sm:mt-12'>
              <button
                onClick={prevTestimonial}
                className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-700 hover:border-pink-500 hover:text-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 flex-shrink-0'
                aria-label='Previous testimonial'
              >
                <svg className='w-4 h-4 sm:w-5 sm:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-700 hover:border-pink-500 hover:text-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 flex-shrink-0'
                aria-label='Next testimonial'
              >
                <svg className='w-4 h-4 sm:w-5 sm:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
              <div className='flex gap-2 ml-2 sm:ml-4 flex-wrap'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 sm:h-3 min-w-[10px] sm:min-w-[12px] rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                      index === activeIndex ? 'w-6 sm:w-8 bg-pink-500' : 'w-2.5 sm:w-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Stats/Trust side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='relative'
          >
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12'>
              {/* Client rating highlight */}
              <div className='text-center mb-8 sm:mb-10'>
                <div className='inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-4 sm:mb-6'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <span className='text-white/80 text-xs sm:text-sm font-medium'>Client Reviews</span>
                </div>
                <div className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2'>5.0</div>
                <div className='flex justify-center gap-1 mb-3 sm:mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className='w-5 h-5 sm:w-6 sm:h-6 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <p className='text-white/60 text-sm sm:text-base'>Based on 100+ reviews</p>
              </div>

              {/* Mini testimonials */}
              <div className='space-y-3 sm:space-y-4'>
                {testimonials.slice(0, 3).map((t, i) => (
                  <div
                    key={t.id}
                    className={`p-3 sm:p-4 rounded-xl transition-all cursor-pointer ${
                      i === activeIndex
                        ? 'bg-white/10 border border-white/20'
                        : 'hover:bg-white/5'
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <div className='flex items-center gap-2 sm:gap-3'>
                      <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0'>
                        {t.author.charAt(0)}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <p className='text-white font-medium text-sm sm:text-base truncate'>{t.author}</p>
                        <p className='text-white/50 text-xs sm:text-sm truncate'>{t.company}</p>
                      </div>
                      <div className='flex gap-0.5 flex-shrink-0'>
                        {[...Array(5)].map((_, j) => (
                          <svg key={j} className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
