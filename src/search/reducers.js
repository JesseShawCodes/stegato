import { combineReducers } from 'redux'
import {
    SEARCH_ITUNES_REQUEST,
    REQUEST_MUSIC_FROM_API
} from './actions';

const initialState = {
    music: [],
    loading: false,
    error: null
};

export function musicReducer(state=initialState, action) {
    console.log("musicReducer")
}

const rootReducer = combineReducers({

})
  
export default rootReducer
