import React from 'react';

export default function Searchbar() {
    return (
        <div>
            <form className="musicsearch">
                <label>
                Artist
                </label>
                <input type="text" className="searchterm"></input>
                <input type="submit"></input>
            </form>
            <section id="results"></section>
        </div>
    );
}