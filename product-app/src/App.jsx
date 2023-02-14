import { Outlet } from 'react-router'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main} from './components/Main/Main'

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
