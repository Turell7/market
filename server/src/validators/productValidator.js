const yup = require('yup')

const createProductSchema = yup.object({
  name: yup
    .string('Поле должно быть строкой')
    .min(2, 'Поле должно содержать минимум 2 символа')
    .required('Поле обязательно для заполнения'),
  price: yup
    .number('Поле должно быть числом')
    .required('Поле обязательно для заполнения'),
  image: yup
    .string('Поле должно быть строкой')
    .url('Поле содержит не валидный url-адрес'),
  status: yup
    .bool(),
  stock: yup
    .number('Поле должно быть числом'),
  discount: yup
    .number('Поле должно быть числом'),
  description: yup
    .string('Поле должно быть строкой'),
  images: yup.array().of(
    yup.string(),
  ),
  categoryId: yup
    .number('Поле должно быть числом'),
})

module.exports = { createProductSchema }

// const createProductSchema = yup.object({
//   name: yup
//     .string('Поле должно быть строкой')
//     .min(2, 'Поле должно содержать минимум 2 символа')
//     .required('Поле обязательно для заполнения'),
//   price: yup
//     .number('Поле должно быть числом')
//     .required('Поле обязательно для заполнения'),
//   image: yup
//     .string('Поле должно быть строкой')
//     .url('Поле содержит не валидный url-адрес'),
//   status: yup
//     .bool('Поле должно быть типом boolean'),
//   stock: yup
//     .number('Поле должно быть числом'),
//   discount: yup
//     .number('Поле должно быть числом'),
//   description: yup
//     .string('Поле должно быть строкой'),
//   images: yup
//     .array('Поле должно быть массивом'),
//   categoryId: yup
//     .number('Поле должно быть числом'),
// })
