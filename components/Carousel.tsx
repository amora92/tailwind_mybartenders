'use client'

import React, { useEffect, useState } from 'react'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4 // Make sure this matches the actual number of slides
  const slideInterval = 3000 // Change slide every 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides)
    }, slideInterval)
    return () => clearInterval(interval)
  }, [totalSlides])

  const goToSlide = index => {
    setCurrentSlide(index)
  }

  return (
    <div className='relative overflow-hidden'>
      <div
        className='flex transition-transform duration-500'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className='w-full flex-shrink-0'>
          <img
            src='/IMG-20240224-WA0004.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 1'
          />
        </div>
        <div className='w-full flex-shrink-0'>
          <img
            src='/cocktail_glass_berries.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 2'
          />
        </div>
        <div className='w-full flex-shrink-0'>
          <img
            src='/cocktail_purple.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 3'
          />
        </div>
        <div className='w-full flex-shrink-0'>
          <img
            src='/cocktail1_spritzer.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 4'
          />
        </div>
      </div>
      <div className='absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2'>
        <button
          className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          onClick={() =>
            goToSlide((currentSlide - 1 + totalSlides) % totalSlides)
          }
        >
          ❮
        </button>
        <button
          className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          onClick={() => goToSlide((currentSlide + 1) % totalSlides)}
        >
          ❯
        </button>
      </div>
    </div>
  )
}

export default Carousel
