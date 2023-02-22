const yup = require('yup')

const createCategorySchema = yup.object({
  name: yup
    .string('Поле должно быть строкой')
    .min(2, 'Поле должно содержать минимум 2 символа')
    .max(20, 'Поле должно содержать максимум 20 символов')
    .required('Поле обязательно для заполнения'),
})

module.exports = { createCategorySchema }
