const jwt = require('jsonwebtoken')

const jwtTest = () => {
  try {

    // User login process:

    // create the data payload
    const payload = {
      name: 'weston',
      id: 5
    }

    // signing the jwt
    const token = jwt.sign(payload, 'other secret', { expiresIn: 60 * 60 })
    console.log(token)

    // request to server:

    // decode the incoming jwt
    const decoded = jwt.verify(token, 'This is my secret')
    console.log(decoded)
  
  } catch (err) {
    console.log(err)
  }
}

jwtTest()