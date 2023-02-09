const express = require('express')
const authController = require('../controllers/authController')

const adminRouter = express.Router()

adminRouter.post('/signin', authController.signIn)
adminRouter.post('/signup', authController.signUp)
adminRouter.get('/signout', checkAuth, authController.signOut)
adminRouter.get('/refresh', checkAuth, authController.refreshToken)

module.exports = { adminRouter }
