const products = {
  '螺纹/热卷': {
    stableCoefficient: 64,
    code: ['rb', 'hc'],
    names: ['螺纹', '热卷', '螺纹 / 热卷'],
    month: ['1901', '1905', '1810'],
    openPosition: [0.91, 1.1],
    calculateFunc: {
      product1: (value, deposit, amount) => {
        return amount / (value * deposit * 0.2)
      },
      product2: (value, deposit, amount) => {
        return amount / (value * deposit * 0.2)
      }
    },
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
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '焦煤/焦炭': {
    stableCoefficient: 50,
    code: ['jm', 'j'],
    names: ['焦煤', '焦炭', '焦煤 / 焦炭'],
    month: ['1901', '1905', '1809'],
    func: (val1, val2) => {
      return val1 / val2
    }
  },
  '玻璃/螺纹': {
    stableCoefficient: 59,
    code: ['jm', 'rb'],
    names: ['玻璃', '螺纹', '玻璃 / 螺纹'],
    month: ['1901', '1905', '1809'],
    custom: ['1901', '1905', '1810'],
    func: (val1, val2) => {
      return val1 / val2
    }
  }
}


export const getConfig = productName => {
  if (products[productName]) {
    return products[productName]
  } else {
    throw new RangeError('这个产品不存在')
  }
}
