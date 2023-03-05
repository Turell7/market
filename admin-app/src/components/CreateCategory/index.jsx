import { useMutation } from '@tanstack/react-query'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { adminApi } from '../../Api'

export function CreateCategory() {
  const navigate = useNavigate()
  const successHandler = () => {
    navigate('')
  }
  const { mutate } = useMutation({
    mutationFn: (categoryData) => adminApi.createCategory(categoryData),
    onSuccess: successHandler,
  })
  return (
    <>
      <h1>Add a new category</h1>
      <Formik
        initialValues={{
          name: '',
          price: '',
          discount: '',
          stock: '',
          categoryId: '',
          image: '',
          description: '',
        }}
        validationSchema={Yup.object(
          {
            name: Yup.string()
              .min(2, 'More than 2 symbols')
              .max(40, 'Max 40 symbols')
              .required('Please set name'),
          },
        )}
        onSubmit={(values) => {
          mutate(values)
        }}
      >
        <Form name="addProduct" className="card-body">
          {/* { message && <Alert message={message} />} */}
          <div className="flex">
            <div className="form-control">
              <div className="label">
                <span className="label-text">Category name</span>
              </div>
              <Field name="name" type="text" placeholder="Сумки" className="input input-bordered" />
              <ErrorMessage component="span" name="email" className="error" />
            </div>
            <div className="form-control mt-9">
              <button type="submit" className="btn btn-secondary">Add category</button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  )
}
