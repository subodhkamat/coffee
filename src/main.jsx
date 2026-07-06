import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './componets/home.jsx'
import About from './componets/about.jsx'
import Products from './componets/products.jsx'
import Location from './componets/stores.jsx'

const router=createBrowserRouter([
  {

    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path:"location",
        element:<Location/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
