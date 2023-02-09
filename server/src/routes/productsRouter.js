const express = require('express')
const {
  getAllProducts, createNewProduct, getProductById, deleteProductById, updateProductbyId,
} = require('../controllers/productsController')

const productsRouter = express.Router()
productsRouter.route('/')
// Получить все продукты
  .get(getAllProducts)
// Добавление нового продукта
  .post(createNewProduct)

productsRouter.route('/:id')
// Получение конкретного продукта
  .get(getProductById)
// Удалить продукт
  .delete(deleteProductById)
// Изменить продукт
  .patch(updateProductbyId)

module.exports.productsRouter = productsRouter
