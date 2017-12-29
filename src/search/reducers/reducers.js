import {
    SEARCH_ITUNES_REQUEST,
    SEARCH_ITUNES_SUCCESS,
    SEARCH_ITUNES_ERROR
} from '../actions/actions';

const initialState = {
    albums: [],
    loading: false,
    error: null
};


export const appReducer = (state=initialState, action) => {
    if (action.type === SEARCH_ITUNES_REQUEST) {
        console.log("Itunes Searching...");
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === SEARCH_ITUNES_SUCCESS) {
        console.log("Itunes search success!");
        return Object.assign({}, state, {
            albums: action.albums,
            loading: false,
            error: null
        });
    }
    else if (action.type === SEARCH_ITUNES_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
};