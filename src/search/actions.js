import fetch from 'cross-fetch';

export const RECEIVE_MUSIC_FROM_API = 'RECEIVE_MUSIC_FROM_API';
export const SEARCH_ITUNES_REQUEST = 'SEARCH_ITUNES_REQUEST';
export const SEARCH_MUSIC_ERROR = 'SEARCH_MUSIC_ERROR';

export const searchMusicRequest = () => ({
  type: SEARCH_ITUNES_REQUEST,
});

export const searchMusicSuccess = music => ({
  type: RECEIVE_MUSIC_FROM_API,
  music,
});

export const searchMusicError = error => ({
  type: SEARCH_MUSIC_ERROR,
  error,
});

// Itunes API Links
// var itunesUrl = "https://itunes.apple.com/search?term=";
// var albumUrl = "https://itunes.apple.com/lookup?id=";

function searchItunesDatabase(name) {
  const artist = name;
  const searchTerm = artist.split(' ').join('+');
  return fetch(`http://itunes.apple.com/search?term=${searchTerm}&entity=album`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  })
  .then(function(res) {
    if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json()
    })
    .then(function(data) {
        data.results.map(music => music)
        return data.results
    })
}

function search(name) {
  return new Promise((resolve) => {
    resolve(searchItunesDatabase(name));
  });
}


export const searchItunes = name => dispatch => {
    dispatch(searchMusicRequest());
    search(name)
        .then(
                function(data) {
                    dispatch(searchMusicSuccess(data))
                }
        )
        .catch(error => dispatch(searchMusicError(error)));
};

