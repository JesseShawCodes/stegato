import fetch from 'cross-fetch'
export const RECEIVE_MUSIC_FROM_API = 'RECEIVE_MUSIC_FROM_API';
export const SEARCH_ITUNES_REQUEST = 'SEARCH_ITUNES_REQUEST';
export const SEARCH_MUSIC_ERROR = 'SEARCH_MUSIC_ERROR';

export const searchMusicRequest = () => ({
    type: SEARCH_ITUNES_REQUEST
});

export const searchMusicSuccess = music => ({
    type: RECEIVE_MUSIC_FROM_API,
    music
});

export const searchMusicError = error => ({
    type: SEARCH_MUSIC_ERROR,
    error
});

//Itunes API Links
var itunesUrl = "https://itunes.apple.com/search?term=";
var albumUrl = "https://itunes.apple.com/lookup?id=";

function _search(name) {
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong. Please try your search again');
    }
    let artist = name;
    let searchTerm = artist.split(' ').join('+');
    return fetch(`
        ${itunesUrl}${searchTerm}&country=no`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "client" // no-referrer, *client
        }
    ).then(function (response){
        return response.json();
    })
    .then(function (json){
        for (var i = 0; i < json.results.length; i++) {
          if (json.results[i].artistName === artist) {
            let artistId = json.results[i].artistId
            console.log(artistId);
            return fetch(`${albumUrl}${artistId}&entity=album&country=no`).then(function(res) {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json()
            })
            .then(
                function(data) {
                    data.results.map(music => music)
                    return data.results
                }
            )
          }
          else {
              continue
          }
          // return
        }
    })
}

function search(name) {
    return new Promise((resolve, reject) => {
        resolve(_search(name))
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

