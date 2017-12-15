import React from 'react';
import './search.css';
import AlbumRow from './albumrow'

const glassjaw = {
    "resultCount":9,
    "results": [
   {"wrapperType":"artist", "artistType":"Artist", "artistName":"Glassjaw", "artistLinkUrl":"https://itunes.apple.com/us/artist/glassjaw/799089?uo=4", "artistId":799089, "amgArtistId":429002, "primaryGenreName":"Rock", "primaryGenreId":21}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":799089, "collectionId":1313067233, "amgArtistId":429002, "artistName":"Glassjaw", "collectionName":"Material Control", "collectionCensoredName":"Material Control", "artistViewUrl":"https://itunes.apple.com/us/artist/glassjaw/799089?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/material-control/1313067233?uo=4", "artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music118/v4/41/e4/3a/41e43ae7-201f-8597-cf49-b6217d554766/source/60x60bb.jpg", "artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music118/v4/41/e4/3a/41e43ae7-201f-8597-cf49-b6217d554766/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":12, "copyright":"℗ 2017 Globochem Music, Inc., under exclusive license to The Century Family, Inc.", "country":"USA", "currency":"USD", "releaseDate":"2017-12-01T08:00:00Z", "primaryGenreName":"Rock"}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":799089, "collectionId":410149778, "amgArtistId":429002, "artistName":"Glassjaw", "collectionName":"Our Color Green (The Singles) - EP", "collectionCensoredName":"Our Color Green (The Singles) - EP", "artistViewUrl":"https://itunes.apple.com/us/artist/glassjaw/799089?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/our-color-green-the-singles-ep/410149778?uo=4", "artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/ae/f9/97/aef9970e-7031-6f03-45d2-a12c0d81383e/source/60x60bb.jpg", "artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/ae/f9/97/aef9970e-7031-6f03-45d2-a12c0d81383e/source/100x100bb.jpg", "collectionPrice":4.95, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":5, "copyright":"℗ 2011 a major label", "country":"USA", "currency":"USD", "releaseDate":"2011-01-01T08:00:00Z", "primaryGenreName":"Alternative"}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":799089, "collectionId":299546238, "amgArtistId":429002, "artistName":"Glassjaw", "collectionName":"Worship and Tribute", "collectionCensoredName":"Worship and Tribute", "artistViewUrl":"https://itunes.apple.com/us/artist/glassjaw/799089?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/worship-and-tribute/299546238?uo=4", "artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/ba/cd/46/bacd4616-3d4a-bcf5-1522-5b1c66c2e9fb/source/60x60bb.jpg", "artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/ba/cd/46/bacd4616-3d4a-bcf5-1522-5b1c66c2e9fb/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":11, "copyright":"℗ 2002 Warner Bros. Records Inc. for the U.S. and WEA International Inc. for the world outside of the U.S.", "country":"USA", "currency":"USD", "releaseDate":"2002-07-09T07:00:00Z", "primaryGenreName":"Rock"}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":799089, "collectionId":81858801, "amgArtistId":429002, "artistName":"Glassjaw", "collectionName":"El Mark - EP", "collectionCensoredName":"El Mark - EP", "artistViewUrl":"https://itunes.apple.com/us/artist/glassjaw/799089?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/el-mark-ep/81858801?uo=4", "artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/17/18/59/1718597d-5ea9-2837-a9fd-1ae4beaecad1/source/60x60bb.jpg", "artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/17/18/59/1718597d-5ea9-2837-a9fd-1ae4beaecad1/source/100x100bb.jpg", "collectionPrice":2.97, "collectionExplicitness":"notExplicit", "trackCount":3, "copyright":"℗ 2005 Warner Bros. Records Inc. for the U.S. and WEA International Inc. for the world outside the U.S.", "country":"USA", "currency":"USD", "releaseDate":"2005-09-02T07:00:00Z", "primaryGenreName":"Rock"}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":799089, "collectionId":214475208, "amgArtistId":429002, "artistName":"Glassjaw", "collectionName":"Everything You Ever Wanted to Know About Silence", "collectionCensoredName":"Everything You Ever Wanted to Know About Silence", "artistViewUrl":"https://itunes.apple.com/us/artist/glassjaw/799089?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/everything-you-ever-wanted-to-know-about-silence/214475208?uo=4", "artworkUrl60":"http://is2.mzstatic.com/image/thumb/Music/v4/d1/1d/bf/d11dbfda-9513-a99d-5025-4c96936c8e7d/source/60x60bb.jpg", "artworkUrl100":"http://is2.mzstatic.com/image/thumb/Music/v4/d1/1d/bf/d11dbfda-9513-a99d-5025-4c96936c8e7d/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":12, "copyright":"℗ 2000 The All Blacks U.S.A.", "country":"USA", "currency":"USD", "releaseDate":"2000-05-01T07:00:00Z", "primaryGenreName":"Rock"}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":799089, "collectionId":307597407, "amgArtistId":429002, "artistName":"Glassjaw", "collectionName":"Everything You Ever Wanted to Know About Silence (Remastered)", "collectionCensoredName":"Everything You Ever Wanted to Know About Silence (Remastered)", "artistViewUrl":"https://itunes.apple.com/us/artist/glassjaw/799089?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/everything-you-ever-wanted-to-know-about-silence-remastered/307597407?uo=4", "artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/54/a1/af/54a1afcd-ea9d-a79c-74f1-495826150d07/source/60x60bb.jpg", "artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/54/a1/af/54a1afcd-ea9d-a79c-74f1-495826150d07/source/100x100bb.jpg", "collectionPrice":11.99, "collectionExplicitness":"explicit", "contentAdvisoryRating":"Explicit", "trackCount":14, 
   "copyright":"℗ 2000, 2009 The All Blacks U.S.A., Inc. Issued under license to Roadrunner Records from The All Blacks U.S.A., Inc. Roadrunner Records is a registered trademark of The All Blacks B.V.", "country":"USA", "currency":"USD", "releaseDate":"2000-05-01T07:00:00Z", "primaryGenreName":"Rock"}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":72771901, "collectionId":679399198, "amgArtistId":1003758, "artistName":"Black Mesa & Glassjaw", "collectionName":"4-20 Thoughts - Single", "collectionCensoredName":"4-20 Thoughts - Single", "artistViewUrl":"https://itunes.apple.com/us/artist/black-mesa/72771901?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/4-20-thoughts-single/679399198?uo=4", "artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music/v4/bc/e4/72/bce47215-e6a7-8899-d721-5e87eb54a3c7/source/60x60bb.jpg", "artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music/v4/bc/e4/72/bce47215-e6a7-8899-d721-5e87eb54a3c7/source/100x100bb.jpg", "collectionPrice":0.99, "collectionExplicitness":"notExplicit", "trackCount":1, "copyright":"℗ 2013 Synergetic Records", "country":"USA", "currency":"USD", "releaseDate":"2013-08-02T07:00:00Z", "primaryGenreName":"Trance"}, 
   {"wrapperType":"collection", "collectionType":"Album", "artistId":72771901, "collectionId":1121797029, "amgArtistId":1003758, "artistName":"Black Mesa, Glassjaw & Genetrick", "collectionName":"Black Mesa Works - Single", "collectionCensoredName":"Black Mesa Works - Single", "artistViewUrl":"https://itunes.apple.com/us/artist/black-mesa/72771901?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/black-mesa-works-single/1121797029?uo=4", "artworkUrl60":"http://is3.mzstatic.com/image/thumb/Music18/v4/73/5d/62/735d62dd-2d45-63fc-6116-d7710258ea23/source/60x60bb.jpg", "artworkUrl100":"http://is3.mzstatic.com/image/thumb/Music18/v4/73/5d/62/735d62dd-2d45-63fc-6116-d7710258ea23/source/100x100bb.jpg", "collectionPrice":1.99, "collectionExplicitness":"notExplicit", "trackCount":3, "copyright":"℗ Planet B.E.N. Records", "country":"USA", "currency":"USD", "releaseDate":"2016-07-07T07:00:00Z", "primaryGenreName":"Trance"}]
}

