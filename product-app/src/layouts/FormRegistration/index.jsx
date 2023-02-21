import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useMutation } from '@tanstack/react-query'
import * as Yup from 'yup'
import styles from './styles.module.scss'
import { adminApi } from '../../../Api'
import { toast } from 'react-toastify'
import { queryClient } from '../../main'

const SIGNUP_USER = ['SIGNUP_USER']

export function FormRegistration({ closeModal, change }) {

  const getSignUp = (name, password, email) => adminApi.signUp(name, password, email)
  .then((data) => localStorage.setItem('id', data.data.id))

  
  const { mutateAsync } = useMutation({
    mutationFn: (values) => getSignUp(values.name, values.password, values.email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SIGNUP_USER })
    },
    onError: (error) => toast.error('К сожалению произошла ошибка')
  })

  const signup = async (name, password, email) => {
    await mutateAsync(name, password, email)
    // toast.success('Регистрация прошла успешно')
    closeModal()
  }


  return (
    <div className={styles.containerModal}>
    <Formik
      initialValues={{
        name: '',
        password: '',
        email: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .required('Поле обязательно к заполнению'),
      password: Yup.string()
        .required('Поле обязательно к заполнению'),
      email: Yup.string()
        .required('Поле обязательно к заполнению'),
    })}
    onSubmit={(values, { resetForm }) => {
      console.log(values)
      signup(values)
      resetForm()
    }}
    >
    <Form
      className={styles.form__inputs}
    >
      <Field className={styles.input} key="name" name="name" type="name" placeholder="Имя" />
      <ErrorMessage name="name" />

      <Field className={styles.input} key="password" name="password" type="password" placeholder="Пароль" />
      <ErrorMessage name="password" />

      <Field className={styles.input} key="email" name="email" type="email" placeholder="E-mail" />
      <ErrorMessage name="email" />

          <button type="submit" className={styles.btnAdd}>Зарегистрироваться</button>
          <button className={styles.btnAdd} type="button" onClick={() => { change((prev) => !prev) }}>Авторизация</button>
        </Form>
      </Formik>
      <button
        type="button"
        className={styles.btn}
        onClick={closeModal}
      />
    </div>
  )
}
