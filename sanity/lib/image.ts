import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function getImageDimensions(image: SanityImageSource & { asset?: { metadata?: { dimensions?: { width: number; height: number } } } }) {
  if (!image?.asset?.metadata?.dimensions) {
    return { width: 1200, height: 630 }
  }
  return image.asset.metadata.dimensions
}
