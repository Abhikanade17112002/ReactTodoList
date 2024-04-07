import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'
import { logIn , logOut  } from '../Configuration/authStore/authSlice'
import { useSelector , useDispatch  } from 'react-redux'
import { app } from '../Configuration/Firebase/Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AddTodo from './Components/AddTodo/AddTodo'
import Loading from './Components/Loading/Loading'
import Todo from './Components/Todo/Todo'
import { db  } from '../Configuration/Firebase/Firebase'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { getDocs , collection } from 'firebase/firestore'

function App() {

  const status = useSelector( (state) => state.auth.authStatus) ;
  const [ currUser , setCurrUser ] = useState(null) ;
  const dispatch = useDispatch() ;
  const collectionRef = collection(db , "Todos") ;
  //console.log(status) ;
  const auth = getAuth();
  useEffect( ()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        dispatch(logIn({
          authStatus : true ,
          payload: user.uid
        }))
        setCurrUser(user) ;
        
      } else {
        dispatch(logOut())
        setCurrUser(null) ;
      }
    });
  },[currUser])



// console.log(currUser,"CURRENT USER") ;
  return (
    <>
    {/* <Todo></Todo> */} 
    <Navbar></Navbar>
    
    <Outlet></Outlet>
    <Footer></Footer>
    {/* <Loading></Loading> */}
    {/* {/* <SignIn></SignIn> */}

    
    </>
  )
}

export default App
