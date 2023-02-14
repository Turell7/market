// Определение модели продукта
const Sequelize = require('sequelize')
const { sequelize } = require('./index')

const ProductModel = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = { ProductModel }
