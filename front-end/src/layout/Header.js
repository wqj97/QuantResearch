import { Col, Dropdown, Icon, Menu, Row } from "antd"
import PropTypes from 'prop-types'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Header.scss'


class UserDropDown extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  handleClick = e => {
    if (e.key === 'logout') {
      this.props.logout()
    } else if (e.key === 'user') {
      this.props.changeKey({ current: 'skip' })
      this.props.history.push('/user')
    }
  }

  render () {
    const { user } = this.props
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

class Header extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      current: props.history.location.pathname
    }
  }

  handleClick = e => {
    if (e.key === 'skip' || e.key === 'logo') return
    this.setState({
      current: e.key,
    })
    this.props.history.push(e.key)
  }

  handleLogout = () => {
    this.props.handleLogout()
    this.props.history.push('/login')
  }

  render () {
    const user = this.props.user
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
            <Icon type="area-chart" />量化产品
          </Menu.Item>
          <Menu.Item key="/suggest">
            <Icon type="hdd" />资讯
          </Menu.Item>
          <Menu.Item key="/school">
            <Icon type="hdd" />学院
          </Menu.Item>
          <Menu.Item key="/social">
            <Icon type="hdd" />社区
          </Menu.Item>
          <Menu.Item key={user ? 'skip' : '/login'} style={{ float: 'right', width: 120, textAlign: 'center' }}>
            <UserDropDown history={this.props.history} changeKey={this.setState.bind(this)} logout={this.handleLogout} user={user} />
          </Menu.Item>
          <Menu.Item key="/setting" style={{ float: 'right' }}>
            <Icon type="setting" />管理
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(Header)
