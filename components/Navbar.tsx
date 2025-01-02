'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-30 bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between py-2 px-4 md:px-6 lg:px-8'>
        <div className='flex items-center'>
          <Link
            href='/'
            className='flex items-center'
            aria-label='Return to homepage'
          >
            <Image
              src='/mybartenders.co.uk_logo_svg.svg'
              alt='logo mybartenders.co.uk'
              width={29}
              height={40}
              priority={true}
            />
            <span className='ml-2 text-gray-800 font-semibold'>
              mybartenders
            </span>
          </Link>
        </div>

        <div className='hidden lg:flex justify-center gap-6 flex-grow'>
          {NAV_LINKS.map(link => (
            <Link
              href={link.href}
              key={link.key}
              className='text-gray-600 hover:text-gold-600'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <Link
            href='/contact_us'
            className='group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] sm:p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75'
          >
            <span className='block rounded-full bg-white px-4 py-2 text-xs sm:px-8 sm:py-3 sm:text-sm font-medium group-hover:bg-transparent'>
              Get A Quote
            </span>
          </Link>
        </div>

        <button
          className='lg:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          <Image
            src='/menu.svg'
            alt='menu'
            width={32}
            height={32}
            className='cursor-pointer'
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-white lg:hidden shadow-md px-4'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            {NAV_LINKS.map(link => (
              <Link
                href={link.href}
                key={link.key}
                className='text-gray-600 hover:text-gold-600'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
