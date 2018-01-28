import {
    RECEIVE_MUSIC_FROM_API,
    SEARCH_API_REQUEST,
    SEARCH_MUSIC_ERROR
} from './actions';

const initialState = {
    user: "jshaw",
    music: [],
    loading: false,
    error: null
};

export default function userDataSearch(state=initialState, action) {
    if (action.type === SEARCH_API_REQUEST) {
        return Object.assign({}, state, {
            user: "jshaw",
            loading: true,
            error: null
        });
    }
    else if (action.type === RECEIVE_MUSIC_FROM_API) {
        return Object.assign({}, state, {
            music: action.music,
            user: "jshaw",
            loading: false,
            error: null
        });
    }
    else if (action.type === SEARCH_MUSIC_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}