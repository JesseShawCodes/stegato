import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {store} from '../../store'
import AsyncApp from './AsyncApp'

const store = store()

export default class SearchRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}