import {
    DELETE_ALBUM,
    REFRESH_DASHBOARDs
} from './actions';

const initialState = {
    reloading: false
};

export default function dashboardRefresher(state=initialState, action) {
    if (action.type === DELETE_ALBUM) {
        return Object.assign({}, state, {
            reloading: false
        });
    }
    else if (action.type === REFRESH_DASHBOARDs) {
        return Object.assign({}, state, {
            reloading: true
        });
    }
    return state;
}