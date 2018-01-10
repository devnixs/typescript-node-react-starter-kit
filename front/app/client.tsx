import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Promise from 'bluebird';

import AppContainer from './app';

console.log('App started', window['NODE_ENV']);

__webpack_public_path__ = 'http://localhost:8080/';

// Polyfill the Promise.
if (window.Promise === undefined) {
  window.Promise = Promise;
}

function renderApp(App) {
  ReactDOM.render(<App />, document.getElementById('app'));
}

console.log('module.hot is ', module.hot);

if (module.hot) module.hot.accept();

renderApp(AppContainer);
