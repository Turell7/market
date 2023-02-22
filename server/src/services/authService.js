const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
const jwtService = require('./jwtService')

const { UserModel } = require('../models/userModel')

const checkEmailUnique = async (email) => {
  console.log(email)
  const allUsers = await UserModel.findAll({ raw: true })
  return !allUsers.some((user) => user.email.toLowerCase() === email.toLowerCase())
}

const createUser = async (userObj) => {
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

  const newRefreshToken = jwtService.createRefreshToken({ id: preparedUser.id })

  const newUserFromDB = await UserModel.create({
    id: preparedUser.id,
    name: userObj.name,
    last_name: userObj.last_name,
    password: hashPassword,
    about: userObj.about,
    avatar: userObj.avatar,
    email: userObj.email,
    refreshToken: newRefreshToken,

  })
  const { password, refreshToken, ...returnedUserFromDB } = newUserFromDB.dataValues
  return {
    ...returnedUserFromDB,
  }
}

const authenticateUser = async (userObj) => {
  const allUsers = await UserModel.findAll({ raw: true })

  const findedInDBUser = allUsers.find(
    (user) => user.email.toLowerCase() === userObj.email.toLowerCase(),
  )

  if (!findedInDBUser || !(await bcrypt.compare(userObj.password, findedInDBUser.password))) { throw new Error('Email or password incorrect') }

  const accessToken = jwtService.createAccessToken({ id: findedInDBUser.id })
  const refreshToken = jwtService.createRefreshToken({ id: findedInDBUser.id })

  findedInDBUser.refreshToken = refreshToken
  const { email } = findedInDBUser
  await UserModel.update(findedInDBUser, {
    where: { email: [email] },
  })

  const { password, ...restFindedInDBUser } = findedInDBUser

  return {
    ...restFindedInDBUser,
    accessToken,
  }
}

const signOut = async (userId) => {
  const { id } = userId
  const preparedUser = { id, refreshToken: '' }
  await UserModel.update(preparedUser, {
    where: { id: [id] },
  })
}
module.exports = {
  checkEmailUnique, createUser, authenticateUser, signOut,
}
