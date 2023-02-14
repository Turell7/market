const getPreparedErrorsFromYup = (e) => e.inner.reduce((acc, el) => {
  acc[el.path] = el.errors.join(', ')

  return acc
}, {})

const prepareProduct = (product) => ({
  name: product.name,
  price: product.price,
  status: product.status,
  description: product.description,
  stock: product.stock,
  discount: product.discount,
  category: product.category,
})
module.exports = { getPreparedErrorsFromYup, prepareProduct }
