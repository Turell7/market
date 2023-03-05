/* eslint-disable jsx-a11y/control-has-associated-label */
import { useMutation } from '@tanstack/react-query'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { adminApi } from '../../../Api'
import { queryClient } from '../../main'
import { addUser } from '../../redux/slices/userSlices/userSlices'
import styles from './styles.module.scss'

const USER_SIGN_IN = ['USER_SIGN_IN']

export function FormAuthorization({ closeModal, change }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getSignIn = (email, password) => adminApi.signIn(email, password)

  const { mutateAsync } = useMutation({
    mutationFn: (values) => getSignIn(values.email, values.password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_SIGN_IN })
    },

    onError: () => toast.error('К сожалению произошла ошибка'),

  })

  const userToken = async (email, password) => {
    const data = await mutateAsync(email, password)
    closeModal()
    dispatch(addUser(data.data.accessToken))
    toast.success('Вы авторизованны!')
    navigate('/')
  }

  return (
    <div className={styles.containerModal}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required('Поле обязательно к заполнению'),
          password: Yup.string()
            .required('Поле обязательно к заполнению'),
        })}
        onSubmit={(values, { resetForm }) => {
          userToken(values)
          resetForm()
        }}
      >
        <Form
          className={styles.form__inputs}
        >
          <Field className={styles.input} key="email" name="email" type="email" placeholder="E-mail" />
          <ErrorMessage name="email" />

          <Field className={styles.input} key="password" name="password" type="password" placeholder="Пароль" />
          <ErrorMessage name="password" />

          <button type="submit" className={styles.btnAdd}>Войти</button>
          <button className={styles.btnAdd} type="button" onClick={() => { change((prev) => !prev) }}>Регистрация</button>

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
