import { useState } from 'react'
import dynamic from 'next/dynamic'
import { withAuth } from '@/components/withAuth'
import { AdminHeader } from '@/components/admin/Header'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

const AdminPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [slug, setSlug] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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

  const handleSubmit = async e => {
    e.preventDefault()

    const newArticle = {
      title,
      description,
      content,
      imageUrl: image,
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
        setImage('')
        setSlug('')
        setDate('')
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch (error) {
      console.error('Error while submitting:', error)
      setError('Failed to add article')
    }
  }

  return (
    <div>
      <AdminHeader />
      <div className='max-w-2xl mx-auto py-16'>
        <h1 className='text-3xl font-bold mb-8'>Add New Article</h1>
        {error && <p className='text-red-500'>{error}</p>}
        {success && <p className='text-green-500'>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='title' className='block text-gray-700'>
              Title
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              className='w-full p-4 border border-gray-300 rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='slug' className='block text-gray-700'>
              Slug
            </label>
            <input
              type='text'
              id='slug'
              value={slug}
              onChange={e => setSlug(e.target.value)}
              className='w-full p-4 border border-gray-300 rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='description' className='block text-gray-700'>
              Description
            </label>
            <textarea
              id='description'
              value={description}
              onChange={e => setDescription(e.target.value)}
              className='w-full p-4 border border-gray-300 rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='content' className='block text-gray-700'>
              Content
            </label>
            <ReactQuill
              theme='snow'
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              className='h-[300px] mb-12'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='image' className='block text-gray-700'>
              Image URL
            </label>
            <input
              type='text'
              id='image'
              value={image}
              onChange={e => setImage(e.target.value)}
              className='w-full p-4 border border-gray-300 rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='date' className='block text-gray-700'>
              Publication Date
            </label>
            <input
              type='datetime-local'
              id='date'
              value={date}
              onChange={e => setDate(e.target.value)}
              className='w-full p-4 border border-gray-300 rounded-lg'
              required
            />
          </div>
          <button
            type='submit'
            className='px-6 py-3 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-700'
          >
            Add Article
          </button>
        </form>
      </div>
    </div>
  )
}

export default withAuth(AdminPage)
