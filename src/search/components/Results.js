import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Albumrow from './albumrow'

export default class Results extends Component {
  render() {
    return (
      <ul>
        <Albumrow />
      </ul>
    )
  }
}

Results.propTypes = {
  posts: PropTypes.array.isRequired
}