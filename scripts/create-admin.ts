import fetch from 'node-fetch'

async function createAdmin () {
  try {
    const response = await fetch(
      'http://localhost:3000/api/auth/create-admin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'test',
          password: 'Lopas159'
        })
      }
    )

    const data = await response.json()
    console.log('Response:', data)
  } catch (error) {
    console.error('Error:', error)
  }
}

createAdmin()
