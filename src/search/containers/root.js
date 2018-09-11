import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from '../store';
import AsyncApp from './AsyncApp';

const store = configureStore();

export class SearchRoot extends Component {
  render() {
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
  user: state.auth.currentUser,
});

export default connect(mapStateToProps)(SearchRoot);