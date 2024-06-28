'use client'

import React, { useEffect, useState } from 'react'

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

  return (
    <div className='relative overflow-hidden'>
      <div
        className='flex transition-transform duration-500'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className='w-full flex-shrink-0'>
          <img
            src='/IMG-20240224-WA0034.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 1'
          />
        </div>
        <div className='w-full flex-shrink-0'>
          <img
            src='/IMG-20240224-WA0057.jpg'
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
            src='/IMG-20240224-WA0058.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 4'
          />
        </div>
        <div className='w-full flex-shrink-0'>
          <img
            src='/IMG-20240224-WA0047.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 5'
          />
        </div>
        <div className='w-full flex-shrink-0'>
          <img
            src='/IMG-20240224-WA0043.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 6'
          />
        </div>
        <div className='w-full flex-shrink-0'>
          <img
            src='/IMG-20240224-WA0053.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 7'
          />
        </div>
        <div className='w-full flex-shrink-0'>
          <img
            src='/IMG-20240224-WA0054.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 8'
          />
        </div>
        <div className='w-full flex-shrink-0'>
          <img
            src='/cocktail1_spritzer.jpg'
            className='w-4/5 mx-auto rounded-lg overflow-hidden'
            alt='Slide 9'
          />
        </div>
      </div>
      <div className='absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2'>
        <button
          className='btn btn-circle bg-lime-400 hover:bg-lime-600 text-white'
          onClick={() =>
            goToSlide((currentSlide - 1 + totalSlides) % totalSlides)
          }
        >
          ❮
        </button>
        <button
          className='btn btn-circle bg-lime-400 hover:bg-lime-500 text-white'
          onClick={() => goToSlide((currentSlide + 1) % totalSlides)}
        >
          ❯
        </button>
      </div>
    </div>
  )
}

export default Carousel

// color scheme https://colorhunt.co/palette/ff8f8feef2969ade7b508d69
