const generateX = data => {
  let x = []
  if (data[Object.keys(data)[0]][0].time) {
    for (const code in data) {
      for (const dayData of data[code]) {
        const datetime = dayData.date + dayData.time
        if (x.indexOf(datetime) === -1) {
          x.push(datetime)
        }
      }
    }
  } else {
    for (const code in data) {
      for (const dayData of data[code]) {
        const date = dayData.date
        if (x.indexOf(date) === -1) {
          x.push(date)
        }
      }
    }
  }
  x = x.sort()
  return x
}

const generateData = data => {
  // 返回两个数组
  const output = []
  for (let key in data) {
    let keyArray = {}
    const productDataArray = data[key]
    for (let data of productDataArray) {
      keyArray[data.date] = data.close
    }
    output.push(keyArray)
  }
  return output
}

const generateSeries = (data, names, xAxis, func, openPosition) => {
  let dataProceeded = generateData(data)
  const month = Object.keys(data)[0].slice(-2)
  const contrastMonth = Object.keys(data)[1].slice(-2)

  // 缺项前充
  for (let product in dataProceeded) {
    product = dataProceeded[product]
    xAxis.forEach((val, key) => {
      if (!product[val]) {
        product[val] = product[Object.keys(product)[key - 1]]
      }
    })
  }

  // 求 相关关系
  const tempArray = {}

  for (let index = 0; index < xAxis.length; index++) {
    tempArray[xAxis[index]] = func(dataProceeded[0][xAxis[index]], dataProceeded[1][xAxis[index]])
  }
  dataProceeded.push(tempArray)

  dataProceeded = dataProceeded.map(data => {
    return xAxis.map(date => {
      const dataMonth = Number(date.slice(-4, -2))
      const dataDate = Number(date.slice(-2))
      if (month !== contrastMonth) {
        if (dataMonth >= Number(contrastMonth) && dataMonth <= Number(month)) {
          return NaN
        }
      } else {
        if (dataMonth === Number(month) && dataDate <= 15 && dataDate >= 1) {
          return NaN
        }
      }

      return data[date]
    })
  })

  let series = dataProceeded.slice(0, 2).map((data, key) => {
    return {
      name: names[key],
      type: 'line',
      data: data,
      smooth: true,
      showSymbol: false
    }
  })

  const newestData = dataProceeded[2][dataProceeded[2].length - 1]
  series.push({
    name: names[2],
    type: 'line',
    data: dataProceeded[2],
    smooth: false,
    showSymbol: false,
    markArea: {
      itemStyle: {
        color: 'rgba(0, 0, 0, 0.3)'
      },
      data: openPosition ? [[
        {
          name: '开仓区域',
          yAxis: openPosition[0],
          xAxis: 'min',
        },
        {
          yAxis: openPosition[1],
          xAxis: 'max',
        }
      ]] : null
    },
    markLine: {
      symbol: 'circle',
      precision: 5,
      data: [
        {
          name: '最新数据',
          yAxis: newestData
        }, {
          name: '中间线',
          yAxis: 1.005
        }
      ]
    },
    lineStyle: {
      normal: {
        width: 2,
      },

    }
  })
  return series

}

const option = (title, data, names, func, openPosition) => {
  const xAxis = generateX(data)
  const option = new OptionFactory(title)
  return option.series(generateSeries(data, names, xAxis, func))
    .xAxis(xAxis)
    .markLine()
    .markArea(openPosition)
    .legend(names)
    .get()
}

const optionMerge = (title, data, names, func, openPosition) => {
  const xAxis = generateX(data)
  let series = []
  const dataKeys = Object.keys(data)

  const nameDisplay = {}

  for (let i = 0; i < dataKeys.length; i += 2) {
    let dataObj = {
      [dataKeys[i]]: data[dataKeys[i]],
      [dataKeys[i + 1]]: data[dataKeys[i + 1]]
    }
    let namesFix = `${dataKeys[i]} / ${dataKeys[i + 1]}`
    series.push(generateSeries(dataObj, names.map((name, key) => {
      nameDisplay[`${name} (${namesFix})`] = key === 2
      return `${name} (${namesFix})`
    }), xAxis, func))
  }

  let temp = []
  series.forEach(val => {
    val.forEach(data => temp.push(data))
  })
  series = temp

  const option = new OptionFactory(title)
  return option.series(series)
    .xAxis(xAxis)
    .markLine()
    .markArea(openPosition)
    .legend(names)
    .get()
}

