interface ImageBlockProps {
  src: string
  alt: string
  caption?: string
}

export const ImageBlock = ({ src, alt, caption }: ImageBlockProps) => (
  <figure className='my-8'>
    <img src={src} alt={alt} className='rounded-lg shadow-lg w-full' />
    {caption && (
      <figcaption className='text-center text-sm text-gray-600 mt-2 italic'>
        {caption}
      </figcaption>
    )}
  </figure>
)
