import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Categories } from '../pages/Categories'
import { Main } from '../pages/Main'
import { Products } from '../pages/Products'
import { Users } from '../pages/Users'
import { Profile } from '../pages/Profile'
import { CreateProduct } from '../components/CreateProduct'

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
        children: [
          {
            path: 'create',
            element: <CreateProduct />,
          },
        ],
      },
      {
        path: 'categories',
        element: <Categories />,
      },
    ],
  },
])
