import { Container, CssBaseline } from '@mui/material'
import { useState } from 'react'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export function Authorization() {
  const [auth, setAuth] = useState(true)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      { auth ? <SignIn change={setAuth} />
        : <SignUp change={setAuth} />}
    </Container>
  )
}
