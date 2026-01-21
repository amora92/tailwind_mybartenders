import { groq } from 'next-sanity'

export const allPostsQuery = groq`
  *[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    category->{
      title,
      "slug": slug.current,
      color
    },
    author->{
      name,
      avatar {
        asset->{
          url
        }
      }
    },
    publishedAt,
    tags,
    "readTime": round(length(pt::text(content)) / 5 / 200)
  }
`

export const postBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    category->{
      title,
      "slug": slug.current,
      color
    },
    author->{
      name,
      bio,
      avatar {
        asset->{
          url
        }
      }
    },
    publishedAt,
    content,
    tags,
    status,
    "readTime": round(length(pt::text(content)) / 5 / 200)
  }
`

export const postSlugsQuery = groq`
  *[_type == "blogPost" && status == "published"] {
    "slug": slug.current
  }
`

export const relatedPostsQuery = groq`
  *[_type == "blogPost" && status == "published" && slug.current != $currentSlug && (
    category->slug.current == $categorySlug ||
    count((tags)[@ in $tags]) > 0
  )] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage {
      asset->{
        url
      },
      alt
    },
    category->{
      title,
      color
    },
    publishedAt
  }
`

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    color
  }
`

export const postsByCategoryQuery = groq`
  *[_type == "blogPost" && status == "published" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage {
      asset->{
        url
      },
      alt
    },
    category->{
      title,
      "slug": slug.current,
      color
    },
    publishedAt,
    "readTime": round(length(pt::text(content)) / 5 / 200)
  }
`
