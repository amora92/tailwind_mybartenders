export const SITE_URL = 'https://mybartenders.co.uk'
export const SITE_NAME = 'MyBartenders'
export const DEFAULT_SOCIAL_IMAGE = '/corporate.jpg'

interface BreadcrumbItem {
  name: string
  path: string
}

export const toAbsoluteUrl = (path: string): string => {
  if (!path) {
    return SITE_URL
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path)
  }))
})
