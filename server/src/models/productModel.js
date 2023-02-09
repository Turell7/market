// Получение всех продуктов -------------------------------------------------------
const AllProducts = async (Product, req, res) => {
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
const NewProduct = async (Product, req, res) => {
  const newProduct = req.body
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
const ProductById = async (Product, req, res) => {
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
const deleteProduct = async (Product, req, res) => {
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
const updateProduct = async (Product, req, res) => {
  const { id } = req.params
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
// Получение всех продуктов -------------------------------------------------------
const testProducts = async (Product, req, res) => {
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

module.exports = {
  AllProducts, NewProduct, ProductById, deleteProduct, updateProduct, testProducts,
}

// //Синхронизация с базой данных
//   sequelize.sync().then((result) => {
//     console.log(result)
//     sequelize.close()
//   })
//     .catch((err) => {
//       console.log(err)
//       sequelize.close()
//     })
