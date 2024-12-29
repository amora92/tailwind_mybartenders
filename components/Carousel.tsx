'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 9
  const slideInterval = 3000

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides)
    }, slideInterval)
    return () => clearInterval(interval)
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

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
    <div className='relative overflow-hidden group min-h-[800px] flex items-center'>
      <div
        className='flex transition-transform duration-500 ease-out h-full'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className='w-full flex-shrink-0 relative'>
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
          className='p-2 rounded-lg bg-pink-500/80 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-600/80'
          onClick={() =>
            goToSlide((currentSlide - 1 + totalSlides) % totalSlides)
          }
          aria-label='Previous slide'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
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
          className='p-2 rounded-lg bg-pink-500/80 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-600/80'
          onClick={() => goToSlide((currentSlide + 1) % totalSlides)}
          aria-label='Next slide'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
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
      <div className='absolute bottom-4 left-0 right-0'>
        <div className='flex items-center justify-center gap-2 bg-black/20 backdrop-blur-sm py-2 mx-auto w-fit px-4 rounded-full'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-pink-500 w-4'
                  : 'bg-white/50 hover:bg-pink-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
