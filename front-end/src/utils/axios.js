import axios from 'axios'
import Store from 'store'
import NProgress from 'nprogress'
import { message } from 'antd'
import { userStore } from '../model/User'

axios.default.timeout = 3000

const resolveURL = null
let user = Store.get('user') || {}

axios.interceptors.request.use(config => {
  if (resolveURL !== null) {
    config.url = resolveURL + config.url
  }
  if (!user.api_token) {
    if (!Store.get('user')) {
      user.api_token = ''
    } else {
      user.api_token = Store.get('user').api_token
    }
  }
  config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  config.headers.common['Authorization'] = 'Bearer ' + user.api_token
  NProgress.start()
  clearInterval(window.NProgressInc)
  window.NProgressInc = setInterval(() => {
    NProgress.inc()
  }, 500)
  return config
}, error => {
  clearInterval(window.NProgressInc)
  NProgress.done()
  return Promise.reject(error)
})

axios.interceptors.response.use(data => {
  clearInterval(window.NProgressInc)
  NProgress.done()
  return data
}, error => {
  clearInterval(window.NProgressInc)
  NProgress.done()
  if (errors[error.response.status]) {
    message.error(`网络请求出现错误: ${error.response.status} ${errors[error.response.status]})`, 6)
  } else {
    message.error(`网络请求出现错误 (${error.response.status} ${error.response.statusText}), 请稍后再试`, 6)
  }

  switch (error.response.status) {
    default:
      break;
    case 421:
      window.location.assign('#/login')
      userStore.logout()
      break;
  }

  return Promise.reject(error)
})

const errors = {
  401: '权限不足, 你没有使用该功能的权限, 或请登录后重试',
  404: '你请求的功能不存在',
  421: '根据您目前的账号等级, 同一时间您的账号只能登陆一个客户端, 请退出重新登录',
  500: '服务器内部错误, 请联系客服'
}

export default axios
