import {
  Avatar, Box, Button, TextField, Typography,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../store/slices/userSlice'
import { SIGNIN_QUERY_KEY } from '../../tools/queryKeys'
import { adminApi } from '../../Api'

export function SignIn({ change }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (values) => adminApi.signIn(values),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: SIGNIN_QUERY_KEY })
      dispatch(setUser(res.data))
      navigate('/profile')
    },
    onError: (e) => {
      console.log({ e })
    },
  })

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('empty'),
    password: Yup.string()
      .required('Invalid password')
      .min(3, 'Must be at least 3 characters')
      .max(20, 'Must be 20 characters or less'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      mutate(values)
    },
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button onClick={() => { change((prev) => !prev) }} color="primary">Registration</Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  )
}
