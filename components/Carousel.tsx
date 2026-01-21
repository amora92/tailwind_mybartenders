'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react'
import Image from 'next/image'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const totalSlides = 9
  const slideInterval = 3000

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Only auto-advance if reduced motion is not preferred and not paused
    if (prefersReducedMotion || isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides)
    }, slideInterval)
    return () => clearInterval(interval)
  }, [totalSlides, prefersReducedMotion, isPaused])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides)
  }, [totalSlides])

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        goToPrevSlide()
        break
      case 'ArrowRight':
        e.preventDefault()
        goToNextSlide()
        break
      case 'Home':
        e.preventDefault()
        goToSlide(0)
        break
      case 'End':
        e.preventDefault()
        goToSlide(totalSlides - 1)
        break
    }
  }, [goToPrevSlide, goToNextSlide, goToSlide, totalSlides])

  const images = [
    { src: '/IMG-20240224-WA0034.webp', alt: 'Absinthe Fountain Cocktail' },
    { src: '/IMG-20240224-WA0057.webp', alt: 'Layered Cinnamon White Russian' },
    { src: '/cocktail_purple.webp', alt: 'Purple Cocktail' },
    { src: '/IMG-20240224-WA0058.webp', alt: 'White Russian' },
    { src: '/IMG-20240224-WA0047.webp', alt: 'Absinthe Fountain Water Drop' },
    { src: '/IMG-20240224-WA0043.webp', alt: 'Absinthe Fountain Water' },
    { src: '/IMG-20240224-WA0053.webp', alt: 'White Russian Cocktail' },
    { src: '/IMG-20240224-WA0054.webp', alt: 'White Russian Cocktail Fire' },
    { src: '/cocktail1_spritzer.webp', alt: 'Sharing Cocktails' }
  ]

  return (
    <div
      ref={carouselRef}
      className='relative overflow-hidden group min-h-[800px] flex items-center'
      role='region'
      aria-label='Image carousel'
      aria-roledescription='carousel'
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className={`flex h-full ${prefersReducedMotion ? '' : 'transition-transform duration-500 ease-out'}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        aria-live='polite'
      >
        {images.map((image, index) => (
          <div
            key={index}
            className='w-full flex-shrink-0 relative'
            role='group'
            aria-roledescription='slide'
            aria-label={`Slide ${index + 1} of ${totalSlides}: ${image.alt}`}
            aria-hidden={currentSlide !== index}
          >
            <Image
              src={image.src}
              className='w-full h-auto rounded-2xl'
              alt={image.alt}
              width={800}
              height={600}
              {...(index === 0 ? { priority: true } : { loading: 'lazy' })}
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          className={`p-2 rounded-lg bg-pink-500/80 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 ${prefersReducedMotion ? '' : 'transition-opacity duration-300'} hover:bg-pink-600/80 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2`}
          onClick={goToPrevSlide}
          aria-label='Previous slide'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        <button
          className={`p-2 rounded-lg bg-pink-500/80 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 ${prefersReducedMotion ? '' : 'transition-opacity duration-300'} hover:bg-pink-600/80 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2`}
          onClick={goToNextSlide}
          aria-label='Next slide'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className='absolute bottom-4 left-0 right-0' role='tablist' aria-label='Slide indicators'>
        <div className='flex items-center justify-center gap-2 bg-black/20 backdrop-blur-sm py-2 mx-auto w-fit px-4 rounded-full'>
          {images.map((_, index) => (
            <button
              key={index}
              role='tab'
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${prefersReducedMotion ? '' : 'transition-all duration-300'} ${
                currentSlide === index
                  ? 'bg-pink-500 w-4'
                  : 'bg-white/50 hover:bg-pink-300'
              } focus:outline-none focus:ring-2 focus:ring-pink-500`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={currentSlide === index}
              tabIndex={currentSlide === index ? 0 : -1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
