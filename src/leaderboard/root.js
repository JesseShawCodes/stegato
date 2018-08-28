import React, { Component } from 'react'
import { Dashboardpage } from './dashboard';

export default class LeaderboardRoot extends Component {
  render() {
    return (
        <Dashboardpage username={this.props.username} />
    )
  }
}
