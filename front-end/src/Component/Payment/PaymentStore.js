import { action, computed, observable } from 'mobx'
import { getMealList } from '../../utils/API'

class PayStore {
  @observable
  loading = false

  @observable
  list = []

  @observable
  mealCount = []

  constructor () {
    this.getMealList();
  }

  @action.bound
  mealCountChange (meal, value) {
    let modifyKey = -1;
    this.mealCount.forEach((mealItem, key) => {
      if (meal.id === mealItem.id) {
        modifyKey = key
      }
    })
    if (modifyKey !== -1) {
      this.mealCount[modifyKey].mealCount = value
    } else {
      const tempMeal = meal;
      meal.mealCount = value
      this.mealCount.push(tempMeal)
    }
  }

  @computed
  get mealTotalPrice () {
    let totalPrice = 0
    this.mealCount.forEach(meal => {
      totalPrice += meal.price * meal.mealCount
    })
    return totalPrice || 0
  }

  @action.bound
  async getMealList () {
    this.list = await getMealList();
  }
}

export const store = new PayStore();
