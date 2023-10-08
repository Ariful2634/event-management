import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Pages/Home';
import ServiceDetails from './Components/Pages/ServiceDetails';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProductDetails from './Components/Layout/ProductDetails';
import Training from './Components/Pages/Training';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/serve/:id',
        loader:()=>fetch('../data.json'),
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/details/:id',
        loader:()=>fetch('../product.json'),
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path:'/training',
        element:<PrivateRoute><Training></Training></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
