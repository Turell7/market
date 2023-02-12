const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
const jwtService = require('./jwtService')
const { userDBService } = require('./DBServices/userDBService')
const {
  NewUser, AllUsers, UpdateUserByEmail, UpdateUserByID,
} = require('../models/userModel')

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
  const { password, ...returnedUserFromDB } = newUser.dataValues
  return {
    ...returnedUserFromDB,
    accessToken,
  }
}
const authenticateUser = async (userObj) => {
  const UserModel = await userDBService()
  const users = await AllUsers(UserModel)

  const currentUser = users.find(
    (user) => user.email.toLowerCase() === userObj.email.toLowerCase(),
  )

  if (
    !currentUser
    || !(await bcrypt.compare(userObj.password, currentUser.password))
  ) { throw new Error('Email or password incorrect') }

  const accessToken = jwtService.createAccessToken({ id: currentUser.id })
  const refreshToken = jwtService.createRefreshToken({ id: currentUser.id })

  currentUser.refreshToken = refreshToken
  await UpdateUserByEmail(UserModel, currentUser)

  // await updateDB(db)

  const { password, ...restCurrentUser } = currentUser

  return {
    ...restCurrentUser,
    accessToken,
  }
}

const signOut = async (userId) => {
  const preparedUser = { id: userId, refreshToken: '' }
  const UserModel = await userDBService()
  await UpdateUserByID(UserModel, preparedUser)
}
module.exports = {
  checkEmailUnique, createUser, authenticateUser, signOut,
}
