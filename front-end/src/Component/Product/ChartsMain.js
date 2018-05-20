import { Card, Col, Radio, Row } from "antd"
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { getProductData } from '../../utils/API'

const generateX = data => {
  let x = []
  for (const code in data) {
    for (const dayData of data[code]) {
      const date = dayData.date
      if (x.indexOf(date) === -1) {
        x.push(date)
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
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'red' // 0% 处的颜色
          }, {
            offset: 1, color: 'blue' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        },
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

class ChartsMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      option: {},
      code: props.chartsData.code,
      names: []
    }
  }

  getProductData = (title, code, names, func) => {
    getProductData(code.map(symbol => symbol + title)).then(data => {
      this.setState({
        option: option(code.map(symbol => symbol + title).join(' / '), data, names, func),
        names: names
      })
    })
  }

  componentDidMount () {
    const { chartsData } = this.props
    this.getProductData(chartsData.month[0], chartsData.code, chartsData.names, chartsData.func)
  }

  componentWillReceiveProps (nextProps) {
    const { chartsData } = nextProps
    if (chartsData.code !== this.state.code) {
      this.getProductData(chartsData.month[0], chartsData.code, chartsData.names, chartsData.func)
      this.setState({
        code: chartsData.code
      })
    }
  }


  handleMonthChange = event => {
    this.getProductData(event.target.value, ['rb', 'hc'], ['螺纹', '热卷', '螺纹 / 热卷'], (val1, val2) => {
      return val1 / val2
    })
  }

  render () {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ReactEcharts className="ChartsMain" option={this.state.option} style={{ width: '100%', height: '50%' }} />
        <Row>
          <Col span={18}>
            <Card title={this.state.names[2] ? this.state.names[2] : '读取中...'}>
              <p>选择主力月: </p>
              <Radio.Group onChange={this.handleMonthChange} defaultValue={this.props.chartsData.month[0]}>
                <Radio.Button value={this.props.chartsData.month[0]}>一月</Radio.Button>
                <Radio.Button value={this.props.chartsData.month[1]}>五月</Radio.Button>
                <Radio.Button value={this.props.chartsData.month[2]}>十月</Radio.Button>
              </Radio.Group>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="计算公式">
              <p>螺纹实时价格 / 热卷实时价格</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ChartsMain
