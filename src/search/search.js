import React from 'react';
import './search.css';
import Searchresults from './searchresults';
import {reduxForm, Field} from 'redux-form';
import Input from './input';

var itunesUrl = "https://itunes.apple.com/search?term=";
var albumUrl = "https://itunes.apple.com/lookup?id=";


/*
export default function Searchsection() {
    return (
        <div className="search-section">
            <form className="musicsearch">
                <label>
                Artist
                </label>
                <input type="text" className="searchterm"></input>
                <input type="submit"></input>
            </form>
            <section id="results">
                <Searchresults />
            </section>
        </div>
    );
}
*/

export class Searchsection extends React.Component {
    constructor()  {
        super();
        this.state = {items: []}
    }

    onSubmit(values) {
        console.log(values.name);
        let result = values.name.split(' ').join('+');
        console.log(`${itunesUrl}${result}`);
            componentWillMount() {
            fetch(`${itunesUrl}${result}`)
                .then( response => response.json())
                .then (data => {})
            }
    }
    render() {
        let items = this.items.state
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
            </div>
        );
    }
}

export default reduxForm({
    form: 'search'
})(Searchsection);
