import * as bcrypt from 'bcrypt'

const password = process.argv[2]
if (!password) {
  console.error('Please provide a password as an argument')
  process.exit(1)
}

const saltRounds = 10
bcrypt.hash(password, saltRounds).then(hash => {
  console.log('Generated hash details:')
  console.log('Length:', hash.length)
  console.log('Starts with:', hash.substring(0, 7))
  console.log('Full hash:')
  console.log(hash)
})
