const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
const jwtService = require('./jwtService')
const { userDBService } = require('./DBServices/userDBService')
const { NewUser, AllUsers } = require('../models/userModel')

const checkEmailUnique = async (email) => {
  console.log(email)
  const UserModel = await userDBService()
  const users = await AllUsers(UserModel)
  return !users.some((user) => user.email.toLowerCase() === email.toLowerCase())
}

const createUser = async (userObj) => {
  // const db = await getParsedDB()

  const hashPassword = await bcrypt.hash(
    userObj.password,
    10,
  )

  const preparedUser = {
    id: uuidv4(),
    avatar: '123',
    about: 'test',
    ...userObj,
  }

  const accessToken = jwtService.createAccessToken({ id: preparedUser.id })
  const refreshToken = jwtService.createRefreshToken({ id: preparedUser.id })

  const UserModel = await userDBService()
  const newUser = await NewUser(UserModel, {
    ...preparedUser,
    password: hashPassword,
    refreshToken,
  })

  return {
    ...newUser.dataValues,
    accessToken,
  }
}

module.exports = { checkEmailUnique, createUser }
