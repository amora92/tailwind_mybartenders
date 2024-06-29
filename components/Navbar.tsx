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
      <div className='max-container flex items-center justify-between py-2'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image src='/pineapple.svg' alt='logo' width={74} height={29} />
          </Link>
          <p className='ml-2 text-lime-400 font-semibold text-lg'>
            mybartenders.co.uk
          </p>
        </div>

        <div className='hidden lg:flex gap-12'>
          {NAV_LINKS.map(link => (
            <Link
              href={link.href}
              key={link.key}
              className='regular-16 text-yellow-500 flex-center cursor-pointer pb-1.5 transition-all hover:text-mainButtons hover:font-bold'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='inline-block lg:hidden'>
          <Image
            src='/menu.svg'
            alt='menu'
            width={32}
            height={32}
            className='cursor-pointer mr-6' // Add right margin here
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div
          className='absolute top-full left-0 right-0 bg-white lg:hidden shadow-md'
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        >
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
