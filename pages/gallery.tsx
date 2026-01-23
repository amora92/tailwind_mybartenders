'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { SEO_DEFAULTS } from '@/constants/brandStyles'
import { GALLERY_IMAGES, getBookingYear, COMPANY_STATS, TRUST_INDICATORS } from '@/constants/siteConfig'

// ===========================================
// TYPES
// ===========================================

interface GalleryImage {
  src: string
  alt: string
  category: 'cocktails' | 'events' | 'setup'
  span?: string
  _id?: string
}

const categories = [
  { id: 'all', name: 'All', icon: '✦' },
  { id: 'cocktails', name: 'Cocktails', icon: '🍸' },
  { id: 'events', name: 'Events', icon: '🎉' },
  { id: 'setup', name: 'Bar Setup', icon: '🍾' }
]

// ===========================================
// ANIMATIONS
// ===========================================

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

// ===========================================
// STRUCTURED DATA FOR SEO (base template - images added in component)
// ===========================================

const getStructuredData = (images: GalleryImage[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'MyBartenders Mobile Bar Gallery',
  description:
    'Explore our portfolio of premium mobile bar services, signature cocktails, and professional event bartending across Northampton and the UK.',
  url: `${SEO_DEFAULTS.siteUrl}/gallery`,
  publisher: {
    '@type': 'Organization',
    name: SEO_DEFAULTS.siteName,
    url: SEO_DEFAULTS.siteUrl
  },
  image: images.map(img => ({
    '@type': 'ImageObject',
    contentUrl: `${SEO_DEFAULTS.siteUrl}${img.src}`,
    description: img.alt
  }))
})

