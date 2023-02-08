const { Sequelize } = require('sequelize')

const AllProducts = async (res) => {
  // Подключение к базе данных
  const sequelize = new Sequelize('market', 'market', '135246', {
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

  // Метод получения всех продуктов из базы данных
  Product.findAll({ raw: true })
    .then((products) => {
      console.log(products)
      res.status(200)
      res.json(products)
    })
    .catch((errFromDB) => {
      console.log(errFromDB)
      res.sendStatus(500)
    })
}

const NewProduct = async (req, res) => {
  // Подключение к базе данных
  const sequelize = new Sequelize('market', 'market', '135246', {
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
  const newProduct = req.body

  // Метод создания нового продукта и добавление в базу данных
  Product.create({
    name: newProduct.name,
    price: newProduct.price,
  })
    .then((newProductFromDB) => {
      console.log(newProductFromDB)
      res.status(201)
      res.json(newProductFromDB)
    })
    .catch((errFromDB) => {
      console.log(errFromDB)
      res.status(500)
      res.json(errFromDB)
    })
}
module.exports.AllProducts = AllProducts
module.exports.NewProduct = NewProduct
// //Синхронизация с базой данных
//   sequelize.sync().then((result) => {
//     console.log(result)
//     sequelize.close()
//   })
//     .catch((err) => {
//       console.log(err)
//       sequelize.close()
//     })
