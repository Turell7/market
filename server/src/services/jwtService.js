const jwt = require('jsonwebtoken')

const createAccessToken = (payload) => jwt.sign(
  payload,
  '90f9639c75fff6d5537b8f84224c73252b181f275e3bd3c859b8fe6eca9e71c156d41969ff6de4945106e63358cf0d83b2b90b0be7643c3840ecd51c0ae38e27',
  {
    expiresIn: 600,
  },
)

const createRefreshToken = (payload) => jwt.sign(
  payload,
  '90f9639c75fff6d5537b8f84224c73252b181f275e3bd3c859b8fe6eca9e71c156d41969ff6de4945106e63358cf0d83b2b90b0be7643c3840ecd51c0ae38e27',
  {
    expiresIn: 6000,
  },
)

const checkToken = (accessToken) => {
  try {
    return jwt.verify(accessToken, '90f9639c75fff6d5537b8f84224c73252b181f275e3bd3c859b8fe6eca9e71c156d41969ff6de4945106e63358cf0d83b2b90b0be7643c3840ecd51c0ae38e27')
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  checkToken,
}
