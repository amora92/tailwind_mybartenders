import React from 'react'

const VideoSection = () => {
  return (
    <section className='relative w-full h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3'>
      <div className='video-docker relative w-full h-full'>
        <video
          className='absolute inset-0 w-full h-full object-cover'
          src='/VID-20240224-WA0011.mp4'
          type='video/mp4'
          autoPlay
          muted
          loop
        ></video>
        <div className='absolute inset-0 bg-black opacity-60'></div>
      </div>
      <div className='video-content absolute inset-0 flex items-center justify-center z-10'>
        <div className='text-center space-y-2'>
          <h1 className='font-light text-6xl'>Welcome</h1>
          <h3 className='font-light text-3xl'>with TailwindCSS</h3>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
