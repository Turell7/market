const getPreparedErrorsFromYup = (e) => e.inner.reduce((acc, el) => {
  acc[el.path] = el.errors.join(', ')

  return acc
}, {})

const prepareProduct = (product) => ({
  name: product.name,
  price: product.price,
})
module.exports = { getPreparedErrorsFromYup, prepareProduct }
