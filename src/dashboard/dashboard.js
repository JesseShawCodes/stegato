import React from 'react';
import Albumrow from '../search/albumrow';


let music = {
    "resultCount":16,
    "results": [
   {"wrapperType":"artist", "artistType":"Artist", "artistName":"Deftones", "artistLinkUrl":"https://itunes.apple.com/us/artist/deftones/1092903?uo=4", "artistId":1092903, "amgArtistId":168233, "primaryGenreName":"Rock", "primaryGenreId":21}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":1092903, "collectionId":567302377, "amgArtistId":168233, "artistName":"Deftones", "collectionName":"Koi No Yokan", "collectionCensoredName":"Koi No Yokan", "artistViewUrl":"https://itunes.apple.com/us/artist/deftones/1092903?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/koi-no-yokan/567302377?uo=4", "artworkUrl60":"http://is4.mzstatic.com/image/thumb/Music/v4/0c/36/b5/0c36b56c-5f92-d64a-73d8-5bada7b2502e/source/60x60bb.jpg", "artworkUrl100":"http://is4.mzstatic.com/image/thumb/Music/v4/0c/36/b5/0c36b56c-5f92-d64a-73d8-5bada7b2502e/source/100x100bb.jpg", "collectionPrice":10.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":11, "copyright":"℗ 2012 Reprise Records", "country":"USA", "currency":"USD", "releaseDate":"2012-11-09T08:00:00Z", "primaryGenreName":"Rock"}, 
]}

console.log()

export default class Dashboardpage extends React.Component {
    render() {
        // console.log(music.results[1].artistName)
        const cards = []
        for (var i = 0; i < music.results.length; i++) {
          if (music.results[i].wrapperType !== "collection") {
            continue;
          }
          let artistKey = music.results[i].artistName;
          let albumKey = music.results[i].collectionName;
          let genreKey = music.results[i].primaryGenreName;
          let imageKey = music.results[i].artworkUrl100;
          let itunes = music.results[i].collectionViewUrl;
          cards.push(<Albumrow artist={artistKey} album={albumKey} genre={genreKey} imagelink={imageKey} buyOnItunes={itunes}/>);
        }
        console.log(cards)
      return (
        <div>
          {cards}
        </div>
      );
    }
}