import React, { Component } from 'react'
import {connect} from 'react-redux';
import {searchItunes} from '../actions'

export class Searchform extends React.Component {
    constructor(props) {
        super(props)
    }


    search(e) {
        e.preventDefault();
        if (this.input.value.trim() === '') {
            return;
        }
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    music: state.music,
    loading: state.loading,
    error: state.error
});

export default Searchform
