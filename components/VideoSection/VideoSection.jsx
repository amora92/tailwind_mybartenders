'use client' // This marks the component as a Client Component

import React, { useCallback } from 'react'
import styles from './VideoSection.module.css'

const VideoSection = () => {
  const scrollToNextSection = useCallback(() => {
    const nextSection = document.getElementById('next-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section className='relative w-full h-screen overflow-hidden flex items-center justify-center text-center text-white'>
      <div className={styles.videoContainer}>
        <video
          src='/Branding_Video_2.compressed.mp4'
          type='video/mp4'
          autoPlay
          muted
          loop
          playsInline
          preload='auto' // Use 'auto' for better loading behavior
          className='object-cover w-full h-full'
        />
      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center z-10 lg:space-y-8 p-8'>
        <div className='max-w-5xl text-center space-y-4'>
          <h1 className='md:text-4xl lg:mb-6 font-semibold tracking-tighter text-white lg:text-7xl leading-tight'>
            Mobile Bar, Mixology, Weddings, Cocktail Masterclasses, Hen Parties
            -<span className='text-yellow-400'> Northampton & Nationwide</span>
          </h1>
          <h2 className='lg:text-4xl md:text-4xl font-medium leading-tight'>
            Bringing You the Best Cocktail Experience
          </h2>
          <h3 className='font-light md:text-3xl lg:text-4xl leading-snug'>
            Fine Cocktails & Bespoke Event Solutions
          </h3>
          <h3 className='font-light md:text-3xl lg:text-4xl leading-snug'>
            <span className='font-semibold'>Phone:</span>{' '}
            <a className='text-yellow-400' href='tel:+4473655822959'>
              +44 7365 5822 959
            </a>
          </h3>
        </div>
        <div className='absolute bottom-8 flex items-center justify-center w-full'>
          <button
            onClick={scrollToNextSection}
            className='animate-bounce text-white hover:text-yellow-400 focus:outline-none'
            aria-label='Scroll to next section'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-12 h-12'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
