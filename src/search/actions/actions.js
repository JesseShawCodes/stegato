import {search} from './searchfunctions';

export const SEARCH_ITUNES_REQUEST = 'SEARCH_ITUNES_REQUEST';
export const searchItunesRequest = () => ({
    type: SEARCH_ITUNES_REQUEST
});


export const SEARCH_ITUNES_SUCCESS = 'SEARCH_ITUNES_SUCCESS';
export const searchItunesSuccess = albums => ({
    type: SEARCH_ITUNES_SUCCESS,
    albums
});

export const SEARCH_ITUNES_ERROR = 'SEARCH_ITUNES_ERROR';
export const searchItunesError = error => ({
    type: SEARCH_ITUNES_ERROR,
    error
});

export const searchItunes = name => dispatch => {
    console.log("Searching Itunes API");
    dispatch(searchItunesRequest());
    search(name)
        .then(albums => dispatch(searchItunesSuccess(albums)))
        .catch(error => dispatch(searchItunesError(error)));
};


