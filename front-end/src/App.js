import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter } from 'react-router-dom'

import './App.scss'
import Header from './layout/Header'
import Main from './layout/Main'
import UserStore from './model/User'

class App extends Component {
  UserStore = new UserStore()
  
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <Header userStore={this.UserStore} />
          <Main userStore={this.UserStore} />
        </div>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
