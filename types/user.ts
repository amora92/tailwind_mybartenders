export interface User {
  username: string
  passwordHash: string
  role: 'admin' | 'user'
  createdAt: Date
}