// ===========================================
// COMPONENT
// ===========================================

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dbImages, setDbImages] = useState<GalleryImage[]>([])

  // Fetch database images on mount
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const res = await fetch('/api/gallery')
        const data = await res.json()
        if (Array.isArray(data)) {
          setDbImages(data)
        }
      } catch (error) {
        console.error('Error fetching gallery images:', error)
      }
    }
    fetchGalleryImages()
  }, [])

  // Combine static and database images
  const galleryImages: GalleryImage[] = [...GALLERY_IMAGES, ...dbImages]

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory)

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
    setCurrentIndex(filteredImages.indexOf(image))
  }

  const navigateImage = useCallback(
    (direction: 'prev' | 'next') => {
      if (!selectedImage) return

      let newIndex: number
      if (direction === 'prev') {
        newIndex =
          currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
      } else {
        newIndex =
          currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
      }

      setSelectedImage(filteredImages[newIndex])
      setCurrentIndex(newIndex)
    },
    [selectedImage, currentIndex, filteredImages]
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === 'ArrowLeft') navigateImage('prev')
      if (e.key === 'ArrowRight') navigateImage('next')
      if (e.key === 'Escape') setSelectedImage(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, navigateImage])

  return (
    <>
      <Head>
        <title>
          Mobile Bar Gallery | Cocktails & Events | MyBartenders UK
        </title>
        <meta
          name='description'
          content='Browse our stunning gallery of mobile bar services, signature cocktails, and professional event bartending. See our work at weddings, corporate events, and private parties across Northampton and the UK.'
        />
        <meta
          name='keywords'
          content='mobile bar gallery, cocktail photos, event bartending, bar hire portfolio, wedding bar, corporate events, Northampton mobile bar, UK bartender hire'
        />
        <link rel='canonical' href={`${SEO_DEFAULTS.siteUrl}/gallery`} />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Mobile Bar Gallery | MyBartenders UK'
        />
        <meta
          property='og:description'
          content='Explore our portfolio of premium mobile bar services and signature cocktails.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${SEO_DEFAULTS.siteUrl}/gallery`} />
        <meta
          property='og:image'
          content={`${SEO_DEFAULTS.siteUrl}/IMG-20240224-WA0027.webp`}
        />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Mobile Bar Gallery | MyBartenders UK'
        />
        <meta
          name='twitter:description'
          content='Explore our portfolio of premium mobile bar services and signature cocktails.'
        />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData(galleryImages)) }}
        />

        {/* Preload first image */}
        {galleryImages.length > 0 && (
          <link
            rel='preload'
            href={galleryImages[0].src}
            as='image'
            type='image/webp'
          />
        )}
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gray-950 overflow-hidden'>
          {/* Background Elements */}
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />
          <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center max-w-4xl mx-auto'
            >
              {/* Badge */}
              <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                Our Portfolio
              </span>

              {/* Title */}
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                Crafted Moments,
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
                  Captured Forever
                </span>
              </h1>

              {/* Description */}
              <p className='text-xl text-gray-400 max-w-2xl mx-auto mb-8'>
                Explore our collection of signature cocktails, stunning bar
                setups, and unforgettable events. Every image tells a story of
                craftsmanship and celebration.
              </p>

              {/* Stats */}
              <div className='flex flex-wrap justify-center gap-8 lg:gap-12'>
                <div className='text-center'>
                  <div className='text-3xl lg:text-4xl font-bold text-white'>
                    {COMPANY_STATS.eventsServed}
                  </div>
                  <div className='text-sm text-gray-500'>Events Served</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl lg:text-4xl font-bold text-white'>
                    {COMPANY_STATS.cocktailsMade}
                  </div>
                  <div className='text-sm text-gray-500'>Cocktails Crafted</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl lg:text-4xl font-bold text-white'>
                    {COMPANY_STATS.googleRating}★
                  </div>
                  <div className='text-sm text-gray-500'>Client Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className='relative py-20 lg:py-28 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-gray-950 to-gray-950' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='flex flex-wrap justify-center gap-3 mb-12 lg:mb-16'
            >
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId='activeCategory'
                      className='absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600'
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className='relative z-10 flex items-center gap-2'>
                    <span>{category.icon}</span>
                    {category.name}
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Masonry Grid */}
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              animate='visible'
              className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-4 lg:gap-6 max-w-7xl mx-auto'
            >
              <AnimatePresence mode='popLayout'>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    layout
                    variants={imageVariants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`relative group cursor-pointer ${image.span || 'col-span-1 row-span-1'}`}
                    onClick={() => handleImageClick(image)}
                  >
                    <div className='relative w-full h-full rounded-2xl overflow-hidden'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                        sizes='(max-width: 768px) 50vw, 25vw'
                        loading={index < 4 ? 'eager' : 'lazy'}
                      />

                      {/* Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                      {/* Hover Content */}
                      <div className='absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <p className='text-white font-medium text-sm md:text-base line-clamp-2'>
                          {image.alt}
                        </p>
                        <span className='text-pink-400 text-xs mt-1 capitalize'>
                          {image.category}
                        </span>
                      </div>

                      {/* Corner Accents */}
                      <div className='absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      <div className='absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                      {/* View Icon */}
                      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100'>
                        <svg
                          className='w-5 h-5 text-white'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Gallery Info */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='text-center text-gray-500 text-sm mt-8'
            >
              Click any image to view full size • Use arrow keys to navigate
            </motion.p>
          </div>
        </section>

        {/* Features Section */}
        <section className='relative py-20 lg:py-28 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
              {/* Section Header */}
              <motion.div
                {...fadeInUp}
                viewport={{ once: true }}
                className='text-center mb-16'
              >
                <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                  What We Offer
                </span>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                  Every Event,
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'>
                    {' '}
                    Perfectly Served
                  </span>
                </h2>
              </motion.div>

              {/* Features Grid */}
              <div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
                {[
                  {
                    icon: '🍸',
                    title: 'Signature Cocktails',
                    description:
                      'Bespoke drink menus crafted to match your event theme and preferences.',
                    features: [
                      'Custom menu design',
                      'Premium spirits',
                      'Seasonal specials'
                    ]
                  },
                  {
                    icon: '🎪',
                    title: 'Full Event Service',
                    description:
                      'Complete mobile bar solutions from setup to cleanup.',
                    features: [
                      'Professional bartenders',
                      'Quality equipment',
                      'Flexible packages'
                    ]
                  },
                  {
                    icon: '⭐',
                    title: 'Premium Experience',
                    description:
                      'Exceptional service that elevates any celebration.',
                    features: [
                      'Weddings & parties',
                      'Corporate events',
                      'UK nationwide'
                    ]
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-colors'
                  >
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-r from-pink-500/20 to-amber-500/20 flex items-center justify-center text-2xl mb-6'>
                      {feature.icon}
                    </div>
                    <h3 className='text-xl font-semibold text-white mb-3'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-400 mb-6'>{feature.description}</p>
                    <ul className='space-y-2'>
                      {feature.features.map(item => (
                        <li
                          key={item}
                          className='flex items-center gap-2 text-gray-300 text-sm'
                        >
                          <svg
                            className='w-4 h-4 text-pink-400'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-24 lg:py-32 overflow-hidden'>
          {/* Background Image */}
          <div className='absolute inset-0'>
            <Image
              src='/FB_IMG_1563583948109.jpg'
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
                Want This at
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
                  Your Event?
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
                experience. Free consultation, no obligation.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex flex-col sm:flex-row gap-4 justify-center'
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
                  href='/services'
                  className='inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all text-lg'
                >
                  View Our Services
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-white/50 text-sm mt-12'
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

        {/* Lightbox Modal */}
        <Transition appear show={!!selectedImage} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-50'
            onClose={() => setSelectedImage(null)}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black/90 backdrop-blur-sm' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='relative transform overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all max-w-7xl w-full'>
                    {selectedImage && (
                      <>
                        {/* Navigation: Previous */}
                        <button
                          onClick={() => navigateImage('prev')}
                          className='absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-colors'
                          aria-label='Previous image'
                        >
                          <svg
                            className='h-6 w-6'
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
                        </button>

                        {/* Navigation: Next */}
                        <button
                          onClick={() => navigateImage('next')}
                          className='absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-colors'
                          aria-label='Next image'
                        >
                          <svg
                            className='h-6 w-6'
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
                        </button>

                        {/* Close Button */}
                        <button
                          onClick={() => setSelectedImage(null)}
                          className='absolute top-4 right-4 z-10 rounded-full bg-white/10 backdrop-blur-sm p-2 text-white hover:bg-white/20 transition-colors'
                          aria-label='Close lightbox'
                        >
                          <svg
                            className='h-6 w-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M6 18L18 6M6 6l12 12'
                            />
                          </svg>
                        </button>

                        {/* Image Counter */}
                        <div className='absolute top-4 left-4 z-10 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm'>
                          {currentIndex + 1} / {filteredImages.length}
                        </div>

                        {/* Image */}
                        <div className='relative p-4'>
                          <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={1200}
                            height={900}
                            className='max-h-[85vh] w-auto object-contain mx-auto rounded-lg'
                            priority
                          />
                        </div>

                        {/* Caption */}
                        <div className='p-4 pt-0 text-center'>
                          <p className='text-white font-medium'>
                            {selectedImage.alt}
                          </p>
                          <span className='text-pink-400 text-sm capitalize'>
                            {selectedImage.category}
                          </span>
                        </div>
                      </>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </main>

      <Footer />
    </>
  )
}

export default Gallery
