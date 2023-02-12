import { Box, CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'
import './App.css'
import { HeaderWrapper } from './layouts/HeaderWrapper'
import { Footer } from './layouts/Footer'

function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <HeaderWrapper />
      </Box>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
