// Роут описывает взамидействие администратора над содержимым базы данных

const express = require('express')
const signController = require('../controllers/signController')
const productsController = require('../controllers/productsController')
const { checkAuth } = require('../middlewares/authGuard')

const adminSideRouter = express.Router()
// Регистрация администратора
adminSideRouter.route('/signUp')
  .post(signController.signUp)

// Авторизация администратора
adminSideRouter.route('/signIn')
  .post(signController.signIn)

// Выход администратора из системы
adminSideRouter.route('/signOut')
  .post(checkAuth, signController.signOut)

// // Получение администратором всех пользователей
// adminSideRouter.route('/getAllUsers')
//   .get(checkAuth, signController.getUsers)

// Действия администратора над продуктами
adminSideRouter.route('/products/')
  // Получить все продукты
  .get(productsController.getAllProducts)
  // Создать новый продукт
  .post(checkAuth, productsController.createNewProduct)

// Действия администратора над конкретным продуктом по ID
adminSideRouter.route('/products/:id')
  // Получить продукт по ID
  .get(productsController.getProductById)
  // Удалить продукт по ID
  .delete(checkAuth, productsController.deleteProductById)
  // Редактировать продукт по ID
  .patch(checkAuth, productsController.updateProductbyId)

// adminRouter.get('/refresh', checkAuth, authController.refreshToken)

module.exports = { adminSideRouter }
