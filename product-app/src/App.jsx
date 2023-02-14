import { Outlet } from 'react-router'
import './App.css'
import { Footer } from './layouts/Footer'
import { Header } from './layouts/Header'
import { Main} from './components/Main'

function App() {

  return (
    <div className="App">
    <Header />
      <Main>
        <div>
          <Outlet />
        </div>
      </Main>
    <Footer />
  </div>
  )
}

export default App
