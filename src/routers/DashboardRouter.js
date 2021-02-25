import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { Header } from '../components/Header';

import { HomeScreen } from '../pages/home/HomeScreen';

export const DashboardRouter = () => {
  return (
    <>
      {/* <Header /> */}

      <div className="main-content">
        <Switch>
          <Route exact path="/home" component={ HomeScreen } />
          {/* <Route exact path="/network" component={ NetworkScreen } /> */}
          {/* <Route exact path="/jobs" component={ JobsScreen } /> */}
          {/* <Route exact path="/messaging" component={ MessagingScreen } /> */}
          {/* <Route exact path="/notifications" component={ NotificationsScreen } /> */}

          <Redirect to="/home" />
        </Switch>
      </div> 
    </>
  )
}
