import { Badge, Button, Card, Col, InputNumber, Radio, Row } from "antd"
import ReactEcharts from 'echarts-for-react'
import React from 'react'
import { getProductDayData, liveData } from '../../utils/API'
import { option, optionMerge } from './Chart/ChartUtils'

const CardTitle = props => (
  <div>开仓指导窗口 ( 右侧设置保证金 )
    <InputNumber
      style={{ float: 'right', width: 200 }}
      value={props.expectedAmount}
      step={5000}
      min={100000}
      formatter={value => `想做金额 ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/想做金额\s?|(,*)/g, '')}
      onChange={props.onAmountChange}
    />
    <InputNumber
      style={{ float: 'right', width: 200 }}
      value={props.deposit}
      step={1}
      min={0}
      formatter={value => `保证金 ${value} %`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/保证金\s?|(,*) %/g, '')}
      onChange={props.onDepositChange}
    />
  </div>
)

const LivingStatus = props => {
  if (props.live) {
    return (<Badge status="success"  text={'实时数据连接成功'}/>)
  } else {
    return (<Badge status="default"  text={'实时数据连接失败'}/>)
  }
}

class ChartsMain extends React.Component {
  constructor (props) {
    super(props)
    this.symbol = ['', '']
    this.state = {
      option: {},
      live: false,
      code: props.chartsData.code,
      deposit: props.user.deposit,
      expectedAmount: 100000,
      names: [],
      short: false,
      latestData: {},     // TODO: 优化latestData
      loading: true
    }
  }

  componentDidMount () {
    const { chartsData } = this.props
    const month = chartsData.month
    const contrastMonth = chartsData.custom || month

    this.getAndParseProductData([month[0], contrastMonth[0]], chartsData)
    this.middleLine = (this.props.chartsData.openPosition[0] + this.props.chartsData.openPosition[1]) / 2
  }

  componentWillReceiveProps (nextProps) {
    const { chartsData } = nextProps
    const month = chartsData.month
    const contrastMonth = chartsData.custom || month

    if (chartsData.code !== this.state.code) {
      this.getAndParseProductData([month[0], contrastMonth[0]], chartsData)
      this.setState({
        code: chartsData.code
      })
    }
  }

  // shouldComponentUpdate (nextProps, nextState, nextContext) {
  //   if (nextProps.chartsData.code === this.state.code){
  //     return false
  //   }
  //   return true
  // }


  /**
   * 获取产品数据
   * @param {Array<string>} month 月份
   * @param {Object} chartsData 传入的产品参数
   */
  getAndParseProductData = (month, chartsData) => {
    // 当需要三线合一的时候, 月份不为2个
    this.setState({
      loading: true,
    })

    const { code, names, func, openPosition } = chartsData

    let monthQuery, chartsTitle

    if (month.length !== 2) {
      chartsTitle = '三线合一'
      monthQuery = []
      month.month.forEach((val, monthKey) => {
        code.forEach((code, key) => {
          const monthCode = key % 2 ? month.contrastMonth[monthKey] : val
          monthQuery.push(`${code}${monthCode}`)
        })
      })
    } else {
      this.symbol = code.map((symbol, key) => symbol + month[key])
      chartsTitle = this.symbol.join(' / ')
      monthQuery = this.symbol
    }

    // TODO: option传markArea
    getProductDayData(monthQuery).then(data => {
      let option_generated
      if (monthQuery.length === 2) {
        option_generated = option(chartsTitle, data, names, func, openPosition)
      } else {
        option_generated = optionMerge(chartsTitle, data, names, func, openPosition)
      }
      const latestData = {
        [monthQuery[0]]: option_generated.series[0].data[option_generated.series[0].data.length - 1].toFixed(2),
        [monthQuery[1]]: option_generated.series[1].data[option_generated.series[1].data.length - 1].toFixed(2)
      }
      this.setState({
        option: option_generated,
        names: names,
        latestData: latestData,
        loading: false
      })
    }).catch(err => {
      console.dir(err)
      this.setState({
        loading: false
      })
    })
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
    let queryMonth
    if (eventValue === 'merge') {
      queryMonth = {
        month: month,
        contrastMonth: contrastMonth
      }
    } else {
      queryMonth = [month[eventValue], contrastMonth[eventValue]]
    }

    this.getAndParseProductData(queryMonth, chartsData)
  }

  depositChange = value => {
    this.setState({
      deposit: value
    })
  }
  amountChange = value => {
    this.setState({
      expectedAmount: value
    })
  }

  refreshData = () => {
    const { chartsData } = this.props
    const month = chartsData.month
    const contrastMonth = chartsData.custom || month

    this.getAndParseProductData([month[0], contrastMonth[0]], chartsData)
    this.setState({
      code: chartsData.code
    })
  }

  connectLiveData = () => {
    const latestData = {}
    let flag = false
    let latestDataKeys = Object.keys(latestData)
    liveData(data => {
      const option = this.state.option
      if (!option.series) return

      latestData[data.symbol] = data.close.toFixed(2)
      if (!flag) {
        latestDataKeys = Object.keys(latestData)
        if (latestDataKeys.length === 2) {
          flag = true
        } else {
          return
        }
      }
      const contract = latestData[latestDataKeys[0]].close / latestData[latestDataKeys[1]].close
      option.series[2].markLine.data[0].yAxis = contract
      this.setState({
        option: option,
        short: contract > this.middleLine,
        latestData: latestData
      })
    }).then(ws => {
      this.closews = ws
      console.log(ws)
      this.setState({
        live: true
      })
    }).catch(() => {
      this.setState({
        live: false
      })
    })
  }

  componentWillUnmount () {
    this.closews()
  }


  changeCharts = event => {
  }

  calculateboardLot = () => {
    const { calculateFunc } = this.props.chartsData
    if (this.symbol[0] === '' || this.state.latestData[this.symbol[0]] === undefined) return {}
    const product1 = this.state.latestData[this.symbol[0]]
    const product2 = this.state.latestData[this.symbol[1]]

    return {
      [this.symbol[0]]: calculateFunc.product1(product1, this.state.deposit, this.state.expectedAmount),
      [this.symbol[1]]: calculateFunc.product2(product2, this.state.deposit, this.state.expectedAmount)
    }
  }

  render () {
    const month = this.props.chartsData.month
    const contrastMonth = this.props.chartsData.custom || month
    const calculateResult = this.calculateboardLot()
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ReactEcharts className="ChartsMain"
          onChartReady={this.connectLiveData}
          notMerge={false}
          option={this.state.option}
          style={{ width: '100%', height: '50%' }} />
        <Row>
          <Col span={14}>
            <Card title={this.state.names[2] ? (<span>{this.state.names[2]} <LivingStatus live={this.state.live}/></span>) :
              (<span>读取中... <LivingStatus live={this.state.live}/></span>)}>
              <p>计算公式: 螺纹实时价格 / 热卷实时价格</p>
              <div style={{ margin: '15px 0' }}>
                选择主力月: <Radio.Group onChange={this.handleMonthChange} defaultValue={0}>
                <Radio.Button value={0}>{month[0]} / {contrastMonth[0]}</Radio.Button>
                <Radio.Button value={1}>{month[1]} / {contrastMonth[1]}</Radio.Button>
                <Radio.Button value={2}>{month[2]} / {contrastMonth[2]}</Radio.Button>
                <Radio.Button value={'merge'}>三线合一</Radio.Button>
              </Radio.Group>
              </div>
              <div>
                选择数据类型:
                <Radio.Group onChange={this.changeCharts} defaultValue={0}>
                  <Radio.Button value={0}>日线</Radio.Button>
                  <Radio.Button value={1}>分钟线</Radio.Button>
                </Radio.Group>
              </div>
            </Card>
          </Col>
          <Col span={10}>
            <Card title="操作面板">
              <Button.Group>
                <Button type="primary" icon="heart">添加到自选</Button>
                <Button type="primary" icon="sync" loading={this.state.loading} onClick={this.refreshData}>立即更新数据</Button>
              </Button.Group>
            </Card>
          </Col>
        </Row>
        <Card title={<CardTitle expectedAmount={this.state.expectedAmount}
          deposit={this.state.deposit}
          onDepositChange={this.depositChange}
          onAmountChange={this.amountChange} />} style={{ marginTop: 15 }}>
          <p>稳定系数: {this.props.chartsData.stableCoefficient}</p>
          <div>
          </div>
          <Row style={{ marginTop: 15 }}>
            <Col span={12}>
              <Card title={this.props.chartsData.names[0]}>
                <p>方向: {!this.state.short ? '做多' : '做空'}</p>
                <p>实时: {this.state.latestData[this.symbol[0]]}</p>
                <p>数量: {calculateResult[this.symbol[0]]} 手</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={this.props.chartsData.names[1]}>
                <p>方向: {this.state.short ? '做多' : '做空'}</p>
                <p>实时: {this.state.latestData[this.symbol[1]]}</p>
                <p>数量: {calculateResult[this.symbol[1]]} 手</p>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default ChartsMain
