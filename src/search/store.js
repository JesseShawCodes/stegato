import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {musicReducer} from './reducers/reducers';

export default createStore(
    musicReducer,
    applyMiddleware(thunk)
);
