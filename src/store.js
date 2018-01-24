import { createStore, applyMiddleware, combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import {thunkMiddleware, thunk} from 'redux-thunk';
import { createLogger } from 'redux-logger';

//Auth Reducers
import {loadAuthToken} from './auth/localstorage';
import authReducer from './auth/reducers/auth';
import protectedDataReducer from './auth/reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './auth/actions/auth';


//Music Search Reducers
import musicReducer from './search/reducers';

const loggerMiddleware = createLogger()

export default function store(preloadedState) {
  return createStore(
    musicReducer,
    preloadedState,
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    }),
    applyMiddleware(
        thunk,
        thunkMiddleware,
        loggerMiddleware
    )
  )
}


// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

