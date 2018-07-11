import PropTypes from 'prop-types'
import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Store from 'store'
import Home from '../Component/Home/Home'
import Laoding from '../Component/Loading'
import LoginAndSignup from '../Component/LoginAndSignup'
import User from "../Component/User/User"
import { HomeModal } from './HomeModal'
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

const Community = Loadable({
  loader: () => import('../Component/Community'),
  loading: Laoding,
})

const Building = Loadable({
  loader: () => import('../Component/Building/Building'),
  loading: Laoding,
})

const ProductIntroduction = Loadable({
  loader: () => import('../Component/ProductIntroduction'),
  loading: Laoding,
})

const Clause = Loadable({
  loader: () => import('../Component/Clause'),
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
            <Route path={'/(login|signup)'} exact
              render={() => <LoginAndSignup {...props} />} />
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
            <Route path={'/community'} {...props}
              render={() => <Community />} />
            <Route path={'/product-introduction'} {...props} exact
              render={() => <ProductIntroduction />} />
            <Route path={'/clause'} {...props} exact
              render={() => <Clause />} />
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
    this.state = {
      visible: false
    }
  }

  componentDidMount () {
    const noticeRead = Store.get('noticeRead')
    if (!noticeRead) {
      this.setState({
        visible: true
      })
    }
  }

  handleOk = () => {
    Store.set('noticeRead', true)
    this.setState({
      visible: false
    })
  }

  handleCancle = () => {
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <div className={'Main'} style={{
        paddingTop: 47,
        position: 'relative',
        height: '100vh'
      }}>
        <HomeModal visible={this.state.visible} ok={this.handleOk} cancle={this.handleCancle} />
        <Routes {...this.props} />
      </div>
    )
  }
}

export default Main
