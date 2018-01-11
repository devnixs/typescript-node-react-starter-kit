import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { rootReducer } from './reducers/rootReducer';
import { IMainBranch } from './reducers/main';

export interface IAppState {
  main: IMainBranch;
}

// @todo remove in prod, add condition.
const logger = () => next => action => {
  console.log('dispatched:', action.type);
  let result = next(action);
  return result;
};

const appStore = createStore(
  rootReducer,
  undefined,
  applyMiddleware(
    thunk,
    promiseMiddleware({
      promiseTypeSuffixes: ['BEGIN', 'SUCCESS', 'FAILURE'],
    }),
    logger
  )
);

export { appStore };
