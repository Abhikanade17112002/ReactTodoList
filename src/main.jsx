import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter  } from 'react-router-dom' 
import { RouterProvider } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage.jsx'
import {authStore} from "../Configuration/authStore/authStore.js"
import { Provider } from 'react-redux'
import SignIn from './Components/SignIn/SignIn'
import SingUp from './Components/SignUp/SignUp'
import SignUp from './Components/SignUp/SignUp'

const router = createBrowserRouter([{
 path:"/" ,
 element:<App></App>,
 children:[
  {
    path:'/Home' ,
    element:<Homepage></Homepage>
  },
  {
    path:'/SignUp' ,
    element:<SignUp></SignUp>
  },
  {
    path:'/SignIn' ,
    element:<SignIn></SignIn>
  }
 ]
}]) ;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={authStore}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
