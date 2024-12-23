import React from 'react'
import { FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24 mt-10 py-10'>
      <div className='container mx-auto px-2 md:px-4 lg:px-6 flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 text-nav_color_1'>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-nav_color_1'>
                  {columns.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.url} passHref>
                        <span className='hover:text-yellow-600 transition-colors duration-300 cursor-pointer'>
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='flex-row gap-6 text-gray-30'>
                  {SOCIALS.links.map((social, idx) => (
                    <li key={idx}>
                      <a
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-6 hover:text-yellow-600 transition-colors duration-300 yellow-icon'
                      >
                        <Image
                          src={social.icon}
                          alt={`${social.label} icon`}
                          width={32}
                          height={32}
                        />
                        <span className='whitespace-nowrap'>
                          {social.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <p className='regular-14 w-full text-center text-nav_color_1 hover:text-yellow-600 transition-colors duration-300'>
          2025 Mybartenders.co.uk | All rights reserved
        </p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <nav className='bold-18 whitespace-nowrap hover:text-nav_color_1 transition-colors duration-300'>
        {title}
      </nav>
      {children}
    </div>
  )
}

export default Footer
