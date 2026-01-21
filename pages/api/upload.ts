import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs/promises'

export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'articles')

async function ensureUploadDir() {
  try {
    await fs.access(uploadDir)
  } catch {
    await fs.mkdir(uploadDir, { recursive: true })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    await ensureUploadDir()

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB max
      filter: ({ mimetype }) => {
        // Allow only images
        return mimetype ? mimetype.includes('image') : false
      },
      filename: (name, ext, part) => {
        // Generate unique filename
        const timestamp = Date.now()
        const randomStr = Math.random().toString(36).substring(2, 8)
        const safeName = (part.originalFilename || 'image')
          .replace(/[^a-zA-Z0-9.-]/g, '_')
          .toLowerCase()
        return `${timestamp}-${randomStr}-${safeName}`
      }
    })

    const [fields, files] = await form.parse(req)

    const uploadedFile = files.file?.[0]

    if (!uploadedFile) {
      return res.status(400).json({ error: 'No file uploaded' })
    }

    // Get just the filename from the full path
    const filename = path.basename(uploadedFile.filepath)
    const publicUrl = `/uploads/articles/${filename}`

    return res.status(200).json({
      success: true,
      url: publicUrl,
      filename,
      size: uploadedFile.size,
      type: uploadedFile.mimetype
    })
  } catch (error) {
    console.error('Upload error:', error)
    return res.status(500).json({ error: 'Upload failed' })
  }
}
