import { useState, useEffect } from 'react'
import Link from 'next/link'
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
}

const AdminDashboard = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalArticles: 0,
    totalViews: 0,
    popularCategories: [],
    recentArticles: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const res = await fetch('/api/articles')
      const data = await res.json()
      setArticles(Array.isArray(data) ? data : [])

      // Calculate dashboard stats
      const totalArticles = data.length
      const totalViews = data.reduce(
        (sum: number, article: Article) => sum + (article.views || 0),
        0
      )

      // Get popular categories
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

      // Get recent articles
      const recentArticles = [...data]
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
        .slice(0, 5)

      setStats({
        totalArticles,
        totalViews,
        popularCategories,
        recentArticles
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

        // Remove the article from the local state
        setArticles(articles.filter(article => article.slug !== slug))

        // Update stats
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

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50'>
        <AdminHeader />
        <div className='max-w-7xl mx-auto py-6 px-4'>
          <div className='animate-pulse'>Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <AdminHeader />

      {/* Navigation Bar */}
      <div className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex space-x-4'>
              <Link
                href='/'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md'
              >
                ← Return to Home
              </Link>
              <Link
                href='/articles'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md'
              >
                View Articles
              </Link>
            </div>
            <Link
              href='/admin/new-article'
              className='px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700'
            >
              Create New Article
            </Link>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        {/* Dashboard Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white rounded-lg shadow p-6'>
            <h3 className='text-lg font-medium text-gray-900'>
              Total Articles
            </h3>
            <p className='text-3xl font-bold text-gold-600'>
              {stats.totalArticles}
            </p>
          </div>
          <div className='bg-white rounded-lg shadow p-6'>
            <h3 className='text-lg font-medium text-gray-900'>Total Views</h3>
            <p className='text-3xl font-bold text-gold-600'>
              {stats.totalViews}
            </p>
          </div>
          <div className='bg-white rounded-lg shadow p-6'>
            <h3 className='text-lg font-medium text-gray-900'>
              Popular Categories
            </h3>
            <div className='mt-2'>
              {stats.popularCategories.map(({ category, count }) => (
                <div key={category} className='flex justify-between text-sm'>
                  <span>{category}</span>
                  <span className='text-gold-600'>{count} articles</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Articles */}
        <div className='bg-white rounded-lg shadow mb-8'>
          <div className='px-6 py-4 border-b border-gray-200'>
            <h3 className='text-lg font-medium text-gray-900'>
              Recent Articles
            </h3>
          </div>
          <div className='divide-y divide-gray-200'>
            {stats.recentArticles.map(article => (
              <div key={article._id} className='px-6 py-4'>
                <div className='flex justify-between items-center'>
                  <div>
                    <Link
                      href={`/articles/${article.slug}`}
                      className='text-lg font-medium text-gray-900 hover:text-gold-600'
                    >
                      {article.title}
                    </Link>
                    <p className='text-sm text-gray-500'>
                      {article.category} • {article.readTime}
                    </p>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <span className='text-sm text-gray-500'>
                      {formatDate(article.publishedAt)}
                    </span>
                    <Link
                      href={`/admin/edit-article/${article.slug}`}
                      className='text-gold-600 hover:text-gold-700'
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Articles Table */}
        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='px-6 py-4 border-b border-gray-200'>
            <h3 className='text-lg font-medium text-gray-900'>All Articles</h3>
          </div>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Title
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Category
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Published
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {articles.map(article => (
                  <tr key={article._id}>
                    <td className='px-6 py-4'>
                      <div className='text-sm font-medium text-gray-900'>
                        {article.title}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gold-100 text-gold-800'>
                        {article.category}
                      </span>
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-500'>
                      {formatDate(article.publishedAt)}
                    </td>
                    <td className='px-6 py-4 text-sm'>
                      <Link
                        href={`/admin/edit-article/${article.slug}`}
                        className='text-gold-600 hover:text-gold-900 mr-4'
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(article.slug)}
                        className='text-red-600 hover:text-red-900'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(AdminDashboard)
