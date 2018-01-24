import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {store} from '../../store'
import Registerpage from './registerpage'
import './signup.css';


export default class Registerroot extends Component {
  render() {
    return (
      <Provider store={store}>
        <Registerpage />
      </Provider>
    )
  }
}