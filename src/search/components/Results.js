import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Albumrow from './albumrow'

/*
To Do:
Create a For-loop inside the render
*/

export default class Results extends Component {
  render() {
    return (
      <h1>Testing</h1>
    )
  }
}

Results.propTypes = {
  posts: PropTypes.array
}