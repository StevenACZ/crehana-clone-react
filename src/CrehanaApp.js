// React
import React from 'react';

// Redux
import store from './app/store';
import { Provider } from 'react-redux';

// Global Styles
import 'antd/dist/antd.css';
import './assets/styles/App.css';

// Components
import { AppRouter } from './routers/AppRouter';

export const CrehanaApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}
