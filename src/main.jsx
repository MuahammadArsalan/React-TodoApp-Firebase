import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import TodoApp from './Pages/TodoApp.jsx'







const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
path:"",
element:<Login/>
    },
      {
path:"register",
element:<Register/>
    }
    ,
      {
path:"todoApp",
element:<TodoApp/>
    }
  ]
  }
])




createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
  {/* <App /> */}
  </RouterProvider>

  )
