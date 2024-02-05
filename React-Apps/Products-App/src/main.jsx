import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/Root.jsx'
import SearchBoxComponent from './components/SearchBox/SearchBoxComponent.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  
    children: [
      {
        path: '/',
        element: <SearchBoxComponent />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
