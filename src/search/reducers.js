import { combineReducers } from 'redux'
import {
    RECEIVE_MUSIC_FROM_API,
    SEARCH_ITUNES_REQUEST
} from './actions';

export function musicReducer(action) {
    console.log("musicReducer")
}

const rootReducer = combineReducers({

})
  
export default rootReducer
