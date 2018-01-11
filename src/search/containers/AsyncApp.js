import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {} from '../actions'
import Searchform from '../components/Searchform'
import Results from '../components/Results'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

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

}

function mapStateToProps(state) {
    console.log("State");
}

export default connect(mapStateToProps)(AsyncApp)