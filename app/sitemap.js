// app/sitemap.js
import { MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mybartenders.co.uk',
      lastModified: new Date()
    },
    {
      url: 'https://mybartenders.co.uk/mobile-bar-hire-northampton',
      lastModified: new Date()
    }
    // Add ALL important pages (services, blogs, etc.)
  ]
}
