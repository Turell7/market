import { Outlet } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { Footer } from './layouts/Footer'
import { Header } from './layouts/Header'
import { Main } from './layouts/Main'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main>
          <div>
            <Outlet />
          </div>
        </Main>
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
