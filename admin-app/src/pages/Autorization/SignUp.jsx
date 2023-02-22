import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUser } from '../../store/slices/userSlice'
import { adminApi } from '../../Api'
import { SIGNUP_QUERY_KEY } from '../../tools/queryKeys'

export const REQUIRED_ERROR_MESSAGE = 'Required field to fill in'

export function SignUp({ change }) {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const errorHandler = (answer) => {
    const { message: errorMessage } = answer
    setMessage(errorMessage)
  }

  const { mutate } = useMutation({
    mutationFn: (values) => adminApi.signUp(values),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: SIGNUP_QUERY_KEY })
      dispatch(setUser(res.data))
      change((prev) => !prev)
    },
    onError: (res) => {
      errorHandler(res)
    },
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object(
        {
          email: Yup.string()
            .email('Invalid email address')
            .required(REQUIRED_ERROR_MESSAGE),
          password: Yup.string()
            .required(REQUIRED_ERROR_MESSAGE)
            .min(3, 'Must be at least 3 characters')
            .max(20, 'Must be 20 characters or less'),
        },
      )}
      onSubmit={mutate}
    >
      <Form className="card-body">
        { message && (
        <div className="alert alert-warning shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>{message}</span>
          </div>
        </div>
        )}
        <div className="form-control">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <Field name="name" type="text" placeholder="name" className="input input-bordered" />
          <ErrorMessage component="span" name="name" className="error" />
        </div>
        <div className="form-control">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <Field name="email" type="text" placeholder="email" className="input input-bordered" />
          <ErrorMessage component="span" name="email" className="error" />
        </div>
        <div className="form-control">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <Field name="password" type="password" placeholder="password" className="input input-bordered" />
          <ErrorMessage component="span" name="password" className="error" />
          <div className="label">
            <button onClick={() => { change((prev) => !prev) }} type="button" className="link link-primary">
              Есть аккаунт?
            </button>
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-secondary">SignUp</button>
        </div>
      </Form>
    </Formik>
  )
}
