import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../../app/globals.css'

const ArticleDetail = () => {
  const [article, setArticle] = useState(null) // Initialize article state
  const router = useRouter()
  const { slug } = router.query // Get the slug from the URL

  useEffect(() => {
    // Check if the slug is available (router is ready)
    if (!slug) return

    const fetchArticle = async () => {
      const response = await fetch(`/api/articles/${slug}`)
      const data = await response.json()

      // Check if we have data
      if (data) {
        setArticle(data)
      }
    }

    fetchArticle()
  }, [slug]) // Only run when slug changes

  if (!article) return <p>Loading...</p> // Show loading message until data is fetched

  return (
    <div>
      <Navbar />
      <section className='px-6 py-12 mt-16'>
        <div className='max-w-4xl mx-auto'>
          {/* Title Card */}
          <div className='bg-white p-6 rounded-lg shadow-lg mb-6'>
            <h1 className='text-4xl font-extrabold text-gray-800'>
              {article.title}
            </h1>
            <p className='text-gray-600 mt-2'>{article.description}</p>
          </div>

          {/* Image Card */}
          <div className='bg-white rounded-lg shadow-lg mb-6'>
            <img
              src={article.image} // Assuming this is a URL to the image
              alt={article.title}
              className='w-full h-96 object-cover rounded-t-lg'
            />
          </div>

          {/* Content Card */}
          <div className='bg-white p-6 rounded-lg shadow-lg mb-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Content</h2>
            <p className='text-lg text-gray-700'>{article.content}</p>
          </div>

          {/* Date Card */}
          <div className='bg-white p-6 rounded-lg shadow-lg mb-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Published On
            </h2>
            <p className='text-lg text-gray-700'>
              {new Date(article.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* CreatedAt Card */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Created At
            </h2>
            <p className='text-lg text-gray-700'>
              {new Date(article.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ArticleDetail
