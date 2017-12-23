import {search} from './star-wars';

export const SEARCH_ITUNES = 'SEARCH_ITUNES';
export const search = () => ({
    type: SEARCH_ITUNES
});


export const SEARCH_ITUNES_SUCCESS = 'SEARCH_ITUNES_SUCCESS';
export const searchCharactersSuccess = albums => ({
    type: SEARCH_ITUNES_SUCCESS,
    albums
});

export const SEARCH_ITUNES_ERROR = 'SEARCH_ITUNES_ERROR';
export const searchCharactersError = error => ({
    type: SEARCH_ITUNES_ERROR,
    error
});


