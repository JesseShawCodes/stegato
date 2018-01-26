import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import { Dashboardpage } from './dashboard';

//Why is this function giving me an error????
const store = configureStore()

export default class Dashboardroot extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboardpage />
      </Provider>
    )
  }
}