import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import { Header } from '../components/header/Header';

// Pages
import { CheckoutScreen } from '../pages/checkout/CheckoutScreen';
import { CourseCatalogScreen } from '../pages/course-catalog/CourseCatalogScreen';
import { CourseDetailScreen } from '../pages/course-detail/CourseDetailScreen';

export const DashboardRouter = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/course-catalog" component={ CourseCatalogScreen } />
        <Route exact path="/course-detail" component={ CourseDetailScreen } />
        <Route exact path="/checkout" component={ CheckoutScreen } />

        <Redirect to="/course-catalog" />
      </Switch>
    </>
  )
}
