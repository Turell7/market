const { Sequelize } = require('sequelize')

const productDBService = async (model, req, res) => {
  const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
    host: '13.37.52.101',
    dialect: 'mysql',
  })
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    await sequelize.close()
    res.sendStatus(500)
    return
  }
  // Определение модели продукта
  const Product = sequelize.define('product', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  })
  model(Product, req, res)
}
module.exports = { productDBService }
