import React from 'react';
import './search.css';
import Searchresults from './searchresults';

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


