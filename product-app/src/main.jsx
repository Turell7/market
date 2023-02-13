import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import { Contacts } from './components/Contacts/Contacts'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/contacts",
        element: <Contacts />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
