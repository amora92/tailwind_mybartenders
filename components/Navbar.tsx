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
    <nav className='fixed top-0 left-0 right-0 z-30 bg-white shadow-md mb-5'>
      <div className='max-container flex items-center justify-between py-5'>
        <Link href='/'>
          <Image src='/pineapple.svg' alt='logo' width={74} height={29} />
        </Link>

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
            className='cursor-pointer'
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-white lg:hidden shadow-md'>
          <ul
            className='flex flex-col items-center gap-4 py-4'
            style={{ paddingRight: '10px' }}
          >
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
