import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PropTypes from 'prop-types'
import Building from "../Component/Building/Building";

import Home from '../Component/Home/Home'
import Login from '../Component/Login/Login'
import Product from '../Component/Product/Product'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import User from "../Component/User/User"

import './Main.scss'

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
            <Route path={'/public'} exact
              component={Home} />
            <Route path={'/public/login'}
              render={() => <Login {...props} />} />
            <Route path={'/public/product'}
              render={() => <Product {...props} />} />
            <Route path={'/public/user'}
              render={() => <User {...props} />} />
            <Route component={Building} />
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
        height: '100vh'
      }}>
        <Routes {...this.props} />
      </div>
    )
  }
}

export default Main
