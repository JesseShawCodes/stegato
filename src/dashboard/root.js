import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Dashboardpage } from './dashboard';
// import Registerpage from './registerpage'
// import './signup.css';


export default class Dashboardroot extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboardpage />
      </Provider>
    )
  }
}