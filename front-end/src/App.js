import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter } from 'react-router-dom'

import Store from 'store'

import './App.scss'
import Header from './layout/Header'
import Main from './layout/Main'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: Store.get('user') || {}
    }
  }

  handleLogin = user => {
    this.setState({
      user: user
    })
  }

  handleLogout = () => {
    this.setState({
      user: {}
    })
    Store.remove('user')
  }

  render () {
    return (
      <HashRouter>
        <div className='App'>
          <Header handleLogout={this.handleLogout} user={this.state.user} />
          <Main user={this.state.user} handleLogin={this.handleLogin} />
        </div>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
