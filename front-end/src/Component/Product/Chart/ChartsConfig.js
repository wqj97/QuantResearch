import { getProductConfig } from '../../../utils/API'

/**
 * 计算公式工厂函数
 * @param {Number} unit1 产品1单位
 * @param {Number} unit2 产品2单位
 * @return {{product1: (function(*, *, *): string), product2: (function(*, *, *): string)}}
 */
const commonCalculateAlgorithm = (unit1, unit2) => {
  return {
    product1: (value, deposit, amount) => {
      return (100 * amount / (value * deposit * unit1 * 2)).toFixed(2)
    },
    product2: (value, deposit, amount) => {
      return (100 * amount / (value * deposit * unit2 * 2)).toFixed(2)
    }
  }
}

const periodFunc = (val1, val2) => {
  return val1 / val2
}

const products = {
  // '螺纹/热卷': {
  //   stableCoefficient: 64,
  //   code: ['rb', 'hc'],
  //   names: ['螺纹', '热卷', '螺纹 / 热卷'],
  //   month: ['1901', '1905', '1810'],
  //   openPosition: [0.91, 1.1],
  //   calculateFunc: commonCalculateAlgorithm(10, 10),
  //   func: periodFunc
  // },
  // '螺纹/焦炭': {
  //   stableCoefficient: 14,
  //   code: ['rb', 'j'],
  //   names: ['螺纹', '焦炭', '螺纹 / 焦炭'],
  //   month: ['1901', '1905', '1810'],
  //   custom: ['1901', '1905', '1809'],
  //   openPosition: [1.7, 2.1],
  //   calculateFunc: commonCalculateAlgorithm(10, 100),
  //   func: periodFunc
  // },
  // '热卷/焦炭': {
  //   stableCoefficient: 14,
  //   code: ['hc', 'j'],
  //   names: ['热卷', '焦炭', '热卷 / 焦炭'],
  //   month: ['1901', '1905', '1810'],
  //   custom: ['1901', '1905', '1809'],
  //   openPosition: [1.78, 2.25],
  //   calculateFunc: commonCalculateAlgorithm(10, 100),
  //   func: periodFunc
  // },
  // '螺纹/铁矿石': {
  //   stableCoefficient: 6,
  //   code: ['rb', 'i'],
  //   names: ['螺纹', '铁矿石', '螺纹 / 铁矿石'],
  //   month: ['1901', '1905', '1810'],
  //   custom: ['1901', '1905', '1809'],
  //   openPosition: [6.67, 8.33],
  //   calculateFunc: commonCalculateAlgorithm(10, 100),
  //   func: periodFunc
  // },
  // '焦煤/焦炭': {
  //   stableCoefficient: 50,
  //   code: ['jm', 'j'],
  //   names: ['焦煤', '焦炭', '焦煤 / 焦炭'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.6, 0.7],
  //   calculateFunc: commonCalculateAlgorithm(60, 100),
  //   func: periodFunc
  // },
  // '玻璃/螺纹': {
  //   stableCoefficient: 59,
  //   code: ['FG', 'rb'],
  //   names: ['玻璃', '螺纹', '玻璃 / 螺纹'],
  //   month: ['1901', '1905', '1809'],
  //   custom: ['1901', '1905', '1810'],
  //   openPosition: [0.36, 0.47],
  //   calculateFunc: commonCalculateAlgorithm(20, 10),
  //   func: periodFunc
  // },
  // '玻璃/热卷': {
  //   stableCoefficient: 59,
  //   code: ['FG', 'hc'],
  //   names: ['玻璃', '热卷', '玻璃 / 热卷'],
  //   month: ['1901', '1905', '1809'],
  //   custom: ['1901', '1905', '1810'],
  //   openPosition: [0.34, 0.45],
  //   calculateFunc: commonCalculateAlgorithm(20, 10),
  //   func: periodFunc
  // },
  // '玻璃/焦煤': {
  //   stableCoefficient: 22,
  //   code: ['FG', 'jm'],
  //   names: ['玻璃', '焦煤', '玻璃 / 焦煤'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.97, 1.2],
  //   calculateFunc: commonCalculateAlgorithm(20, 60),
  //   func: periodFunc
  // },
  // '玻璃/焦炭': {
  //   stableCoefficient: 22,
  //   code: ['jm', 'j'],
  //   names: ['玻璃', '焦炭', '玻璃 / 焦炭'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.65, 0.95],
  //   calculateFunc: commonCalculateAlgorithm(20, 100),
  //   func: periodFunc
  // },
  // '焦炭/动力煤': {
  //   stableCoefficient: 16,
  //   code: ['jm', 'ZC'],
  //   names: ['焦炭', '动力煤', '焦炭 / 动力煤'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [1.8, 2.4],
  //   calculateFunc: commonCalculateAlgorithm(100, 100),
  //   func: periodFunc
  // },
  // '螺纹/焦煤': {
  //   stableCoefficient: 11,
  //   code: ['rb', 'jm'],
  //   names: ['螺纹', '焦煤', '螺纹 / 焦煤'],
  //   month: ['1901', '1905', '1810'],
  //   custom: ['1901', '1905', '1809'],
  //   openPosition: [2.7, 3.2],
  //   calculateFunc: commonCalculateAlgorithm(10, 60),
  //   func: periodFunc
  // },
  // '玻璃/动力煤': {
  //   stableCoefficient: 11,
  //   code: ['FG', 'ZC'],
  //   names: ['玻璃', '动力煤', '玻璃 / 动力煤'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [2.1, 2.5],
  //   calculateFunc: commonCalculateAlgorithm(20, 100),
  //   func: periodFunc
  // },
  // '热卷/动力煤': {
  //   stableCoefficient: 7,
  //   code: ['hc', 'ZC'],
  //   names: ['热卷', '动力煤', '热卷 / 动力煤'],
  //   month: ['1901', '1905', '1810'],
  //   custom: ['1901', '1905', '1809'],
  //   openPosition: [5.26, 6.5],
  //   calculateFunc: commonCalculateAlgorithm(10, 100),
  //   func: periodFunc
  // },
  // '热卷/焦煤': {
  //   stableCoefficient: 6,
  //   code: ['hc', 'jm'],
  //   names: ['热卷', '焦煤', '热卷 / 焦煤'],
  //   month: ['1901', '1905', '1810'],
  //   custom: ['1901', '1905', '1809'],
  //   openPosition: [2.5, 3.5],
  //   calculateFunc: commonCalculateAlgorithm(10, 60),
  //   func: periodFunc
  // },
  // '玻璃/铁矿石': {
  //   stableCoefficient: 14,
  //   code: ['FG', 'i'],
  //   names: ['玻璃', '铁矿石', '玻璃 / 铁矿石'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [2.1, 3.0],
  //   calculateFunc: commonCalculateAlgorithm(20, 100),
  //   func: periodFunc
  // },
  // '菜籽粕/菜籽油': {
  //   stableCoefficient: 83,
  //   code: ['RM', 'OI'],
  //   names: ['菜籽粕', '菜籽油', '菜籽粕 / 菜籽油'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.32, 0.39],
  //   calculateFunc: commonCalculateAlgorithm(10, 10),
  //   func: periodFunc
  // },
  // '菜籽油/豆油': {
  //   stableCoefficient: 83,
  //   code: ['RM', 'y'],
  //   names: ['菜籽油', '豆油', '菜籽油 / 豆油'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [1.05, 1.15],
  //   calculateFunc: commonCalculateAlgorithm(10, 10),
  //   func: periodFunc
  // },
  // '豆粕/豆油': {
  //   stableCoefficient: 59,
  //   code: ['m', 'y'],
  //   names: ['豆粕', '豆油', '豆粕 / 豆油'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.42, 0.52],
  //   calculateFunc: commonCalculateAlgorithm(10, 10),
  //   func: periodFunc
  // },
  // '豆粕/菜籽油': {
  //   stableCoefficient: 53,
  //   code: ['m', 'RM'],
  //   names: ['豆粕', '菜籽油', '豆粕 / 菜籽油'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [1.30, 1.92],
  //   calculateFunc: commonCalculateAlgorithm(10, 10),
  //   func: periodFunc
  // },
  // '棕榈油/豆油': {
  //   stableCoefficient: 56,
  //   code: ['p', 'y'],
  //   names: ['棕榈油', '豆油', '棕榈油 / 豆油'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.81, 0.91],
  //   calculateFunc: commonCalculateAlgorithm(10, 10),
  //   func: periodFunc
  // },
  // '棕榈油/菜籽油': {
  //   stableCoefficient: 56,
  //   code: ['p', 'RM'],
  //   names: ['棕榈油', '菜籽油', '棕榈油 / 菜籽油'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.78, 0.9],
  //   calculateFunc: commonCalculateAlgorithm(10, 10),
  //   func: periodFunc
  // },
  // '鸡蛋/菜籽粕': {
  //   stableCoefficient: 25,
  //   code: ['jd', 'RM'],
  //   names: ['鸡蛋', '菜籽粕', '鸡蛋 / 菜籽粕'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [1.4, 1.9],
  //   calculateFunc: commonCalculateAlgorithm(5, 10),
  //   func: periodFunc
  // },
  // '鸡蛋/豆粕': {
  //   stableCoefficient: 50,
  //   code: ['jd', 'm'],
  //   names: ['鸡蛋', '豆粕', '鸡蛋 / 豆粕'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [1.11, 1.6],
  //   calculateFunc: commonCalculateAlgorithm(5, 10),
  //   func: periodFunc
  // },
  // '玉米/玉米淀粉': {
  //   stableCoefficient: 0,
  //   code: ['c', 'cs'],
  //   names: ['玉米', '玉米淀粉', '玉米 / 玉米淀粉'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.8, 0.87],
  //   calculateFunc: commonCalculateAlgorithm(10, 10),
  //   func: periodFunc
  // },
  // '鸡蛋/玉米': {
  //   stableCoefficient: 25,
  //   code: ['jd', 'c'],
  //   names: ['鸡蛋', '玉米', '鸡蛋 / 玉米'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [2.1, 2.5],
  //   calculateFunc: commonCalculateAlgorithm(5, 10),
  //   func: periodFunc
  // },
  // '甲醇/动力煤': {
  //   stableCoefficient: 4,
  //   code: ['MA', 'ZC'],
  //   names: ['甲醇', '动力煤', '甲醇 / 动力煤'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [4.05, 5.5],
  //   calculateFunc: commonCalculateAlgorithm(10, 100),
  //   func: periodFunc
  // },
  // '塑料/PTA': {
  //   stableCoefficient: 30,
  //   code: ['I', 'TA'],
  //   names: ['塑料', 'PTA', '塑料 / PTA'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [4.05, 5.5],
  //   calculateFunc: commonCalculateAlgorithm(5, 5),
  //   func: periodFunc
  // },
  // '甲醇/塑料': {
  //   stableCoefficient: 111,
  //   code: ['MA', 'I'],
  //   names: ['甲醇', '塑料', '甲醇 / 塑料'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.26, 0.3],
  //   calculateFunc: commonCalculateAlgorithm(10, 5),
  //   func: periodFunc
  // },
  // '甲醇/聚丙烯': {
  //   stableCoefficient: 143,
  //   code: ['MA', 'PP'],
  //   names: ['甲醇', '聚丙烯', '甲醇 / 聚丙烯'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.28, 0.32],
  //   calculateFunc: commonCalculateAlgorithm(10, 5),
  //   func: periodFunc
  // },
  // '甲醇/PTA': {
  //   stableCoefficient: 30,
  //   code: ['MA', 'TA'],
  //   names: ['甲醇', 'PTA', '甲醇 / PTA'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.43, 0.53],
  //   calculateFunc: commonCalculateAlgorithm(10, 5),
  //   func: periodFunc
  // },
  // '甲醇/聚氯乙烯': {
  //   stableCoefficient: 59,
  //   code: ['MA', 'v'],
  //   names: ['甲醇', '聚氯乙烯', '甲醇 / 聚氯乙烯'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.35, 0.45],
  //   calculateFunc: commonCalculateAlgorithm(10, 5),
  //   func: periodFunc
  // },
  // '甲醇/焦煤': {
  //   stableCoefficient: 9,
  //   code: ['MA', 'jm'],
  //   names: ['甲醇', '焦煤', '甲醇 / 焦煤'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [2, 2.5],
  //   calculateFunc: commonCalculateAlgorithm(10, 60),
  //   func: periodFunc
  // },
  // '甲醇/焦碳': {
  //   stableCoefficient: 9,
  //   code: ['MA', 'j'],
  //   names: ['甲醇', '焦碳', '甲醇 / 焦碳'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [1.29, 2],
  //   calculateFunc: commonCalculateAlgorithm(10, 100),
  //   func: periodFunc
  // },
  // '塑料/聚丙烯': {
  //   stableCoefficient: 59,
  //   code: ['I', 'pp'],
  //   names: ['甲醇', '聚丙烯', '甲醇 / 聚丙烯'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [1, 1.2],
  //   calculateFunc: commonCalculateAlgorithm(10, 5),
  //   func: periodFunc
  // },
  // '塑料/聚氯乙烯': {
  //   stableCoefficient: 0,
  //   code: ['I', 'v'],
  //   names: ['甲醇', '聚氯乙烯', '甲醇 / 聚氯乙烯'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [1.4, 1.6],
  //   calculateFunc: commonCalculateAlgorithm(5, 5),
  //   func: periodFunc
  // },
  // 'PTA/聚丙烯': {
  //   stableCoefficient: 53,
  //   code: ['TA', 'pp'],
  //   names: ['PTA', '聚丙烯', 'PTA / 聚丙烯'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.55, 0.7],
  //   calculateFunc: commonCalculateAlgorithm(5, 5),
  //   func: periodFunc
  // },
  // '聚氯乙烯/聚丙烯': {
  //   stableCoefficient: 45,
  //   code: ['v', 'pp'],
  //   names: ['聚氯乙烯', '聚丙烯', '聚氯乙烯 / 聚丙烯'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [0.7, 0.85],
  //   calculateFunc: commonCalculateAlgorithm(5, 5),
  //   func: periodFunc
  // },
  // '聚氯乙烯/PTA': {
  //   stableCoefficient: 30,
  //   code: ['v', 'TA'],
  //   names: ['聚氯乙烯', '聚丙烯', '聚氯乙烯 / 聚丙烯'],
  //   month: ['1901', '1905', '1809'],
  //   openPosition: [1.1, 1.3],
  //   calculateFunc: commonCalculateAlgorithm(5, 5),
  //   func: periodFunc
  // }
}

/**
 * 获取产品数据
 * @param productName
 * @return {Promise<*>}
 */
export const getConfig = async productName => {
  // if (products[productName]) {
  //   return products[productName]
  // } else {
  //   return await getProductConfig(productName).then(data => {
  //     data.calculateFunc = commonCalculateAlgorithm(data.unit[0], data.unit[1])
  //     data.func = periodFunc
  //     return data
  //   })
  // }
  return await getProductConfig(productName).then(data => {
    data.calculateFunc = commonCalculateAlgorithm(data.unit[0], data.unit[1])
    data.func = periodFunc
    return data
  })
}
