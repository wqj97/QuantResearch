import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { getProductData } from '../../utils/API'

const generateX = data => {
  let x = []
  for (let symbolArray of data) {
    const symbol = symbolArray.symbol.slice(2)
    if (x.indexOf(symbol) === -1) {
      x.push(symbol)
    }
  }
  x = x.sort()
  return x
}

const generateData = data => {
  const product = {}
  for (let symbolArray of data) {
    // 判断键是否存在
    let symbol = symbolArray.symbol.slice(0, 2)
    if (symbol in product) {
      product[symbol] = product[symbol].concat(symbolArray)
    } else {
      product[symbol] = [].concat(symbolArray)
    }
  }
  // 返回两个数组
  const output = []
  for (let key in product) {
    let keyArray = []
    const productDataArray = product[key]
    for (let data of productDataArray) {
      keyArray.push([data.symbol.slice(2), data.avg])
    }
    output.push(keyArray)
  }
  return output
}

const generateSeries = (data, names) => {
  const dataHasGenerated = generateData(data)
  console.log(dataHasGenerated)
  return dataHasGenerated.map((data, key) => {
    return {
      name: names[key],
      type: 'line',
      data: data,
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1
        }
      }
    }
  })
}

const option = (data, names) => ({
  backgroundColor: '#21202D',
  legend: {
    data: names,
    inactiveColor: '#777',
    textStyle: {
      color: '#fff'
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
    data: generateX(data),
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
    }
  }, {
    type: 'inside'
  }],
  animation: false,
  series: generateSeries(data, names)
})

class ChartsMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      option: option([])
    }
  }

  componentDidMount () {
    getProductData().then(data => {
      data = data.sort((data1, data2) => {
        return data1.symbol > data2.symbol ? 1 : -1
      })
      console.log(data)
      this.setState({
        option: option(data, ['hc', 'rb'])
      })
    })
  }


  render () {
    return (
      <ReactEcharts className="ChartsMain" option={this.state.option} style={{ width: '100%', height: '50%' }} />
    )
  }
}

export default ChartsMain
