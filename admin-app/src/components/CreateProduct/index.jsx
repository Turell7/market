import { useMutation } from '@tanstack/react-query'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { adminApi } from '../../Api'

export function CreateProduct() {
  const navigate = useNavigate()
  const [imgUrl, setImgUrl] = useState()
  const successHandler = () => {
    navigate('')
  }
  const { mutate } = useMutation({
    mutationFn: (productData) => adminApi.createProduct(productData),
    onSuccess: successHandler,
  })
  return (
    <>
      <h1>Add a new product</h1>
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
            price: Yup.number()
              .min(1, 'Cant be < 1')
              .required('empty'),
            discount: Yup.number()
              .min(0, 'Must be positive'),
            stock: Yup.number()
              .min(1, 'Min 1 item on stock'),
            categoryId: Yup.number()
              .min(0, 'Must be positive'),
            image: Yup.string().url()
              .min(5, 'More than 5 symbols')
              .max(800, 'Max 800 symbols')
              .required('Please set image url'),
            description: Yup.string()
              .min(10, 'More than 10 symbols')
              .max(1000, 'Max 1000 symbols')
              .required('Please set description'),
          },
        )}
        onSubmit={(values) => {
          mutate(values)
        }}
      >
        <Form name="addProduct" className="card-body grid grid-cols-2">
          {/* { message && <Alert message={message} />} */}
          <div>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Product name</span>
              </div>
              <Field name="name" type="text" placeholder="A bone for cleaning dog teeth" className="input input-bordered" />
              <ErrorMessage component="span" name="email" className="error" />
            </div>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <Field name="price" type="number" placeholder="100" className="input input-bordered" />
              <ErrorMessage component="span" name="price" className="error" />
            </div>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Discount (%)</span>
              </div>
              <Field as="select" name="discount" className="input input-bordered">
                <option value={0}>Без скидки</option>
                <option value={5}>5%</option>
                <option value={10}>10%</option>
                <option value={15}>15%</option>
                <option value={20}>20%</option>
                <option value={25}>25%</option>
              </Field>
              <ErrorMessage component="span" name="discount" className="error" />
            </div>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Stock (pc)</span>
              </div>
              <Field name="stock" type="number" placeholder="10" className="input input-bordered" />
              <ErrorMessage component="span" name="stock" className="error" />
            </div>
            <div className="form-control">
              <div className="label">
                <span className="label-text">categoryId</span>
              </div>
              <Field as="select" name="categoryId" className="input input-bordered">
                <option value={1}>Без категории</option>
                <option value={2}>Косметички</option>
                <option value={3}>Комплекты</option>
              </Field>
              <ErrorMessage component="span" name="categoryId" className="error" />
            </div>
          </div>
          <div>
            <div className="flex justify-end">
              {!imgUrl
                ? <img className="max-w-xs max-h-40 right-0" src="https://www.techteam.ru/assets/site/img/ms2_big@2x.png" alt="Added product" />
                : <img className="max-w-xs max-h-40 right-0" src={imgUrl} alt="Added product" />}
            </div>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Image</span>
              </div>
              <Field validate={(e) => setImgUrl(e)} name="image" type="url" placeholder="https://example.com/pictures.png" className="input input-bordered" />
              <ErrorMessage component="span" name="image" className="error" />
            </div>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <Field as="textarea" name="description" type="textarea" placeholder="A healthy treat" className="textarea textarea-bordered" />
              <ErrorMessage component="span" name="description" className="error" />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-secondary">Add product</button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  )
}
