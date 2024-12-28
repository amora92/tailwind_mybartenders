import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ImageBlock } from '@/components/article/ImageBlock'
import { VideoBlock } from '@/components/article/VideoBlock'
import Link from 'next/link'

interface Article {
  title: string
  description: string
  content: string
  imageUrl: string
  publishedAt: string
  category: string
  readTime?: string
  author?: {
    name: string
    avatar: string
  }
  relatedArticles?: {
    slug: string
  }[]
}

const ArticlePage = () => {
  const router = useRouter()
  const { slug } = router.query
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      fetchArticle()
    }
  }, [slug])

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
            <span className='text-sm text-gray-500'>{article.readTime}</span>
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

        {/* Featured Image */}
        <div className='aspect-w-16 aspect-h-9 mb-12 rounded-lg overflow-hidden'>
          <img
            src={article.imageUrl}
            alt={article.title}
            className='object-cover w-full h-full'
          />
        </div>

        {/* Article Description */}
        <div className='prose prose-lg max-w-none mb-12 text-gray-600'>
          <p className='lead'>{article.description}</p>
        </div>

        {/* Article Content */}
        <div className='article-content'>
          <div
            dangerouslySetInnerHTML={{
              __html: article.content
            }}
            className='prose prose-lg max-w-none'
          />
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
    </div>
  )
}

export default ArticlePage
