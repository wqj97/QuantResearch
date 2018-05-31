import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PropTypes from 'prop-types'

import Home from '../Component/Home/Home'
import Login from '../Component/Login/Login'
import Product from '../Component/Product/Product'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import User from "../Component/User/User"

const Routes = props => {
  return (
    <Route render={({ location }) => (
      <TransitionGroup style={{ width: '100%', height: '100%' }}>
        <CSSTransition
          key={location.key}
          classNames={'fade'}
          timeout={500}
        >
          <Switch className="Main" location={location}>
            <Route path={'/home'}
              component={Home} />
            <Route path={'/login'}
              render={() => <Login {...props} />} />
            <Route path={'/product'}
              render={() => <Product {...props} />} />
            <Route path={'/user'}
              render={() => <User {...props} />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  )
}

class Main extends React.Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {}
  }


  render () {
    return (
      <div className={'Main'} style={{
        paddingTop: 47,
        position: 'relative',
        height: '100vh',
      }}>
        <Routes {...this.props} />
      </div>
    )
  }
}

export default Main
