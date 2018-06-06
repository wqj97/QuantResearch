import { Button, Form, Icon, Input } from "antd"
import React from 'react'
import { Login as login } from '../../utils/API'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import './Login.scss'

class Login extends React.Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        login(values).then(data => {
          this.props.handleLogin(data)
          this.props.history.push('/')
        })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={'login-wrap'}>
        <Form onSubmit={this.handleSubmit} className={'login-form'}>
          <div className="warp-head">
            <p>登录</p>
            <p className={'login-icon'}>
              <Icon type="github" />
              <Icon type="weibo" />
              <Icon type="wechat" />
            </p>
          </div>
          <Form.Item
            label="邮箱"
          >
            {getFieldDecorator('email', {
              rules: [{
                required: true,
                type: 'email',
                message: '必须正确的邮箱账号'
              }]
            })(<Input placeholder="请输入邮箱账号" />)}
          </Form.Item>
          <Form.Item
            label="密码"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                message: '必须输入密码'
              }]
            })(<Input type="password" placeholder="请输入密码" />)}
          </Form.Item>
          <Button type="primary" htmlType="submit">登录</Button>
          <div className="sign-in">
            没有账号? <Link to="/sign">注册</Link>
          </div>
        </Form>
      </div>
    )
  }
}

export default withRouter(Form.create()(Login))

