const express = require('express')
const adminController = require('../controllers/adminController')

const adminRouter = express.Router()

adminRouter.route('/signUp')
  .post(adminController.signUp)

adminRouter.route('/getAllUsers')
  .get(adminController.getUsers)

adminRouter.route('/addUser')
  .post(adminController.addUsers)

// adminRouter.post('/signup', authController.signUp)
// adminRouter.get('/signout', checkAuth, authController.signOut)
// adminRouter.get('/refresh', checkAuth, authController.refreshToken)

module.exports = { adminRouter }
