'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getCurrentYear } from '@/constants/siteConfig'
import { CONTACT_INFO } from '@/constants/contact'

const Footer = () => {
  const currentYear = getCurrentYear()

  const footerLinks = {
    services: [
      { label: 'Weddings', href: '/services#weddings' },
      { label: 'Corporate Events', href: '/services#corporate' },
      { label: 'Private Parties', href: '/services#parties' },
      { label: 'Masterclasses', href: '/services#masterclass' },
    ],
    company: [
      { label: 'About Us', href: '/aboutus' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Articles', href: '/articles' },
      { label: 'Contact', href: '/contact_us' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
  }

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/mybartenders.co.uk',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/mybartenders.co.uk',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@mybartenders.co.uk',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z' />
        </svg>
      ),
    },
  ]

  return (
    <footer className='relative bg-gray-950 overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl' />

      {/* Top border gradient */}
      <div className='h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent' />

      <div className='relative'>
        {/* Main Footer Content */}
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
            {/* Brand Column */}
            <div className='lg:col-span-1'>
              <Link href='/' className='inline-flex items-center gap-3 mb-6'>
                <Image
                  src='/mybartenders.co.uk_logo_svg.svg'
                  alt='MyBartenders Logo'
                  width={36}
                  height={50}
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(73%) sepia(47%) saturate(537%) hue-rotate(359deg) brightness(94%) contrast(84%)'
                  }}
                />
                <span className='text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300'>
                  MyBartenders
                </span>
              </Link>
              <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                Northampton's premier mobile bar service. Bringing exceptional
                cocktail experiences to weddings, corporate events, and private
                celebrations across the UK.
              </p>

              {/* Social Links */}
              <div className='flex items-center gap-3'>
                {socialLinks.map(social => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-400 transition-all duration-300'
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className='text-white font-semibold mb-6 flex items-center gap-2 text-base'>
                <span className='w-8 h-px bg-gradient-to-r from-pink-500 to-transparent' />
                Services
              </h3>
              <ul className='space-y-3'>
                {footerLinks.services.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-pink-400 transition-colors text-sm inline-flex items-center gap-2 group'
                    >
                      <span className='w-0 group-hover:w-2 h-px bg-pink-500 transition-all duration-300' />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className='text-white font-semibold mb-6 flex items-center gap-2 text-base'>
                <span className='w-8 h-px bg-gradient-to-r from-pink-500 to-transparent' />
                Company
              </h3>
              <ul className='space-y-3'>
                {footerLinks.company.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-pink-400 transition-colors text-sm inline-flex items-center gap-2 group'
                    >
                      <span className='w-0 group-hover:w-2 h-px bg-pink-500 transition-all duration-300' />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className='text-white font-semibold mb-6 flex items-center gap-2 text-base'>
                <span className='w-8 h-px bg-gradient-to-r from-pink-500 to-transparent' />
                Get in Touch
              </h3>
              <div className='space-y-4'>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className='flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors group'
                >
                  <span className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-pink-500/20 group-hover:border-pink-500/50 transition-all'>
                    <svg
                      className='w-4 h-4'
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
                  </span>
                  <span className='text-sm'>{CONTACT_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className='flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors group'
                >
                  <span className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-pink-500/20 group-hover:border-pink-500/50 transition-all'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </span>
                  <span className='text-sm'>{CONTACT_INFO.email}</span>
                </a>

                {/* CTA Button */}
                <Link
                  href='/contact_us'
                  className='inline-flex items-center justify-center gap-2 px-6 py-3 mt-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity w-full'
                >
                  Get a Free Quote
                  <svg
                    className='w-4 h-4'
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
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/10'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              {/* Copyright */}
              <p className='text-gray-400 text-sm'>
                © {currentYear} MyBartenders. All rights reserved.
              </p>

              {/* Legal Links */}
              <div className='flex items-center gap-6'>
                {footerLinks.legal.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className='text-gray-400 hover:text-pink-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Rating */}
              <div className='flex items-center gap-2'>
                <div className='flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-4 h-4 text-amber-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <span className='text-gray-400 text-sm'>5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
