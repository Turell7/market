import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { adminApi } from '../../Api'
// import UnstyledSelectSimple from '../Select'

// const REQUIRED_ERROR_MESSAGE = 'error messge'

export function CreateProduct() {
  const navigate = useNavigate()

  const successHandler = () => {
    navigate('/products')
  }

  const { mutate } = useMutation({
    mutationFn: (productData) => adminApi.createProduct(productData),
    onSuccess: successHandler,
  })

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'More than 2 symbols')
      .max(40, 'Max 40 symbols')
      .required('Please set name'),
    price: Yup.number()
      .min(1, 'Cant be < 1')
      .required('empty'),
    picture: Yup.string().url()
      .min(7, 'More than 2 symbols')
      .required('Please set image url'),
    // .max(200, 'Max 100 symbols')
    // discount: Yup.number()
    //   .min(0, 'Must be positive'),
    // stock: Yup.number()
    //   .min(1, 'Min 1 item on stock'),
    // wight: Yup.string()
    //   .min(2, 'More than 2 symbols')
    //   .max(20, 'Max 20 symbols'),
    // description: Yup.string()
    //   .min(10, 'More than 10 symbols')
    //   .max(500, 'Max 500 symbols')
    //   .required('Please set description'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      picture: '',
      // discount: '',
      // stock: '',
      // wight: '',
      // description: '',
    },
    validationSchema,
    onSubmit: (values) => {
      mutate(values)
      console.log({ values })
    },
  })
  // console.log(formik)
  // console.log(formik.values)
  return (
    <div>
      <img
        src={formik.values.picture}
        style={{
          maxWidth: 300,
          maxHeight: 200,
        }}
        alt="product"
      />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="price"
          name="price"
          label="price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          fullWidth
          id="picture"
          name="picture"
          label="picture"
          type="text"
          value={formik.values.picture}
          onChange={formik.handleChange}
          error={formik.touched.picture && Boolean(formik.errors.picture)}
          helperText={formik.touched.picture && formik.errors.picture}
        />
        {/* <TextField
          fullWidth
          id="discount"
          name="discount"
          label="discount"
          type="number"
          value={formik.values.discount}
          onChange={formik.handleChange}
          error={formik.touched.discount && Boolean(formik.errors.discount)}
          helperText={formik.touched.discount && formik.errors.discount}
        /> */}
        {/* <Select
          fullWidth
          id="discount"
          name="discount"
          label="discount"
          type="select"
          value={formik.values.discount}
          onChange={formik.handleChange}
          error={formik.touched.discount && Boolean(formik.errors.discount)}
          helperText={formik.touched.discount && formik.errors.discount}

        >
          <option value={0}>not discount</option>
          <option value={5}>5%</option>
          <option value={10}>15%</option>
          <option value={20}>20%</option>
          <option value={25}>25%</option>
          <option value={30}>30%</option>
          {/* <OptionUnstyled value={20}>Twenty</OptionUnstyled> */}
        {/* </Select> */}
        {/* <UnstyledSelectSimple>

          <StyledOption value={10}>Ten</StyledOption>
          <StyledOption value={20}>Twenty</StyledOption>
          <StyledOption value={30}>Thirty</StyledOption>
        </UnstyledSelectSimple> */}
        {/* <UnstyledSelectSimple formik={formik} /> */}
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add product
        </Button>
      </form>
    </div>
  )
}
