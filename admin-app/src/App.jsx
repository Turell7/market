import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './layouts/Footer'
import { Header } from './layouts/Header'
import { SideBar } from './layouts/SideBar'

function App() {
  return (
    <div className="wrapper-app">
      <Header />
      <div className="drawer drawer-mobile h-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center justify-center">
          <div className="container flex items-center justify-center">
            <Outlet />
          </div>
        </div>
        <SideBar />
      </div>
      <Footer />
    </div>
  )
}

export default App
