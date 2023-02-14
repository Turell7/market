import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { About } from "../pages/About"
import { Contacts } from "../pages/Contacts"
import { Help } from "../pages/Help"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
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
        }
      ]
    },
  ])