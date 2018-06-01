const commonCalculateAlgorithm = {
  product1: (value, deposit, amount) => {
    return (amount / (value * deposit * 0.2)).toFixed(2)
  },
  product2: (value, deposit, amount) => {
    return (amount / (value * deposit * 0.2)).toFixed(2)
  }
}

const products = {
  '螺纹/热卷': {
    stableCoefficient: 64,
    code: ['rb', 'hc'],
    names: ['螺纹', '热卷', '螺纹 / 热卷'],
    month: ['1901', '1905', '1810'],
    openPosition: [0.91, 1.1],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '螺纹/焦炭': {
    stableCoefficient: 14,
    code: ['rb', 'j'],
    names: ['螺纹', '焦炭', '螺纹 / 焦炭'],
    month: ['1901', '1905', '1810'],
    custom: ['1901', '1905', '1809'],
    openPosition: [1.7, 2.1],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '热卷/焦炭': {
    stableCoefficient: 14,
    code: ['hc', 'j'],
    names: ['热卷', '焦炭', '热卷 / 焦炭'],
    month: ['1901', '1905', '1810'],
    custom: ['1901', '1905', '1809'],
    openPosition: [1.78, 2.25],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '螺纹/铁矿石': {
    stableCoefficient: 6,
    code: ['rb', 'i'],
    names: ['螺纹', '铁矿石', '螺纹 / 铁矿石'],
    month: ['1901', '1905', '1810'],
    custom: ['1901', '1905', '1809'],
    openPosition: [6.67, 8.33],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '焦煤/焦炭': {
    stableCoefficient: 50,
    code: ['jm', 'j'],
    names: ['焦煤', '焦炭', '焦煤 / 焦炭'],
    month: ['1901', '1905', '1809'],
    openPosition: [0.6, 0.7],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '玻璃/螺纹': {
    stableCoefficient: 59,
    code: ['FG', 'rb'],
    names: ['玻璃', '螺纹', '玻璃 / 螺纹'],
    month: ['1901', '1905', '1809'],
    custom: ['1901', '1905', '1810'],
    openPosition: [0.36, 0.47],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '玻璃/热卷': {
    stableCoefficient: 59,
    code: ['FG', 'hc'],
    names: ['玻璃', '热卷', '玻璃 / 热卷'],
    month: ['1901', '1905', '1809'],
    custom: ['1901', '1905', '1810'],
    openPosition: [0.34, 0.45],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '玻璃/焦煤': {
    stableCoefficient: 59,
    code: ['FG', 'jm'],
    names: ['玻璃', '焦煤', '玻璃 / 焦煤'],
    month: ['1901', '1905', '1809'],
    openPosition: [0.97, 1.2],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '玻璃/焦炭': {
    stableCoefficient: 59,
    code: ['jm', 'j'],
    names: ['玻璃', '焦炭', '玻璃 / 焦炭'],
    month: ['1901', '1905', '1809'],
    openPosition: [0.65, 0.95],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '焦炭/动力煤': {
    stableCoefficient: 59,
    code: ['jm', 'ZC'],
    names: ['焦炭', '动力煤', '焦炭 / 动力煤'],
    month: ['1901', '1905', '1809'],
    openPosition: [1.8, 2.4],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '螺纹/焦煤': {
    stableCoefficient: 6,
    code: ['rb', 'jm'],
    names: ['螺纹', '焦煤', '螺纹 / 焦煤'],
    month: ['1901', '1905', '1810'],
    custom: ['1901', '1905', '1809'],
    openPosition: [2.7, 3.2],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '玻璃/动力煤': {
    stableCoefficient: 6,
    code: ['FG', 'ZC'],
    names: ['玻璃', '动力煤', '玻璃 / 动力煤'],
    month: ['1901', '1905', '1809'],
    openPosition: [2.1, 2.5],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '热卷/动力煤': {
    stableCoefficient: 6,
    code: ['hc', 'ZC'],
    names: ['热卷', '动力煤', '热卷 / 动力煤'],
    month: ['1901', '1905', '1810'],
    custom: ['1901', '1905', '1809'],
    openPosition: [5.26, 6.5],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '热卷/焦煤': {
    stableCoefficient: 6,
    code: ['hc', 'jm'],
    names: ['热卷', '焦煤', '热卷 / 焦煤'],
    month: ['1901', '1905', '1810'],
    custom: ['1901', '1905', '1809'],
    openPosition: [2.5, 3.5],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '玻璃/铁矿石': {
    stableCoefficient: 6,
    code: ['FG', 'i'],
    names: ['玻璃', '铁矿石', '玻璃 / 铁矿石'],
    month: ['1901', '1905', '1809'],
    openPosition: [2.1, 3.0],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '菜籽粕/菜籽油': {
    stableCoefficient: 6,
    code: ['RM', 'OI'],
    names: ['菜籽粕', '菜籽油', '菜籽粕 / 菜籽油'],
    month: ['1901', '1905', '1809'],
    openPosition: [0.32, 0.39],
    calculateFunc: commonCalculateAlgorithm,
    func: (val1, val2) => {
      return val1 / val2
    }
  },
}


export const getConfig = productName => {
  if (products[productName]) {
    return products[productName]
  } else {
    throw new RangeError('这个产品不存在')
  }
}
