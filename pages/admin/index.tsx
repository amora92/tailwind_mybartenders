import { useState, useEffect } from 'react'
import { withAuth } from '@/components/withAuth'
import { AdminHeader } from '@/components/admin/Header'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface Article {
  _id: string
  title: string
  slug: string
  publishedAt: string
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
    [{ align: [] }],
    [{ color: [] }, { background: [] }]
  ],
  clipboard: {
    matchVisual: false
  }
}

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'code-block',
  'list',
  'bullet',
  'script',
  'indent',
  'link',
  'image',
  'video',
  'align',
  'color',
  'background'
]

const AdminPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [secondaryContent, setSecondaryContent] = useState('')
  const [image, setImage] = useState('')
  const [secondaryImage, setSecondaryImage] = useState('')
  const [slug, setSlug] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const res = await fetch('/api/articles')
      const data = await res.json()
      setArticles(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching articles:', error)
      setArticles([])
    }
  }

  const handleDelete = async (slug: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        const res = await fetch(`/api/articles/${slug}`, {
          method: 'DELETE'
        })

        if (res.ok) {
          setArticles(articles.filter(article => article.slug !== slug))
          setSuccess('Article deleted successfully')
        } else {
          setError('Failed to delete article')
        }
      } catch (error) {
        console.error('Error deleting article:', error)
        setError('Failed to delete article')
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newArticle = {
      title,
      description,
      content,
      secondaryContent,
      imageUrl: image,
      secondaryImageUrl: secondaryImage,
      slug,
      publishedAt: new Date(date).toISOString(),
      category: 'General',
      author: {
        name: 'Admin',
        avatar: '/admin-avatar.svg'
      },
      readTime: '5 min read'
    }

    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArticle)
      })

      const data = await res.json()

      if (res.status === 201) {
        setSuccess('Article added successfully')
        setTitle('')
        setDescription('')
        setContent('')
        setSecondaryContent('')
        setImage('')
        setSecondaryImage('')
        setSlug('')
        setDate('')
        fetchArticles()
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch (error) {
      console.error('Error while submitting:', error)
      setError('Failed to add article')
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <AdminHeader />

      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Article Dashboard
          </h1>
          <Link
            href='/admin/new-article'
            className='px-6 py-3 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-700'
          >
            Create New Article
          </Link>
        </div>

        {error && <p className='text-red-500 mb-4'>{error}</p>}
        {success && <p className='text-green-500 mb-4'>{success}</p>}

        <div className='bg-white shadow overflow-hidden sm:rounded-md'>
          <ul className='divide-y divide-gray-200'>
            {Array.isArray(articles) && articles.length > 0 ? (
              articles.map(article => (
                <li key={article._id}>
                  <div className='px-4 py-4 flex items-center justify-between sm:px-6'>
                    <div className='min-w-0 flex-1'>
                      <div className='bg-white hover:shadow-gold transition-all duration-300 p-4 rounded-lg'>
                        <h3 className='font-semibold hover:text-gold-600 transition-colors'>
                          {article.title}
                        </h3>
                      </div>
                      <div className='mt-1 flex items-center text-sm text-gray-500'>
                        <span>
                          Published:{' '}
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                        <span className='mx-2'>•</span>
                        <span>Slug: {article.slug}</span>
                      </div>
                    </div>
                    <div className='flex space-x-4'>
                      <Link
                        href={`/articles/${article.slug}`}
                        target='_blank'
                        className='px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200'
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(article.slug)}
                        className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className='px-4 py-8 text-center text-gray-500'>
                No articles found. Create your first article!
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withAuth(AdminPage)
