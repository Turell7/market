import { useMutation } from '@tanstack/react-query'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
// import { useSelector } from 'react-redux'
// import { Navigate } from 'react-router-dom'
// import { useState } from 'react'
import * as Yup from 'yup'
import { adminApi } from '../../Api'

export function CreateProduct({ setIsAddItem }) {
//   const token = useSelector((store) => store.user.token)
  //   const noPictures = 'https://banner2.cleanpng.com/20180615/yvr/kisspng-computer-icons-landscape-via-ghilini-5b2451fe9d0e69.0779585515291069426433.jpg'
  //   const [pictures, setPictures] = useState('')

  //   const navigate = useNavigate()

  const successHandler = () => { setIsAddItem((prev) => !prev) }

  const { mutate } = useMutation({
    mutationFn: (productData) => adminApi.createProduct(productData),
    onSuccess: successHandler,
  })

  // const test = document.forms.addProduct
  // console.log({ test })

  // const test2 = document.getElementsByTagName('input')[0]
  // console.log({ test2 })

  //   if (!token) return <Navigate to="/" />
  return (
    <>
      <h1>Add a new product</h1>
      <Formik
        initialValues={{
          name: '',
          price: '',
          discount: '',
          stock: '',
          wight: '',
          pictures: '',
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
            wight: Yup.string()
              .min(2, 'More than 2 symbols')
              .max(20, 'Max 20 symbols'),
            pictures: Yup.string().url()
              .min(2, 'More than 2 symbols')
              .max(200, 'Max 100 symbols')
              .required('Please set image url'),
            description: Yup.string()
              .min(10, 'More than 10 symbols')
              .max(500, 'Max 500 symbols')
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
                <span className="label-text">Wight (g)</span>
              </div>
              <Field name="wight" type="text" placeholder="100 г" className="input input-bordered" />
              <ErrorMessage component="span" name="wight" className="error" />
            </div>
          </div>
          <div>
            {/* <div className="flex justify-end">
            {!pictures
              ? <img className="max-w-xs max-h-40 right-0" src={noPictures} alt="Added product" />
              : <img className="max-w-xs max-h-40 right-0" src={pictures} alt="Added product" />}
          </div> */}
            <div className="form-control">
              <div className="label">
                <span className="label-text">Pictures</span>
              </div>
              <Field name="pictures" type="url" placeholder="https://example.com/pictures.png" className="input input-bordered" />
              <ErrorMessage component="span" name="pictures" className="error" />
            </div>
            {/* <div className="form-control">
            <div className="label">
              <span className="label-text">Pictures</span>
            </div>
            <Field name="pictures" type="url" value={pictures} onChange={(e) => setPictures(e.target.value)} placeholder="https://example.com/pictures.png" className="input input-bordered" />
            <ErrorMessage component="span" name="pictures" className="error" />
          </div> */}
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
