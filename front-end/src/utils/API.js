import axios from './axios'
import store from 'store'

/**
 * 登录
 * @param {Object} data 登录表单
 * @return {Promise<*>}
 * @constructor
 */
export const Login = async (data) => {
  const resp = await axios.post('/api/user', data)
  store.set('user', resp.data)
  return resp.data
}

/**
 * 获取产品日数据
 * @param {Array<string>} code JSON序列号后的产品代码数组
 * @return {Promise<*>}
 */
export const getProductDayData = async (code) => {
  const resp = await axios.get('/api/data', {
    params: {
      code: JSON.stringify(code)
    }
  })
  return resp.data
}

/**
 * 连接试试数据
 * @param cb
 * @return {Promise}
 */
export const liveData = cb => {
  return new Promise((res, rej) => {
    {
      const ws = new WebSocket('ws://127.0.0.1:5000')
      ws.onmessage = data => {
        cb(JSON.parse(data.data))
      }
      ws.onerror = () => {
        rej('连接失败')
      }
      ws.onopen = () => {
        res(ws.close.bind(ws))
      }
    }
  })
}

/**
 * 获取用户当前产品的配置
 * @param {Array<string>} code
 * @param name
 * @param {Object} newConfig
 * @return {Promise<*>}
 */
export const syncUserProductConfig = async (code, name, newConfig = null) => {
  let resp
  if (newConfig) {
    // TODO: 测试
    resp = await axios.patch('/api/user/productConfig', {
      config: newConfig,
      name: name,
      code: JSON.stringify(code)
    })
  } else {
    resp = await axios.get('/api/user/productConfig', {
      params: {
        code: JSON.stringify(code),
        name: name
      }
    })
  }

  return resp.data
}

/**
 * 获取用户自选列表
 * @return {Promise<*>}
 */
export const getSelfSelectedList = async () => {
  const resp = await axios.get('/api/user/selfSelected')
  return resp.data
}
