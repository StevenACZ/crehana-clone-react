// React
import React from 'react';

// React Router
import {
  HashRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// Redux - Reducers
import { selectIsAuthenticated } from '../features/authSlice';

// Auth
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// Components
import { CheckoutScreen } from '../pages/checkout/CheckoutScreen';
import { CourseCatalogScreen } from '../pages/course-catalog/CourseCatalogScreen';
import { CourseDetailScreen } from '../pages/course-detail/CourseDetailScreen';
import { LoginScreen } from '../pages/login/LoginScreen';
import { Header } from '../components/header/Header';

export const AppRouter = () => {
  const isAuthenticated = useSelector( selectIsAuthenticated );

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
          isAuthenticated={ isAuthenticated }
        />
        <PrivateRoute
          exact
          path="/checkout"
          component={ CheckoutScreen }
          isAuthenticated={ isAuthenticated }
        />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}
