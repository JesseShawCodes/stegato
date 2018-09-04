import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import musicReducer from './reducers'
import logger from 'redux-logger';

export default function configureStore(preloadedState) {
  return createStore(
    // userDataSearch,
    musicReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
}