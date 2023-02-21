import { Outlet } from 'react-router'
import './App.css'
import { Footer } from './layouts/Footer'
import { Header } from './layouts/Header'
import { Main} from './layouts/Main'
import { ToastContainer } from 'react-toastify'
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
          autoClose={5000}
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
