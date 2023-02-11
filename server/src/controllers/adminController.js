const { NewUser, AllUsers } = require('../models/userModel')
const { userDBService } = require('../services/DBServices/userDBService')
const authService = require('../services/authService')
// const signIn = async (_req, res) => {
// }
const signUp = async (req, res) => {
  try {
    if (await authService.checkEmailUnique(req.body.email)) {
      const createUser = await authService.createUser(req.body)
      res
        .status(200)
        .json(createUser)
      return
    }
    res
      .status(400)
      .json({ error: 'This email is already used' })
    return
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json(error)
  }
}

const addUsers = async (req, res) => {
  try {
    const UserModel = await userDBService()
    const newUser = await NewUser(UserModel, req.body)
    res
      .status(201)
      .json(newUser)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json(error)
  }
}
const getUsers = async (req, res) => {
  try {
    const UserModel = await userDBService()
    const users = await AllUsers(UserModel)
    res
      .status(201)
      .json(users)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json(error)
  }
}
// const signOut = async (req, res) => {
// }
// const refreshToken = async (req, res) => {
// }

module.exports = {
  signUp, getUsers, addUsers,
}
