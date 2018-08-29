import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter } from 'react-router-dom'

import './App.scss'
import Header from './layout/Header'
import Main from './layout/Main'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <Header />
          <Main />
        </div>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
