import { Container, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

const theme = createTheme()

export function Authorization() {
  const [auth, setAuth] = useState(true)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        { auth ? <SignIn change={setAuth} />
          : <SignUp change={setAuth} />}
      </Container>
    </ThemeProvider>
  )
}
