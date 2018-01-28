import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import AsyncApp from './AsyncApp'
import {connect} from 'react-redux';

const store = configureStore()

export class SearchRoot extends Component {
  render() {
    console.log(this.props)
    return (
      <Provider store={store}>
        <AsyncApp user={this.props.user}/>
      </Provider>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default connect(mapStateToProps)(SearchRoot);