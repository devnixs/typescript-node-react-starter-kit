import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { appStore } from './Store';
import { MainLayout } from './Layouts/Layout';
appStore.subscribe(() => console.log('new state:', appStore.getState()));

export default () => (
  <Provider store={appStore}>
    <Router>
      <MainLayout>
        Test
      </MainLayout>
    </Router>
  </Provider>
);
