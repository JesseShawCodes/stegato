import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {} from '../actions'

class AsyncApp extends Component {
    render() {
        return (
            <h1>Testing</h1>
        )
    }
}

AsyncApp.propTypes = {

}

function mapStateToProps(state) {
    console.log("State");
}

export default connect(mapStateToProps)(AsyncApp)