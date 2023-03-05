import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Main } from '../pages/Main'
import { Profile } from '../pages/Profile'
import { Users } from '../pages/Users'
import { Products } from '../pages/Products'
import { Categories } from '../pages/Categories'
import { Authorization } from '../pages/Autorization'
import { TestUploadsFiles } from '../pages/TestUpladsFiles'
import { TestFileManager } from '../pages/TestFileManager'

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
        path: 'authorization',
        element: <Authorization />,
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
      {
        path: 'test-uploads-files',
        element: <TestUploadsFiles />,
      },
      {
        path: 'test-file-manager',
        element: <TestFileManager />,
      },
    ],
  },
])
