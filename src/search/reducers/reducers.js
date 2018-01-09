import {
    SEARCH_ITUNES_REQUEST,
    SEARCH_ITUNES_SUCCESS,
    SEARCH_ITUNES_ERROR
} from '../actions/actions';

const initialState = {
    music: [],
    loading: false,
    error: null
};

export function musicReducer(state=initialState, action) {
    if (action.type === SEARCH_ITUNES_REQUEST) {
        console.log("Search Request has been made")
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === SEARCH_ITUNES_SUCCESS) {
        console.log("Search Success!!")
        return Object.assign({}, state, {
            music: action.music,
            loading: false,
            error: null
        });
    }
    else if (action.type === SEARCH_ITUNES_ERROR) {
        console.log("Search ERROR!")
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}