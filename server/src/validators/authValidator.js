const yup = require('yup')

const signUpSchema = yup.object().shape({
  nickName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const signInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export const authValidator = {
  signUpSchema,
  signInSchema,
}
