import React, { Component } from 'react'
import { Dashboardpage } from './dashboard';
import {connect} from 'react-redux';
import requiresLogin from '../auth/requires-login';
// import configureStore from '../store'

// const store = configureStore()

export class Dashboardroot extends Component {
  render() {
    return (
        <Dashboardpage username={this.props.username} />
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboardroot));
