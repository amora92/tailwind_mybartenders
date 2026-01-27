'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { sanitizeHtml, sanitizeCss } from '@/lib/sanitize'
import '../../app/globals.css'

interface GalleryImage {
  url: string
  caption?: string
  displaySize?: 'small' | 'medium' | 'large' | 'full'
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'original'
}

interface Article {
  title: string
  description: string
  content: string
  imageUrl: string
  publishedAt: string
  updatedAt?: string
  category: string
  readTime?: string | number
  author?: {
    name: string
    avatar: string
  }
  relatedArticles?: {
    slug: string
    title?: string
    imageUrl?: string
  }[]
  secondaryImageUrl?: string
  secondaryContent?: string
  customCss?: string
  contentSections?: {
    id: string
    type: 'text' | 'image' | 'video' | 'quote' | 'code' | 'cta' | 'gallery' | 'recipe' | 'method'
    content: string
    caption?: string
    author?: string
    language?: string
    buttonText?: string
    buttonUrl?: string
    images?: GalleryImage[]
    galleryLayout?: 'grid' | 'masonry' | 'carousel' | 'featured'
    galleryColumns?: 1 | 2 | 3 | 4
    // Recipe fields
    prepTime?: string
    cookTime?: string
    servings?: string
    ingredients?: string[]
    // Nutrition info (optional)
    nutrition?: {
      calories?: string
      protein?: string
      carbs?: string
      fat?: string
      sugar?: string
      alcohol?: string
    }
    // Method/Steps fields
    steps?: { title: string; description: string }[]
  }[]
}

const formatReadTime = (readTime: string | number | undefined) => {
  if (!readTime) return '5 min read'
  if (typeof readTime === 'number') return `${readTime} min read`
  if (typeof readTime === 'string') {
    return readTime.includes('min read') ? readTime : `${readTime} min read`
  }
  return '5 min read'
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getYouTubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

const ArticlePage = () => {
  const router = useRouter()
  const { slug } = router.query
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [customCss, setCustomCss] = useState('')
  const [copyNotification, setCopyNotification] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<{ url: string; caption?: string } | null>(null)

  useEffect(() => {
    if (slug) {
      fetchArticle()
    }
  }, [slug])

  useEffect(() => {
    if (article?.customCss) {
      setCustomCss(article.customCss)
    }
  }, [article])

  const fetchArticle = async () => {
    try {
      const response = await fetch(`/api/articles/${slug}`)
      const data = await response.json()
      setArticle(data)
    } catch (error) {
      console.error('Error fetching article:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleShare = async (
    platform: 'facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'copy'
  ) => {
    const url = window.location.href
    const title = article?.title || ''
    const description = article?.description || ''

    switch (platform) {
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          '_blank'
        )
        break
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          '_blank'
        )
        break
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
          '_blank'
        )
        break
      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${title}\n\n${description}\n\n${url}`)}`,
          '_blank'
        )
        break
      case 'copy':
        try {
          await navigator.clipboard.writeText(url)
          setCopyNotification(true)
          setTimeout(() => setCopyNotification(false), 2000)
        } catch (err) {
          console.error('Failed to copy:', err)
        }
        break
    }
  }

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading article...</title>
        </Head>
        <div className='min-h-screen bg-gray-950'>
          <Navbar />
          <main>
            {/* Loading Hero */}
            <section className='relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 overflow-hidden'>
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
              <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='max-w-4xl mx-auto animate-pulse'>
                  <div className='h-6 bg-white/10 rounded-full w-32 mb-6' />
                  <div className='h-12 bg-white/10 rounded-lg w-3/4 mb-4' />
                  <div className='h-8 bg-white/10 rounded-lg w-1/2 mb-8' />
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-white/10 rounded-full' />
                    <div>
                      <div className='h-4 bg-white/10 rounded w-32 mb-2' />
                      <div className='h-3 bg-white/10 rounded w-24' />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Loading Content */}
            <section className='relative py-16 bg-gray-50'>
              <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='max-w-4xl mx-auto animate-pulse'>
                  <div className='h-[400px] bg-gray-200 rounded-2xl mb-12' />
                  <div className='space-y-4'>
                    <div className='h-4 bg-gray-200 rounded w-full' />
                    <div className='h-4 bg-gray-200 rounded w-5/6' />
                    <div className='h-4 bg-gray-200 rounded w-4/6' />
                    <div className='h-4 bg-gray-200 rounded w-full' />
                    <div className='h-4 bg-gray-200 rounded w-3/4' />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </>
    )
  }

  if (!article) {
    return (
      <>
        <Head>
          <title>Article Not Found | MyBartenders</title>
        </Head>
        <div className='min-h-screen bg-gray-950'>
          <Navbar />
          <main>
            <section className='relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gray-950 overflow-hidden'>
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
              <div className='absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />

              <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className='text-center max-w-2xl mx-auto'
                >
                  <div className='w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8'>
                    <svg className='w-10 h-10 text-pink-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                    Article Not Found
                  </h1>
                  <p className='text-xl text-gray-400 mb-10'>
                    The article you're looking for doesn't exist or has been moved.
                  </p>
                  <Link
                    href='/articles'
                    className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all'
                  >
                    <svg className='w-5 h-5 rotate-180' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                    Back to Articles
                  </Link>
                </motion.div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </>
    )
  }

  const canonicalUrl = `https://mybartenders.co.uk/articles/${slug}`

  // Ensure image URL is absolute for social sharing
  const getAbsoluteImageUrl = (url: string) => {
    if (!url) return 'https://mybartenders.co.uk/mybartenders.co.uk_logo_svg.svg'
    if (url.startsWith('http://') || url.startsWith('https://')) return url
    return `https://mybartenders.co.uk${url.startsWith('/') ? '' : '/'}${url}`
  }

  const absoluteImageUrl = getAbsoluteImageUrl(article.imageUrl)

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: absoluteImageUrl,
  datePublished: article.publishedAt,
  dateModified: article.updatedAt ?? article.publishedAt,
  author: {
    '@type': 'Person',
    name: article.author?.name ?? 'MyBartenders'
  },
  publisher: {
    '@type': 'Organization',
    name: 'MyBartenders',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mybartenders.co.uk/mybartenders.co.uk_logo_svg.svg'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': canonicalUrl
  }
}

