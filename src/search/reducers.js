import {
    RECEIVE_MUSIC_FROM_API,
    SEARCH_ITUNES_REQUEST,
    SEARCH_MUSIC_ERROR
} from './actions';

const initialState = {
    music: [],
    loading: false,
    error: null
};

export default function musicReducer(state=initialState, action) {
    if (action.type === SEARCH_ITUNES_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === RECEIVE_MUSIC_FROM_API) {
        return Object.assign({}, state, {
            music: action.music,
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
