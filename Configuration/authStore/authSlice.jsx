import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authStatus : false ,
  userData : null 
} ;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   logIn : (state , action) =>{
       state.authStatus = true ;
       state.userData = action.payload ;
      
   }
   ,
   logOut : (state ) =>{
      state.authStatus = false ;
      state.userData = null ;
   }
  },
})

// Action creators are generated for each case reducer function
export const { logIn , logOut } = authSlice.actions

export default authSlice.reducer