import { Badge, Button, Card, Col, InputNumber, Radio, Row, Checkbox } from "antd"
import ReactEcharts from 'echarts-for-react'
import React from 'react'
import { getProductDayData, liveData, syncUserProductConfig } from '../../utils/API'
import { option, optionMerge } from './Chart/ChartUtils'
import { debounce } from 'lodash'

const CardTitle = props => (
  <div>开仓指导窗口 ( 右侧设置保证金 )
    <InputNumber
      style={{ float: 'right', width: 200 }}
      value={props.amount}
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
      min={8}
      formatter={value => `${props.productName}保证金 ${value} %`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(new RegExp(props.productName + '保证金\\s?|(,*).?%', 'g'), '')}
      onChange={props.onDepositChange}
    />
  </div>
)

const LivingStatus = props => {
  if (props.live) {
    return (<Badge status="success" text={'实时数据连接成功'} />)
  } else if (props.live === null) {
    return (<Badge status="processing" text={'实时数据连接中...'} />)
  } else {
    return (<Badge status="default" text={'实时数据连接失败'} />)
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
      config: {
        amount: 100000,
        deposit: 8,
        selfSelected: false
      },
      name: `${props.chartsData.names[0]}/${props.chartsData.names[1]}`,
      names: [],
      short: false,
      monthQuery: false,
      latestData: {},
      loading: true
    }
    this.syncConfigDebonced = debounce(this.syncConfig, 1000)
  }

  componentDidMount () {
    const { chartsData } = this.props
    const month = chartsData.product1_month
    const contrastMonth = chartsData.product2_month

    this.getAndParseProductData([month[0], contrastMonth[0]], chartsData)
    this.middleLine = (this.props.chartsData.openPosition[0] + this.props.chartsData.openPosition[1]) / 2
  }

  componentWillReceiveProps (nextProps) {
    const { chartsData } = nextProps
    const month = chartsData.product1_month
    const contrastMonth = chartsData.product2_month

    if (chartsData.code !== this.state.code) {
      this.getAndParseProductData([month[0], contrastMonth[0]], chartsData)
      this.setState({
        code: chartsData.code,
        name: `${chartsData.names[0]}/${chartsData.names[1]}`,
      })
      this.middleLine = (this.props.chartsData.openPosition[0] + this.props.chartsData.openPosition[1]) / 2
      if (this.closews) {
        this.closews()
      }
      this.connectLiveData()
    }
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return Boolean(nextState.config)
  }


  /**
   * 获取产品数据
   * @param {Array<string>} month 月份
   * @param {Object} chartsData 传入的产品参数
   * @param {Boolean} refresh 刷新
   */
  getAndParseProductData = (month, chartsData, refresh = null) => {
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
    this.setState({
      monthQuery: monthQuery
    })
    getProductDayData(monthQuery, refresh).then(data => {
      let option_generated
      if (monthQuery.length === 2) {
        option_generated = option(chartsTitle, data, names, func, openPosition)
      } else {
        option_generated = optionMerge(chartsTitle, data, names, func)
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
      this.syncConfig()
      this.connectLiveData()
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
    const month = chartsData.product1_month
    const contrastMonth = chartsData.product2_month
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
    this.setState({
      queryMonth: queryMonth
    })
    this.getAndParseProductData(queryMonth, chartsData)
  }

  /**
   * 保证金设置
   * @param value
   */
  depositChange = value => {
    const config = this.state.config
    config.deposit = value
    this.setState({
      config: config
    })
    this.syncConfigDebonced(config)
  }

  /**
   * 想做金额设置
   * @param value
   */
  amountChange = value => {
    const config = this.state.config
    config.amount = value
    this.setState({
      config: config
    })
    this.syncConfigDebonced(config)
  }

  /**
   * 手动刷新数据
   * TODO: 还需要完善后端
   */
  refreshData = () => {
    const { chartsData } = this.props
    const month = chartsData.product1_month
    const contrastMonth = chartsData.product2_month

    this.getAndParseProductData([month[0], contrastMonth[0]], chartsData, true)
  }

  /**
   * 连接实时数据
   */
  connectLiveData = () => {
    if (this.closews) {
      this.closews()
    }
    this.setState({
      live: null
    })
    const latestData = this.state.latestData
    let flag = false
    let latestDataKeys = Object.keys(latestData)
    liveData(data => {
      const option = this.state.option
      if (!option.series) return

      latestData[data.symbol] = (data.high + data.low) / 2
      if (!flag) {
        latestDataKeys = Object.keys(latestData)
        if (latestDataKeys.length === 2) {
          flag = true
        }
      }
      const contract = (latestData[latestDataKeys[0]] / latestData[latestDataKeys[1]]).toFixed(2)
      option.series[2].markLine.data[0].yAxis = contract
      this.setState({
        option: option,
        short: contract > this.middleLine,
        latestData: latestData
      })
    }, this.state.monthQuery).then(ws => {
      this.closews = ws
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
    if (this.closews) {
      this.closews()
    }
  }


  changeCharts = event => {
  }

  /**
   * 计算交易手
   * @return {*}
   */
  calculateboardLot = () => {
    if (!this.state.config) return
    const { calculateFunc } = this.props.chartsData
    if (this.symbol[0] === '' || this.state.latestData[this.symbol[0]] === undefined) return {}
    const product1 = this.state.latestData[this.symbol[0]]
    const product2 = this.state.latestData[this.symbol[1]]
    return {
      [this.symbol[0]]: calculateFunc.product1(product1, this.state.config.deposit, this.state.config.amount),
      [this.symbol[1]]: calculateFunc.product2(product2, this.state.config.deposit, this.state.config.amount)
    }
  }

  syncConfig = (data = null) => {
    if (!this.state.monthQuery || this.state.monthQuery.length !== 2) {
      return
    }
    syncUserProductConfig(this.state.monthQuery, this.state.name, data).then(resp => {
      this.setState({
        config: resp.config
      })
    })
  }

  toggleSelect = event => {
    const config = this.state.config
    config.selfSelected = Boolean(event.target.checked)
    this.syncConfig(config)
    this.props.onToggleSelected(event.target.checked)
  }

  render () {
    const { names } = this.props.chartsData
    const month = this.props.chartsData.product1_month
    const contrastMonth = this.props.chartsData.product2_month
    const calculateResult = this.calculateboardLot()
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ReactEcharts className="ChartsMain"
          notMerge={true}
          option={this.state.option}
          style={{ width: '100%', height: '75%' }} />
        <Row>
          <Col span={14}>
            <Card title={this.state.names[2] ? (<span>{this.state.names[2]} <LivingStatus live={this.state.live} /></span>) :
              (<span>读取中... <LivingStatus live={this.state.live} /></span>)}>
              <p>计算公式: {this.state.names[0]}实时价格 / {this.state.names[1]}实时价格</p>
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
                </Radio.Group>
              </div>
            </Card>
          </Col>
          <Col span={10}>
            <Card title="操作面板">
              <Row type={'flex'} align={'middle'} justify={'space-around'}>
                <Checkbox checkedChildren="自选"
                  unCheckedChildren="非自选"
                  checked={this.state.config.selfSelected}
                  onChange={this.toggleSelect}>自选</Checkbox>
                <Button type="primary" shape="circle" icon="sync" loading={this.state.loading} onClick={this.refreshData} />
              </Row>
            </Card>
          </Col>
        </Row>
        {this.state.monthQuery.length === 2 ? (
          <Card title={<CardTitle
            productName={names[0]}
            amount={this.state.config.amount}
            deposit={this.state.config.deposit}
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
        ) : null}
      </div>
    )
  }
}

export default ChartsMain
