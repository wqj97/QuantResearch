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

/**
 * 获取产品数据
 * @param productName
 * @return {Promise<*>}
 */
export const getConfig = async productName => {
  return await getProductConfig(productName).then(data => {
    data.calculateFunc = commonCalculateAlgorithm(data.unit[0], data.unit[1])
    data.func = periodFunc
    return data
  })
}
