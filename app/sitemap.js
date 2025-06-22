// app/sitemap.js
export default async function sitemap () {
  return [
    {
      url: 'https://mybartenders.co.uk',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://mybartenders.co.uk/mobile-bar-hire-northampton',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    // Add all other important pages
    {
      url: 'https://mybartenders.co.uk/wedding-bar-hire',
      lastModified: new Date(),
      priority: 0.7
    },
    {
      url: 'https://mybartenders.co.uk/contact',
      lastModified: new Date(),
      priority: 0.5
    }
  ]
}
