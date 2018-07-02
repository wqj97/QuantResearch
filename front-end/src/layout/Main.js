import PropTypes from 'prop-types'
import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from '../Component/Home/Home'
import Laoding from '../Component/Loading'
import Login from '../Component/Login/Login'
import User from "../Component/User/User"


import './Main.scss'

const Product = Loadable({
  loader: () => import('../Component/Product/Product'),
  loading: Laoding,
})

const Setting = Loadable({
  loader: () => import('../Component/Setting/Setting'),
  loading: Laoding,
})

const Contact = Loadable({
  loader: () => import('../Component/Contact'),
  loading: Laoding,
})

const News = Loadable({
  loader: () => import('../Component/News'),
  loading: Laoding,
})

const JoinUs = Loadable({
  loader: () => import('../Component/JoinUs'),
  loading: Laoding,
})

const Building = Loadable({
  loader: () => import('../Component/Building/Building'),
  loading: Laoding,
})

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
            <Route path={'/'} exact
              component={Home} />
            <Route path={'/login'} exact
              render={() => <Login {...props} />} />
            <Route path={'/product'} exact
              render={() => <Product {...props} />} />
            <Route path={'/user'} exact
              render={() => <User {...props} />} />
            <Route path={'/setting'} exact
              render={() => <Setting {...props} />} />
            <Route path={'/contact'} exact
              render={() => <Contact {...props} />} />
            <Route path={'/news'} exact
              render={() => <News {...props} />} />
            <Route path={'/join-us'} exact
              render={() => <JoinUs {...props} />} />
            <Route component={Building} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  )
}

class Main extends React.Component {
  static propTypes = {
    userStore: PropTypes.any.isRequired
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
