import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authstore/auth'

export default configureStore({
  reducer: {
    authToken: authReducer
  }
});