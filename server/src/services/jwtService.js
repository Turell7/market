const jwt = require('jsonwebtoken')

const createAccessToken = (payload) => jwt.sign(
  payload,
  process.env.JWT_SECRET,
  {
    expiresIn: +process.env.JWT_ACCESS_TOKEN_LIFETIME_IN_SECONDS,
  },
)

const createRefreshToken = (payload) => jwt.sign(
  payload,
  process.env.JWT_SECRET,
  {
    expiresIn: +process.env.JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS,
  },
)

const checkToken = (accessToken) => {
  try {
    return jwt.verify(accessToken, process.env.JWT_SECRET)
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
