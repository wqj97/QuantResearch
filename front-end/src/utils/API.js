import axios from './axios'
import store from 'store'

/**
 * 登录
 * @param {Object} data 登录表单
 * @return {Promise<*>}
 * @constructor
 */
export const login = async (data) => {
  const resp = await axios.post('/api/user', data)
  store.set('user', resp.data)
  return resp.data
}

export const signup = async (data) => {
  const resp = await axios.post('/api/user/signup', data)
  store.set('user', resp.data)
  return resp.data
}

/**
 * 获取产品日数据
 * @param {Array<string>} code JSON序列号后的产品代码数组
 * @param refresh 是否强制刷新数据
 * @return {Promise<*>}
 */
export const getProductDayData = async (code, refresh) => {
  const resp = await axios.get('/api/data', {
    params: {
      code: JSON.stringify(code),
      refresh: refresh
    }
  })
  return resp.data
}

/**
 * 连接试试数据
 * @param cb
 * @param code
 * @return {Promise}
 */
export const liveData = (cb, code) => {
  return new Promise((res, rej) => {
    {
      const ws = new WebSocket('wss://data.lyquant.com:8888?code=' + JSON.stringify(code))
      ws.onmessage = data => {
        cb(JSON.parse(data.data))
      }
      ws.onerror = event => {
        rej('连接失败')
      }
      ws.onopen = event => {
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

/**
 * 获取产品的配置信息
 * @param names
 * @return {Promise<*>}
 */
export const getProductConfig = async names => {
  const resp = await axios.get('/api/product', {
    params: {
      names: names
    }
  })
  return resp.data
}

/**
 * 获取所有已经有的产品配置
 * @return {Promise<*>}
 */
export const getProductConfigList = async () => {
  const resp = await axios.get('/api/product/list')
  return resp.data
}

/**
 * 设置一个产品
 * @param config
 * @return {Promise<*>}
 */
export const setProductConfig = async config => {
  const resp = await axios.post('/api/product', config)
  return resp.data
}

/**
 * 删除一个产品
 * @return {Promise<*>}
 * @param {Number} id
 */
export const deleteProductConfig = async id => {
  const resp = await axios.delete('/api/product', {
    params: { id: id }
  })
  return resp.data
}

/**
 * 获取角色列表
 * @return {Promise<*>}
 */
export const getRoles = async () => {
  const resp = await axios.get('/api/user/group')
  return resp.data
}

/**
 * 获取新闻
 * @param pages
 * @return {Promise<*>}
 */
export const getNews = async (pages = 1) => {
  const resp = await axios.get('/api/news', {
    params: {
      page: pages
    }
  })
  return resp.data
}

/**
 * 获取套餐列表
 * @return {Promise<*>}
 */
export const getMealList = async () => {
  const resp = await axios.get('/api/meal')
  return resp.data
}

/**
 * 获取套餐组
 * @return {Promise<*>}
 */
export const getMealGroup = async () => {
  const resp = await axios.get('/api/meal/group')
  return resp.data
}

/**
 * 创建支付订单
 * @return {Promise<*>}
 */
export const createPayOrder = async (ids) => {
  const resp = await axios.get('/api/pay/createPayOrder', {
    params: {
      meal_ids: ids
    }
  })
  return resp.data
}
