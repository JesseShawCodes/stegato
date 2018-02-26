import {RECEIVE_MUSIC_FROM_API, SEARCH_ITUNES_REQUEST, SEARCH_MUSIC_ERROR, searchMusicRequest, searchMusicSuccess, searchMusicError} from './actions'

describe('searchMusicRequest', () => {
    it('Should return the action', () => {
        const searchTerm = 'Deftones';
        const action = searchMusicRequest(searchTerm);
        expect(action.type).toEqual(SEARCH_ITUNES_REQUEST);
    });
});


describe('searchMusicSuccess', () => {
    it('Should return the action', () => {
        const searchTerm = 'Deftones';
        const music = searchTerm;
        const error = undefined;
        const action = searchMusicSuccess(searchTerm);
        expect(action.type).toEqual(RECEIVE_MUSIC_FROM_API);
    });
});

describe('searchMusicError', () => {
    it('Should return the action', () => {
        const searchTerm = 'Deftones';
        const music = searchTerm;
        const error = undefined;
        const action = searchMusicError(searchTerm);
        expect(action.type).toEqual(SEARCH_MUSIC_ERROR);
    });
});


