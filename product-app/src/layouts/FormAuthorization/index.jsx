import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import * as Yup from 'yup'
import styles from './styles.module.scss'

export function FormAuthorization({ closeModal }) {
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

      <button type="submit" className={styles.btnAdd}>Авторизация</button>
    </Form>
    </Formik>
    <button
      type="button"
      className={styles.btn}
      onClick={closeModal}
    >
    </button>
    </div>
  )
}