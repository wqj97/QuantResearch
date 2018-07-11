import { Col, Dropdown, Icon, Menu, Row } from "antd"
import PropTypes from 'prop-types'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Header.scss'
import { observer } from 'mobx-react'

class UserDropDown extends React.Component {
  static propTypes = {
    userStore: PropTypes.any.isRequired,
    history: PropTypes.object.isRequired,
    changeKey: PropTypes.func.isRequired
  }

  handleClick = e => {
    e.domEvent.stopPropagation()
    if (e.key === 'logout') {
      this.props.userStore.logout()
      this.props.history.push('/login')
    } else if (e.key === 'user') {
      this.props.changeKey({ current: 'skip' })
      this.props.history.push('/user')
    }
  }

  render () {
    const { user } = this.props.userStore
    if (user && user.name) {
      const menu = (
        <Menu style={{ width: 250 }} onClick={this.handleClick}>
          <Menu.Item key={'user'}>
            <Row type={'flex'} align={'middle'}>
              <Col span={10}>
                <img src={user.head} style={{ width: '100%', borderRadius: '100%' }} alt={'头像'} />
              </Col>
              <Col span={12} offset={2}>
                <p>{user.name}</p>
                <div>{user.roles.map(item => (item.name)).join(', ')}</div>
                <p>{user.email}</p>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key={'logout'} style={{ textAlign: 'center', color: '#ff443c' }}>
            退出
          </Menu.Item>
        </Menu>
      )
      return (
        <div>
          <Dropdown overlay={menu} placement="bottomCenter" style={{ textAlign: 'center' }}>
            <div>
              {user.name}
            </div>
          </Dropdown>
        </div>
      )
    } else {
      return (
        <Link to={'/login'}>登录</Link>
      )
    }
  }

}

@observer
class Header extends React.Component {
  static propTypes = {
    userStore: PropTypes.any.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      current: props.history.location.pathname
    }
  }

  handleClick = e => {
    if (e.key === 'skip' || e.key === 'logo' || e.key === 'wechat') return
    this.setState({
      current: e.key,
    })
    this.props.history.push(e.key)
  }

  handleLogout = () => {
    this.props.userStore.logout()
  }

  getRole = () => {
    let result = null
    const userStore = this.props.userStore
    if (userStore.user && userStore.user.roles.length) {
      result = userStore.user.roles.map(role => {
        return role.name
      })
    }
    return result
  }

  render () {
    const userStore = this.props.userStore
    const user = userStore.user
    const role = this.getRole()
    return (
      <div className="Header" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999
      }}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="/">
            <img src={require('../assets/logo-reverse.svg')} width={30} style={{ marginRight: 15 }} alt={'量研云'} />量研云
          </Menu.Item>
          <Menu.Item key="/product">
            <Icon type='area-chart' />主观策略
          </Menu.Item>
          <Menu.Item key="/product1">
            <i className="iconfont icon-keguan" />客观策略
          </Menu.Item>
          <Menu.Item key="/news">
            <i className="iconfont icon-xinwen" />量研新闻
          </Menu.Item>
          <Menu.Item key="/school">
            <i className="iconfont icon-xueyuan " />量研学院
          </Menu.Item>
          <Menu.Item key="/community">
            <i className="iconfont icon-shequ" />量研社区
          </Menu.Item>
          <Menu.Item key="/contact">
            <i className="iconfont icon-lianxiwomen" />联系我们
          </Menu.Item>
          <Menu.Item key="/join-us">
            <i className="iconfont icon-zhaopin" />加入我们
          </Menu.Item>
          <Menu.Item key={user ? '/user' : '/login'} style={{ float: 'right', width: 120, textAlign: 'center' }}>
            <UserDropDown history={this.props.history} changeKey={this.setState.bind(this)} userStore={userStore} />
          </Menu.Item>
          {role && role[0] === '管理员' ? (
            <Menu.Item key="/setting" style={{ float: 'right' }}>
              <Icon type="setting" />管理
            </Menu.Item>
          ) : null}
        </Menu>
      </div>
    )
  }
}

export default withRouter(Header)
