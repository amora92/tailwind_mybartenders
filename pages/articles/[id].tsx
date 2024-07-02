// pages/articles/[id].tsx

import React from 'react'
import { useRouter } from 'next/router'
import articlesData from '../../data/articles.json'

const ArticlePage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  // Find the article based on id
  const article = articlesData.find(article => article.id === Number(id))

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className='container mx-auto px-6 lg:px-20 py-12'>
      <h1 className='text-4xl font-bold mb-8'>{article.title}</h1>
      <div className='text-gray-600 mb-4'>
        <p>
          By {article.author} | {article.date}
        </p>
      </div>
      <div className='text-gray-700'>
        {article.content.sections.map((section, index) => (
          <div key={index} className='mb-8'>
            {section.type === 'intro' && (
              <div>
                <h2 className='text-2xl font-semibold mb-4'>
                  {section.heading}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: section.text || '' }} />
              </div>
            )}
            {section.type === 'recipe' && (
              <div>
                <h2 className='text-2xl font-semibold mb-4'>
                  {section.heading}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: section.text || '' }} />
              </div>
            )}
            {section.type === 'image' && (
              <div>
                <img src={section.url} alt={section.caption} className='mb-4' />
                <p className='text-sm text-gray-500'>{section.caption}</p>
              </div>
            )}
            {section.type === 'conclusion' && (
              <div>
                <h2 className='text-2xl font-semibold mb-4'>
                  {section.heading}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: section.text || '' }} />
              </div>
            )}
            {/* Add more conditions for other section types as needed */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticlePage
