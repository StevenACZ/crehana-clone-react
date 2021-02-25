import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';

// Auth
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

// Global Styles
import './assets/styles/App.css';

// Basic Login
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const CrehanaApp = () => {

  const [ user, dispatch ] = useReducer( authReducer, {}, init );

  useEffect(() => {
    localStorage.setItem( 'user', JSON.stringify( user ) );
  }, [ user ])

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  )
}
