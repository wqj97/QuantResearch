import { action, observable } from 'mobx'
import Store from 'store'

export default class User {

  constructor () {
    this.user = Store.get('user')
  }

  @observable user = null

  @action.bound
  login (user) {
    this.user = user
    Store.get('user', user)
  }

  @action.bound
  logout () {
    Store.remove('user')
    this.user = null
  }
}

export const userStore = new User();
