// Redux
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  },
  reducers: {
    loginSuccess: ( state, action ) => {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.loading = false;
    },
    logoutUser: state => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
  }
});

export const {
  loginSuccess,
  logoutUser
} = authSlice.actions;

//////////////////
//   ACTIONS   //
export const login = ( email, password ) => async dispatch => {
  dispatch( loginSuccess() );
  console.log( email )
  console.log( password )
}

export const logout = () => dispatch => {
  dispatch( logoutUser() );
}

//////////////////
//   SELECTS   //
export const selectUser = state => state.auth.user;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectLoading = state => state.auth.loading;

export default authSlice.reducer;

