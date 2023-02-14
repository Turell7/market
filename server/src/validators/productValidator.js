const yup = require('yup')

const createProductSchema = yup.object({
  name: yup.string().min(2, 'Yup! Must be at least 2 characters long').required(),
  price: yup.number().required(),
})

module.exports = { createProductSchema }