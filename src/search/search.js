import React from 'react';
import './search.css';
import {connect} from 'react-redux';
// import Searchresults from './searchresults';
import {reduxForm, Field} from 'redux-form';
import Input from './input';
import $ from 'jquery';
import AlbumRow from './albumrow';
import Spinner from 'react-spinkit';
import {searchItunes} from './actions/actions';
import {API_BASE_URL} from './config'

var itunesUrl = "https://itunes.apple.com/search?term=";
var albumUrl = "https://itunes.apple.com/lookup?id=";
var cards = [];
var musicOutput = [];
/*
function renderIt(music) {
    if (music !== undefined) {
        return <Spinner spinnerName="circle" noFadeIn />;
    }
    musicOutput = [];
    for (var k = 0; k < music.length; k++) {
        let artistKey = music[k].artistName;
        let albumKey = music[k].collectionName;
        let genreKey = music[k].primaryGenreName;
        let imageKey = music[k].artworkUrl100;
        let itunes = music[k].collectionViewUrl;
        musicOutput.push(<AlbumRow artist={artistKey} album={albumKey} genre={genreKey} imagelink={imageKey} buyOnItunes={itunes}/>);
    }
    console.log(musicOutput);
}

export function _renderIt(music) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(renderIt(music)), 500);
    });
}

export class Searchsection extends React.Component {
    render() {
        // console.log(musicOutput);
        return (
            <div className="search-section">
            <form className="musicsearch"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label for="artist">Artist</label>
                <Field name="name" id="name" type="text" component={Input} className="searchterm" />
                <button type="submit" className="submit-artist" disabled={this.props.pristine || this.props.submitting}>Send message</button>
            </form>
            <section className="results">
                {musicOutput}
            </section>
            </div>
        );
    }
    onSubmit(values) {
        var cards = [];
        let result = values.name.split(' ').join('+');
        $.getJSON(`${itunesUrl}${result}`, function(data) {
            for (var i = 0; i < data.results.length; i++) {
                if (values === data.results[i].artistName || data.results[i].wrapperType === "track") {
                    const artistNumber = data.results[i].artistId;
                    $.getJSON(`${albumUrl}${artistNumber}&entity=album`, function(data) {
                        let music = data.results;
                        for (var j = 0; j < music.length; j++) {
                            if (music[j].wrapperType !== "collection") {
                                continue;
                            }
                            // console.dir(music[j]);
                            cards.push(music[j]);
                        }
                        // console.log(cards.length);
                        // console.log(cards);
                        renderIt(cards);
                    })
                    break;
                }
            }
        })
    }
}


const mapStateToProps = state => ({
    characters: state.characters,
    loading: state.loading,
    error: state.error
});


export default reduxForm({
    form: 'search'
})(Searchsection);
*/

export class Searchsection extends React.Component {
    /*
    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />;
        }
        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

    return (
        <ul className="character-search-results">
            Testing
        </ul>
    );

    }
    */
    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            error: null,
            loading: false
        };
    }
    search(e) {
        e.preventDefault();
        console.log("Searching...");
        console.log(this.input.value);
        fetch(`${API_BASE_URL}/board`, {
            method: 'POST',
            headers: {
                'Artist' : this.input.value
            }
        })
        if (this.input.value.trim() === '') {
            return;
        }
        console.log(this.input.value);
        this.props.dispatch(searchItunes(this.input.value));
        /*
        if (this.input.value.trim() === '') {
            return;
        }
        this.props.dispatch(searchItunes(this.input.value));
        */
    }

    render() {
            // console.log(musicOutput);
            return (
                <div className="search-section">
                <form className="musicsearch" onSubmit={(e) => this.search(e)}>
                    <label htmlFor="artist">Artist</label>
                    <input type="search" ref={input => this.input = input} />
                    <button>Search</button>
                </form>
                <section className="results">
                    {musicOutput}
                </section>
                </div>
            );
    }
}

const mapStateToProps = state => ({
    albums: state.albums,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(Searchsection);
