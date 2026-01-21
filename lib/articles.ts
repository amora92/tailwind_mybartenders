import { client } from '@/sanity/lib/client'
import { allPostsQuery, postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import clientPromise from './mongodb'

export interface UnifiedArticle {
  slug: string
  title: string
  description: string
  imageUrl: string
  category: string
  publishedAt: string
  readTime: number | string
  views?: number
  tags?: string[]
  status?: string
  source: 'mongodb' | 'sanity'
  author?: {
    name: string
    avatar: string
  }
  contentSections?: Array<{
    id: string
    type: 'text' | 'image' | 'video' | 'quote' | 'code' | 'cta'
    content: string
    caption?: string
    author?: string
    language?: string
    buttonText?: string
    buttonUrl?: string
  }>
  content?: unknown
}

interface SanityPost {
  _id: string
  title: string
  slug: string
  description: string
  featuredImage: {
    asset: {
      url: string
    }
    alt?: string
  }
  category: {
    title: string
    slug: string
    color?: string
  }
  author?: {
    name: string
    avatar?: {
      asset: {
        url: string
      }
    }
  }
  publishedAt: string
  content: unknown
  tags?: string[]
  readTime: number
  status?: string
}

interface MongoDBArticle {
  slug: string
  title: string
  description: string
  imageUrl: string
  category: string
  publishedAt: string
  readTime?: number | string
  views?: number
  tags?: string[]
  status?: string
  author?: {
    name: string
    avatar: string
  }
  contentSections?: Array<{
    id: string
    type: 'text' | 'image' | 'video' | 'quote' | 'code' | 'cta'
    content: string
    caption?: string
    author?: string
    language?: string
    buttonText?: string
    buttonUrl?: string
  }>
  content?: string
}

function transformSanityPost(post: SanityPost): UnifiedArticle {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    imageUrl: post.featuredImage?.asset?.url || urlFor(post.featuredImage).width(1200).url(),
    category: post.category?.title || 'General',
    publishedAt: post.publishedAt,
    readTime: post.readTime || 5,
    tags: post.tags || [],
    status: post.status || 'published',
    source: 'sanity',
    author: {
      name: post.author?.name || 'MyBartenders',
      avatar: post.author?.avatar?.asset?.url || '/admin-avatar.svg'
    },
    content: post.content
  }
}

function transformMongoDBArticle(article: MongoDBArticle): UnifiedArticle {
  return {
    slug: article.slug,
    title: article.title,
    description: article.description,
    imageUrl: article.imageUrl,
    category: article.category || 'General',
    publishedAt: article.publishedAt,
    readTime: article.readTime || 5,
    views: article.views,
    tags: article.tags || [],
    status: article.status || 'published',
    source: 'mongodb',
    author: article.author || {
      name: 'MyBartenders',
      avatar: '/admin-avatar.svg'
    },
    contentSections: article.contentSections,
    content: article.content
  }
}

export async function getAllArticles(): Promise<UnifiedArticle[]> {
  const articles: UnifiedArticle[] = []

  // Fetch from MongoDB
  try {
    const mongoClient = await clientPromise
    const db = mongoClient.db(process.env.MONGODB_DB || 'mybartenders')
    const mongoArticles = await db
      .collection('articles')
      .find({ status: { $ne: 'draft' } })
      .sort({ publishedAt: -1 })
      .toArray()

    articles.push(...mongoArticles.map((a) => transformMongoDBArticle(a as unknown as MongoDBArticle)))
  } catch (error) {
    console.error('Error fetching MongoDB articles:', error)
  }

  // Fetch from Sanity (only if configured)
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const sanityPosts = await client.fetch<SanityPost[]>(allPostsQuery)
      articles.push(...sanityPosts.map(transformSanityPost))
    } catch (error) {
      console.error('Error fetching Sanity articles:', error)
    }
  }

  // Sort by publishedAt, newest first
  articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return articles
}

export async function getArticleBySlug(slug: string): Promise<UnifiedArticle | null> {
  // Try MongoDB first
  try {
    const mongoClient = await clientPromise
    const db = mongoClient.db(process.env.MONGODB_DB || 'mybartenders')
    const mongoArticle = await db.collection('articles').findOne({ slug })

    if (mongoArticle) {
      // Increment view count
      await db.collection('articles').updateOne(
        { slug },
        { $inc: { views: 1 } }
      )
      return transformMongoDBArticle(mongoArticle as unknown as MongoDBArticle)
    }
  } catch (error) {
    console.error('Error fetching MongoDB article:', error)
  }

  // Try Sanity if not found in MongoDB
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const sanityPost = await client.fetch<SanityPost | null>(postBySlugQuery, { slug })
      if (sanityPost) {
        return transformSanityPost(sanityPost)
      }
    } catch (error) {
      console.error('Error fetching Sanity article:', error)
    }
  }

  return null
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const slugs: string[] = []

  // Fetch from MongoDB
  try {
    const mongoClient = await clientPromise
    const db = mongoClient.db(process.env.MONGODB_DB || 'mybartenders')
    const mongoArticles = await db
      .collection('articles')
      .find({ status: { $ne: 'draft' } })
      .project({ slug: 1 })
      .toArray()

    slugs.push(...mongoArticles.map((a) => a.slug))
  } catch (error) {
    console.error('Error fetching MongoDB slugs:', error)
  }

  // Fetch from Sanity
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const sanitySlugs = await client.fetch<Array<{ slug: string }>>(postSlugsQuery)
      slugs.push(...sanitySlugs.map((s) => s.slug))
    } catch (error) {
      console.error('Error fetching Sanity slugs:', error)
    }
  }

  return [...new Set(slugs)] // Remove duplicates
}
