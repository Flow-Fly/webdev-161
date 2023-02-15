const bcrypt = require('bcryptjs')

const password = '1234'
const aGeneratedpass =
  '$2a$10$YIZ1EtRxTajJtdn0.ACiyu4baytLgKIpQFwD6MlaZbn9nYhuJtFJq'

async function generatePass() {
  const salt = await bcrypt.genSalt(10)
  const encryptedPassword = await bcrypt.hash(password, salt)
  console.log(encryptedPassword)

  const matchingPass = await bcrypt.compare(password, encryptedPassword)
  const otherMatch = await bcrypt.compare(password, aGeneratedpass)
  console.log('Do they match: ', matchingPass)
  console.log('Do they match: ', otherMatch)
}

generatePass()
