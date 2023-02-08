const express = require('express')
const { getAllProducts, createNewProduct } = require('../controllers/productsController')

const productsRouter = express.Router()
productsRouter.route('/')
// Получить все продукты
  .get(getAllProducts)
// Добавление нового продукта
  .post(createNewProduct)
// contactsRouter.route('/:id/')
// // Получение конкретного продукта
//   .get(getProductById)
// // Удалить продукт
//   .delete(deleteProductById)
// // Изменить продукт
//   .put(updateProduct)

module.exports.productsRouter = productsRouter
