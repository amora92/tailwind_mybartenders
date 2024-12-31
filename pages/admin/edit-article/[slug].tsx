import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { withAuth } from '@/components/withAuth'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface ContentSection {
  id: string
  type: 'text' | 'image' | 'video'
  content: string
}

const getYouTubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

const EditArticle = () => {
  const router = useRouter()
  const { slug } = router.query
  const [article, setArticle] = useState({
    title: '',
    description: '',
    imageUrl: '',
    publishedAt: '',
    category: '',
    author: { name: '', avatar: '' },
    readTime: '' as string | number,
    labels: []
  })
  const [contentSections, setContentSections] = useState<ContentSection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    if (slug) {
      fetchArticle()
    }
  }, [slug])

  const fetchArticle = async () => {
    try {
      const response = await fetch(`/api/articles/${slug}`)
      if (!response.ok) throw new Error('Article not found')
      const data = await response.json()

      setContentSections(data.contentSections || [])
      setArticle({
        ...data,
        publishedAt: new Date(data.publishedAt).toISOString().split('T')[0]
      })
      setLoading(false)
    } catch (error) {
      setError('Failed to fetch article')
      setLoading(false)
    }
  }

  const addSection = (type: 'text' | 'image' | 'video') => {
    setContentSections(prev => [
      ...prev,
      { id: Date.now().toString(), type, content: '' }
    ])
  }

  const removeSection = (id: string) => {
    setContentSections(prev => prev.filter(section => section.id !== id))
  }

  const updateSection = (id: string, content: string) => {
    setContentSections(prev =>
      prev.map(section =>
        section.id === id ? { ...section, content } : section
      )
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const textContent = contentSections
        .filter(section => section.type === 'text')
        .map(section => section.content)
        .join(' ')
      const wordCount = textContent.split(/\s+/).length
      const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200))

      const response = await fetch(`/api/articles/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...article,
          contentSections,
          readTime: `${readTimeMinutes} min read`,
          author: {
            name: 'mybartenders.co.uk',
            avatar: '/pineapple.svg'
          }
        })
      })

      if (!response.ok) throw new Error('Failed to update article')
      router.push('/admin')
    } catch (error) {
      setError('Failed to update article')
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className='max-w-7xl mx-auto p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Edit Article</h1>
        <button
          type='button'
          onClick={() => setShowPreview(!showPreview)}
          className='px-4 py-2 bg-gold-600 text-white rounded hover:bg-gold-700'
        >
          {showPreview ? 'Show Editor' : 'Show Preview'}
        </button>
      </div>

      {!showPreview ? (
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block mb-2'>Title</label>
            <input
              type='text'
              name='title'
              value={article.title}
              onChange={e =>
                setArticle(prev => ({ ...prev, title: e.target.value }))
              }
              className='w-full p-2 border rounded'
              required
            />
          </div>

          <div>
            <label className='block mb-2'>Description</label>
            <textarea
              name='description'
              value={article.description}
              onChange={e =>
                setArticle(prev => ({ ...prev, description: e.target.value }))
              }
              className='w-full p-2 border rounded'
              required
            />
          </div>

          <div>
            <label className='block mb-2'>Main Image URL</label>
            <input
              type='text'
              name='imageUrl'
              value={article.imageUrl}
              onChange={e =>
                setArticle(prev => ({ ...prev, imageUrl: e.target.value }))
              }
              className='w-full p-2 border rounded'
              required
            />
          </div>

          <div className='space-y-4'>
            {contentSections.map((section, index) => (
              <div
                key={section.id}
                className='p-4 border rounded-lg bg-white shadow-sm'
              >
                <div className='flex justify-between items-center mb-2'>
                  <span className='font-medium'>
                    Section {index + 1} ({section.type})
                  </span>
                  <button
                    type='button'
                    onClick={() => removeSection(section.id)}
                    className='text-red-500 hover:text-red-700'
                  >
                    Remove
                  </button>
                </div>

                {section.type === 'text' ? (
                  <ReactQuill
                    value={section.content}
                    onChange={content => updateSection(section.id, content)}
                    className='h-64 mb-12'
                  />
                ) : section.type === 'image' ? (
                  <div className='space-y-2'>
                    <input
                      type='text'
                      value={section.content}
                      onChange={e => updateSection(section.id, e.target.value)}
                      placeholder='Image URL'
                      className='w-full p-2 border rounded'
                    />
                    {section.content && (
                      <img
                        src={section.content}
                        alt='Preview'
                        className='max-h-48 object-contain'
                      />
                    )}
                  </div>
                ) : (
                  <div className='space-y-2'>
                    <input
                      type='text'
                      value={section.content}
                      onChange={e => updateSection(section.id, e.target.value)}
                      placeholder='YouTube Video URL'
                      className='w-full p-2 border rounded'
                    />
                    {section.content && getYouTubeVideoId(section.content) && (
                      <div className='aspect-w-16 aspect-h-9'>
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
                )}
              </div>
            ))}
          </div>

          <div className='flex space-x-4 mb-6'>
            <button
              type='button'
              onClick={() => addSection('text')}
              className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
            >
              Add Text Section
            </button>
            <button
              type='button'
              onClick={() => addSection('image')}
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
              Add Image
            </button>
            <button
              type='button'
              onClick={() => addSection('video')}
              className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
            >
              Add YouTube Video
            </button>
          </div>

          <div>
            <label className='block mb-2'>Category</label>
            <input
              type='text'
              name='category'
              value={article.category}
              onChange={e =>
                setArticle(prev => ({ ...prev, category: e.target.value }))
              }
              className='w-full p-2 border rounded'
            />
          </div>

          <div>
            <label className='block mb-2'>Published Date</label>
            <input
              type='date'
              name='publishedAt'
              value={article.publishedAt}
              onChange={e =>
                setArticle(prev => ({ ...prev, publishedAt: e.target.value }))
              }
              className='w-full p-2 border rounded'
              required
            />
          </div>

          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          >
            Update Article
          </button>
        </form>
      ) : (
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h1 className='text-4xl font-bold mb-4'>{article.title}</h1>
          <div className='prose max-w-none'>
            {contentSections.map((section, index) => (
              <div key={section.id}>
                {section.type === 'text' ? (
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                ) : section.type === 'image' ? (
                  <img
                    src={section.content}
                    alt={`Section ${index + 1}`}
                    className='my-4 max-w-full h-auto'
                  />
                ) : (
                  <div className='my-4 aspect-w-16 aspect-h-9'>
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
        </div>
      )}
    </div>
  )
}

export default withAuth(EditArticle)
