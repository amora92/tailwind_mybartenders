'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SEO_DEFAULTS } from '@/constants/brandStyles'
import '../../app/globals.css'

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

const CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'Wedding', label: 'Wedding' },
  { value: 'Educational', label: 'Educational' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'News', label: 'News' },
  { value: 'Cocktails', label: 'Cocktails' },
  { value: 'Events', label: 'Events' },
]

const SORT_OPTIONS = [
  { value: 'date-desc', label: 'Newest First' },
  { value: 'date-asc', label: 'Oldest First' },
  { value: 'views-desc', label: 'Most Popular' },
  { value: 'views-asc', label: 'Least Popular' },
]

interface ArticleWithViews extends Article {
  views?: number
}

const Articles = () => {
  const [articles, setArticles] = useState<ArticleWithViews[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('date-desc')

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles')
        const data = await response.json()
        setArticles(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error('Error fetching articles:', error)
        setArticles([])
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const filteredArticles = articles
    .filter(article => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date-asc':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        case 'views-desc':
          return (b.views || 0) - (a.views || 0)
        case 'views-asc':
          return (a.views || 0) - (b.views || 0)
        case 'date-desc':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
    })

  const featuredArticle = filteredArticles[0]
  const regularArticles = filteredArticles.slice(1)

  return (
    <>
      <Head>
        <title>Articles & Insights | Mobile Bar Tips | MyBartenders UK</title>
        <meta
          name='description'
          content='Discover expert tips, cocktail recipes, and event planning insights from MyBartenders. Your guide to hosting unforgettable events.'
        />
        <link rel='canonical' href={`${SEO_DEFAULTS.siteUrl}/articles`} />
        <meta property='og:title' content='Articles & Insights | MyBartenders' />
        <meta property='og:description' content='Expert tips, cocktail recipes, and event planning insights.' />
        <meta property='og:type' content='website' />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />
          <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center max-w-4xl mx-auto'
            >
              <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                Our Blog
              </span>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                Articles &{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
                  Insights
                </span>
              </h1>

              <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
                Expert tips, cocktail recipes, and event planning insights to help you create unforgettable experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className='relative py-8 bg-gray-900 border-b border-white/10'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between'>
              {/* Search */}
              <div className='relative w-full lg:w-96'>
                <svg className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
                <input
                  type='text'
                  placeholder='Search articles...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all'
                />
              </div>

              {/* Filters */}
              <div className='flex flex-col sm:flex-row gap-3'>
                {/* Category Dropdown */}
                <div className='relative'>
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className='appearance-none w-full sm:w-48 px-4 py-3 pr-10 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer'
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.value} value={cat.value} className='bg-gray-900 text-white'>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                  <svg className='absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>

                {/* Sort Dropdown */}
                <div className='relative'>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='appearance-none w-full sm:w-44 px-4 py-3 pr-10 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer'
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value} className='bg-gray-900 text-white'>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <svg className='absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className='relative py-16 lg:py-24 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            {loading ? (
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className='bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse'>
                    <div className='h-56 bg-gray-200' />
                    <div className='p-6'>
                      <div className='h-4 bg-gray-200 rounded w-1/4 mb-4' />
                      <div className='h-6 bg-gray-200 rounded w-3/4 mb-3' />
                      <div className='h-4 bg-gray-200 rounded w-full mb-2' />
                      <div className='h-4 bg-gray-200 rounded w-2/3' />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredArticles.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-center py-16'
              >
                <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <svg className='w-10 h-10 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>No articles found</h3>
                <p className='text-gray-600'>
                  {searchTerm ? 'Try adjusting your search terms.' : 'Check back soon for new content!'}
                </p>
              </motion.div>
            ) : (
              <>
                {/* Featured Article */}
                {featuredArticle && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='mb-16'
                  >
                    <Link href={`/articles/${featuredArticle.slug}`}>
                      <div className='group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <div className='grid lg:grid-cols-2'>
                          <div className='relative h-72 lg:h-[450px]'>
                            <Image
                              src={featuredArticle.imageUrl || '/default-article-image.jpg'}
                              alt={featuredArticle.title}
                              fill
                              className='object-cover group-hover:scale-105 transition-transform duration-500'
                              sizes='(max-width: 1024px) 100vw, 50vw'
                            />
                            <div className='absolute top-4 left-4 flex gap-2'>
                              <span className='px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full'>
                                Featured
                              </span>
                              {featuredArticle.category && (
                                <span className='px-3 py-1 bg-white/90 text-gray-900 text-xs font-semibold rounded-full'>
                                  {featuredArticle.category}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className='p-8 lg:p-12 flex flex-col justify-center'>
                            <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-pink-500 transition-colors'>
                              {featuredArticle.title}
                            </h2>
                            <p className='text-gray-600 mb-6 line-clamp-3'>
                              {featuredArticle.description}
                            </p>
                            <div className='flex items-center justify-between'>
                              <div className='flex items-center gap-3'>
                                <Image
                                  src={featuredArticle.author?.avatar || '/mybartenders.co.uk_logo_svg.svg'}
                                  alt={featuredArticle.author?.name || 'Author'}
                                  width={40}
                                  height={40}
                                  className='rounded-full'
                                />
                                <div>
                                  <p className='font-medium text-gray-900'>
                                    {featuredArticle.author?.name || 'MyBartenders'}
                                  </p>
                                  <p className='text-sm text-gray-500'>
                                    {formatDate(featuredArticle.publishedAt)}
                                  </p>
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
                  </motion.div>
                )}

                {/* Article Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {regularArticles.map((article, index) => (
                    <motion.div
                      key={article.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={`/articles/${article.slug}`} className='group block h-full'>
                        <article className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col'>
                          <div className='relative aspect-[16/10] bg-gray-100'>
                            <Image
                              src={article.imageUrl || '/default-article-image.jpg'}
                              alt={article.title}
                              fill
                              className='object-cover object-center group-hover:scale-105 transition-transform duration-500'
                              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                            />
                            {/* Subtle gradient for better image display */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent' />
                            {article.category && (
                              <div className='absolute top-4 left-4'>
                                <span className='px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full shadow-sm'>
                                  {article.category}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className='p-6 flex flex-col flex-1'>
                            <h2 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors line-clamp-2'>
                              {article.title}
                            </h2>
                            <p className='text-gray-600 line-clamp-2 mb-6 flex-1'>
                              {article.description}
                            </p>
                            <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                              <div className='flex items-center gap-2'>
                                <Image
                                  src={article.author?.avatar || '/mybartenders.co.uk_logo_svg.svg'}
                                  alt={article.author?.name || 'Author'}
                                  width={32}
                                  height={32}
                                  className='rounded-full'
                                />
                                <span className='text-sm text-gray-600'>
                                  {article.author?.name || 'MyBartenders'}
                                </span>
                              </div>
                              <span className='text-sm text-gray-500'>
                                {formatReadTime(article.readTime)}
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-20 lg:py-28 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='max-w-3xl mx-auto'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Ready to Plan Your
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'>
                  Perfect Event?
                </span>
              </h2>
              <p className='text-xl text-gray-400 mb-10'>
                Let us bring our expertise to your next celebration.
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
    </>
  )
}

export default Articles
