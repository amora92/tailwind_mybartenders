'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-30 bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between py-2 px-2 md:px-4 lg:px-6'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image
              src='/mybartenders.co.uk_logo_svg.svg'
              alt='logo mybartenders.co.uk'
              width={29}
              height={40}
            />
          </Link>
          <p className='ml-2 text-grey-800 font-semibold'>mybartenders</p>
        </div>

        <div className='hidden lg:flex gap-6'>
          {NAV_LINKS.map(link => (
            <Link
              href={link.href}
              key={link.key}
              className='regular-16 text-nav_color_1 flex-center cursor-pointer pb-1.5 transition-all hover:text-mainButtons hover:font-bold'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='lg:hidden'>
          <Image
            src='/menu.svg'
            alt='menu'
            width={32}
            height={32}
            className='cursor-pointer'
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-white lg:hidden shadow-md px-4'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            {NAV_LINKS.map(link => (
              <Link
                href={link.href}
                key={link.key}
                className='regular-16 text-gray-900 cursor-pointer pb-1.5 transition-all hover:text-mainButtons hover:font-bold'
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
