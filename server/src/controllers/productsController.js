const {
  AllProducts, NewProduct, ProductById, deleteProduct, updateProduct,
} = require('../models/productModel')
const { productDBService } = require('../services/productDBService')

const getAllProducts = async (req, res) => {
  productDBService(AllProducts, req, res)
}
const createNewProduct = async (req, res) => {
  productDBService(NewProduct, req, res)
}
const getProductById = async (req, res) => {
  productDBService(ProductById, req, res)
}
const deleteProductById = async (req, res) => {
  productDBService(deleteProduct, req, res)
}
const updateProductbyId = async (req, res) => {
  productDBService(updateProduct, req, res)
}

module.exports = {
  getAllProducts, createNewProduct, getProductById, deleteProductById, updateProductbyId,
}
