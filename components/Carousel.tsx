import React from 'react'

const Carousel = () => {
  return (
    <div className='carousel w-full'>
      <div id='slide1' className='carousel-item relative w-full'>
        <img
          src='/IMG-20240224-WA0004.jpg'
          className='w-4/5 mx-auto rounded-lg overflow-hidden'
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a
            href='#slide4'
            className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          >
            ❮
          </a>
          <a
            href='#slide2'
            className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          >
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <img
          src='/cocktail_glass_berries.jpg'
          className='w-4/5 mx-auto rounded-lg overflow-hidden'
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a
            href='#slide1'
            className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          >
            ❮
          </a>
          <a
            href='#slide3'
            className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          >
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <img
          src='cocktail_purple.jpg'
          className='w-4/5 mx-auto rounded-lg overflow-hidden'
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a
            href='#slide2'
            className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          >
            ❮
          </a>
          <a
            href='#slide4'
            className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          >
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='carousel-item relative w-full'>
        <img
          src='cocktail1_spritzer.jpg'
          className='w-4/5 mx-auto rounded-lg overflow-hidden'
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a
            href='#slide3'
            className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          >
            ❮
          </a>
          <a
            href='#slide1'
            className='btn btn-circle bg-blue-500 hover:bg-blue-600 text-white'
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default Carousel
