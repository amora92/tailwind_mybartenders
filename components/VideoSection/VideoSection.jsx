'use client'

import React, { useCallback, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './VideoSection.module.css'
import { COMPANY_STATS, SITE_IMAGES } from '@/constants/siteConfig'

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const videoRef = useRef(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Ensure video plays on mount with intersection observer for performance
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Use requestIdleCallback for non-critical video playback
      const startVideo = () => {
        video.play().catch(() => {
          setIsVideoLoaded(true)
        })
      }

      if ('requestIdleCallback' in window) {
        requestIdleCallback(startVideo)
      } else {
        setTimeout(startVideo, 100)
      }
    }
  }, [])

  const scrollToNextSection = useCallback(() => {
    const nextSection = document.getElementById('next-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Subtle parallax effect on mouse move - only on non-touch devices with motion enabled
  useEffect(() => {
    // Skip parallax on mobile or if user prefers reduced motion
    if (prefersReducedMotion) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [prefersReducedMotion])

  return (
    <section className='relative w-full min-h-screen overflow-hidden flex items-center justify-center'>
      {/* Video Background with Parallax */}
      <div className={`${styles.videoContainer} bg-black`}>
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className='absolute inset-[-20px]'
        >
          {/* Poster image for instant FCP */}
          <div
            className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black'
            style={{
              opacity: isVideoLoaded ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
              zIndex: isVideoLoaded ? 0 : 1
            }}
          />
          <video
            ref={videoRef}
            src={SITE_IMAGES.heroVideo}
            type='video/mp4'
            autoPlay
            muted
            loop
            playsInline
            preload='none'
            onLoadedData={() => setIsVideoLoaded(true)}
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            className='w-full h-full object-cover brightness-[0.4] saturate-[1.2]'
            style={{
              opacity: isVideoLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out'
            }}
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none' />
        <div className='absolute inset-0 bg-gradient-to-r from-pink-900/20 via-transparent to-amber-900/20 pointer-events-none' />
      </div>

      {/* Decorative Elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none' />

      {/* Content */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
            className='text-left'
          >
            {/* Badge */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8'
            >
              <span className='relative flex h-2 w-2'>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-pink-500'></span>
              </span>
              <span className='text-sm font-medium text-white/90'>Northampton's Premier Mobile Bar</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6'>
              Spectacular Cocktails.
              <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300'>
                Unforgettable Events.
              </span>
            </h1>

            {/* Subheadline */}
            <p className='text-xl text-white/70 max-w-xl mb-10 leading-relaxed'>
              Experienced mixologists bringing exceptional cocktail experiences to weddings, corporate events, and private celebrations across the UK.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <motion.a
                href='/contact_us'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300'
              >
                Get Your Free Quote
                <svg
                  className='w-5 h-5 transition-transform group-hover:translate-x-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </motion.a>
              <motion.a
                href='/gallery'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule='evenodd' />
                </svg>
                View Our Work
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.4 }}
            className='hidden lg:grid grid-cols-2 gap-4'
          >
            {[
              { number: COMPANY_STATS.yearsExperience, label: 'Years Experience', icon: '🏆' },
              { number: COMPANY_STATS.eventsServed, label: 'Events Served', icon: '🎉' },
              { number: COMPANY_STATS.cocktailsMade, label: 'Cocktails Made', icon: '🍸' },
              { number: COMPANY_STATS.googleRating, label: 'Client Rating', icon: '⭐' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.6 + index * 0.1 }}
                className='group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'
              >
                <span className='text-3xl mb-3 block'>{stat.icon}</span>
                <div className='text-3xl font-bold text-white mb-1'>{stat.number}</div>
                <div className='text-sm text-white/60'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 1 }}
          className='mt-16 pt-8 border-t border-white/10'
        >
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-8 text-white/60 text-sm'>
            {/* Trust Indicators with enhanced checkmarks */}
            <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-6'>
              {[
                { label: 'Professional Service', delay: 0 },
                { label: 'Experienced Team', delay: 0.1 },
                { label: 'UK Nationwide', delay: 0.2 }
              ].map((item, index) => (
                <motion.span
                  key={item.label}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 1.2 + item.delay }}
                  className='flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10'
                >
                  <span className='relative flex-shrink-0'>
                    <svg className='relative w-4 h-4 text-emerald-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                  </span>
                  <span className='whitespace-nowrap'>{item.label}</span>
                </motion.span>
              ))}
            </div>
            {/* Star Rating */}
            <div className='flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-full border border-white/10'>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className='w-4 h-4 text-amber-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
              <span className='ml-2 whitespace-nowrap'>{COMPANY_STATS.googleRating} Client Rating</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Enhanced for mobile touch */}
      <motion.button
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.5 }}
        onClick={scrollToNextSection}
        onTouchEnd={(e) => {
          e.preventDefault()
          scrollToNextSection()
        }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white active:text-white transition-colors group cursor-pointer touch-manipulation'
        aria-label='Scroll to next section'
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <div className='flex flex-col items-center gap-2 p-4 -m-4'>
          <span className='text-xs font-medium uppercase tracking-widest opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity text-white/70'>
            Discover More
          </span>
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={prefersReducedMotion ? {} : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className='w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 active:bg-white/30 transition-colors'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
            </svg>
          </motion.div>
        </div>
      </motion.button>
    </section>
  )
}

export default VideoSection
