import { Card, Col, InputNumber, Radio, Row } from "antd"
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { getProductData } from '../../utils/API'
import { option, optionMerge } from './Chart/ChartUtils'

const CardTitle = props => (
  <div>开仓指导窗口 ( 右侧设置保证金 )
    <InputNumber
      style={{ float: 'right', width: 100 }}
      defaultValue={props.defaultDeposit}
      step={10000}
      min={100000}
      formatter={value => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={props.onChange}
    />
  </div>
)

class ChartsMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      option: {},
      code: props.chartsData.code,
      deposit: props.user.deposit,
      names: []
    }
  }

  componentDidMount () {
    const { chartsData } = this.props
    const month = chartsData.month
    const contrastMonth = chartsData.custom || month

    this.getAndParseProductData([month[0], contrastMonth[0]], chartsData.code, chartsData.names, chartsData.func)
  }

  componentWillReceiveProps (nextProps) {
    const { chartsData } = nextProps
    const month = chartsData.month
    const contrastMonth = chartsData.custom || month

    if (chartsData.code !== this.state.code) {
      this.getAndParseProductData([month[0], contrastMonth[0]], chartsData.code, chartsData.names, chartsData.func)
      this.setState({
        code: chartsData.code
      })
    }
  }


  /**
   * 获取产品数据
   * @param {Array<string>} month 月份
   * @param {Array<string>} code 产品代码
   * @param {Array<string>} names 产品名字
   * @param {Function} func 相关关系函数
   */
  getAndParseProductData = (month, code, names, func) => {
    // 当需要三线合一的时候, 月份不为2个
    let monthQuery
    let chartsTitle
    if (month.length !== 2) {
      chartsTitle = '三线合一'
      monthQuery = []
      month.month.forEach((val, monthKey) => {
        code.forEach((code, key) => {
          let monthCode = key % 2 ? month.contrastMonth[monthKey] : val
          monthQuery.push(`${code}${monthCode}`)
        })
      })
    } else {
      chartsTitle = code.map((symbol, key) => symbol + month[key]).join(' / ')
      monthQuery = code.map((symbol, key) => symbol + month[key])
    }


    getProductData(monthQuery).then(data => {
      if (monthQuery.length === 2) {
        this.setState({
          option: option(chartsTitle, data, names, func),
          names: names
        })
      } else {
        this.setState({
          option: optionMerge(chartsTitle, data, names, func),
          names: names
        })
      }
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

    this.getAndParseProductData(queryMonth, chartsData.code, chartsData.names, (val1, val2) => {
      return val1 / val2
    })
  }

  depositChange = value => {
    this.setState({
      deposit: value
    })
  }

  render () {
    const month = this.props.chartsData.month
    const contrastMonth = this.props.chartsData.custom || month
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ReactEcharts className="ChartsMain" notMerge={true} option={this.state.option} style={{ width: '100%', height: '50%' }} />
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
        <Card title={<CardTitle defaultDeposit={this.state.deposit} onChange={this.depositChange} />} style={{ marginTop: 15 }}>
          <p>方向: 做空</p>
          <p>数量: {this.state.deposit}</p>
          <p>风险系数: 1.5</p>
        </Card>
      </div>
    )
  }
}

export default ChartsMain
