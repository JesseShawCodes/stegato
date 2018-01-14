import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {searchItunes} from '../actions'
// import Searchform from '../components/Searchform'
// import Results from '../components/Results'

export class AsyncApp extends React.Component {
    renderResults() {

    }

    search(e) {
        e.preventDefault();
        console.log(this.input.value)
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
            {this.renderResults()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    music: state.music,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(AsyncApp);

// export default connect(mapStateToProps)(AsyncApp)