// const {
//   AllProducts, NewProduct, ProductById, deleteProduct, updateProduct,
// } = require('../models/productModel')
const { ProductModel } = require('../models/productModel')
const { ImageModel } = require('../models/imageModel')
const productValidator = require('../validators/productValidator')
const { getPreparedErrorsFromYup } = require('../validators/utils')

const getAllProducts = async (req, res) => {
  try {
    const allProductsObj = await ProductModel.findAll({ include: ImageModel })
    res
      .status(200)
      .json(allProductsObj)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const createNewProduct = async (req, res) => {
  try {
    await productValidator.createProductSchema.validate(req.body, { abortEarly: false })
  } catch (error) {
    res
      .status(400)
      .json(getPreparedErrorsFromYup(error))
    return
  }
  try {
    const { images, ...productReq } = req.body
    const newProductFromDB = await ProductModel.create(productReq)
    const promisMass = images.map((elem) => newProductFromDB.createImage({ image: elem }))
    const result = await Promise.all(promisMass)
    console.log(result)
    res
      .status(201)
      .json({ ...newProductFromDB.dataValues, images: result })
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
