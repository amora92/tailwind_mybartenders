'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    src: '/wedding.webp',
    alt: 'Wedding cocktail service',
    span: 'col-span-2 row-span-2'
  },
  {
    src: '/FB_IMG_1563583948109.jpg',
    alt: 'Cocktail preparation',
    span: 'col-span-1 row-span-1'
  },
  {
    src: '/party_cocktails.webp',
    alt: 'Party cocktails',
    span: 'col-span-1 row-span-1'
  },
  {
    src: '/corporate.webp',
    alt: 'Corporate event bar',
    span: 'col-span-1 row-span-2'
  },
  {
    src: '/masterclass.webp',
    alt: 'Cocktail masterclass',
    span: 'col-span-1 row-span-1'
  },
  {
    src: '/cocktail_foam.webp',
    alt: 'Signature cocktails',
    span: 'col-span-1 row-span-1'
  }
]

const GalleryPreview = () => {
  return (
    <section className='relative py-24 lg:py-32 bg-gray-950 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-3xl' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16 lg:mb-20'
        >
          <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
            Our Portfolio
          </span>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
            Moments We've
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'>
              Crafted Together
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            From intimate gatherings to grand celebrations, see how we bring
            your vision to life.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto'>
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${image.span}`}
            >
              <div className='relative w-full h-full min-h-[200px] md:min-h-[250px] rounded-2xl overflow-hidden'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                  sizes='(max-width: 768px) 50vw, 25vw'
                />
                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Hover content */}
                <div className='absolute inset-0 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div>
                    <p className='text-white font-medium text-sm md:text-base'>
                      {image.alt}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className='absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center mt-12 lg:mt-16'
        >
          <a
            href='/gallery'
            className='inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors group'
          >
            View Full Gallery
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
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryPreview
