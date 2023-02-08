import * as yup from 'yup'

const REQUIRED_ERROR_MESSAGE = 'Поле обязательно к заполнению'

export const contactCreateSchema = yup.object().shape({
  firstName: yup.string()
    .min(2, 'Укажите минимум два символа')
    .max(20, 'Не более 20 символов')
    .required(REQUIRED_ERROR_MESSAGE),
  lastName: yup.string()
    .max(20, 'Must be 20 characters or less')
    .required(REQUIRED_ERROR_MESSAGE),
  email: yup.string().email('Invalid email address').required(REQUIRED_ERROR_MESSAGE),
})

export const contactUpdateSchema = yup.object().shape({
  firstName: yup.string()
    .min(2, 'Укажите минимум два символа')
    .max(20, 'Не более 20 символов')
    .required(REQUIRED_ERROR_MESSAGE),
  lastName: yup.string()
    .max(20, 'Must be 20 characters or less')
    .required(REQUIRED_ERROR_MESSAGE),
  email: yup.string().email('Invalid email address').required(REQUIRED_ERROR_MESSAGE),
  nickName: yup.string().strict(),
  description: yup.string().strict(),
  avatar: yup.string().strict(),
})
