const yup = require('yup')

const createProductSchema = yup.object({
  name: yup.string().min(2, 'Yup! Must be at least 2 characters long').required(),
  price: yup.number().required(),
  image: yup.string().url(),
  status: yup.bool(),
  stock: yup.number(),
  discount: yup.number(),
  description: yup.string(),
  images: yup.array().required(),
})

module.exports = { createProductSchema }
