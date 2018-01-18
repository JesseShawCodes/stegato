import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Loginpage from './loginpage'
import './login.css';


export default class Loginroot extends Component {
  render() {
    return (
      <Provider store={store}>
        <Loginpage />
      </Provider>
    )
  }
}