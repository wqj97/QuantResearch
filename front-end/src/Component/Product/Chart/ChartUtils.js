const generateX = data => {
  let x = []
  if(data[Object.keys(data)[0]][0].time) {
    for (const code in data) {
      for (const dayData of data[code]) {
        const datetime = dayData.date + dayData.time
        if (x.indexOf(datetime) === -1) {
          x.push(datetime)
        }
      }
    }
  } else  {
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

const generateSeries = (data, names, xAxis, func) => {
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

  series.push({
    name: names[2],
    type: 'line',
    data: dataProceeded[2],
    smooth: true,
    showSymbol: false,
    markArea: {
      itemStyle: {
        color: 'rgba(0, 0, 0, 0.3)'
      },
      data: [[
        {
          name: '开仓区域',
          yAxis: 0.9,
          xAxis: 'min',
        },
        {
          yAxis: 1,
          xAxis: 'max',
        }
      ],
        [
          {
            name: '开仓区域',
            yAxis: 1.1,
            xAxis: 'min',
          },
          {
            yAxis: 1.2,
            xAxis: 'max',
          }
        ]]
    },
    lineStyle: {
      normal: {
        width: 2,
      },

    }
  })
  return series

}

const option = (title, data, names, func) => {
  const xAxis = generateX(data)
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
      data: names,
      inactiveColor: '#777',
      textStyle: {
        color: '#fff'
      },
      selected: {
        [names[0]]: false,
        [names[1]]: false,
        [names[2]]: true,
      }
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
      data: xAxis,
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
    series: generateSeries(data, names, xAxis, func)
  }
}

const optionMerge = (title, data, names, func) => {
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
      selected: nameDisplay
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
      data: xAxis,
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
    series: series
  }
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

export {
  option,
  optionMerge,
  liveOption
}
