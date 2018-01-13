import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {} from '../actions'
import Searchform from '../components/Searchform'
import Results from '../components/Results'

class AsyncApp extends Component {
    render() {
        return (
        <section>
            <Searchform />
            <Results />
        </section>
        )
    }
}

AsyncApp.propTypes = {
    music: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.bool
}


export default AsyncApp
// export default connect(mapStateToProps)(AsyncApp)