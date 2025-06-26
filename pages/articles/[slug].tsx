import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

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
      <>
        <Head>
          <title>Loading article...</title>
        </Head>
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
      </>
    )
  }

  if (!article) {
    return (
      <>
        <Head>
          <title>Article Not Found</title>
        </Head>
        <div className='min-h-screen bg-gray-50'>
          <Navbar />
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <h1 className='text-2xl font-bold text-gray-900'>
              Article not found
            </h1>
          </div>
          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{article.title} | YourSiteName</title>
        <meta name='description' content={article.description} />
      </Head>

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
                  alt={article.author?.name || 'Author'}
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

          {/* Share Buttons */}
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
                <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.9 12.92-12.9 0-.2 0-.4-.02-.6.9-.65 1.8-1.46 2.46-2.4z' />
              </svg>
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className='p-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors'
              aria-label='Share on LinkedIn'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 21h4.96V7.98H.5V21zm7.33-13h4.75v1.77h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 6 3.31 6 7.61V21H18.5v-6.91c0-1.64-.03-3.74-2.28-3.74-2.28 0-2.62 1.78-2.62 3.62V21H7.82V8z' />
              </svg>
            </button>
            <button
              onClick={() => handleShare('whatsapp')}
              className='p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors'
              aria-label='Share on WhatsApp'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M20.52 3.48a11.76 11.76 0 0 0-16.61 0c-4.63 4.63-4.55 12.28.15 16.94L2 22l1.66-2.92a11.7 11.7 0 0 0 16.87-16.88zM12 20.7a8.67 8.67 0 0 1-4.55-1.23l-.32-.19-2.7.7.72-2.64-.2-.34a8.66 8.66 0 0 1 13.45-11.6 8.7 8.7 0 0 1-6.4 14.3zM17.36 14.63c-.28-.14-1.63-.8-1.88-.89-.25-.08-.43-.14-.62.14-.18.28-.7.89-.86 1.07-.16.19-.33.21-.61.07a7.43 7.43 0 0 1-2.17-1.34 8.3 8.3 0 0 1-1.54-1.91c-.16-.27-.02-.41.12-.55.12-.12.28-.3.43-.45.14-.14.18-.24.28-.4.1-.17.05-.31-.02-.44-.07-.13-.62-1.5-.85-2.06-.22-.54-.44-.47-.62-.48h-.53a1.03 1.03 0 0 0-.75.35c-.25.28-1 1-1 2.43 0 1.42 1.03 2.79 1.17 2.98.14.19 2.03 3.1 4.9 4.35a17.5 17.5 0 0 0 2.12.63c.29.1.56.09.77.06.23-.03.7-.28.8-.55.1-.27.1-.5.07-.55-.03-.06-.25-.1-.52-.25z' />
              </svg>
            </button>
            <button
              onClick={() => handleShare('copy')}
              className='p-2 text-gray-600 hover:bg-gray-200 rounded-full transition-colors'
              aria-label='Copy link'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zM20 5H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h12v14z' />
              </svg>
            </button>
            <span
              id='copy-notification'
              className='absolute right-0 bottom-full mb-2 px-3 py-1 rounded bg-gray-900 text-white text-xs opacity-0 transition-opacity'
              aria-live='polite'
            >
              Link copied!
            </span>
          </div>

          {/* Article Image */}
          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.title}
              className='rounded-lg w-full object-cover mb-12 max-h-[450px] mx-auto'
            />
          )}

          {/* Article Content */}
          <div className='prose prose-lg max-w-none mb-12 text-gray-700'>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Secondary Image and Content */}
          {article.secondaryImageUrl && article.secondaryContent && (
            <section className='mb-12'>
              <img
                src={article.secondaryImageUrl}
                alt={`${article.title} secondary`}
                className='rounded-lg w-full object-cover mb-6 max-h-[450px] mx-auto'
              />
              <div
                className='prose prose-lg max-w-none text-gray-700'
                dangerouslySetInnerHTML={{ __html: article.secondaryContent }}
              />
            </section>
          )}

          {/* Content Sections (Text, Image, Video) */}
          {article.contentSections &&
            article.contentSections.map(section => {
              if (section.type === 'text') {
                return (
                  <section
                    key={section.id}
                    className='prose prose-lg max-w-none mb-12 text-gray-700'
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )
              }
              if (section.type === 'image') {
                return (
                  <section key={section.id} className='mb-12'>
                    <img
                      src={section.content}
                      alt={`${article.title} section image`}
                      className='rounded-lg w-full object-cover max-h-[450px] mx-auto'
                    />
                  </section>
                )
              }
              if (section.type === 'video') {
                const videoId = getYouTubeVideoId(section.content)
                if (!videoId) return null
                return (
                  <section
                    key={section.id}
                    className='mb-12 aspect-video max-w-4xl mx-auto'
                  >
                    <iframe
                      width='100%'
                      height='100%'
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </section>
                )
              }
              return null
            })}

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <section className='mb-12'>
              <h2 className='text-2xl font-bold mb-6'>Related Articles</h2>
              <ul className='list-disc list-inside text-gray-700'>
                {article.relatedArticles.map(({ slug }) => (
                  <li key={slug} className='mb-2'>
                    <Link href={`/articles/${slug}`}>
                      <a className='text-blue-600 hover:underline'>{slug}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <Footer />

        {/* Custom CSS */}
        {customCss && (
          <style
            dangerouslySetInnerHTML={{
              __html: customCss
            }}
          />
        )}
      </div>
    </>
  )
}

export default ArticlePage
