import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { appStore } from './Store';
import { Hello } from 'src/Modules/Sample/Components/Hello';
import { MainLayout } from './Layouts/Layout';
appStore.subscribe(() => console.log('new state:', appStore.getState()));

export default () => (
  <Provider store={appStore}>
    <Router>
      <MainLayout>
        <Route component={Hello} />
      </MainLayout>
    </Router>
  </Provider>
);
