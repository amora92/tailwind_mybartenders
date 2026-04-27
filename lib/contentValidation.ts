import { sanitizeHtml } from '@/lib/sanitize'

const ALLOWED_REMOTE_IMAGE_HOSTS = new Set([
  'mybartenders.co.uk',
  'www.mybartenders.co.uk',
  'cdn.pixabay.com',
  'images.pexels.com'
])

const ALLOWED_GALLERY_SPANS = new Set([
  '',
  'md:col-span-2',
  'md:col-span-2 md:row-span-2'
])

const ALLOWED_GALLERY_CATEGORIES = new Set(['cocktails', 'events', 'setup'])
const ALLOWED_GALLERY_LAYOUTS = new Set(['grid', 'masonry', 'carousel', 'featured'])
const ALLOWED_GALLERY_COLUMNS = new Set([1, 2, 3, 4])
const ALLOWED_GALLERY_DISPLAY_SIZES = new Set(['small', 'medium', 'large', 'full'])
const ALLOWED_GALLERY_ASPECT_RATIOS = new Set([
  'square',
  'landscape',
  'portrait',
  'original'
])
const ALLOWED_ARTICLE_SECTION_TYPES = new Set([
  'text',
  'image',
  'video',
  'quote',
  'code',
  'cta',
  'gallery',
  'recipe',
  'method'
])

const collapseWhitespace = (value: string): string => {
  return value.replace(/\s+/g, ' ').trim()
}

const stripControlChars = (value: string): string => {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
}

export const sanitizePlainText = (
  value: unknown,
  maxLength = 200
): string => {
  if (typeof value !== 'string') {
    return ''
  }

  return collapseWhitespace(stripControlChars(value)).slice(0, maxLength)
}

export const sanitizeMultilineText = (
  value: unknown,
  maxLength = 4000
): string => {
  if (typeof value !== 'string') {
    return ''
  }

  return stripControlChars(value)
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, maxLength)
}

export const escapeHtml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export const normalizeSafeImageUrl = (value: unknown): string => {
  if (typeof value !== 'string') {
    return ''
  }

  const trimmed = value.trim()

  if (!trimmed) {
    return ''
  }

  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    return trimmed
  }

  try {
    const url = new URL(trimmed)

    if (url.protocol !== 'https:') {
      return ''
    }

    if (!ALLOWED_REMOTE_IMAGE_HOSTS.has(url.hostname)) {
      return ''
    }

    return url.toString()
  } catch {
    return ''
  }
}

export const normalizeSafeLinkUrl = (value: unknown): string => {
  if (typeof value !== 'string') {
    return ''
  }

  const trimmed = value.trim()

  if (!trimmed) {
    return ''
  }

  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    return trimmed
  }

  if (trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) {
    return trimmed
  }

  try {
    const url = new URL(trimmed)
    return url.protocol === 'https:' ? url.toString() : ''
  } catch {
    return ''
  }
}

export const normalizeGalleryCategory = (value: unknown): string => {
  const category = sanitizePlainText(value, 40).toLowerCase()
  return ALLOWED_GALLERY_CATEGORIES.has(category) ? category : ''
}

export const normalizeGallerySpan = (value: unknown): string => {
  const span = sanitizePlainText(value, 50)
  return ALLOWED_GALLERY_SPANS.has(span) ? span : ''
}

const normalizeRichText = (value: unknown): string => {
  if (typeof value !== 'string') {
    return ''
  }

  return sanitizeHtml(value).trim()
}

const normalizeArticleSectionType = (value: unknown): string => {
  const type = sanitizePlainText(value, 20).toLowerCase()
  return ALLOWED_ARTICLE_SECTION_TYPES.has(type) ? type : 'text'
}

const normalizeNutrition = (
  nutrition: Record<string, unknown> | undefined
): Record<string, string> | undefined => {
  if (!nutrition || typeof nutrition !== 'object') {
    return undefined
  }

  const entries = Object.entries(nutrition)
    .map(([key, itemValue]) => [sanitizePlainText(key, 40), sanitizePlainText(itemValue, 40)] as const)
    .filter(([key, itemValue]) => key && itemValue)

  if (entries.length === 0) {
    return undefined
  }

  return Object.fromEntries(entries)
}

export const normalizeArticleSections = (sections: unknown): Array<Record<string, unknown>> => {
  if (!Array.isArray(sections)) {
    return []
  }

  return sections.map((section, index) => {
    const item = typeof section === 'object' && section ? section as Record<string, unknown> : {}
    const type = normalizeArticleSectionType(item.type)
    const normalizedImages = Array.isArray(item.images)
      ? item.images
          .map(image => {
            const imageItem = typeof image === 'object' && image ? image as Record<string, unknown> : {}
            const url = normalizeSafeImageUrl(imageItem.url)

            if (!url) {
              return null
            }

            const displaySize = sanitizePlainText(imageItem.displaySize, 20).toLowerCase()
            const aspectRatio = sanitizePlainText(imageItem.aspectRatio, 20).toLowerCase()

            return {
              url,
              caption: sanitizePlainText(imageItem.caption, 180),
              displaySize: ALLOWED_GALLERY_DISPLAY_SIZES.has(displaySize)
                ? displaySize
                : 'medium',
              aspectRatio: ALLOWED_GALLERY_ASPECT_RATIOS.has(aspectRatio)
                ? aspectRatio
                : 'original'
            }
          })
          .filter(Boolean)
      : []

    return {
      id: sanitizePlainText(item.id, 64) || `section-${index + 1}`,
      type,
      content:
        type === 'image'
          ? normalizeSafeImageUrl(item.content)
          : type === 'cta' || type === 'video'
            ? sanitizePlainText(item.content, 2000)
            : type === 'code'
              ? sanitizeMultilineText(item.content, 12000)
              : normalizeRichText(item.content),
      caption: sanitizePlainText(item.caption, 180),
      author: sanitizePlainText(item.author, 120),
      language: sanitizePlainText(item.language, 40).toLowerCase(),
      buttonText: sanitizePlainText(item.buttonText, 80),
      buttonUrl: normalizeSafeLinkUrl(item.buttonUrl),
      images: normalizedImages,
      galleryLayout: ALLOWED_GALLERY_LAYOUTS.has(
        sanitizePlainText(item.galleryLayout, 20).toLowerCase()
      )
        ? sanitizePlainText(item.galleryLayout, 20).toLowerCase()
        : 'grid',
      galleryColumns: ALLOWED_GALLERY_COLUMNS.has(Number(item.galleryColumns))
        ? Number(item.galleryColumns)
        : 3,
      prepTime: sanitizePlainText(item.prepTime, 40),
      cookTime: sanitizePlainText(item.cookTime, 40),
      servings: sanitizePlainText(item.servings, 40),
      ingredients: Array.isArray(item.ingredients)
        ? item.ingredients
            .map(ingredient => sanitizePlainText(ingredient, 180))
            .filter(Boolean)
        : [],
      nutrition: normalizeNutrition(
        typeof item.nutrition === 'object' && item.nutrition
          ? item.nutrition as Record<string, unknown>
          : undefined
      ),
      steps: Array.isArray(item.steps)
        ? item.steps
            .map(step => {
              const stepItem = typeof step === 'object' && step ? step as Record<string, unknown> : {}
              const title = sanitizePlainText(stepItem.title, 120)
              const description = sanitizeMultilineText(stepItem.description, 1200)

              if (!title && !description) {
                return null
              }

              return {
                title,
                description
              }
            })
            .filter(Boolean)
        : []
    }
  })
}
