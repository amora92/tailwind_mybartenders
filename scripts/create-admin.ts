import * as bcrypt from 'bcrypt'
import { connectToDatabase } from '../lib/mongodb'

async function createAdminUser () {
  const { db } = await connectToDatabase()

  const adminUser = {
    username: 'admin',
    passwordHash: await bcrypt.hash('your-secure-password', 10),
    role: 'admin'
  }

  try {
    await db.collection('users').insertOne(adminUser)
    console.log('Admin user created successfully')
  } catch (error) {
    console.error('Error creating admin user:', error)
  }
}

createAdminUser()
