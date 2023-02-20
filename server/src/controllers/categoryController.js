const { CategoryModel } = require('../models/categoryModel')
const { ProductModel } = require('../models/productModel')
const categoryValidator = require('../validators/categoryValidator')
const { getPreparedErrorsFromYup } = require('../validators/utils')

const getAllProductsWithCategory = async (req, res) => {
  try {
    const allCategoriesObj = await CategoryModel.findAll({ include: ProductModel })
    res
      .status(200)
      .json(allCategoriesObj)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const getAllCategories = async (req, res) => {
  try {
    const allCategoriesObj = await CategoryModel.findAll()
    res
      .status(200)
      .json(allCategoriesObj)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.params
    const categoryByName = await CategoryModel.findOne({
      where: {
        name,
      },
    })
    res
      .status(201)
      .json(categoryByName)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const createNewCategory = async (req, res) => {
  try {
    await categoryValidator.createCategorySchema.validate(req.body, { abortEarly: false })
  } catch (error) {
    res
      .status(400)
      .json(getPreparedErrorsFromYup(error))
    return
  }
  try {
    const newCategoryFromDB = await CategoryModel.create(req.body)
    res
      .status(201)
      .json(newCategoryFromDB)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

module.exports = {
  getAllProductsWithCategory, getAllCategories, createNewCategory, getCategoryByName,
}
