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

interface Article {
  title: string
  description: string
  content: string
  imageUrl: string
  publishedAt: string
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
    type: 'text' | 'image' | 'video' | 'quote' | 'code' | 'cta'
    content: string
    caption?: string
    author?: string
    language?: string
    buttonText?: string
    buttonUrl?: string
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author?.name || 'MyBartenders'
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
        <meta name='description' content={article.description} />
        <link rel='canonical' href={canonicalUrl} />

        <meta property='og:type' content='article' />
        <meta property='og:title' content={article.title} />
        <meta property='og:description' content={article.description} />
        <meta property='og:image' content={article.imageUrl} />
        <meta property='og:url' content={canonicalUrl} />
        <meta property='og:site_name' content='MyBartenders' />
        <meta property='article:published_time' content={article.publishedAt} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={article.title} />
        <meta name='twitter:description' content={article.description} />
        <meta name='twitter:image' content={article.imageUrl} />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                      src={article.author?.avatar || '/admin-avatar.svg'}
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
                  <div className='relative flex items-center gap-2'>
                    <span className='text-sm text-gray-400 mr-2'>Share:</span>
                    <button
                      onClick={() => handleShare('facebook')}
                      className='p-2.5 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-400 rounded-full transition-all'
                      aria-label='Share on Facebook'
                    >
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className='p-2.5 bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/30 text-gray-400 hover:text-sky-400 rounded-full transition-all'
                      aria-label='Share on Twitter'
                    >
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.9 12.92-12.9 0-.2 0-.4-.02-.6.9-.65 1.8-1.46 2.46-2.4z' />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className='p-2.5 bg-white/5 hover:bg-blue-700/20 border border-white/10 hover:border-blue-600/30 text-gray-400 hover:text-blue-500 rounded-full transition-all'
                      aria-label='Share on LinkedIn'
                    >
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 21h4.96V7.98H.5V21zm7.33-13h4.75v1.77h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 6 3.31 6 7.61V21H18.5v-6.91c0-1.64-.03-3.74-2.28-3.74-2.28 0-2.62 1.78-2.62 3.62V21H7.82V8z' />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className='p-2.5 bg-white/5 hover:bg-green-600/20 border border-white/10 hover:border-green-500/30 text-gray-400 hover:text-green-400 rounded-full transition-all'
                      aria-label='Share on WhatsApp'
                    >
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M20.52 3.48a11.76 11.76 0 0 0-16.61 0c-4.63 4.63-4.55 12.28.15 16.94L2 22l1.66-2.92a11.7 11.7 0 0 0 16.87-16.88zM12 20.7a8.67 8.67 0 0 1-4.55-1.23l-.32-.19-2.7.7.72-2.64-.2-.34a8.66 8.66 0 0 1 13.45-11.6 8.7 8.7 0 0 1-6.4 14.3zM17.36 14.63c-.28-.14-1.63-.8-1.88-.89-.25-.08-.43-.14-.62.14-.18.28-.7.89-.86 1.07-.16.19-.33.21-.61.07a7.43 7.43 0 0 1-2.17-1.34 8.3 8.3 0 0 1-1.54-1.91c-.16-.27-.02-.41.12-.55.12-.12.28-.3.43-.45.14-.14.18-.24.28-.4.1-.17.05-.31-.02-.44-.07-.13-.62-1.5-.85-2.06-.22-.54-.44-.47-.62-.48h-.53a1.03 1.03 0 0 0-.75.35c-.25.28-1 1-1 2.43 0 1.42 1.03 2.79 1.17 2.98.14.19 2.03 3.1 4.9 4.35a17.5 17.5 0 0 0 2.12.63c.29.1.56.09.77.06.23-.03.7-.28.8-.55.1-.27.1-.5.07-.55-.03-.06-.25-.1-.52-.25z' />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className='p-2.5 bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/30 text-gray-400 hover:text-pink-400 rounded-full transition-all'
                      aria-label='Copy link'
                    >
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zM20 5H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h12v14z' />
                      </svg>
                    </button>
                    {copyNotification && (
                      <span className='absolute right-0 -bottom-10 px-3 py-1.5 rounded-lg bg-pink-500 text-white text-xs font-medium animate-fade-in'>
                        Link copied!
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Article Content Section */}
          <section className='relative py-16 lg:py-20 bg-gray-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='max-w-4xl mx-auto'>
                {/* Featured Image */}
                {article.imageUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl bg-gray-100'
                  >
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className='object-contain'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px'
                      priority
                    />
                  </motion.div>
                )}

                {/* Main Content */}
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12'
                >
                  <div
                    className='prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-xl'
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
                    <div className='relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-lg bg-gray-100'>
                      <Image
                        src={article.secondaryImageUrl}
                        alt={`${article.title} secondary`}
                        fill
                        className='object-contain'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px'
                      />
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
                          className='bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12'
                        >
                          <div
                            className='prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-pink-500'
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
                            <div className='relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100'>
                              <Image
                                src={section.content}
                                alt={section.caption || `${article.title} section image`}
                                fill
                                className='object-contain'
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px'
                              />
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
                          <blockquote className='relative bg-gradient-to-br from-pink-50 to-white p-8 md:p-12 rounded-2xl border-l-4 border-pink-500 shadow-sm'>
                            <svg
                              className='absolute top-6 left-6 w-8 h-8 text-pink-200'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                            </svg>
                            <p className='text-xl md:text-2xl text-gray-700 italic leading-relaxed pl-8'>
                              {section.content}
                            </p>
                            {section.author && (
                              <footer className='mt-6 pl-8'>
                                <p className='text-pink-500 font-semibold'>— {section.author}</p>
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
                          <div className='bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-orange-500/10 border border-pink-500/20 rounded-2xl p-8 md:p-12 text-center'>
                            <p className='text-xl text-gray-700 mb-6'>
                              {section.content}
                            </p>
                            {section.buttonUrl && section.buttonText && (
                              <Link
                                href={section.buttonUrl}
                                className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all'
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
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {article.relatedArticles.map(({ slug: relatedSlug, title: relatedTitle, imageUrl: relatedImage }) => (
                      <Link
                        key={relatedSlug}
                        href={`/articles/${relatedSlug}`}
                        className='group block'
                      >
                        <div className='bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300'>
                          {relatedImage && (
                            <div className='relative h-40 overflow-hidden'>
                              <Image
                                src={relatedImage}
                                alt={relatedTitle || relatedSlug}
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
                        </div>
                      </Link>
                    ))}
                  </div>
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
