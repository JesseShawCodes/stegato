import React, { Component } from 'react'

export default class Searchform extends Component {
    search(e) {
        e.preventDefault()
        console.log(`Search for ${e}`)
    }

    render() {
        return (
            <div className="search-section">
            <form className="musicsearch" onSubmit={(e) => this.search(e)}>
                <label htmlFor="artist">Artist</label>
                <input type="search" ref={input => this.input = input} />
                <button>Search</button>
            </form>
            </div>
        )
    }
}