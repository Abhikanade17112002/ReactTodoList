import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

import { logOut } from '../../../Configuration/authStore/authSlice';

const Navbar = () => {
  const authStatus = useSelector((state)=> state.auth.authStatus) ;
  // console.log(authStatus,"ADADA")
  const auth = getAuth();
  const dispatch = useDispatch() ;



  const handleLogOut = async () =>{
    try {
         await signOut(auth).then(() => {
          // Sign-out successful.
          dispatch(logOut() );


        })
    } catch (error) {
      console.log("Firebase Error : Handle LogOut " , error) ;
    }
  }
  return (
   
            <nav className="">
                  <div className=" nav  ">
                        <div className='nav-logo'>
                          <Link to="/Home">
                            <a className="navbar-brand">
                                <div className='nav-logo-wrapper'>
                                <img src="src/assets/Todologo.png"  className="img-fluid nav-logo-img" alt="" />
                                </div>
                            </a>
                            </Link>
                        </div>
                        <div className=' nav-list'>
                          
                           
                       
                        <div className='nav-form'>
                          <form className="d-flex" role="search">
                          
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                          </form>
                        </div>

                          <div className='nav-btns'>
                          {
                                  authStatus ?   null : (

                                    <>
                                    <button className='btn btn-primary '>
                                      <Link className='links' to="/SignIn">
                                      Sign In
                                      </Link>
                                      </button>
                                    <button className='btn btn-secondary'>
                                      
                                    <Link className='links' to="/SignUp">
                                      Sign Up
                                      </Link>
                                      </button>
                                    </>
                                  )
                              }
                            
                              {
                                  authStatus ?  <button className='btn btn-danger' onClick={handleLogOut}>
                                    Log Out</button> : null 
                              }
                             
                            </div>
                          </div>
                  </div>
      </nav>
    
  )
}

export default Navbar
