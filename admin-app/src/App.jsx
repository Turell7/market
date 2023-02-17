import { Box, CssBaseline } from '@mui/material'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import { HeaderWrapper } from './layouts/HeaderWrapper'
import { Footer } from './layouts/Footer'

function App() {
  const location = useLocation()
  const token = useSelector((store) => store.user.token)
  if (location.pathname !== '/authorization' && !token) return <Navigate to="/authorization" />
  return (
    <>
      <div className="App">
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <HeaderWrapper />
        </Box>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
