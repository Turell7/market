// Роут описывает взамидействие сайта клиента над содержимым базы данных

const express = require('express')
const productsController = require('../controllers/productsController')
const categoryController = require('../controllers/categoryController')

const clientSideRouter = express.Router()
clientSideRouter.route('/products')
// Получить все продукты
  .get(productsController.getAllProducts)

clientSideRouter.route('/products/:id')
// Получение конкретного продукта
  .get(productsController.getProductById)

clientSideRouter.route('/category')
  // Получить все категории
  .get(categoryController.getAllCategories)

clientSideRouter.route('/productsWithCategories')
// Получить все продукты с разделением на категории
  .get(categoryController.getAllProductsWithCategory)
module.exports = { clientSideRouter }
