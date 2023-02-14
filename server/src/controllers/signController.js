const authService = require('../services/authService')

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
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json(error)
  }
}

const signIn = async (req, res) => {
  try {
    try {
      const authenticatedUser = await authService.authenticateUser(req.body)
      return res.json(authenticatedUser)
    } catch (error) {
      return res.status(400).send(error.message)
    }
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

const signOut = async (req, res) => {
  try {
    await authService.signOut(req.userId)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

// const getUsers = async (req, res) => {
//   try {
//     const UserModel = await userDBService()
//     const users = await AllUsers(UserModel)
//     res
//       .status(201)
//       .json(users)
//   } catch (error) {
//     console.log(error)
//     res
//       .status(500)
//       .json(error)
//   }
// }

// const refreshToken = async (req, res) => {
// }

module.exports = {
  signUp, signIn, signOut,
}
