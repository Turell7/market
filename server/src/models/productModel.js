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
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  discount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  category: {
    type: Sequelize.INTEGER,
  },
  picture: {
    type: Sequelize.INTEGER,
  },

})

module.exports = { ProductModel }
