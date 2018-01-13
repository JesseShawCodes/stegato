import { combineReducers } from 'redux'
import {
    RECEIVE_MUSIC_FROM_API,
    SEARCH_ITUNES_REQUEST
} from './actions';

const initialState = {
    music: [],
    loading: false,
    error: null
};

export function musicReducer(state=initialState, action) {
    if (action.type === SEARCH_ITUNES_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === RECEIVE_MUSIC_FROM_API) {
        return Object.assign({}, state, {
            music: action.music,
            loading: false,
            error: null
          })
    }
}

  
export default musicReducer
