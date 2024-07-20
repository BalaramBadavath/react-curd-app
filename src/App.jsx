// !29-03-2024
// ? CRUD APPLICATION

import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './CRUP APP/Home';
import Create from './CRUP APP/Create';
import Read from './CRUP APP/Read';
import Update from './CRUP APP/Update';
import PageNotFound from './CRUP APP/PageNotFound';
import "./Global.css"

let route = createBrowserRouter([
  {
    path:'/',element:<Home/>
  },
  {
    path:'/create',element:<Create/>
  },
  {
    path:'/read/:id',element:<Read/>
  },
  {
    path:'/update/:id',element:<Update/>
  },
  {
    path:'*',element:<PageNotFound/>
  }
  
])
const App = () => {
  return (
    <RouterProvider router={route}/>
  )
}

export default App