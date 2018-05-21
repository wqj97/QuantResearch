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

  /**
   * 获取产品数据
   * @param {Array<string>} month 月份
   * @param {Array<string>} code 产品代码
   * @param {Array<string>} names 产品名字
   * @param {Function} func 相关关系函数
   */
  getProductData = (month, code, names, func) => {
    getProductData(code.map((symbol, key) => symbol + month[key])).then(data => {
      this.setState({
        option: option(code.map((symbol, key) => symbol + month[key]).join(' / '), data, names, func),
        names: names
      })
    })
  }

  componentDidMount () {
    const { chartsData } = this.props
    const month = chartsData.month
    const contrastMonth = chartsData.custom || month

    this.getProductData([month[0], contrastMonth[0]], chartsData.code, chartsData.names, chartsData.func)
  }

  componentWillReceiveProps (nextProps) {
    const { chartsData } = nextProps
    const month = chartsData.month
    const contrastMonth = chartsData.custom || month

    if (chartsData.code !== this.state.code) {
      this.getProductData([month[0], contrastMonth[0]], chartsData.code, chartsData.names, chartsData.func)
      this.setState({
        code: chartsData.code
      })
    }
  }


  /**
   * 月份切换时操作
   * @param event
   */
  handleMonthChange = event => {
    const { chartsData } = this.props
    const month = chartsData.month
    const contrastMonth = chartsData.custom || month
    const eventValue = event.target.value

    // 当需要获取综合数据的时候的操作
    if (eventValue === 'merge') {

    } else {
      this.getProductData([month[eventValue], contrastMonth[eventValue]], chartsData.code, chartsData.names, (val1, val2) => {
        return val1 / val2
      })
    }
  }

  render () {
    const month = this.props.chartsData.month
    const contrastMonth = this.props.chartsData.custom || month
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ReactEcharts className="ChartsMain" option={this.state.option} style={{ width: '100%', height: '50%' }} />
        <Row>
          <Col span={18}>
            <Card title={this.state.names[2] ? this.state.names[2] : '读取中...'}>
              <p>选择主力月: </p>
              <Radio.Group onChange={this.handleMonthChange} defaultValue={0}>
                <Radio.Button value={0}>{month[0]} / {contrastMonth[0]}</Radio.Button>
                <Radio.Button value={1}>{month[1]} / {contrastMonth[1]}</Radio.Button>
                <Radio.Button value={2}>{month[2]} / {contrastMonth[2]}</Radio.Button>
                <Radio.Button value={'merge'}>三线合一</Radio.Button>
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
