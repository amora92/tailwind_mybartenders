import Link from 'next/link'
import Head from 'next/head'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const baseUrl = 'https://mybartenders.co.uk'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined
    }))
  }

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <nav aria-label='Breadcrumb' className={`flex items-center gap-2 text-sm ${className}`}>
        <ol className='flex items-center gap-2'>
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={index} className='flex items-center gap-2'>
                {index > 0 && (
                  <svg
                    className='w-4 h-4 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                )}

                {isLast || !item.href ? (
                  <span
                    className={isLast ? 'text-pink-400 font-medium' : 'text-gray-400'}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className='text-gray-400 hover:text-pink-400 transition-colors'
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
