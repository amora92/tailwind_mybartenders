import { connectToDatabase } from '../../lib/mongodb'

// Add these sample articles with placeholder images
const sampleArticles = [
  {
    title: 'Getting Started with Web Development',
    slug: 'getting-started-web-development',
    description:
      'A comprehensive guide for beginners starting their journey in web development.',
    content: 'Full article content here...',
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: 'Programming',
    author: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    readTime: '5 min read'
  },
  {
    title: 'Modern Design Principles',
    slug: 'modern-design-principles',
    description:
      'Explore the fundamental principles of modern web design and user experience.',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    category: 'Design',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    readTime: '7 min read'
  },
  {
    title: 'The Future of AI',
    slug: 'future-of-ai',
    description:
      'Discover how artificial intelligence is shaping the future of technology.',
    imageUrl:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    category: 'Technology',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    readTime: '6 min read'
  }
]

export default async (req, res) => {
  // Handle POST requests (create new article)
  if (req.method === 'POST') {
    console.log('Received POST request:', req.body)

    try {
      const db = await connectToDatabase()
      console.log('Connected to MongoDB')

      const {
        title,
        description,
        content,
        imageUrl,
        slug,
        publishedAt,
        category,
        author,
        readTime
      } = req.body

      if (
        !title ||
        !description ||
        !content ||
        !imageUrl ||
        !slug ||
        !publishedAt
      ) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const result = await db.collection('articles').insertOne({
        title,
        description,
        content,
        imageUrl,
        slug,
        publishedAt: new Date(publishedAt).toISOString(),
        category,
        author,
        readTime,
        createdAt: new Date()
      })

      console.log('Inserted article:', result)
      return res.status(201).json({
        ...req.body,
        _id: result.insertedId
      })
    } catch (error) {
      console.error('Error inserting article:', error)
      return res.status(500).json({
        error: 'Internal server error',
        message: error.message
      })
    }

    // Handle GET requests (fetch all articles)
  } else if (req.method === 'GET') {
    try {
      const db = await connectToDatabase()
      console.log('Connected to MongoDB')

      // Find all articles in the "articles" collection
      const articles = await db.collection('articles').find({}).toArray()

      if (articles.length === 0) {
        return res.status(200).json(sampleArticles)
      }

      // Return the articles
      return res.status(200).json(articles)
    } catch (error) {
      console.error('Error fetching articles:', error)
      return res.status(500).json({
        error: 'Internal server error',
        message: error.message
      })
    }
  } else {
    // Handle unsupported HTTP methods
    console.log('Unsupported request method:', req.method)
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
}
