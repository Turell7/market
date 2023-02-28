import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from './routes'
import './main.css'
import { store } from './redux/store'

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
