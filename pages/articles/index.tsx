import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../../app/globals.css'

// Define the Article type to fix TypeScript errors
interface Article {
  slug: string
  title: string
  description: string
  imageUrl: string
  contentSections?: {
    id: string
    type: 'text' | 'image'
    content: string
  }[]
  publishedAt: string
  category: string
  readTime?: string | number
  author?: {
    name: string
    avatar: string
  }
}

const formatReadTime = (readTime: string | number | undefined) => {
  if (!readTime) return '5 min read' // Default fallback
  if (typeof readTime === 'number') return `${readTime} min read`
  if (typeof readTime === 'string') {
    return readTime.includes('min read') ? readTime : `${readTime} min read`
  }
  return '5 min read'
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/articles')
      const data = await response.json()

      if (Array.isArray(data)) {
        setArticles(data)
      } else {
        setArticles([])
      }
    }

    fetchArticles()
  }, [])

  const filteredAndSortedArticles = articles
    .filter(article => {
      const searchLower = searchTerm.toLowerCase()
      return (
        article.title.toLowerCase().includes(searchLower) ||
        article.description.toLowerCase().includes(searchLower) ||
        article.category.toLowerCase().includes(searchLower)
      )
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        const dateA = new Date(a.publishedAt).getTime()
        const dateB = new Date(b.publishedAt).getTime()
        return sortOrder === 'desc' ? dateB - dateA : dateA - dateB
      } else {
        const titleA = a.title.toLowerCase()
        const titleB = b.title.toLowerCase()
        return sortOrder === 'desc'
          ? titleB.localeCompare(titleA)
          : titleA.localeCompare(titleB)
      }
    })

  // Separate featured article from the rest
  const featuredArticle = filteredAndSortedArticles[0]
  const regularArticles = filteredAndSortedArticles.slice(1)

  // When displaying the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20'>
        {/* Hero Section */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent'>
            Our Latest Stories
          </h1>
          <p className='text-gray-600 text-lg'>
            Discover insights, tutorials, and stories from our community
          </p>
        </div>

        {/* Search and Sort Controls */}
        <div className='mb-8 flex flex-col sm:flex-row gap-4 items-center'>
          <div className='w-full sm:w-64'>
            <input
              type='text'
              placeholder='Search articles...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent'
            />
          </div>
          <div className='flex gap-4'>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as 'date' | 'title')}
              className='px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent'
            >
              <option value='date'>Sort by Date</option>
              <option value='title'>Sort by Title</option>
            </select>
            <button
              onClick={() =>
                setSortOrder(current => (current === 'desc' ? 'asc' : 'desc'))
              }
              className='px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700'
            >
              {sortOrder === 'desc' ? '↓ Desc' : '↑ Asc'}
            </button>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className='mb-16'>
            <Link href={`/articles/${featuredArticle.slug}`}>
              <div className='group relative rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300'>
                <div className='grid md:grid-cols-2 gap-0'>
                  <div className='relative w-full h-[500px] md:h-full'>
                    <img
                      src={
                        featuredArticle.imageUrl || '/default-article-image.jpg'
                      }
                      alt={featuredArticle.title}
                      className='absolute inset-0 w-full h-full object-contain bg-gray-100'
                    />
                  </div>
                  <div className='p-8 md:p-12 flex flex-col justify-center'>
                    <div className='flex items-center space-x-2 mb-4'>
                      <span className='px-3 py-1 text-xs font-semibold bg-gold-100 text-gold-600 rounded-full'>
                        Featured
                      </span>
                      {featuredArticle.category && (
                        <span className='px-3 py-1 text-xs font-semibold bg-gold-100 text-gold-600 rounded-full'>
                          {featuredArticle.category}
                        </span>
                      )}
                    </div>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors'>
                      {featuredArticle.title}
                    </h2>
                    <p className='text-gray-600 mb-6 line-clamp-3'>
                      {featuredArticle.description}
                    </p>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                      <div className='flex items-center space-x-4'>
                        <img
                          src={
                            featuredArticle.author?.avatar ||
                            '/default-avatar.png'
                          }
                          alt={featuredArticle.author?.name}
                          className='w-10 h-10 rounded-full'
                        />
                        <div>
                          <p className='font-medium text-gray-900'>
                            {featuredArticle.author?.name || 'Anonymous'}
                          </p>
                          <time className='text-sm text-gray-500'>
                            {featuredArticle.publishedAt
                              ? formatDate(featuredArticle.publishedAt)
                              : 'Date not available'}
                          </time>
                        </div>
                      </div>
                      <span className='text-sm text-gray-500'>
                        {formatReadTime(featuredArticle.readTime)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {regularArticles.map(article => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className='group'
            >
              <article className='h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col'>
                <div className='relative w-full h-[300px]'>
                  <img
                    src={article.imageUrl || '/default-article-image.jpg'}
                    alt={article.title}
                    className='absolute inset-0 w-full h-full object-contain bg-gray-100'
                  />
                  {article.category && (
                    <div className='absolute top-4 left-4'>
                      <span className='px-3 py-1 text-xs font-semibold bg-white/90 text-gold-600 rounded-full'>
                        {article.category}
                      </span>
                    </div>
                  )}
                </div>

                <div className='p-6 flex-1 flex flex-col'>
                  <h2 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors'>
                    {article.title}
                  </h2>
                  <p className='text-gray-600 line-clamp-2 mb-6 flex-1'>
                    {article.description}
                  </p>

                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto pt-4 border-t border-gray-100'>
                    <div className='flex items-center space-x-3'>
                      <img
                        src={article.author?.avatar || '/default-avatar.png'}
                        alt={article.author?.name}
                        className='w-8 h-8 rounded-full'
                      />
                      <span className='text-sm text-gray-600'>
                        {article.author?.name || 'Anonymous'}
                      </span>
                    </div>
                    <div className='flex items-center justify-between sm:flex-col sm:items-end'>
                      <time className='text-sm text-gray-500'>
                        {article.publishedAt
                          ? formatDate(article.publishedAt)
                          : 'Date not available'}
                      </time>
                      <span className='text-sm text-gray-500 ml-4 sm:ml-0'>
                        {formatReadTime(article.readTime)}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredAndSortedArticles.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-600 text-lg'>
              No articles found matching your search.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Articles
