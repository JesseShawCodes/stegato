import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import musicReducer from './reducers'

// const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    // userDataSearch,
    musicReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
      // loggerMiddleware
    )
  )
}