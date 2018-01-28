import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import './login.css';
import Login from './login'


export default class Loginroot extends Component {
  render() {
    return (
        <Login />
    )
  }
}