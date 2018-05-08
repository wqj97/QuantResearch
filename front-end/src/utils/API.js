import axios from './axios'
import store from 'store'

export const Login = async (data) => {
  const resp = await axios.post('/api/user', data)
  store.set('user', resp.data)
  return resp.data
}
