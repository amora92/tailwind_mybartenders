import React from 'react'
import styles from './VideoSection.module.css'

const VideoSection = () => {
  return (
    <section className='relative w-full h-screen overflow-hidden flex items-center justify-center text-center text-white'>
      <div className={styles.videoContainer}>
        <video
          src='/Branding_video_2.mp4'
          type='video/mp4'
          autoPlay
          muted
          loop
          playsInline // Ensures video is played inline on iOS
          preload='auto' // Preload video for smoother playback
        ></video>
      </div>
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <div className='text-center space-y-2'>
          <h1 className='text-4xl font-semibold tracking-tighter text-white lg:text-5xl text-balance'>
            Mobile Bar Hire, Mixology, Weddings, Masterclass -
            <span className='text-white'> Northampton & Nationwide</span>
          </h1>
          <p className='w-1/2 mx-auto mt-4 lg:pt-5 lg:pb-5 text-base font-medium text-white text-balance'>
            We cater to all drinks events.
          </p>
          <h3 className='font-light text-3xl'>
            Fine Cocktails & Bespoke Event Solutions
          </h3>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
