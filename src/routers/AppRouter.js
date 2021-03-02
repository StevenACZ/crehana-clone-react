import React, { useContext } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

// Auth
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { CheckoutScreen } from '../pages/checkout/CheckoutScreen';
import { CourseCatalogScreen } from '../pages/course-catalog/CourseCatalogScreen';
import { CourseDetailScreen } from '../pages/course-detail/CourseDetailScreen';
import { LoginScreen } from '../pages/login/LoginScreen';
import { Header } from '../components/header/Header';

export const AppRouter = () => {

  const { user } = useContext( AuthContext );

  return (
    <HashRouter>
      <Header />
      
      <Switch>
        <Route
          exact
          path="/"
          component={ CourseCatalogScreen }
        />
        <Route
          exact
          path="/course"
          component={ CourseDetailScreen }
        />
        <PublicRoute
          exact
          path="/login"
          component={ LoginScreen }
          isAuthenticated={ user.logged }
        />
        <PrivateRoute
          exact
          path="/checkout"
          component={ CheckoutScreen }
          isAuthenticated={ user.logged }
        />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}
