import {createStore, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {thunk} from 'redux-thunk';
import {appReducer} from './reducers/reducers'

export default createStore(
    appReducer,
    applyMiddleware(thunk)
);
