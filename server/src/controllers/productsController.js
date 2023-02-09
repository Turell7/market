const {
  AllProducts, NewProduct, ProductById, deleteProduct, updateProduct,
} = require('../models/productModel')

const getAllProducts = async (_req, res) => {
  AllProducts(res)
}
const createNewProduct = async (req, res) => {
  NewProduct(req, res)
}
const getProductById = async (req, res) => {
  ProductById(req, res)
}
const deleteProductById = async (req, res) => {
  deleteProduct(req, res)
}
const updateProductbyId = async (req, res) => {
  updateProduct(req, res)
}

module.exports.getAllProducts = getAllProducts
module.exports.createNewProduct = createNewProduct
module.exports.getProductById = getProductById
module.exports.deleteProductById = deleteProductById
module.exports.updateProductbyId = updateProductbyId
