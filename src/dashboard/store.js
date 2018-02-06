import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import dashboardRefresher from './reducers';

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    dashboardRefresher,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}