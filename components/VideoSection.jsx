import React from 'react'

const VideoSection = () => {
  return (
    <section className='relative w-full h-screen overflow-hidden flex items-center justify-center text-center text-white'>
      <div className='video-container relative w-full h-full'>
        <video
          className='absolute inset-0 object-cover w-full h-full'
          src='/Branding_video_2.mp4'
          type='video/mp4'
          autoPlay
          muted
          loop
          playsInline // Ensures video is played inline on iOS
          preload='auto' // Preload video for smoother playback
        ></video>
        <div className='absolute inset-0'></div>
      </div>
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <div className='text-center space-y-2'>
          <h1 class='text-4xl font-semibold tracking-tighter text-white lg:text-5xl text-balance'>
            Mobile Bar Hire, Mixology, Weddings, Masterclass -
            <span class='text-white'> Nationwide</span>
          </h1>
          <p class='w-1/2 mx-auto mt-4 lg:pt-5  lg:pb-5 text-base font-medium text-white text-balance'>
            Award Winning Service, Highly Experienced Staff
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
