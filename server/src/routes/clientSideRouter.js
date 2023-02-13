// Роут описывает взамидействие сайта клиента над содержимым базы данных

const express = require('express')
const productsController = require('../controllers/productsController')

const clientSideRouter = express.Router()
clientSideRouter.route('/')
// Получить все продукты
  .get(productsController.getAllProducts)

clientSideRouter.route('/:id')
// Получение конкретного продукта
  .get(productsController.getProductById)

module.exports = { clientSideRouter }
