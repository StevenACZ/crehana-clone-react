// React
import React from 'react';

// Router Router
import { Redirect, Route } from 'react-router-dom';

// Prop Types
import PropTypes from 'prop-types';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      { ...rest }
      component={ ( props ) => (
        ( isAuthenticated )
          ? ( <Component { ...props } /> )
          : ( <Redirect to="/login" /> )
      )}
    />
  )
}

PrivateRoute.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}