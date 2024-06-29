import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image src='pineapple.svg' alt='logo' width={74} height={29} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 text-yellow-500'>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-yellow-400'>
                  {columns.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href='/' passHref>
                        <span className='hover:text-yellow-600 transition-colors duration-300 cursor-pointer'>
                          {link}
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
                        className='flex items-center gap-6 hover:text-yellow-600 transition-colors duration-300'
                      >
                        <Image
                          src={social.icon}
                          alt={`${social.label} icon`}
                          width={32}
                          height={32}
                        />
                        <span className='whitespace-nowrap text-yellow-500'>
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

        <p className='regular-14 w-full text-center text-gray-30 hover:text-yellow-600 transition-colors duration-300'>
          2024 Mybartenders.co.uk | All rights reserved
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
      <h4 className='bold-18 whitespace-nowrap hover:text-yellow-600 transition-colors duration-300'>
        {title}
      </h4>
      {children}
    </div>
  )
}

export default Footer
