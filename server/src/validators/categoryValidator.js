const yup = require('yup')

const createCategorySchema = yup.object({
  name: yup.string().min(2, 'Yup! Must be at least 2 characters long').required(),
})

module.exports = { createCategorySchema }
