import {
    REFRESH_DASHBOARD
} from './actions';

const initialState = {
    reloading: false
};

function dashboardRefresher(state, action) {
    if (action.type === REFRESH_DASHBOARD) {
        return Object.assign({}, state, {
            reloading: true
        });
    }
    return state;
}

export default dashboardRefresher