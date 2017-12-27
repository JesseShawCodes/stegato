var itunesUrl = "https://itunes.apple.com/search?term=";
var albumUrl = "https://itunes.apple.com/lookup?id=";

function _search(name) {
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong');
    }

    console.log(name);
    return fetch(`${itunesUrl}/${name}`).then(res => {
        if (!res.ok) {
            console.log("Testing");
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(function(data) {
        console.log(data.results);
        console.log(name);
        for (var i = 0; i < data.results.length; i++) {
            if (data.results[i].artistName === name) {
                let artistNumber = data.results[i].artistId;
                console.log("it's a match");
                fetch(`${albumUrl}${artistNumber}&entity=album`).then(res => {
                    console.log(res.json());
                    // return res.json();
                }).then(data => console.log(data))
            }
            break
        }
    }   
    )  
}

export function search(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_search(name)), 500);
    });
}
