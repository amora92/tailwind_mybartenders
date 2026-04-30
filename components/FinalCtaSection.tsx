import Image from 'next/image'
import { CONTACT_INFO } from '@/constants/contact'
import {
  getBookingYear,
  SITE_IMAGES,
  TRUST_INDICATORS
} from '@/constants/siteConfig'

const FinalCtaSection = () => {
  return (
    <section className='relative overflow-hidden py-24 lg:py-32'>
      <div className='absolute inset-0'>
        <Image
          src={SITE_IMAGES.ctaBackground}
          alt='Background'
          fill
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80' />
      </div>

      <div className='absolute top-20 right-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl' />
      <div className='absolute bottom-20 left-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm'>
            <span className='relative flex h-2 w-2'>
              <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
            </span>
            <span className='text-sm font-medium text-white/90'>
              Now Booking for {getBookingYear()}
            </span>
          </div>

          <h2 className='mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl'>
            Ready to Create Something
            <span className='block bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent'>
              Extraordinary?
            </span>
          </h2>

          <p className='mx-auto mb-10 max-w-2xl text-xl text-white/70'>
            Let&apos;s discuss your vision and craft an unforgettable cocktail
            experience for your next event. No obligation, just great
            conversation.
          </p>

          <div className='mb-12 flex flex-col justify-center gap-4 sm:flex-row'>
            <a
              href='/contact_us'
              className='group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-pink-500/30 transition-all hover:shadow-pink-500/50'
            >
              Get Your Free Quote
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
            <a
              href={CONTACT_INFO.phoneHref}
              className='inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
              Call Us Today
            </a>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-6 text-sm text-white/50 lg:gap-10'>
            {TRUST_INDICATORS.map(item => (
              <div key={item} className='flex items-center gap-2'>
                <svg
                  className='w-5 h-5 text-green-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCtaSection
