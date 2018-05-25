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
 * 获取产品分钟数据
 * @param {Array<string>} code JSON序列号后的产品代码数组
 * @return {Promise<*>}
 */
export const getProductMinuteData = async (code) => {
  const resp = await axios.get('/api/data/minute', {
    params: {
      code: JSON.stringify(code)
    }
  })
  return resp.data
}
