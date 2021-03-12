// React
import React from 'react';

// React Router
import { Redirect, Route } from 'react-router-dom';

// Prop Types
import PropTypes from 'prop-types';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      { ...rest }
      component={ ( props ) => (
        ( !isAuthenticated )
          ? ( <Component { ...props } /> )
          : ( <Redirect to="/" /> )
      )}
    />
  )
}

PublicRoute.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}