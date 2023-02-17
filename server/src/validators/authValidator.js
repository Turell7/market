const yup = require('yup')

const signUpSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const signInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

module.exports = { signUpSchema, signInSchema }
