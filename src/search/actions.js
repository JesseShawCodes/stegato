// import search from './searchfunctions'
import fetch from 'cross-fetch'

export const RECEIVE_MUSIC_FROM_API = 'RECEIVE_MUSIC_FROM_API';
export const SEARCH_ITUNES_REQUEST = 'SEARCH_ITUNES_REQUEST';

export function searchItunesRequest(searchTerm) {
    console.log("Search iTunes is running")
    console.log(`Searching for ${searchTerm}`)
    return {
      type: SEARCH_ITUNES_REQUEST,
      searchTerm
    }
}

export function receiveMusic(search, json) {
    console.log("Receiving Music from API")
    return {
      type: RECEIVE_MUSIC_FROM_API,
      search,
      posts: json.data.children.map(child => child.data)
    }
}

//Itunes API Links
var itunesUrl = "https://itunes.apple.com/search?term=";
var albumUrl = "https://itunes.apple.com/lookup?id=";

function _search(name) {
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong');
    }
    let artist = name;
    let searchTerm = artist.split(' ').join('+');
    fetch(`${itunesUrl}${searchTerm}`).then(function (response){
        console.log(response)
        return response.json();
    })
    .then(function (json){
        for (var i = 0; i < json.results.length; i++) {
          if (json.results[i].artistName === artist) {
            let artistId = json.results[i].artistId
            fetch(`${albumUrl}${artistId}&entity=album`).then(function(res) {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json()
            }).then(
                function(data) {
                    console.log(data.results)
                    let music = data.results;

                }
            )
          }
          break
        }
    });
}

export function search(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_search(name)), 500);
    });
}

export const searchItunes = name => dispatch => {
    console.log(name)
};

