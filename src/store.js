import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './auth/localstorage';
import authReducer from './auth/reducers/auth';
import protectedDataReducer from './auth/reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './auth/actions/auth';
import { createLogger } from 'redux-logger'
//User Search Imports
import thunkMiddleware from 'redux-thunk'
import musicUserReducer from './dashboard/reducers'


const loggerMiddleware = createLogger()

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    }),
    applyMiddleware(
        thunk,
        loggerMiddleware
    )
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;


export function configureStore(preloadedState) {
  return createStore(
    musicUserReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}