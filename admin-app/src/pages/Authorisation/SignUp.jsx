import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Avatar, Box, Button, Grid, TextField, Typography,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { adminApi } from '../../Api'
import { SIGNUP_QUERY_KEY } from '../../tools/queryKeys'

export function SignUp({ change }) {
  const signUp = (values) => adminApi.signUp(values)

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: signUp,
    onSubmit: () => {
      queryClient.invalidateQueries({ queryKey: SIGNUP_QUERY_KEY })
    },
  })

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'More than 2 symbols')
      .max(40, 'Max 40 symbols')
      .required('Please set name'),
    last_name: Yup.string()
      .min(2, 'More than 2 symbols')
      .max(40, 'Max 40 symbols')
      .required('Please set last name'),
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
      name: '',
      last_name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log({ values })
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
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  autoFocus
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                  helperText={formik.touched.last_name && formik.errors.last_name}
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <Button onClick={() => { change((prev) => !prev) }} color="primary">Authorization</Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  )
}
