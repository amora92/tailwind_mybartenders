import {
  normalizeArticleSections,
  normalizeSafeImageUrl,
  sanitizePlainText
} from '@/lib/contentValidation'

interface ArticleStep {
  title: string
  description: string
}

interface ArticleSection {
  type?: string
  content?: string
  caption?: string
  author?: string
  buttonText?: string
  ingredients?: string[]
  steps?: ArticleStep[]
}

interface NormalizeArticlePayloadInput {
  title?: string
  description?: string
  imageUrl?: string
  contentSections?: ArticleSection[]
  publishedAt?: string
  category?: string
  author?: {
    name?: string
    avatar?: string
  }
  readTime?: string | number
  slug?: string
  tags?: string[]
  status?: string
}

interface EvaluateArticleSeoInput {
  title?: string
  description?: string
  imageUrl?: string
  contentSections?: ArticleSection[]
  slug?: string
  category?: string
  tags?: string[]
  status?: string
}

export interface ArticleSeoAssessment {
  wordCount: number
  titleLength: number
  descriptionLength: number
  slugLength: number
  publishBlockers: string[]
  recommendations: string[]
}

export const slugify = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const stripHtml = (value: string): string => {
  return value
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export const extractArticleText = (contentSections: ArticleSection[] = []): string => {
  const parts: string[] = []

  contentSections.forEach(section => {
    if (section.content) {
      parts.push(stripHtml(section.content))
    }

    if (section.caption) {
      parts.push(section.caption.trim())
    }

    if (section.author) {
      parts.push(section.author.trim())
    }

    if (section.buttonText) {
      parts.push(section.buttonText.trim())
    }

    if (section.ingredients?.length) {
      parts.push(section.ingredients.join(' '))
    }

    if (section.steps?.length) {
      section.steps.forEach(step => {
        parts.push(step.title.trim())
        parts.push(step.description.trim())
      })
    }
  })

  return parts.join(' ').replace(/\s+/g, ' ').trim()
}

export const countWords = (value: string): number => {
  const words = value.trim().match(/\b[\w'-]+\b/g)
  return words ? words.length : 0
}

export const calculateReadTime = (contentSections: ArticleSection[] = []): number => {
  const bodyText = extractArticleText(contentSections)
  return Math.max(1, Math.ceil(countWords(bodyText) / 200))
}

export const buildArticleDescription = (
  description: string | undefined,
  title: string,
  contentSections: ArticleSection[] = []
): string => {
  const trimmedDescription = description?.replace(/\s+/g, ' ').trim() ?? ''

  if (trimmedDescription.length >= 110) {
    return trimmedDescription
  }

  const bodyText = extractArticleText(contentSections)
  const fallbackSource = [trimmedDescription, bodyText].filter(Boolean).join(' ')
  const normalizedSource = fallbackSource.replace(/\s+/g, ' ').trim()

  if (!normalizedSource) {
    return title.trim()
  }

  return normalizedSource.length <= 160
    ? normalizedSource
    : `${normalizedSource.slice(0, 157).trimEnd()}...`
}

export const normalizeTags = (tags: string[] = []): string[] => {
  return Array.from(
    new Set(
      tags
        .map(tag => tag.trim().toLowerCase())
        .filter(Boolean)
    )
  )
}

export const evaluateArticleSeo = ({
  title,
  description,
  imageUrl,
  contentSections,
  slug,
  category,
  tags,
  status
}: EvaluateArticleSeoInput): ArticleSeoAssessment => {
  const bodyText = extractArticleText(contentSections)
  const wordCount = countWords(bodyText)
  const cleanTitle = title?.trim() ?? ''
  const cleanDescription = description?.trim() ?? ''
  const cleanSlug = slugify(slug ?? '')
  const normalizedTags = normalizeTags(tags)
  const isPublished = (status ?? 'published') === 'published'

  const publishBlockers: string[] = []
  const recommendations: string[] = []

  if (!cleanTitle) {
    publishBlockers.push('Add a title before publishing.')
  }

  if (!cleanSlug) {
    publishBlockers.push('Add a clean article slug before publishing.')
  }

  if (isPublished) {
    if (!imageUrl?.trim()) {
      publishBlockers.push('Add a featured image before publishing.')
    }

    if (!cleanDescription) {
      publishBlockers.push('Add a short article description before publishing.')
    }

    if (!category?.trim()) {
      publishBlockers.push('Choose a category before publishing.')
    }

    if (wordCount < 120) {
      publishBlockers.push('Published articles should include at least 120 words of useful content.')
    }
  }

  if (cleanTitle.length < 30 || cleanTitle.length > 65) {
    recommendations.push('Keep the article title between 30 and 65 characters for cleaner search snippets.')
  }

  if (cleanDescription.length < 120 || cleanDescription.length > 160) {
    recommendations.push('Aim for a 120 to 160 character description so search snippets stay strong.')
  }

  if (wordCount < 300) {
    recommendations.push('Articles with 300 or more words usually compete better for long-tail search terms.')
  }

  if (normalizedTags.length === 0) {
    recommendations.push('Add a few relevant tags to strengthen internal topic organization.')
  }

  return {
    wordCount,
    titleLength: cleanTitle.length,
    descriptionLength: cleanDescription.length,
    slugLength: cleanSlug.length,
    publishBlockers,
    recommendations
  }
}

export const normalizeArticlePayload = ({
  title,
  description,
  imageUrl,
  contentSections = [],
  publishedAt,
  category,
  author,
  slug,
  tags,
  status
}: NormalizeArticlePayloadInput) => {
  const normalizedTitle = sanitizePlainText(title, 120)
  const normalizedSlug = slugify(slug || normalizedTitle)
  const normalizedContentSections = normalizeArticleSections(contentSections)
  const normalizedDescription = buildArticleDescription(
    sanitizePlainText(description, 240),
    normalizedTitle,
    normalizedContentSections
  )
  const normalizedTags = normalizeTags(tags)
  const normalizedStatus = status === 'draft' ? 'draft' : 'published'
  const normalizedReadTime = calculateReadTime(normalizedContentSections)

  return {
    title: normalizedTitle,
    description: normalizedDescription,
    imageUrl: normalizeSafeImageUrl(imageUrl),
    contentSections: normalizedContentSections,
    publishedAt: publishedAt
      ? new Date(publishedAt).toISOString()
      : new Date().toISOString(),
    category: sanitizePlainText(category, 60),
    author: {
      name: sanitizePlainText(author?.name, 80) || 'MyBartenders',
      avatar:
        normalizeSafeImageUrl(author?.avatar) || '/branding/logo-icon-192.png'
    },
    readTime: normalizedReadTime,
    slug: normalizedSlug,
    tags: normalizedTags,
    status: normalizedStatus
  }
}
