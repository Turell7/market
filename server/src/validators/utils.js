const getPreparedErrorsFromYup = (e) => e.inner.reduce((acc, el) => {
  acc[el.path] = el.errors.join(', ')

  return acc
}, {})

module.exports = { getPreparedErrorsFromYup }
