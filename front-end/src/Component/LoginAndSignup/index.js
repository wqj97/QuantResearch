import { Button, Form, Icon, Input, notification } from "antd"
import React from 'react'
import { userStore } from '../../model/User'
import { login, signup } from '../../utils/API'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import './Login.scss'

class Index extends React.Component {
  static propTypes = {
    userStore: PropTypes.any.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        login(values).then(data => {
          userStore.login(data)
          notification.success({
            description: '正在为您跳转到登录界面',
            message: '登录成功'
          })
          this.props.history.push('/user')
        }).catch(data => {
          notification.error({
            description: data.response.data,
            message: '登录出现错误: '
          })
        })
      }
    })
  }

  handleSignup = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        signup(values).then(data => {
          userStore.login(data)
          notification.success({
            description: '注册成功'
          })
          this.props.history.push('/user')
        }).catch(data => {
          notification.error({
            description: data.response.data,
            message: '注册出错: '
          })
        })
      }
    })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码必须一致');
    } else {
      callback();
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { location } = this.props.history
    const isLogin = location.pathname === '/login'
    return (
      <div className={'login-wrap'}>
        {
          isLogin ? (
            <Form onSubmit={this.handleLogin} className={'login-form'}>
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
                没有账号? <Link to="/signup">注册</Link>
              </div>
            </Form>
          ) : (
            <Form onSubmit={this.handleSignup} className={'login-form'}>
              <div className="warp-head">
                <p>注册</p>
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
                label="昵称"
              >
                {getFieldDecorator('name', {
                  rules: [{
                    required: true,
                    message: '必须输入一个昵称'
                  }]
                })(<Input placeholder="请输入一个昵称" />)}
              </Form.Item>
              <Form.Item
                label="密码"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true,
                    message: '请输入密码'
                  }]
                })(<Input type="password" placeholder="请输入密码" />)}
              </Form.Item>
              <Form.Item
                label="确认密码"
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true,
                    message: '请输出确认密码, 且与密码保持一致'
                  },
                    {
                      validator: this.compareToFirstPassword,
                    }]
                })(<Input type="password" placeholder="请输入密码" />)}
              </Form.Item>
              <Button type="primary" htmlType="submit">注册</Button>
              <div className="sign-in">
                已有账号? <Link to="/login">登录</Link>
              </div>
            </Form>
          )
        }
      </div>
    )
  }
}

export default withRouter(Form.create()(Index))

