import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { About } from "../pages/About"
import { Catalog } from "../pages/Catalog/Catalog"
import { Contacts } from "../pages/Contacts"
import { Help } from "../pages/Help"
import { Home } from "../pages/Home"

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
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/catalog",
          element: <Catalog />
        },
      ]
    },
  ])