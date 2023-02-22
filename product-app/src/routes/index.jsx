import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { User } from "../pages/User"
import { About } from "../pages/About"
import { Contacts } from "../pages/Contacts"
import { Help } from "../pages/Help"
import { Home } from "../pages/Home"
import { CardInfo } from "../components/CardInfo"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contacts",
          element: <Contacts />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/help",
          element: <Help />
        },
        {
          path: '/user',
          element: <User />
        },
        {
          path: '/card/:id',
          element: <CardInfo />
        },
      ]
    },
  ])