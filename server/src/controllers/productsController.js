// const {
//   AllProducts, NewProduct, ProductById, deleteProduct, updateProduct,
// } = require('../models/productModel')
const { ProductModel } = require('../models/productModel')
const productValidator = require('../validators/productValidator')
const { getPreparedErrorsFromYup, prepareProduct } = require('../validators/utils')

const getAllProducts = async (req, res) => {
  try {
    const allProductsObj = await ProductModel.findAll({ raw: true })
    res
      .status(200)
      .json(allProductsObj)
  } catch (error) {
    res.sendStatus(500)
  }
}

const createNewProduct = async (req, res) => {
  const preparedProduct = prepareProduct(req.body)
  try {
    await productValidator.createProductSchema.validate(preparedProduct, { abortEarly: false })
  } catch (error) {
    res
      .status(400)
      .json(getPreparedErrorsFromYup(error))
    return
  }
  try {
    const newProductObj = await ProductModel.create(preparedProduct)
    res
      .status(201)
      .json(newProductObj)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const productById = await ProductModel.findByPk(id)
    res
      .status(201)
      .json(productById)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params
    const resFromDB = await ProductModel.destroy({
      where: {
        id: [id],
      },
    })
    if (resFromDB === 0) {
      console.log(resFromDB)
      res
        .status(400)
        .json(`Product with id "${id}" not found`)
      return
    }
    console.log(resFromDB)
    res
      .status(200)
      .json(`Product with id "${id}" success deleted`)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const updateProductbyId = async (req, res) => {
  try {
    const { id } = req.params
    const resFromDB = await ProductModel.update(req.body, {
      where: {
        id: [id],
      },
    })
    res
      .status(200)
      .json(resFromDB)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

module.exports = {
  getAllProducts, createNewProduct, getProductById, deleteProductById, updateProductbyId,
}
// module.exports = {
//   getAllProducts, createNewProduct, getProductById, deleteProductById, updateProductbyId,
// }
