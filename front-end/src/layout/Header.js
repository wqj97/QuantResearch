import { Col, Dropdown, Icon, Menu, Row } from "antd"
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class UserDropDown extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  handleClick = e => {
    if (e.key === 'logout') {
      this.props.logout()
    }
  }

  render () {
    const { user } = this.props
    if (user && user.name) {
      const menu = (
        <Menu style={{ width: 250 }} onClick={this.handleClick}>
          <Menu.Item>
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
      current: '/home'
    }
  }

  handleClick = e => {
    if (e.key === 'skip') return
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
          <Menu.Item key="/home">
            <Icon type="home" />首页
          </Menu.Item>
          <Menu.Item key="/product">
            <Icon type="area-chart" />量化产品
          </Menu.Item>
          <Menu.Item key="/suggest">
            <Icon type="hdd" />咨询
          </Menu.Item>
          <Menu.Item key="/school">
            <Icon type="hdd" />学院
          </Menu.Item>
          <Menu.Item key="/social">
            <Icon type="hdd" />社区
          </Menu.Item>
          <Menu.Item key={user ? 'skip' : '/login'} style={{ float: 'right', width: 120, textAlign: 'center' }}>
            <UserDropDown logout={this.handleLogout} user={user} />
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(Header)