const liveOption = (title, data) => {
  return {
    title: {
      text: title,
      textStyle: {
        color: '#fff',
        fontSize: 24
      }
    },
    backgroundColor: '#21202D',
    legend: {
      inactiveColor: '#777',
      textStyle: {
        color: '#fff'
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false,
        type: 'cross',
        lineStyle: {
          color: '#376df4',
          width: 2,
          opacity: 1
        }
      }
    },
    xAxis: {
      type: 'category',
      axisLine: { lineStyle: { color: '#8392A5' } }
    },
    yAxis: {
      scale: true,
      axisLine: { lineStyle: { color: '#8392A5' } },
      splitLine: { show: false }
    },
    animation: false,
    series: {
      name: '实时数据',
      type: 'line',
      data: data,
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 2,
        },
      }
    }
  }
}

class OptionFactory {
  constructor (title, type='default') {
    this.type = type
    this.option = {
      title: {
        text: title,
        textStyle: {
          color: '#fff',
          fontSize: 24
        }
      },
      backgroundColor: '#21202D',
      legend: {
        data: [],
        inactiveColor: '#777',
        textStyle: {
          color: '#fff'
        },
        selected: {}
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: true,
          type: 'cross',
          lineStyle: {
            color: '#376df4',
            width: 2,
            opacity: 1
          }
        }
      },
      xAxis: {
        type: 'category',
        data: [],
        axisLine: { lineStyle: { color: '#8392A5' } }
      },
      yAxis: {
        scale: true,
        axisLine: { lineStyle: { color: '#8392A5' } },
        splitLine: { show: false }
      },
      grid: {
        bottom: 80
      },
      dataZoom: [{
        textStyle: {
          color: '#8392A5'
        },
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        dataBackground: {
          areaStyle: {
            color: '#8392A5'
          },
          lineStyle: {
            opacity: 0.8,
            color: '#8392A5'
          }
        },
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        start: 50,
        end: 100
      }, {
        type: 'inside'
      }],
      animation: false,
      series: []
    }
  }

  get () {
    return this.option
  }

  /**
   * 设置series
   * @param series
   * @return {OptionFactory}
   */
  series = series => {
    if (series.constructor === Array) {
      series.forEach(item => this.option.series.push(item))
    } else {
      this.option.series.push(series)
    }
    return this
  }

  /**
   * 设置x轴
   * @param data
   * @return {OptionFactory}
   */
  xAxis = data => {
    this.option.xAxis.data = data
    return this
  }

  /**
   * 设置选择
   * @param names
   * @return {OptionFactory}
   */
  legend = (names) => {
    this.option.legend.data = names
    this.option.legend.selected = {
      [names[0]]: false,
      [names[1]]: false,
      [names[2]]: true,
    }

    return this
  }

  /**
   * 设置实时数据
   * @param yAxis
   * @return {OptionFactory}
   */
  markLine = (yAxis = null) => {
    if (this.option.series.length !== 3) {
      throw RangeError('先调用series')
    }
    if (yAxis === null && this.option.series.length === 3) {
      yAxis = this.option.series[2].data[this.option.series[2].data.length - 1]
    }
    this.option.series[2].markLine = {
      symbol: 'circle',
      precision: 5,
      data: [
        {
          name: '最新数据',
          yAxis: yAxis
        }
      ]
    }
    return this
  }

  /**
   * 设置开仓区域
   * @param yAxis
   * @return {OptionFactory}
   */
  markArea = yAxis => {
    if (yAxis.constructor !== Array || yAxis.length !== 2) {
      throw TypeError('必须传入Array且有2个元素')
    }

    if (this.option.series.length !== 3 || typeof this.option.series[2].markLine.data[0] === 'undefined') {
      throw RangeError('先调用series和markLine')
    }

    this.option.series[2].markLine.data[1] = {
      name: '中间线',
      yAxis: (yAxis[0] + yAxis[1]) / 2
    }

    this.option.series[2].markArea = {
      itemStyle: {
        color: 'rgba(0, 0, 0, 0.3)'
      },
      data: [[
        {
          name: '开仓区域',
          yAxis: yAxis[0],
          xAxis: 'min',
        },
        {
          yAxis: yAxis[1],
          xAxis: 'max',
        }
      ]]
    }

    return this
  }
}

export {
  option,
  optionMerge,
  OptionFactory,
  liveOption
}
