const { Sequelize } = require('sequelize')
// Получение всех продуктов -------------------------------------------------------
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
      res
        .status(200)
        .json(products)
    })
    .catch((errFromDB) => {
      console.log(errFromDB)
      res.sendStatus(500)
    })
}

// Добавление нового продукта-------------------------------------------------------
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
      res
        .status(201)
        .json(newProductFromDB)
    })
    .catch((errFromDB) => {
      console.log(errFromDB)
      res
        .status(500)
        .json(errFromDB)
    })
}

// Получение продукта по id-------------------------------------------------------
const ProductById = async (req, res) => {
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

  // Метод получения продукта по id из базы данных
  const { id } = req.params
  Product.findByPk(id)
    .then((product) => {
      if (!product) {
        res
          .status(400)
          .json(`Product with id "${id}" not found`)
        return // если продукт не найден
      }
      console.log(product.name)
      res
        .status(200)
        .json(product)
    })
    .catch((errFromDB) => {
      console.log(errFromDB)
      res
        .status(500)
        .json(errFromDB)
    })
}

// Удаление продукта-------------------------------------------------------
const deleteProduct = async (req, res) => {
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

  // Метод удаления продукта по id из базы данных
  const { id } = req.params
  Product.destroy({
    where: {
      id: [id],
    },
  })
    .then((resFromDB) => {
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
    })
    .catch((errFromDB) => {
      console.log(errFromDB)
      res
        .status(500)
        .json(errFromDB)
    })
}

// Редактирования продукта-------------------------------------------------------
const updateProduct = async (req, res) => {
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
  const { id } = req.params
  // Метод изменения продукта в базе данных
  Product.update(req.body, {
    where: {
      id: [id],
    },
  })
    .then((resFromDB) => {
      console.log(resFromDB)
      res
        .status(200)
        .json(resFromDB)
    })
    .catch((errFromDB) => {
      console.log(errFromDB)
      res
        .status(500)
        .json(errFromDB)
    })
}

module.exports.AllProducts = AllProducts
module.exports.NewProduct = NewProduct
module.exports.ProductById = ProductById
module.exports.deleteProduct = deleteProduct
module.exports.updateProduct = updateProduct

// //Синхронизация с базой данных
//   sequelize.sync().then((result) => {
//     console.log(result)
//     sequelize.close()
//   })
//     .catch((err) => {
//       console.log(err)
//       sequelize.close()
//     })
