import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {} from '../actions'
import Searchform from '../components/Searchform'
import Results from '../components/Results'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch, searchTerm } = this.props
    }

    render() {
        return (
        <section>
            <Searchform />
            <Results props={"testing"}/>
        </section>
        )
    }
}

AsyncApp.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    console.log("State");
}

export default connect(mapStateToProps)(AsyncApp)