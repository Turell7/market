const { ProductModel } = require('../models/productModel')
const { ImageModel } = require('../models/imageModel')
const { CategoryModel } = require('../models/categoryModel')
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
    const { images, categoryId, ...productReq } = req.body
    const categoryByID = await CategoryModel.findOne({
      where: {
        id: categoryId,
      },
    })
    if (categoryByID === null) throw new Error('Category not found')
    const newProductFromDB = await categoryByID.createProduct(productReq)
    let result = []
    if (images) {
      if (images.length !== 0) {
        const promiseMass = images.map((elem) => newProductFromDB.createImage({ image: elem }))
        result = await Promise.all(promiseMass)
      }
    }
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
    const productById = await ProductModel.findByPk(id, { include: ImageModel })
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
        .json('Продукт не найден')
      return
    }
    console.log(resFromDB)
    res
      .status(200)
      .json('Продукт успешно удален')
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const updateProductbyId = async (req, res) => {
  try {
    const { id } = req.params
    await ProductModel.update(req.body, {
      where: {
        id: [id],
      },
    })
    const productById = await ProductModel.findByPk(id, { include: ImageModel })
    res
      .status(200)
      .json(productById)
  } catch (error) {
    console.log(error)
    res
      .sendStatus(500)
  }
}

module.exports = {
  getAllProducts, createNewProduct, getProductById, deleteProductById, updateProductbyId,
}
