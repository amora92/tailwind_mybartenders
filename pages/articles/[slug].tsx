import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ArticleDetail = () => {
  const [article, setArticle] = useState(null)
  const router = useRouter()
  const { slug } = router.query // Extract slug from URL

  useEffect(() => {
    if (!slug) return

    const fetchArticle = async () => {
      const response = await fetch(`/api/articles/${slug}`)
      const data = await response.json()

      if (data) {
        setArticle(data)
      }
    }

    fetchArticle()
  }, [slug])

  if (!article) return <p>Loading...</p>

  return (
    <div>
      <Navbar />
      <section className='px-6 py-12'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl font-extrabold mb-6'>{article.title}</h1>
          <img
            src={article.image}
            alt={article.title}
            className='w-full h-96 object-cover mb-6'
          />
          <p className='text-lg text-gray-600'>{article.content}</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ArticleDetail
