const { AllProducts, NewProduct } = require('../models/productModel')

const getAllProducts = async (_req, res) => {
  AllProducts(res)
}
const createNewProduct = async (req, res) => {
  NewProduct(req, res)
}

module.exports.getAllProducts = getAllProducts
module.exports.createNewProduct = createNewProduct
