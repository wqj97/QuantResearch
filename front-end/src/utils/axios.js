import axios from 'axios'
import Store from 'store'
import NProgress from 'nprogress'
import {message} from 'antd'

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
  console.dir(error)
  message.error(`网络请求出现错误 (${error.response.status} ${error.response.statusText}), 请稍后再试`)
  return Promise.reject(error)
})

export default axios
