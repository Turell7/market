// Определение модели продукта
const Sequelize = require('sequelize')
const { sequelize } = require('./index')

const ImageModel = sequelize.define('image', {
  image: {
    type: Sequelize.TEXT,
  },

})

module.exports = { ImageModel }
