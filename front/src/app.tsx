import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { appStore } from './Redux/Store';
import { Home } from './Views/Containers/Home';
import { MainLayout } from './Views/Layouts/Layout';
appStore.subscribe(() => console.log('new state:', appStore.getState()));

export default () => (
  <Provider store={appStore}>
    <Router>
      <MainLayout>
        <Route component={Home} />
      </MainLayout>
    </Router>
  </Provider>
);
