import React from 'react'

const Overlay_Cta = () => {
  return (
    <div
      className='hero min-h-screen bg-cover bg-center'
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-neutral-content text-center flex items-center justify-center h-full'>
        <div className='max-w-md p-4 bg-white bg-opacity-80 rounded-lg shadow-lg'>
          <h1 className='mb-4 text-3xl sm:text-4xl font-bold'>Hello there</h1>
          <p className='mb-4 text-base sm:text-lg'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary px-6 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Overlay_Cta
