import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { sanitizeHtml } from '@/lib/sanitize'

interface GalleryImage {
  url: string
  caption?: string
  displaySize?: 'small' | 'medium' | 'large' | 'full'
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'original'
}

interface ContentSection {
  id: string
  type: 'text' | 'image' | 'video' | 'quote' | 'code' | 'cta' | 'gallery' | 'recipe' | 'method'
  content: string
  caption?: string
  author?: string
  language?: string
  buttonText?: string
  buttonUrl?: string
  images?: GalleryImage[]
  galleryLayout?: 'grid' | 'masonry' | 'carousel' | 'featured'
  galleryColumns?: 1 | 2 | 3 | 4
  prepTime?: string
  cookTime?: string
  servings?: string
  ingredients?: string[]
  nutrition?: Record<string, string | undefined>
  steps?: { title: string; description: string }[]
}

interface ArticlePreviewProps {
  title: string
  description: string
  imageUrl: string
  category: string
  publishedAt: string
  contentSections: ContentSection[]
  onClose: () => void
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getYouTubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

export const ArticlePreview = ({
  title,
  description,
  imageUrl,
  category,
  publishedAt,
  contentSections,
  onClose
}: ArticlePreviewProps) => {
  const [lightboxImage, setLightboxImage] = useState<{ url: string; caption?: string } | null>(null)

  const getAspectClass = (img: GalleryImage) => {
    switch (img.aspectRatio) {
      case 'square': return 'aspect-square'
      case 'landscape': return 'aspect-video'
      case 'portrait': return 'aspect-[3/4]'
      case 'original': return ''
      default: return 'aspect-square'
    }
  }

  const getSizeClass = (img: GalleryImage, isFirst: boolean, layout: string, columns: number) => {
    if (layout === 'featured' && isFirst) return 'col-span-2 row-span-2'
    switch (img.displaySize) {
      case 'full': return 'col-span-full'
      case 'large': return columns === 2 ? 'col-span-2' : 'col-span-2'
      default: return ''
    }
  }

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto bg-gray-950/95 backdrop-blur-sm'>
      {/* Header */}
      <div className='sticky top-0 z-10 bg-gray-900/95 backdrop-blur border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <span className='px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full'>
              Preview Mode
            </span>
            <span className='text-gray-400 text-sm'>This is how your article will look when published</span>
          </div>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-2'
          >
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
            Close Preview
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className='min-h-screen'>
        {/* Hero Section */}
        <section className='relative pt-16 pb-12 lg:pt-20 lg:pb-16 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />
          <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='max-w-4xl mx-auto'
            >
              {/* Category */}
              <div className='flex flex-wrap items-center gap-3 mb-6'>
                {category && (
                  <span className='px-4 py-1.5 bg-pink-500/20 border border-pink-500/30 text-pink-400 text-sm font-medium rounded-full'>
                    {category}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
                {title || 'Article Title'}
              </h1>

              {/* Description */}
              <p className='text-xl text-gray-400 mb-8 leading-relaxed'>
                {description || 'Article description will appear here...'}
              </p>

              {/* Author & Date */}
              <div className='flex items-center gap-4 pt-6 border-t border-white/10'>
                <Image
                  src='/mybartenders.co.uk_logo_svg.svg'
                  alt='MyBartenders'
                  width={48}
                  height={48}
                  className='rounded-full ring-2 ring-white/10'
                />
                <div>
                  <p className='font-medium text-white'>MyBartenders</p>
                  <time className='text-sm text-gray-400'>
                    {publishedAt ? formatDate(publishedAt) : 'Date not set'}
                  </time>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content Section */}
        <section className='relative py-12 lg:py-16 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              {/* Featured Image */}
              {imageUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 cursor-pointer group'
                  onClick={() => setLightboxImage({ url: imageUrl, caption: title })}
                >
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className='object-contain transition-transform duration-500 group-hover:scale-[1.02]'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4'>
                    <span className='text-white text-sm font-medium flex items-center gap-2'>
                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                      </svg>
                      Click to expand
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Content Sections */}
              {contentSections.map((section, index) => {
                if (section.type === 'text' && section.content) {
                  return (
                    <motion.article
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8'
                    >
                      <div
                        className='prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-pink-500'
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(section.content) }}
                      />
                    </motion.article>
                  )
                }

                if (section.type === 'image' && section.content) {
                  return (
                    <motion.section
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='mb-8'
                    >
                      <figure>
                        <div
                          className='relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer group'
                          onClick={() => setLightboxImage({ url: section.content, caption: section.caption })}
                        >
                          <Image
                            src={section.content}
                            alt={section.caption || 'Article image'}
                            fill
                            className='object-contain transition-transform duration-500 group-hover:scale-[1.02]'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4'>
                            <span className='text-white text-sm font-medium flex items-center gap-2'>
                              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                              </svg>
                              Click to expand
                            </span>
                          </div>
                        </div>
                        {section.caption && (
                          <figcaption className='text-center text-sm text-gray-500 mt-3 italic'>
                            {section.caption}
                          </figcaption>
                        )}
                      </figure>
                    </motion.section>
                  )
                }

                if (section.type === 'video' && section.content) {
                  const videoId = getYouTubeVideoId(section.content)
                  if (!videoId) return null
                  return (
                    <motion.section
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='mb-8 rounded-2xl overflow-hidden shadow-lg'
                    >
                      <div className='aspect-video'>
                        <iframe
                          width='100%'
                          height='100%'
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title='YouTube video player'
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        />
                      </div>
                    </motion.section>
                  )
                }

                if (section.type === 'quote' && section.content) {
                  return (
                    <motion.section
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='mb-8'
                    >
                      <blockquote className='relative bg-gradient-to-br from-pink-50 to-white p-8 md:p-12 rounded-2xl border-l-4 border-pink-500 shadow-sm'>
                        <svg
                          className='absolute top-6 left-6 w-8 h-8 text-pink-200'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                        </svg>
                        <p className='text-xl md:text-2xl text-gray-700 italic leading-relaxed pl-8'>
                          {section.content}
                        </p>
                        {section.author && (
                          <footer className='mt-6 pl-8'>
                            <p className='text-pink-500 font-semibold'>— {section.author}</p>
                          </footer>
                        )}
                      </blockquote>
                    </motion.section>
                  )
                }

                if (section.type === 'gallery' && section.images && section.images.length > 0) {
                  const columns = section.galleryColumns || 3
                  const layout = section.galleryLayout || 'grid'

                  return (
                    <motion.section
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='mb-8'
                    >
                      {section.content && (
                        <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
                          {section.content}
                        </h2>
                      )}
                      <div className={`grid gap-4 ${
                        columns === 1 ? 'grid-cols-1' :
                        columns === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                        columns === 4 ? 'grid-cols-2 md:grid-cols-4' :
                        'grid-cols-2 md:grid-cols-3'
                      } ${layout === 'masonry' ? 'auto-rows-auto' : ''}`}>
                        {section.images.map((img, imgIndex) => {
                          const aspectClass = getAspectClass(img)
                          return (
                            <figure
                              key={imgIndex}
                              className={`group relative ${getSizeClass(img, imgIndex === 0, layout, columns)}`}
                            >
                              <button
                                type='button'
                                onClick={() => setLightboxImage({ url: img.url, caption: img.caption })}
                                className='w-full text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-xl'
                              >
                                <div className={`relative rounded-xl overflow-hidden shadow-lg bg-gray-100 ${aspectClass} ${!aspectClass ? 'min-h-[200px]' : ''}`}>
                                  <Image
                                    src={img.url}
                                    alt={img.caption || `Gallery image ${imgIndex + 1}`}
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                                    sizes={img.displaySize === 'full' ? '100vw' : img.displaySize === 'large' ? '66vw' : '(max-width: 768px) 50vw, 33vw'}
                                  />
                                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4'>
                                    <span className='text-white text-sm font-medium flex items-center gap-2'>
                                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                                      </svg>
                                      Click to expand
                                    </span>
                                  </div>
                                </div>
                              </button>
                              {img.caption && (
                                <figcaption className='mt-2 text-sm text-gray-600 text-center'>
                                  {img.caption}
                                </figcaption>
                              )}
                            </figure>
                          )
                        })}
                      </div>
                    </motion.section>
                  )
                }

                if (section.type === 'recipe') {
                  return (
                    <motion.section
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='mb-8'
                    >
                      <div className='bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg overflow-hidden border border-amber-100'>
                        <div className='bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4'>
                          <h2 className='text-xl md:text-2xl font-bold text-white'>
                            {section.content || 'Recipe'}
                          </h2>
                        </div>

                        <div className='flex flex-wrap gap-4 px-6 py-4 bg-amber-50 border-b border-amber-100'>
                          {section.prepTime && (
                            <div className='flex items-center gap-2'>
                              <svg className='w-5 h-5 text-amber-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                              </svg>
                              <span className='text-sm text-gray-700'><strong>Prep:</strong> {section.prepTime}</span>
                            </div>
                          )}
                          {section.cookTime && (
                            <div className='flex items-center gap-2'>
                              <svg className='w-5 h-5 text-amber-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                              </svg>
                              <span className='text-sm text-gray-700'><strong>Prepare Time:</strong> {section.cookTime}</span>
                            </div>
                          )}
                          {section.servings && (
                            <div className='flex items-center gap-2'>
                              <svg className='w-5 h-5 text-amber-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                              </svg>
                              <span className='text-sm text-gray-700'><strong>Serves:</strong> {section.servings}</span>
                            </div>
                          )}
                        </div>

                        {section.ingredients && section.ingredients.filter(i => i).length > 0 && (
                          <div className='px-6 py-6'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                              <svg className='w-5 h-5 text-amber-500' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                              </svg>
                              Ingredients
                            </h3>
                            <ul className='space-y-2'>
                              {section.ingredients.filter(i => i).map((ingredient, idx) => (
                                <li key={idx} className='flex items-start gap-3 text-gray-700'>
                                  <span className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0' />
                                  {ingredient}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {section.nutrition && Object.values(section.nutrition).some(v => v && v.toString().trim()) && (
                          <div className='px-6 py-6 bg-gradient-to-r from-amber-50/50 to-orange-50/50 border-t border-amber-100'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                              <svg className='w-5 h-5 text-amber-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                              </svg>
                              Nutrition Information
                            </h3>
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3'>
                              {Object.entries(section.nutrition).map(([key, value]) => {
                                if (!value || !value.toString().trim()) return null
                                const labels: Record<string, string> = {
                                  calories: 'Calories',
                                  protein: 'Protein',
                                  carbs: 'Carbs',
                                  fat: 'Fat',
                                  sugar: 'Sugar',
                                  alcohol: 'Alcohol'
                                }
                                const label = labels[key] || key.charAt(0).toUpperCase() + key.slice(1)
                                return (
                                  <div key={key} className='text-center p-3 bg-white rounded-xl shadow-sm border border-amber-100'>
                                    <p className='text-xl font-bold text-amber-600'>{value}</p>
                                    <p className='text-xs text-gray-500 mt-1'>{label}</p>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.section>
                  )
                }

                if (section.type === 'method' && section.steps && section.steps.length > 0) {
                  return (
                    <motion.section
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='mb-8'
                    >
                      <div className='bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100'>
                        <div className='bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4'>
                          <h2 className='text-xl md:text-2xl font-bold text-white'>
                            {section.content || 'Method'}
                          </h2>
                        </div>

                        <ol className='px-6 py-6 space-y-6 list-none'>
                          {section.steps.filter(s => s.description).map((step, idx) => (
                            <li key={idx} className='flex gap-4'>
                              <div className='flex-shrink-0'>
                                <span className='w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg'>
                                  {idx + 1}
                                </span>
                              </div>
                              <div className='flex-1 pt-1'>
                                {step.title && (
                                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                                    {step.title}
                                  </h3>
                                )}
                                <p className='text-gray-700 leading-relaxed'>
                                  {step.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </motion.section>
                  )
                }

                return null
              })}

              {/* No content message */}
              {contentSections.every(s => !s.content && !(s.images && s.images.length > 0)) && (
                <div className='bg-white rounded-2xl shadow-sm p-12 text-center'>
                  <svg className='w-16 h-16 text-gray-300 mx-auto mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                  <p className='text-gray-500 text-lg'>No content added yet. Add some content sections to see the preview.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className='fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4'
          onClick={() => setLightboxImage(null)}
        >
          <button
            type='button'
            onClick={() => setLightboxImage(null)}
            className='absolute top-4 right-4 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-all z-10'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          <div
            className='relative max-w-7xl max-h-[90vh] w-full'
            onClick={e => e.stopPropagation()}
          >
            <div className='relative w-full h-full flex items-center justify-center'>
              <Image
                src={lightboxImage.url}
                alt={lightboxImage.caption || 'Expanded image'}
                width={1920}
                height={1080}
                className='max-h-[85vh] w-auto h-auto object-contain rounded-lg'
              />
            </div>
            {lightboxImage.caption && (
              <p className='text-center text-white/80 mt-4 text-lg'>
                {lightboxImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ArticlePreview
