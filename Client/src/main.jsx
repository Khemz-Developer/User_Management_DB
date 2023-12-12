import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home.jsx';
import { Login } from './components/Login.jsx';
import { UpdateUser } from './components/UpdateUser.jsx';
import View from './components/View.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/update-user/:id",
        element:<UpdateUser/>,
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`)
      },
      {
        path:"/view-user/:id",
        element:<View/>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
