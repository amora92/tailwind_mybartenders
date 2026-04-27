import React from 'react'
import Image from 'next/image'

interface LogoProps {
  width?: number
  height?: number
  className?: string
  alt?: string
  priority?: boolean
}

const Logo: React.FC<LogoProps> = ({
  width = 32,
  height = 44,
  className = '',
  alt = '',
  priority = false
}) => {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden ${className}`}
      style={{ width, height }}
      aria-hidden={alt === '' ? 'true' : undefined}
    >
      <Image
        src='/branding/logo-mark.png'
        alt={alt}
        fill
        sizes={`${width}px`}
        priority={priority}
        className='object-contain object-center'
      />
    </span>
  )
}

export default Logo