export default class Searchresults extends React.Component {
    constructor(props)  {
        super(props);
        /*
        this.state = {
            cards: [{
                artist: glassjaw.results[1].artistName,
                album: glassjaw.results[1].collectionName,
                genre: glassjaw.results[1].primaryGenreName
            }, {
                artist: glassjaw.results[2].artistName,
                album: glassjaw.results[2].collectionName,
                genre: glassjaw.results[2].primaryGenreName                
            }, {
                artist: glassjaw.results[3].artistName,
                album: glassjaw.results[3].collectionName,
                genre: glassjaw.results[3].primaryGenreName                
            }, glassjaw.results[4]]
        }
        */
        this.state = {
            cards: [glassjaw.results[1], glassjaw.results[2], glassjaw.results[3]]
        }
        console.log(this.state.cards[1].artistName);
    }

    render() {
        const cards = this.state.cards.map((card, index) =>
            <AlbumRow key={index} {...card} />
        );
        return (
            <div className="card-block">
                <h3>{this.state.cards.artistName}</h3>
                <h3>{this.state.cards.collectionName}</h3>
                <p>{this.state.cards.primaryGenreName}</p>
                {cards}
            </div>
        );
    }
}

Searchresults.defaultProps = {
    title: ''
};

console.log(glassjaw);


