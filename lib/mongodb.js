import { MongoClient } from 'mongodb'
import { logger } from './logger'

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB || 'mydatabase'

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(MONGODB_URI)
  clientPromise = client.connect()
}

export const connectToDatabase = async () => {
  try {
    const clientInstance = await clientPromise
    const db = clientInstance.db(MONGODB_DB)
    logger.log('Connected to MongoDB!')
    return { db, client: clientInstance }
  } catch (error) {
    logger.error('Error connecting to MongoDB:', error)
    throw error
  }
}
