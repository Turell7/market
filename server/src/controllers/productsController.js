// const {
//   AllProducts, NewProduct, ProductById, deleteProduct, updateProduct,
// } = require('../models/productModel')
const productModels = require('../models/productModel')
const { productDBService } = require('../services/DBServices/productDBService')

const getAllProducts = async (req, res) => {
  productDBService(productModels.AllProducts, req, res)
}
const createNewProduct = async (req, res) => {
  productDBService(productModels.NewProduct, req, res)
}
const getProductById = async (req, res) => {
  productDBService(productModels.ProductById, req, res)
}
const deleteProductById = async (req, res) => {
  productDBService(productModels.deleteProduct, req, res)
}
const updateProductbyId = async (req, res) => {
  productDBService(productModels.updateProduct, req, res)
}

module.exports = {
  getAllProducts, createNewProduct, getProductById, deleteProductById, updateProductbyId,
}
