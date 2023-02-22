const yup = require('yup')

const signUpSchema = yup.object().shape({
  name: yup
    .string('Поле должно быть строкой')
    .required('Поле обязательно для заполнения'),
  last_name: yup
    .string('Поле должно быть строкой'),
  email: yup
    .string('Поле должно быть строкой')
    .email('Поле содержит невалидный email-адрес')
    .required('Поле обязательно для заполнения'),
  password: yup
    .string('Поле должно быть строкой')
    .required('Поле обязательно для заполнения'),
})

const signInSchema = yup.object().shape({
  email: yup
    .string('Поле должно быть строкой')
    .email('Поле содержит невалидный email-адрес')
    .required('Поле обязательно для заполнения'),
  password: yup
    .string('Поле должно быть строкой')
    .required('Поле обязательно для заполнения'),
})

module.exports = { signUpSchema, signInSchema }
