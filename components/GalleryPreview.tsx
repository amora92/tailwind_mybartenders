import Image from 'next/image'

const galleryImages = [
  {
    src: '/wedding.webp',
    alt: 'Wedding cocktail service',
    span: 'col-span-2 row-span-2'
  },
  {
    src: '/FB_IMG_1563583948109.jpg',
    alt: 'Cocktail preparation',
    span: 'col-span-1 row-span-1'
  },
  {
    src: '/party_cocktails.webp',
    alt: 'Party cocktails',
    span: 'col-span-1 row-span-1'
  },
  {
    src: '/corporate.webp',
    alt: 'Corporate event bar',
    span: 'col-span-1 row-span-2'
  },
  {
    src: '/masterclass.webp',
    alt: 'Cocktail masterclass',
    span: 'col-span-1 row-span-1'
  },
  {
    src: '/cocktail_foam.webp',
    alt: 'Signature cocktails',
    span: 'col-span-1 row-span-1'
  }
]

const GalleryPreview = () => {
  return (
    <section className='relative overflow-hidden bg-gray-950 py-24 lg:py-32'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
      <div className='absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-3xl' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center lg:mb-20'>
          <span className='mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-pink-400'>
            Our Portfolio
          </span>
          <h2 className='mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
            Moments We&apos;ve
            <span className='block bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent'>
              Crafted Together
            </span>
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-400'>
            From intimate gatherings to grand celebrations, see how we bring
            your vision to life.
          </p>
        </div>

        <div className='mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6'>
          {galleryImages.map(image => (
            <div
              key={image.src}
              className={`relative group cursor-pointer ${image.span}`}
            >
              <div className='relative h-full min-h-[200px] w-full overflow-hidden rounded-2xl md:min-h-[250px]'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading='lazy'
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                  sizes='(max-width: 768px) 50vw, 25vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

                <div className='absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-6'>
                  <div>
                    <p className='text-sm font-medium text-white md:text-base'>
                      {image.alt}
                    </p>
                  </div>
                </div>

                <div className='absolute top-4 right-4 h-8 w-8 rounded-tr-lg border-t-2 border-r-2 border-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                <div className='absolute bottom-4 left-4 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center lg:mt-16'>
          <a
            href='/gallery'
            className='group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 transition-colors hover:bg-gray-100'
          >
            View Full Gallery
            <svg
              className='w-5 h-5 transition-transform group-hover:translate-x-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview
