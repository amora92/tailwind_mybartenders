'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 9 // Update this to the actual number of slides
  const slideInterval = 3000 // Change slide every 3 seconds

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
    <div className='relative overflow-hidden'>
      <div
        className='flex transition-transform duration-500'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className='w-full flex-shrink-0'>
            <Image
              src={image.src}
              className='w-full h-auto rounded-lg'
              alt={image.alt}
              loading='lazy' // Defer loading until near viewport
              width={800} // Use actual image width
              height={600} // Use actual image height
            />
          </div>
        ))}
      </div>
      <div className='absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2'>
        <button
          className='btn btn-circle bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-lime-600 text-white'
          onClick={() =>
            goToSlide((currentSlide - 1 + totalSlides) % totalSlides)
          }
        >
          ❮
        </button>
        <button
          className='btn btn-circle bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-lime-600 text-white'
          onClick={() => goToSlide((currentSlide + 1) % totalSlides)}
        >
          ❯
        </button>
      </div>
    </div>
  )
}

export default Carousel
