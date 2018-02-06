import {
    DELETE_ALBUM,
    REFRESH_DASHBOARD
} from './actions';

const initialState = {
    reloading: false
};

function dashboardRefresher(state=initialState, action) {
    if (action.type === DELETE_ALBUM) {
        return Object.assign({}, state, {
            reloading: false
        });
    }
    else if (action.type === REFRESH_DASHBOARD) {
        return Object.assign({}, state, {
            reloading: true
        });
    }
    return state;
}

export default dashboardRefresher