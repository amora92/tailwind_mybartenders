import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { withAuth } from '@/components/withAuth'
import { AdminHeader } from '@/components/admin/Header'

interface Article {
  _id: string
  title: string
  slug: string
  publishedAt: string
  category: string
  readTime: string
  views?: number
  status?: 'draft' | 'published'
}

interface CategoryCount {
  category: string
  count: number
}

interface DashboardStats {
  totalArticles: number
  totalViews: number
  popularCategories: CategoryCount[]
  recentArticles: Article[]
  topArticles: Article[]
  avgViewsPerArticle: number
  draftCount: number
  publishedCount: number
}

const AdminDashboard = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalArticles: 0,
    totalViews: 0,
    popularCategories: [],
    recentArticles: [],
    topArticles: [],
    avgViewsPerArticle: 0,
    draftCount: 0,
    publishedCount: 0
  })
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      // Use admin=true to fetch all articles including drafts
      const res = await fetch('/api/articles?admin=true')
      const data = await res.json()
      setArticles(Array.isArray(data) ? data : [])

      const totalArticles = data.length
      const totalViews = data.reduce(
        (sum: number, article: Article) => sum + (article.views || 0),
        0
      )

      // Count drafts and published
      const draftCount = data.filter((a: Article) => a.status === 'draft').length
      const publishedCount = data.filter((a: Article) => a.status !== 'draft').length

      const categoryCount = data.reduce(
        (acc: { [key: string]: number }, article: Article) => {
          acc[article.category] = (acc[article.category] || 0) + 1
          return acc
        },
        {}
      )

      const popularCategories = Object.entries(categoryCount)
        .map(
          ([category, count]): CategoryCount => ({
            category,
            count: count as number
          })
        )
        .sort((a: CategoryCount, b: CategoryCount) => b.count - a.count)
        .slice(0, 5)

      const recentArticles = [...data]
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
        .slice(0, 5)

      const topArticles = [...data]
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, 5)

      const avgViewsPerArticle = totalArticles > 0
        ? Math.round(totalViews / totalArticles)
        : 0

      setStats({
        totalArticles,
        totalViews,
        popularCategories,
        recentArticles,
        topArticles,
        avgViewsPerArticle,
        draftCount,
        publishedCount
      })

      setLoading(false)
    } catch (error) {
      console.error('Error fetching articles:', error)
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const handleDelete = async (slug: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        const response = await fetch(`/api/articles/${slug}`, {
          method: 'DELETE'
        })

        if (!response.ok) {
          throw new Error('Failed to delete article')
        }

        setArticles(articles.filter(article => article.slug !== slug))
        setStats(prev => ({
          ...prev,
          totalArticles: prev.totalArticles - 1,
          recentArticles: prev.recentArticles.filter(
            article => article.slug !== slug
          )
        }))
      } catch (error) {
        console.error('Error deleting article:', error)
        alert('Failed to delete article')
      }
    }
  }

  const filteredArticles = articles.filter(
    article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-950'>
        <Head>
          <meta name='robots' content='noindex, nofollow' />
          <title>Admin Dashboard | MyBartenders</title>
        </Head>
        <AdminHeader />
        <div className='max-w-7xl mx-auto py-12 px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            {[1, 2, 3].map(i => (
              <div key={i} className='bg-gray-900 rounded-2xl p-6 animate-pulse'>
                <div className='h-4 bg-gray-800 rounded w-1/2 mb-4' />
                <div className='h-8 bg-gray-800 rounded w-1/3' />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-950'>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
        <title>Admin Dashboard | MyBartenders</title>
      </Head>

      <AdminHeader />

      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        {/* Page Header */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-white mb-2'>Dashboard</h1>
            <p className='text-gray-400'>Manage your articles and content</p>
          </div>
          <Link
            href='/admin/new-article'
            className='mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
            </svg>
            New Article
          </Link>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-400 text-sm font-medium'>Total Articles</p>
                <p className='text-4xl font-bold text-white mt-2'>{stats.totalArticles}</p>
              </div>
              <div className='w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center'>
                <svg className='w-7 h-7 text-pink-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' />
                </svg>
              </div>
            </div>
          </div>

          <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-400 text-sm font-medium'>Total Views</p>
                <p className='text-4xl font-bold text-white mt-2'>{stats.totalViews.toLocaleString()}</p>
              </div>
              <div className='w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center'>
                <svg className='w-7 h-7 text-amber-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                </svg>
              </div>
            </div>
          </div>

          <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-400 text-sm font-medium'>Avg Views/Article</p>
                <p className='text-4xl font-bold text-white mt-2'>{stats.avgViewsPerArticle.toLocaleString()}</p>
              </div>
              <div className='w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center'>
                <svg className='w-7 h-7 text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                </svg>
              </div>
            </div>
          </div>

          <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
            <div>
              <p className='text-gray-400 text-sm font-medium mb-3'>Article Status</p>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <span className='text-white text-sm flex items-center gap-2'>
                    <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                    Published
                  </span>
                  <span className='px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full'>
                    {stats.publishedCount}
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-white text-sm flex items-center gap-2'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full'></span>
                    Drafts
                  </span>
                  <span className='px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full'>
                    {stats.draftCount}
                  </span>
                </div>
                {stats.popularCategories.length > 0 && (
                  <div className='pt-2 border-t border-white/5'>
                    <p className='text-gray-500 text-xs mb-2'>Top Category</p>
                    <div className='flex justify-between items-center'>
                      <span className='text-white text-sm'>{stats.popularCategories[0].category}</span>
                      <span className='px-2 py-0.5 bg-pink-500/20 text-pink-400 text-xs font-medium rounded-full'>
                        {stats.popularCategories[0].count}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout for Top Articles and Recent */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Top Performing Articles */}
          <div className='bg-gray-900 border border-white/10 rounded-2xl'>
            <div className='px-6 py-4 border-b border-white/10 flex items-center gap-3'>
              <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-amber-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-white'>Top Performing</h3>
            </div>
            <div className='divide-y divide-white/5'>
              {stats.topArticles.length > 0 ? (
                stats.topArticles.map((article, index) => (
                  <div key={article._id} className='px-6 py-4 hover:bg-white/5 transition-colors'>
                    <div className='flex items-start gap-4'>
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-amber-500/20 text-amber-400' :
                        index === 1 ? 'bg-gray-500/20 text-gray-400' :
                        index === 2 ? 'bg-amber-700/20 text-amber-600' :
                        'bg-white/5 text-gray-500'
                      }`}>
                        {index + 1}
                      </span>
                      <div className='flex-1 min-w-0'>
                        <Link
                          href={`/articles/${article.slug}`}
                          className='text-white font-medium hover:text-pink-400 transition-colors line-clamp-1'
                        >
                          {article.title}
                        </Link>
                        <div className='flex items-center gap-3 mt-1'>
                          <span className='text-amber-400 text-sm font-medium'>
                            {(article.views || 0).toLocaleString()} views
                          </span>
                          <span className='px-2 py-0.5 bg-white/10 text-gray-300 text-xs rounded-full'>
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/admin/edit-article/${article.slug}`}
                        className='text-pink-400 hover:text-pink-300 text-sm transition-colors'
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className='px-6 py-12 text-center'>
                  <p className='text-gray-500'>No articles yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Articles */}
          <div className='bg-gray-900 border border-white/10 rounded-2xl'>
            <div className='px-6 py-4 border-b border-white/10 flex items-center gap-3'>
              <div className='w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-white'>Recent Articles</h3>
            </div>
            <div className='divide-y divide-white/5'>
              {stats.recentArticles.length > 0 ? (
                stats.recentArticles.map(article => (
                  <div key={article._id} className='px-6 py-4 hover:bg-white/5 transition-colors'>
                    <div className='flex items-start gap-4'>
                      <div className='flex-1 min-w-0'>
                        <Link
                          href={`/articles/${article.slug}`}
                          className='text-white font-medium hover:text-pink-400 transition-colors line-clamp-1'
                        >
                          {article.title}
                        </Link>
                        <div className='flex items-center gap-3 mt-1'>
                          <span className='text-gray-500 text-sm'>{formatDate(article.publishedAt)}</span>
                          <span className='px-2 py-0.5 bg-white/10 text-gray-300 text-xs rounded-full'>
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-gray-500 text-sm'>{(article.views || 0).toLocaleString()} views</span>
                        <Link
                          href={`/admin/edit-article/${article.slug}`}
                          className='text-pink-400 hover:text-pink-300 text-sm transition-colors'
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='px-6 py-12 text-center'>
                  <p className='text-gray-500'>No articles yet. Create your first one!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* All Articles Table */}
        <div className='bg-gray-900 border border-white/10 rounded-2xl overflow-hidden'>
          <div className='px-6 py-4 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center'>
                <svg className='w-4 h-4 text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 10h16M4 14h16M4 18h16' />
                </svg>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white'>All Articles</h3>
                <p className='text-gray-500 text-sm'>{filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}</p>
              </div>
            </div>
            <div className='relative'>
              <svg className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
              <input
                type='text'
                placeholder='Search articles...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='pl-10 pr-4 py-2 bg-gray-800 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-full md:w-64'
              />
            </div>
          </div>
          <div className='overflow-x-auto'>
            <table className='min-w-full'>
              <thead>
                <tr className='bg-gray-800/50'>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Title
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Status
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Category
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Views
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Published
                  </th>
                  <th className='px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-white/5'>
                {filteredArticles.length > 0 ? (
                  filteredArticles.map(article => (
                    <tr key={article._id} className='hover:bg-white/5 transition-colors group'>
                      <td className='px-6 py-4'>
                        <Link href={`/articles/${article.slug}`} className='text-white font-medium hover:text-pink-400 transition-colors'>
                          {article.title}
                        </Link>
                      </td>
                      <td className='px-6 py-4'>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${
                          article.status === 'draft'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            article.status === 'draft' ? 'bg-yellow-400' : 'bg-green-400'
                          }`}></span>
                          {article.status === 'draft' ? 'Draft' : 'Published'}
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <span className='px-2.5 py-1 bg-pink-500/20 text-pink-400 text-xs font-medium rounded-full'>
                          {article.category}
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <span className='text-gray-400 text-sm flex items-center gap-1'>
                          <svg className='w-4 h-4 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                            <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                            <path fillRule='evenodd' d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z' clipRule='evenodd' />
                          </svg>
                          {(article.views || 0).toLocaleString()}
                        </span>
                      </td>
                      <td className='px-6 py-4 text-gray-400 text-sm'>
                        {formatDate(article.publishedAt)}
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center justify-end gap-2'>
                          <Link
                            href={`/articles/${article.slug}`}
                            className={`p-2 hover:bg-white/10 rounded-lg transition-all ${
                              article.status === 'draft'
                                ? 'text-gray-500 cursor-not-allowed'
                                : 'text-gray-400 hover:text-white'
                            }`}
                            title={article.status === 'draft' ? 'Draft - not publicly visible' : 'View article'}
                            onClick={e => {
                              if (article.status === 'draft') {
                                e.preventDefault()
                              }
                            }}
                          >
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                            </svg>
                          </Link>
                          <Link
                            href={`/admin/edit-article/${article.slug}`}
                            className='p-2 text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 rounded-lg transition-all'
                            title='Edit article'
                          >
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                            </svg>
                          </Link>
                          <button
                            onClick={() => handleDelete(article.slug)}
                            className='p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all'
                            title='Delete article'
                          >
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className='px-6 py-12 text-center text-gray-500'>
                      {searchTerm ? 'No articles match your search' : 'No articles yet'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(AdminDashboard)
