import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Results extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => <li key={i}>{post.title}</li>)}
      </ul>
    )
  }
}

Results.propTypes = {
  posts: PropTypes.array.isRequired
}