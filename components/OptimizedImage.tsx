import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  onClick?: () => void
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  onClick
}: OptimizedImageProps) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      priority={priority}
      className={`
        duration-700 ease-in-out
        ${
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        }
        ${className}
      `}
      onLoad={() => setLoading(false)}
      quality={75}
      sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
    />
  )
}

export default OptimizedImage
