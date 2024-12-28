import { useState } from 'react'
import dynamic from 'next/dynamic'
import { withAuth } from '@/components/withAuth'
import { AdminHeader } from '@/components/admin/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

const NewArticlePage = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [slug, setSlug] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [secondaryContent, setSecondaryContent] = useState('')
  const [secondaryImage, setSecondaryImage] = useState('')
  const [previewMode, setPreviewMode] = useState(false)

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['recipe'],
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
        setSuccess('Article published successfully')
        setTimeout(() => {
          router.push('/admin')
        }, 2000)
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch (error) {
      console.error('Error while submitting:', error)
      setError('Failed to publish article')
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <AdminHeader />

      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Create New Article
          </h1>
          <Link
            href='/admin'
            className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700'
          >
            Back to Dashboard
          </Link>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Editor Panel */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {error && <p className='text-red-500 mb-4'>{error}</p>}
              {success && <p className='text-green-500 mb-4'>{success}</p>}

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Title
                  </label>
                  <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='slug'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Slug
                  </label>
                  <input
                    type='text'
                    id='slug'
                    value={slug}
                    onChange={e => setSlug(e.target.value)}
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700'
                >
                  Description
                </label>
                <textarea
                  id='description'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rows={3}
                  className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                  required
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='content'
                  className='block text-sm font-medium text-gray-700'
                >
                  Main Content
                </label>
                <div className='h-[500px] border rounded-lg'>
                  <ReactQuill
                    theme='snow'
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                    className='h-[450px]'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='image'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Main Image URL
                  </label>
                  <input
                    type='text'
                    id='image'
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='date'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Publication Date
                  </label>
                  <input
                    type='datetime-local'
                    id='date'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='secondaryImage'
                  className='block text-sm font-medium text-gray-700'
                >
                  Secondary Image URL (Optional)
                </label>
                <input
                  type='text'
                  id='secondaryImage'
                  value={secondaryImage}
                  onChange={e => setSecondaryImage(e.target.value)}
                  className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='secondaryContent'
                  className='block text-sm font-medium text-gray-700'
                >
                  Secondary Content (Optional)
                </label>
                <div className='h-[500px] border rounded-lg'>
                  <ReactQuill
                    theme='snow'
                    value={secondaryContent}
                    onChange={setSecondaryContent}
                    modules={modules}
                    formats={formats}
                    className='h-[450px]'
                  />
                </div>
              </div>

              <div className='flex justify-end space-x-4'>
                <button
                  type='button'
                  onClick={() => setPreviewMode(!previewMode)}
                  className='px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg 
                    hover:bg-gray-700 hover:text-gold-100 transition-all duration-300'
                >
                  {previewMode ? 'Edit' : 'Preview'}
                </button>
                <button
                  type='submit'
                  className='px-6 py-3 bg-gold-600 text-white font-semibold rounded-lg 
                    hover:bg-gold-700 hover:shadow-gold transition-all duration-300'
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>

          {/* Preview Panel */}
          <div
            className='bg-white rounded-lg shadow-lg p-6 overflow-y-auto'
            style={{ maxHeight: 'calc(100vh - 200px)' }}
          >
            <h2 className='text-2xl font-bold mb-6'>Preview</h2>
            <div className='prose prose-lg max-w-none'>
              <h1>{title || 'Article Title'}</h1>
              <p className='text-gray-600'>
                {description || 'Article description will appear here...'}
              </p>

              {image && (
                <img src={image} alt={title} className='rounded-lg my-6' />
              )}

              <div dangerouslySetInnerHTML={{ __html: content }} />

              {secondaryImage && (
                <img
                  src={secondaryImage}
                  alt={title}
                  className='rounded-lg my-6'
                />
              )}

              {secondaryContent && (
                <div dangerouslySetInnerHTML={{ __html: secondaryContent }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(NewArticlePage)
