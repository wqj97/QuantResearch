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

/**
 * 计算最大回撤
 * @param {Number} unit1 分子每手吨数
 * @param {Number} unit2 分母每手吨数
 * @return {function(*, *, *, *, *): number}
 */
const drawdown = (unit1, unit2) => {
  /**
   * @param {Number} value1 分子实时价格
   * @param {Number} value2 分母实时价格
   * @param {Number} stop 止损线
   * @param {Number} openPosition1 分子产品开仓手数目
   * @param {Number} openPosition2 分母产品开仓手数目
   */
  return (value1, value2, stop, openPosition1, openPosition2) => {
    const drawdownA = ((value1 / stop) - value2) * openPosition2 * unit2
    const drawdownB = ((value2 / stop) - value1) * openPosition1 * unit1
    const A_AbsBiggerThan_B = Math.abs(drawdownA) > Math.abs(drawdownA)
    return A_AbsBiggerThan_B ? drawdownA : drawdownB
  }
}

/**
 * 跨产品对冲比值公式
 * @param val1
 * @param val2
 * @return {number}
 */
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
    data.drawdown = drawdown(data.unit[0], data.unit[1])
    return data
  })
}
