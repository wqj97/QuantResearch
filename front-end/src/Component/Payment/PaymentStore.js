import { action, observable, computed } from 'mobx'

class PayStore {
  @observable
  loading = false

  @observable
  list = [
    {
      id: 1,
      title: '月付套餐',
      price: 1000,
      content: '①螺纹/热卷②螺纹/焦炭③热卷/焦炭④螺纹/铁矿石⑤焦煤/焦炭⑥玻璃/螺纹⑦玻璃/热卷⑧焦炭/动力煤⑨玻璃/焦炭⑩玻璃/动力煤⑪玻璃/焦煤⑫螺纹/焦煤⑬热卷/动力煤⑭热卷/焦煤⑮玻璃/铁矿石',
      client: 1,
      notify: true,
      emergentNotify: true
    },
    {
      id: 2,
      title: '季付套餐',
      price: 2700,
      content: '①螺纹/热卷②螺纹/焦炭③热卷/焦炭④螺纹/铁矿石⑤焦煤/焦炭⑥玻璃/螺纹⑦玻璃/热卷⑧焦炭/动力煤⑨玻璃/焦炭⑩玻璃/动力煤⑪玻璃/焦煤⑫螺纹/焦煤⑬热卷/动力煤⑭热卷/焦煤⑮玻璃/铁矿石',
      client: 3,
      notify: true,
      emergentNotify: true
    },
    {
      id: 3,
      title: '年付套餐',
      price: 10000,
      content: '①螺纹/热卷②螺纹/焦炭③热卷/焦炭④螺纹/铁矿石⑤焦煤/焦炭⑥玻璃/螺纹⑦玻璃/热卷⑧焦炭/动力煤⑨玻璃/焦炭⑩玻璃/动力煤⑪玻璃/焦煤⑫螺纹/焦煤⑬热卷/动力煤⑭热卷/焦煤⑮玻璃/铁矿石',
      client: 10,
      notify: true,
      emergentNotify: true
    },
    {
      id: 4,
      title: '月付套餐',
      price: 1000,
      content: '①菜籽粕/菜籽油②菜籽油/豆油③豆粕/豆油④棕榈油/菜籽油⑤棕榈油/豆油⑥鸡蛋/菜籽粕⑦鸡蛋/豆粕⑧玉米/玉米淀粉⑨鸡蛋/玉米',
      client: 1,
      notify: true,
      emergentNotify: true
    },
    {
      id: 5,
      title: '季付套餐',
      price: 2700,
      content: '①菜籽粕/菜籽油②菜籽油/豆油③豆粕/豆油④棕榈油/菜籽油⑤棕榈油/豆油⑥鸡蛋/菜籽粕⑦鸡蛋/豆粕⑧玉米/玉米淀粉⑨鸡蛋/玉米',
      client: 3,
      notify: true,
      emergentNotify: true
    },
    {
      id: 6,
      title: '年付套餐',
      price: 10000,
      content: '①菜籽粕/菜籽油②菜籽油/豆油③豆粕/豆油④棕榈油/菜籽油⑤棕榈油/豆油⑥鸡蛋/菜籽粕⑦鸡蛋/豆粕⑧玉米/玉米淀粉⑨鸡蛋/玉米',
      client: 10,
      notify: true,
      emergentNotify: true
    },
    {
      id: 7,
      title: '月付套餐',
      price: 1000,
      content: '①甲醇/动力煤②塑料/PTA③甲醇/塑料④甲醇/聚丙烯⑤甲醇/PTA⑥甲醇/聚氯乙烯⑦甲醇/焦煤⑧甲醇/焦炭⑨塑料/聚丙烯⑩塑料/聚氯乙烯⑪PTA/聚丙烯⑫聚氯乙烯/聚丙烯⑬聚氯乙烯/PTA',
      client: 1,
      notify: true,
      emergentNotify: true
    },
    {
      id: 8,
      title: '季付套餐',
      price: 2700,
      content: '①甲醇/动力煤②塑料/PTA③甲醇/塑料④甲醇/聚丙烯⑤甲醇/PTA⑥甲醇/聚氯乙烯⑦甲醇/焦煤⑧甲醇/焦炭⑨塑料/聚丙烯⑩塑料/聚氯乙烯⑪PTA/聚丙烯⑫聚氯乙烯/聚丙烯⑬聚氯乙烯/PTA',
      client: 3,
      notify: true,
      emergentNotify: true
    },
    {
      id: 9,
      title: '年付套餐',
      price: 10000,
      content: '①甲醇/动力煤②塑料/PTA③甲醇/塑料④甲醇/聚丙烯⑤甲醇/PTA⑥甲醇/聚氯乙烯⑦甲醇/焦煤⑧甲醇/焦炭⑨塑料/聚丙烯⑩塑料/聚氯乙烯⑪PTA/聚丙烯⑫聚氯乙烯/聚丙烯⑬聚氯乙烯/PTA',
      client: 3,
      notify: true,
      emergentNotify: true
    }
  ]

  @observable
  mealCount = []

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
}

export const store = new PayStore();
