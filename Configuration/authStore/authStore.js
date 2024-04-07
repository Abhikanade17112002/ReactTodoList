import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from "./authSlice"
export const authStore = configureStore({
  reducer: {
    auth : authSliceReducer 
  },
})