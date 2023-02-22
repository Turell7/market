import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Main } from '../pages/Main'
import { Profile } from '../pages/Profile'
import { Users } from '../pages/Users'
import { Products } from '../pages/Products'
import { Categories } from '../pages/Categories'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'products/',
        element: <Products />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
    ],
  },
])
