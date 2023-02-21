// Определение модели продукта
const Sequelize = require('sequelize')
const { sequelize } = require('./index')
const { ProductModel } = require('./productModel')

const CategoryModel = sequelize.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
CategoryModel.hasMany(ProductModel)

module.exports = { CategoryModel }
