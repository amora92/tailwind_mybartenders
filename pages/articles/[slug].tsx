import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ImageBlock } from '@/components/article/ImageBlock'
import { VideoBlock } from '@/components/article/VideoBlock'
import Link from 'next/link'
import parse from 'html-react-parser'

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
  }[]
  secondaryImageUrl?: string
  secondaryContent?: string
  customCss?: string
  contentSections?: {
    id: string
    type: 'text' | 'image' | 'video'
    content: string
  }[]
}

const formatReadTime = (readTime: string | number | undefined) => {
  if (!readTime) return '5 min read' // Default fallback
  if (typeof readTime === 'number') return `${readTime} min read`
  if (typeof readTime === 'string') {
    return readTime.includes('min read') ? readTime : `${readTime} min read`
  }
  return '5 min read'
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

  const articleStyles = {
    img: {
      maxWidth: '100%',
      height: 'auto',
      maxHeight: '600px',
      objectFit: 'contain' as const,
      margin: '2rem auto',
      display: 'block',
      backgroundColor: 'rgb(243 244 246)' // bg-gray-100
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
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          '_blank'
        )
        break
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`,
          '_blank'
        )
        break
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            url
          )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
            description
          )}`,
          '_blank'
        )
        break
      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${encodeURIComponent(
            `${title}\n\n${description}\n\n${url}`
          )}`,
          '_blank'
        )
        break
      case 'copy':
        try {
          await navigator.clipboard.writeText(url)
          // Show success message
          const notification = document.getElementById('copy-notification')
          if (notification) {
            notification.classList.remove('opacity-0')
            setTimeout(() => {
              notification.classList.add('opacity-0')
            }, 2000)
          }
        } catch (err) {
          console.error('Failed to copy:', err)
        }
        break
    }
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50'>
        <Navbar />
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='animate-pulse'>
            <div className='h-8 bg-gray-200 rounded w-3/4 mb-4'></div>
            <div className='h-4 bg-gray-200 rounded w-1/2 mb-12'></div>
            <div className='h-96 bg-gray-200 rounded-lg mb-8'></div>
            <div className='space-y-4'>
              <div className='h-4 bg-gray-200 rounded w-full'></div>
              <div className='h-4 bg-gray-200 rounded w-5/6'></div>
              <div className='h-4 bg-gray-200 rounded w-4/6'></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!article) {
    return (
      <div className='min-h-screen bg-gray-50'>
        <Navbar />
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <h1 className='text-2xl font-bold text-gray-900'>
            Article not found
          </h1>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />

      <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20'>
        {/* Article Header */}
        <header className='mb-12'>
          <div className='flex items-center space-x-2 mb-4'>
            <span className='px-3 py-1 text-xs font-semibold bg-gold-100 text-gold-600 rounded-full'>
              {article.category}
            </span>
            <span className='text-sm text-gray-500'>
              {formatReadTime(article.readTime)}
            </span>
          </div>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            {article.title}
          </h1>
          <div className='flex items-center justify-between border-b border-gray-200 pb-6'>
            <div className='flex items-center space-x-3'>
              <img
                src={article.author?.avatar || '/default-avatar.png'}
                alt={article.author?.name}
                className='w-10 h-10 rounded-full'
              />
              <div>
                <p className='font-medium text-gray-900'>
                  {article.author?.name || 'Anonymous'}
                </p>
                <time className='text-sm text-gray-500'>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>
        </header>

        {/* Article Description */}
        <div className='prose prose-lg max-w-none mb-12 text-gray-600'>
          <p className='lead'>{article.description}</p>
        </div>

        {/* Add Share Buttons */}
        <div className='relative flex items-center space-x-4 mb-8'>
          <span className='text-sm text-gray-600'>Share:</span>
          <button
            onClick={() => handleShare('facebook')}
            className='p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors'
            aria-label='Share on Facebook'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' />
            </svg>
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className='p-2 text-blue-400 hover:bg-blue-50 rounded-full transition-colors'
            aria-label='Share on Twitter'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' />
            </svg>
          </button>
          <button
            onClick={() => handleShare('linkedin')}
            className='p-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors'
            aria-label='Share on LinkedIn'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            </svg>
          </button>
          <button
            onClick={() => handleShare('whatsapp')}
            className='p-2 text-green-500 hover:bg-green-50 rounded-full transition-colors'
            aria-label='Share on WhatsApp'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
            </svg>
          </button>
          <button
            onClick={() => handleShare('copy')}
            className='p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors'
            aria-label='Copy link'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
              />
            </svg>
          </button>

          {/* Copy Notification */}
          <div
            id='copy-notification'
            className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm opacity-0 transition-opacity duration-200'
          >
            Link copied!
          </div>
        </div>

        {/* Article Content */}
        <div className='article-content'>
          {article.contentSections?.map((section, index) => (
            <div key={section.id}>
              {section.type === 'text' ? (
                <div
                  className='prose max-w-none mb-8'
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              ) : section.type === 'image' ? (
                <div className='my-12 bg-gray-100 rounded-lg overflow-hidden'>
                  <img
                    src={section.content}
                    alt={`Section ${index + 1}`}
                    className='w-full h-auto max-h-[600px] object-contain'
                  />
                </div>
              ) : (
                <div className='my-12 aspect-w-16 aspect-h-9'>
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                      section.content
                    )}`}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='w-full h-full'
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related Articles */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div className='mt-16 pt-8 border-t border-gray-200'>
            <h2 className='text-2xl font-bold mb-6'>Related Articles</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {article.relatedArticles.map(related => (
                <Link
                  key={related.slug}
                  href={`/articles/${related.slug}`}
                  className='group'
                >
                  {/* ... related article card ... */}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />

      {customCss && <style dangerouslySetInnerHTML={{ __html: customCss }} />}
    </div>
  )
}

export default ArticlePage