return (
  <>
    <Head>
      <title>{article.title} | MyBartenders</title>
      <meta name="description" content={article.description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={article.title} />
      <meta property="og:description" content={article.description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={article.title} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="MyBartenders" />
      <meta property="og:locale" content="en_GB" />
      <meta property="article:published_time" content={article.publishedAt} />
      {article.category && (
        <meta property="article:section" content={article.category} />
      )}
      <meta
        property="article:author"
        content={article.author?.name ?? 'MyBartenders'}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={article.title} />
      <meta name="twitter:description" content={article.description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={article.title} />
      <meta name="twitter:site" content="@MyBartenders" />

      {/* SEO */}
      <meta name="author" content={article.author?.name ?? 'MyBartenders'} />
      <meta name="robots" content="index, follow" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
    </Head>

      <div className='min-h-screen'>
        <Navbar />

        <main>
          {/* Hero Section */}
          <section className='relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 overflow-hidden'>
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
            <div className='absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />
            <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl' />

            <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='max-w-4xl mx-auto'
              >
                {/* Breadcrumb */}
                <nav className='flex items-center gap-2 text-sm mb-6'>
                  <Link href='/articles' className='text-gray-400 hover:text-pink-400 transition-colors'>
                    Articles
                  </Link>
                  <span className='text-gray-600'>/</span>
                  {article.category && (
                    <span className='text-pink-400'>{article.category}</span>
                  )}
                </nav>

                {/* Category & Read Time */}
                <div className='flex flex-wrap items-center gap-3 mb-6'>
                  {article.category && (
                    <span className='px-4 py-1.5 bg-pink-500/20 border border-pink-500/30 text-pink-400 text-sm font-medium rounded-full'>
                      {article.category}
                    </span>
                  )}
                  <span className='px-4 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-sm rounded-full'>
                    {formatReadTime(article.readTime)}
                  </span>
                </div>

                {/* Title */}
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
                  {article.title}
                </h1>

                {/* Description */}
                <p className='text-xl text-gray-400 mb-8 leading-relaxed'>
                  {article.description}
                </p>

                {/* Author & Date */}
                <div className='flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={article.author?.avatar || '/mybartenders.co.uk_logo_svg.svg'}
                      alt={article.author?.name || 'Author'}
                      width={48}
                      height={48}
                      className='rounded-full ring-2 ring-white/10'
                    />
                    <div>
                      <p className='font-medium text-white'>
                        {article.author?.name || 'MyBartenders'}
                      </p>
                      <time className='text-sm text-gray-400'>
                        {formatDate(article.publishedAt)}
                      </time>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className='relative flex items-center gap-1 sm:gap-2'>
                    <span className='text-sm text-gray-400 mr-1 sm:mr-2 hidden sm:inline'>Share:</span>
                    <button
                      onClick={() => handleShare('facebook')}
                      className='min-w-[44px] min-h-[44px] p-3 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-400 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950'
                      aria-label='Share on Facebook'
                    >
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                        <path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className='min-w-[44px] min-h-[44px] p-3 bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/30 text-gray-400 hover:text-sky-400 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-950'
                      aria-label='Share on Twitter'
                    >
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                        <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.9 12.92-12.9 0-.2 0-.4-.02-.6.9-.65 1.8-1.46 2.46-2.4z' />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className='min-w-[44px] min-h-[44px] p-3 bg-white/5 hover:bg-blue-700/20 border border-white/10 hover:border-blue-600/30 text-gray-400 hover:text-blue-500 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-950'
                      aria-label='Share on LinkedIn'
                    >
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                        <path d='M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 21h4.96V7.98H.5V21zm7.33-13h4.75v1.77h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 6 3.31 6 7.61V21H18.5v-6.91c0-1.64-.03-3.74-2.28-3.74-2.28 0-2.62 1.78-2.62 3.62V21H7.82V8z' />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className='min-w-[44px] min-h-[44px] p-3 bg-white/5 hover:bg-green-600/20 border border-white/10 hover:border-green-500/30 text-gray-400 hover:text-green-400 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-950'
                      aria-label='Share on WhatsApp'
                    >
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                        <path d='M20.52 3.48a11.76 11.76 0 0 0-16.61 0c-4.63 4.63-4.55 12.28.15 16.94L2 22l1.66-2.92a11.7 11.7 0 0 0 16.87-16.88zM12 20.7a8.67 8.67 0 0 1-4.55-1.23l-.32-.19-2.7.7.72-2.64-.2-.34a8.66 8.66 0 0 1 13.45-11.6 8.7 8.7 0 0 1-6.4 14.3zM17.36 14.63c-.28-.14-1.63-.8-1.88-.89-.25-.08-.43-.14-.62.14-.18.28-.7.89-.86 1.07-.16.19-.33.21-.61.07a7.43 7.43 0 0 1-2.17-1.34 8.3 8.3 0 0 1-1.54-1.91c-.16-.27-.02-.41.12-.55.12-.12.28-.3.43-.45.14-.14.18-.24.28-.4.1-.17.05-.31-.02-.44-.07-.13-.62-1.5-.85-2.06-.22-.54-.44-.47-.62-.48h-.53a1.03 1.03 0 0 0-.75.35c-.25.28-1 1-1 2.43 0 1.42 1.03 2.79 1.17 2.98.14.19 2.03 3.1 4.9 4.35a17.5 17.5 0 0 0 2.12.63c.29.1.56.09.77.06.23-.03.7-.28.8-.55.1-.27.1-.5.07-.55-.03-.06-.25-.1-.52-.25z' />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className='min-w-[44px] min-h-[44px] p-3 bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/30 text-gray-400 hover:text-pink-400 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-950'
                      aria-label='Copy link to clipboard'
                    >
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                        <path d='M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zM20 5H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h12v14z' />
                      </svg>
                    </button>
                    {copyNotification && (
                      <span role='status' aria-live='polite' className='absolute right-0 -bottom-10 px-3 py-1.5 rounded-lg bg-pink-500 text-white text-xs font-medium animate-fade-in'>
                        Link copied!
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Article Content Section */}
          <section className='relative py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50'>
            {/* Decorative Background Pattern */}
            <div className='absolute inset-0 opacity-[0.015]' style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='max-w-4xl mx-auto'>
                {/* Featured Image - Clickable */}
                {article.imageUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 cursor-pointer group'
                    onClick={() => setLightboxImage({ url: article.imageUrl, caption: article.title })}
                    role='button'
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setLightboxImage({ url: article.imageUrl, caption: article.title })}
                    aria-label={`View ${article.title} in full size`}
                  >
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className='object-contain transition-transform duration-500 group-hover:scale-[1.02]'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px'
                      priority
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6'>
                      <span className='text-white text-sm font-medium flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full'>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                        </svg>
                        Click to expand
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Main Content */}
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='relative bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-8 md:p-12 mb-12 border border-gray-100 overflow-hidden'
                >
                  {/* Decorative corner accent */}
                  <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-100/50 to-transparent rounded-bl-full' />
                  <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-100/50 to-transparent rounded-tr-full' />

                  <div
                    className='relative prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-xl prose-li:text-gray-600 prose-blockquote:border-l-pink-400 prose-blockquote:bg-pink-50/50 prose-blockquote:py-2 prose-blockquote:rounded-r-lg'
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
                  />
                </motion.article>

                {/* Secondary Image and Content */}
                {article.secondaryImageUrl && article.secondaryContent && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='mb-12'
                  >
                    <div
                      className='relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer group'
                      onClick={() => setLightboxImage({ url: article.secondaryImageUrl!, caption: `${article.title} - additional image` })}
                      role='button'
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setLightboxImage({ url: article.secondaryImageUrl!, caption: `${article.title} - additional image` })}
                      aria-label='View image in full size'
                    >
                      <Image
                        src={article.secondaryImageUrl}
                        alt={`${article.title} secondary`}
                        fill
                        className='object-contain transition-transform duration-500 group-hover:scale-[1.02]'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6'>
                        <span className='text-white text-sm font-medium flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full'>
                          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                          </svg>
                          Click to expand
                        </span>
                      </div>
                    </div>
                    <div className='bg-white rounded-2xl shadow-sm p-8 md:p-12'>
                      <div
                        className='prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-pink-500'
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.secondaryContent) }}
                      />
                    </div>
                  </motion.section>
                )}

                {/* Content Sections (Text, Image, Video) */}
                {article.contentSections &&
                  article.contentSections.map((section, index) => {
                    if (section.type === 'text') {
                      return (
                        <motion.section
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='relative bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-8 md:p-12 mb-12 border border-gray-100 overflow-hidden'
                        >
                          {/* Decorative accent */}
                          <div className='absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-400 via-amber-400 to-pink-400 rounded-r-full' />

                          <div
                            className='prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600'
                            dangerouslySetInnerHTML={{ __html: sanitizeHtml(section.content) }}
                          />
                        </motion.section>
                      )
                    }
                    if (section.type === 'image') {
                      return (
                        <motion.section
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='mb-12'
                        >
                          <figure>
                            <div
                              className='relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer group'
                              onClick={() => setLightboxImage({ url: section.content, caption: section.caption })}
                              role='button'
                              tabIndex={0}
                              onKeyDown={(e) => e.key === 'Enter' && setLightboxImage({ url: section.content, caption: section.caption })}
                              aria-label={`View ${section.caption || 'image'} in full size`}
                            >
                              <Image
                                src={section.content}
                                alt={section.caption || `${article.title} section image`}
                                fill
                                className='object-contain transition-transform duration-500 group-hover:scale-[1.02]'
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px'
                              />
                              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6'>
                                <span className='text-white text-sm font-medium flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full'>
                                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                                  </svg>
                                  Click to expand
                                </span>
                              </div>
                            </div>
                            {section.caption && (
                              <figcaption className='text-center text-sm text-gray-500 mt-3 italic'>
                                {section.caption}
                              </figcaption>
                            )}
                          </figure>
                        </motion.section>
                      )
                    }
                    if (section.type === 'video') {
                      const videoId = getYouTubeVideoId(section.content)
                      if (!videoId) return null
                      return (
                        <motion.section
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='mb-12 rounded-2xl overflow-hidden shadow-lg'
                        >
                          <div className='aspect-video'>
                            <iframe
                              width='100%'
                              height='100%'
                              src={`https://www.youtube.com/embed/${videoId}`}
                              title='YouTube video player'
                              frameBorder='0'
                              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                              allowFullScreen
                            />
                          </div>
                        </motion.section>
                      )
                    }
                    if (section.type === 'quote') {
                      return (
                        <motion.section
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='mb-12'
                        >
                          <blockquote className='relative bg-gradient-to-br from-pink-50 via-white to-rose-50 p-8 md:p-12 rounded-2xl border-l-4 border-gradient-to-b from-pink-400 to-rose-500 shadow-lg shadow-pink-100/50 overflow-hidden'>
                            {/* Decorative background */}
                            <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-100/40 to-transparent rounded-bl-full' />
                            <div className='absolute bottom-0 left-1/2 w-24 h-24 bg-gradient-to-t from-rose-100/30 to-transparent rounded-t-full' />

                            {/* Quote icon */}
                            <div className='absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-200/50 transform -rotate-6'>
                              <svg
                                className='w-7 h-7 text-white'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                              </svg>
                            </div>

                            <p className='relative text-xl md:text-2xl text-gray-700 italic leading-relaxed pl-20 pr-4'>
                              {section.content}
                            </p>
                            {section.author && (
                              <footer className='relative mt-6 pl-20'>
                                <div className='flex items-center gap-3'>
                                  <div className='w-10 h-0.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full' />
                                  <p className='text-pink-600 font-bold text-lg'>{section.author}</p>
                                </div>
                              </footer>
                            )}
                          </blockquote>
                        </motion.section>
                      )
                    }
                    if (section.type === 'code') {
                      return (
                        <motion.section
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='mb-12'
                        >
                          <div className='bg-gray-900 rounded-2xl overflow-hidden shadow-lg'>
                            <div className='flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700'>
                              <span className='text-sm text-gray-400 font-mono'>
                                {section.language || 'code'}
                              </span>
                              <div className='flex gap-1.5'>
                                <span className='w-3 h-3 rounded-full bg-red-500' />
                                <span className='w-3 h-3 rounded-full bg-yellow-500' />
                                <span className='w-3 h-3 rounded-full bg-green-500' />
                              </div>
                            </div>
                            <pre className='p-6 overflow-x-auto'>
                              <code className='text-sm text-gray-300 font-mono whitespace-pre-wrap'>
                                {section.content}
                              </code>
                            </pre>
                          </div>
                        </motion.section>
                      )
                    }
                    if (section.type === 'cta') {
                      return (
                        <motion.section
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='mb-12'
                        >
                          <div className='relative bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-orange-500/10 border border-pink-500/20 rounded-2xl p-8 md:p-12 text-center overflow-hidden'>
                            {/* Decorative elements */}
                            <div className='absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-pink-200/40 to-transparent rounded-full blur-xl' />
                            <div className='absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-orange-200/40 to-transparent rounded-full blur-xl' />

                            {/* Sparkle decorations */}
                            <div className='absolute top-8 left-8'>
                              <svg className='w-6 h-6 text-pink-300' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z' />
                              </svg>
                            </div>
                            <div className='absolute bottom-8 right-8'>
                              <svg className='w-4 h-4 text-orange-300' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z' />
                              </svg>
                            </div>

                            <p className='relative text-xl md:text-2xl text-gray-700 mb-8 font-medium'>
                              {section.content}
                            </p>
                            {section.buttonUrl && section.buttonText && (
                              <Link
                                href={section.buttonUrl}
                                className='relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold rounded-full shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 text-lg'
                              >
                                {section.buttonText}
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                              </Link>
                            )}
                          </div>
                        </motion.section>
                      )
                    }
                    if (section.type === 'gallery' && section.images && section.images.length > 0) {
                      const columns = section.galleryColumns || 3
                      const layout = section.galleryLayout || 'grid'

                      // Get aspect ratio class for image - force aspect ratio with explicit height
                      const getAspectClass = (img: GalleryImage) => {
                        switch (img.aspectRatio) {
                          case 'square': return 'aspect-square'
                          case 'landscape': return 'aspect-video'
                          case 'portrait': return 'aspect-[3/4]'
                          case 'original': return ''
                          default: return 'aspect-square'
                        }
                      }

                      // Get size class for image
                      const getSizeClass = (img: GalleryImage, isFirst: boolean) => {
                        if (layout === 'featured' && isFirst) return 'col-span-2 row-span-2'
                        switch (img.displaySize) {
                          case 'full': return 'col-span-full'
                          case 'large': return columns === 2 ? 'col-span-2' : 'col-span-2'
                          default: return ''
                        }
                      }

                      return (
                        <motion.section
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='mb-12 relative'
                        >
                          {section.content && (
                            <div className='text-center mb-8'>
                              <h2 className='inline-flex items-center gap-3 text-2xl font-bold text-gray-900'>
                                <span className='w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-400 rounded-full' />
                                {section.content}
                                <span className='w-12 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-400 rounded-full' />
                              </h2>
                            </div>
                          )}
                          <div className={`grid gap-4 ${
                            columns === 1 ? 'grid-cols-1' :
                            columns === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                            columns === 4 ? 'grid-cols-2 md:grid-cols-4' :
                            'grid-cols-2 md:grid-cols-3'
                          } ${layout === 'masonry' ? 'auto-rows-auto' : ''}`}>
                            {section.images.map((img, imgIndex) => {
                              const aspectClass = getAspectClass(img)
                              const isOriginal = img.aspectRatio === 'original'

                              return (
                                <motion.figure
                                  key={imgIndex}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: imgIndex * 0.05 }}
                                  className={`group relative ${getSizeClass(img, imgIndex === 0)}`}
                                >
                                  <button
                                    type='button'
                                    onClick={() => setLightboxImage({ url: img.url, caption: img.caption })}
                                    className='w-full text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-xl'
                                    aria-label={`View ${img.caption || `image ${imgIndex + 1}`} in full size`}
                                  >
                                    <div className={`relative rounded-xl overflow-hidden shadow-lg bg-gray-100 ${aspectClass} ${!aspectClass ? 'min-h-[200px]' : ''}`}>
                                      <Image
                                        src={img.url}
                                        alt={img.caption || `Gallery image ${imgIndex + 1}`}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                                        sizes={img.displaySize === 'full' ? '100vw' : img.displaySize === 'large' ? '66vw' : '(max-width: 768px) 50vw, 33vw'}
                                      />
                                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4'>
                                        <span className='text-white text-sm font-medium flex items-center gap-2'>
                                          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                                          </svg>
                                          Click to expand
                                        </span>
                                      </div>
                                    </div>
                                  </button>
                                  {img.caption && (
                                    <figcaption className='mt-2 text-sm text-gray-600 text-center'>
                                      {img.caption}
                                    </figcaption>
                                  )}
                                </motion.figure>
                              )
                            })}
                          </div>
                        </motion.section>
                      )
                    }
                    if (section.type === 'recipe') {
                      return (
                        <motion.section
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='mb-12'
                        >
                          <div className='relative bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-2xl shadow-xl overflow-hidden border border-amber-200'>
                            {/* Decorative pattern */}
                            <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-100/40 to-transparent rounded-bl-full' />
                            <div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-tr-full' />

                            {/* Recipe Header */}
                            <div className='relative bg-gradient-to-r from-amber-500 via-amber-500 to-orange-500 px-6 py-5'>
                              <div className='absolute inset-0 opacity-10 bg-white' style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                              <h2 className='relative text-xl md:text-2xl font-bold text-white flex items-center gap-3'>
                                <span className='w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center'>
                                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clipRule='evenodd' />
                                  </svg>
                                </span>
                                {section.content || 'Recipe'}
                              </h2>
                            </div>

                            {/* Recipe Meta */}
                            <div className='flex flex-wrap gap-4 px-6 py-4 bg-amber-50 border-b border-amber-100'>
                              {section.prepTime && (
                                <div className='flex items-center gap-2'>
                                  <svg className='w-5 h-5 text-amber-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                  </svg>
                                  <span className='text-sm text-gray-700'><strong>Prep:</strong> {section.prepTime}</span>
                                </div>
                              )}
                              {section.cookTime && (
                                <div className='flex items-center gap-2'>
                                  <svg className='w-5 h-5 text-amber-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                  </svg>
                                  <span className='text-sm text-gray-700'><strong>Prepare Time:</strong> {section.cookTime}</span>
                                </div>
                              )}
                              {section.servings && (
                                <div className='flex items-center gap-2'>
                                  <svg className='w-5 h-5 text-amber-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                                  </svg>
                                  <span className='text-sm text-gray-700'><strong>Serves:</strong> {section.servings}</span>
                                </div>
                              )}
                            </div>

                            {/* Ingredients */}
                            {section.ingredients && section.ingredients.filter(i => i).length > 0 && (
                              <div className='px-6 py-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                                  <svg className='w-5 h-5 text-amber-500' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
                                    <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                                  </svg>
                                  Ingredients
                                </h3>
                                <ul className='space-y-2'>
                                  {section.ingredients.filter(i => i).map((ingredient, idx) => (
                                    <li key={idx} className='flex items-start gap-3 text-gray-700'>
                                      <span className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0' />
                                      {ingredient}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Nutrition Info (optional) - render all non-empty values dynamically */}
                            {section.nutrition && Object.values(section.nutrition).some(v => v && v.toString().trim()) && (
                              <div className='px-6 py-6 bg-gradient-to-r from-amber-50/50 to-orange-50/50 border-t border-amber-100'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                                  <svg className='w-5 h-5 text-amber-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                                  </svg>
                                  Nutrition Information
                                </h3>
                                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3'>
                                  {Object.entries(section.nutrition).map(([key, value]) => {
                                    if (!value || !value.toString().trim()) return null
                                    const labels: Record<string, string> = {
                                      calories: 'Calories',
                                      protein: 'Protein',
                                      carbs: 'Carbs',
                                      fat: 'Fat',
                                      sugar: 'Sugar',
                                      alcohol: 'Alcohol',
                                      fiber: 'Fiber',
                                      sodium: 'Sodium',
                                      cholesterol: 'Cholesterol',
                                      saturatedFat: 'Sat. Fat',
                                      transFat: 'Trans Fat',
                                      vitaminA: 'Vitamin A',
                                      vitaminC: 'Vitamin C',
                                      vitaminD: 'Vitamin D',
                                      calcium: 'Calcium',
                                      iron: 'Iron',
                                      potassium: 'Potassium'
                                    }
                                    const label = labels[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
                                    return (
                                      <div key={key} className='text-center p-3 bg-white rounded-xl shadow-sm border border-amber-100'>
                                        <p className='text-xl font-bold text-amber-600'>{value}</p>
                                        <p className='text-xs text-gray-500 mt-1'>{label}</p>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.section>
                      )
                    }
                    if (section.type === 'method' && section.steps && section.steps.length > 0) {
                      return (
                        <motion.section
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='mb-12'
                        >
                          <div className='relative bg-gradient-to-br from-white via-orange-50/30 to-white rounded-2xl shadow-xl overflow-hidden border border-amber-200'>
                            {/* Decorative elements */}
                            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100/40 to-transparent rounded-bl-full' />

                            {/* Method Header */}
                            <div className='relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 px-6 py-5'>
                              <div className='absolute inset-0 opacity-10 bg-white' style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                              <h2 className='relative text-xl md:text-2xl font-bold text-white flex items-center gap-3'>
                                <span className='w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center'>
                                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                                  </svg>
                                </span>
                                {section.content || 'Method'}
                              </h2>
                            </div>

                            {/* Steps */}
                            <ol className='relative px-6 py-8 space-y-8 list-none' aria-label='Method steps'>
                              {/* Connecting line */}
                              <div className='absolute left-10 top-12 bottom-12 w-0.5 bg-gradient-to-b from-amber-300 via-orange-300 to-amber-300' aria-hidden='true' />

                              {section.steps.filter(s => s.description).map((step, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                                  className='relative flex gap-5'
                                >
                                  <div className='flex-shrink-0 relative z-10'>
                                    <span className='w-12 h-12 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-500 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg shadow-amber-300/50 ring-4 ring-white' aria-hidden='true'>
                                      {idx + 1}
                                    </span>
                                  </div>
                                  <div className='flex-1 pt-2 pb-4'>
                                    {step.title && (
                                      <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                        {step.title}
                                      </h3>
                                    )}
                                    <p className='text-gray-700 leading-relaxed text-base'>
                                      {step.description}
                                    </p>
                                  </div>
                                </motion.li>
                              ))}
                            </ol>
                          </div>
                        </motion.section>
                      )
                    }
                    return null
                  })}

                {/* Back to Articles Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className='flex justify-center'
                >
                  <Link
                    href='/articles'
                    className='inline-flex items-center gap-2 text-gray-600 hover:text-pink-500 font-medium transition-colors'
                  >
                    <svg className='w-5 h-5 rotate-180' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                    Back to All Articles
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <section className='relative py-16 lg:py-20 bg-white'>
              <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='max-w-4xl mx-auto'
                >
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center'>
                    Related{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500'>
                      Articles
                    </span>
                  </h2>
                  <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none' role='list'>
                    {article.relatedArticles.map(({ slug: relatedSlug, title: relatedTitle, imageUrl: relatedImage }) => (
                      <li key={relatedSlug}>
                        <Link
                          href={`/articles/${relatedSlug}`}
                          className='group block focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-xl'
                        >
                          <article className='bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300'>
                            {relatedImage && (
                              <div className='relative h-40 overflow-hidden'>
                                <Image
                                  src={relatedImage}
                                  alt=''
                                  fill
                                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                                  sizes='(max-width: 768px) 100vw, 33vw'
                                />
                              </div>
                            )}
                            <div className='p-4'>
                              <h3 className='font-semibold text-gray-900 group-hover:text-pink-500 transition-colors line-clamp-2'>
                                {relatedTitle || relatedSlug.replace(/-/g, ' ')}
                              </h3>
                            </div>
                          </article>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className='relative py-20 lg:py-28 bg-gray-950 overflow-hidden'>
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
            <div className='absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />
            <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl' />

            <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='max-w-3xl mx-auto'
              >
                <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                  Ready to Plan Your{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'>
                    Perfect Event?
                  </span>
                </h2>
                <p className='text-xl text-gray-400 mb-10'>
                  Let us bring our expertise to your next celebration with premium mobile bar services.
                </p>
                <Link
                  href='/contact_us'
                  className='inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all text-lg'
                >
                  Get a Free Quote
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Lightbox Modal */}
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4'
            onClick={() => setLightboxImage(null)}
            role='dialog'
            aria-modal='true'
            aria-label='Image lightbox'
          >
            {/* Close button */}
            <button
              type='button'
              onClick={() => setLightboxImage(null)}
              className='absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10 backdrop-blur-sm border border-white/10'
              aria-label='Close lightbox'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>

            {/* Hint text */}
            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm flex items-center gap-2'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' />
              </svg>
              Click anywhere to close
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              className='relative max-w-7xl max-h-[90vh] w-full'
              onClick={e => e.stopPropagation()}
            >
              <div className='relative w-full h-full flex items-center justify-center'>
                <Image
                  src={lightboxImage.url}
                  alt={lightboxImage.caption || 'Expanded gallery image'}
                  width={1920}
                  height={1080}
                  className='max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl'
                  priority
                />
              </div>
              {lightboxImage.caption && (
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className='text-center text-white/90 mt-6 text-lg font-medium bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full mx-auto w-fit'
                >
                  {lightboxImage.caption}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Custom CSS - sanitized */}
        {customCss && (
          <style
            dangerouslySetInnerHTML={{
              __html: sanitizeCss(customCss)
            }}
          />
        )}
      </div>
    </>
  )
}

export default ArticlePage
