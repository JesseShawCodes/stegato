import React from 'react';
import './search.css';
import {connect} from 'react-redux';
// import Searchresults from './searchresults';
// import {reduxForm, Field} from 'redux-form';
// import Input from './input';
// import $ from 'jquery';
// import AlbumRow from './albumrow';
// import Spinner from 'react-spinkit';
import {searchItunes} from './actions/actions';
// import {API_BASE_URL} from './config'

/*
var itunesUrl = "https://itunes.apple.com/search?term=";
var albumUrl = "https://itunes.apple.com/lookup?id=";
var cards = [];
var musicOutput = [];
*/

export class Searchsection extends React.Component {
    renderResult() {
        const albumRerender = "Testing";
        /*
        const albumRerender = this.props.album.map((album, index) => 
            <li key={index}>album</li>
        )
        */
        console.log(this.props);

        return (
            <section className="results">
                {albumRerender}
            </section>
        );
    }

    search(e) {
        e.preventDefault();
        console.log("Searching...");
        if (this.input.value.trim() === '') {
            return;
        }
        console.log(this.input.value);
        this.props.dispatch(searchItunes(this.input.value));
    }

    render() {
            return (
                <div className="search-section">
                <form className="musicsearch" onSubmit={(e) => this.search(e)}>
                    <label htmlFor="artist">Artist</label>
                    <input type="search" ref={input => this.input = input} />
                    <button>Search</button>
                </form>
                <section className="results">
                    {this.renderResult()}
                </section>
                </div>
            );
    }
}

const mapStateToProps = state => ({
    music: state.music,
    loading: state.loading,
    error: state.error
});


export default connect(mapStateToProps)(Searchsection);
