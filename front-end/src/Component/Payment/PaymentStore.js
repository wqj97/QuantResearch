import { action, computed, observable } from 'mobx'
import { getMealList } from '../../utils/API'

class PayStore {
  @observable
  loading = false

  @observable
  list = []

  @observable
  mealAdded = []

  constructor () {
    this.getMealList();
  }

  @action.bound
  mealCountChange (meal, group, value) {
    let modifyKey = -1;
    this.mealAdded.forEach((mealItem, key) => {
      if (meal.id === mealItem.id) {
        modifyKey = key
      }
    })
    if (modifyKey !== -1) {
      this.mealAdded[modifyKey].mealAdded = value
    } else {
      const tempMeal = meal;
      meal.mealCount = value
      meal.groupName = group.name
      this.mealAdded.push(tempMeal)
    }
  }

  @computed
  get mealTotalPrice () {
    let totalPrice = 0
    this.mealAdded.forEach(meal => {
      totalPrice += meal.price * meal.mealAdded
    })
    return totalPrice || 0
  }

  @action.bound
  async getMealList () {
    this.list = await getMealList();
  }
}

export const store = new PayStore();
