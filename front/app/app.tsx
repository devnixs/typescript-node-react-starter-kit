import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { appStore } from './Store';
import { Hello } from 'app/Modules/Sample/Components/Hello';

appStore.subscribe(() => console.log('new state:', appStore.getState()));

export default () => (
  <Provider store={appStore}>
    <Router>
      <Route component={Hello} />
    </Router>
  </Provider>
);
