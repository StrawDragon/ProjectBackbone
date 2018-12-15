import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { assignAll } from 'redux-act';
import { createLogger } from 'redux-logger';
import { asyncActionsCallerMiddleware } from 'redux-act-dispatch-free';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BRANCH, BRANCHES } from "../constants/environments";

import * as actions from 'actions';
import applicationReducers from 'reducers';

export default () => {
  const reducers = combineReducers({ app: applicationReducers, router: routerReducer });
  const history = createBrowserHistory();
  const logger = createLogger({
    collapsed: true,
  });

  const middleWares = [asyncActionsCallerMiddleware, routerMiddleware(history)];
  if (BRANCHES[BRANCH].devTools) middleWares.push(logger);

  const store = createStore(
    reducers,
    {}, // preloadedState
    composeWithDevTools(applyMiddleware(...middleWares))
  );
  assignAll(actions, store);
  return { history, store };
};

/*
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { assignAll } from 'redux-act';
import { asyncActionsCallerMiddleware } from 'redux-act-dispatch-free';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as actions from '../store/actions';
import applicationReducers from '../store/reducers';

export default () => {
  const reducers = combineReducers({ app: applicationReducers, router: routerReducer });
  const history = createBrowserHistory();

  const middleWares = [asyncActionsCallerMiddleware, routerMiddleware(history)];

  const store = createStore(
    reducers,
    {}, // preloadedState
    composeWithDevTools(applyMiddleware(...middleWares))
  );
  assignAll(actions, store);
  return { history, store };
};
 */
