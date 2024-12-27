import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB || 'mydatabase' // Ensure the database is set

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable so the MongoClient is not repeatedly initialized
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production, it's best to not use global variables
  client = new MongoClient(MONGODB_URI)
  clientPromise = client.connect()
}

export const connectToDatabase = async () => {
  try {
    const clientInstance = await clientPromise
    const db = clientInstance.db(MONGODB_DB)
    console.log('Connected to MongoDB!')
    return db
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}
