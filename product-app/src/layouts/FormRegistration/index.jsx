import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import * as Yup from 'yup'
import styles from './styles.module.scss'

export function FormRegistration({ closeModal }) {
  return (
    <div className={styles.containerModal}>
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
    }}
    validationSchema={Yup.object({
      email: Yup.string()
        .required('Поле обязательно к заполнению'),
      password: Yup.string()
        .required('Поле обязательно к заполнению'),
      name: Yup.string()
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
      <ErrorMessage name="name" />

      <Field className={styles.input} key="name" name="name" type="name" placeholder="Имя" />
      <ErrorMessage name="Имя" />
      <button type="submit" className={styles.btnAdd}>Регистрация</button>
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
