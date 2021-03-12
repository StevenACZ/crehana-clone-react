// Redux
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import authSlice from '../features/authSlice';

export default configureStore({
  reducer: {
    auth: authSlice
  }
});