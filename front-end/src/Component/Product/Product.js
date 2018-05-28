import { Menu, message } from 'antd'
import React from 'react'
import { getConfig } from './Chart/ChartsConfig'
import ChartsMain from './ChartsMain'
import menuConfig from './MenuConfig'
import './Product.scss'

const generateMenu = config => {
  if (config.child) {
    return (<Menu.SubMenu title={config.name} key={config.name}>{config.child.map(val => generateMenu(val))}</Menu.SubMenu>)
  } else {
    return (<Menu.Item key={config.name ? config.name : config}>{config.name ? config.name : config}</Menu.Item>)
  }
}

const LeftMenu = props => (
  <Menu
    defaultSelectedKeys={['螺纹/热卷']}
    defaultOpenKeys={['跨产品对冲', '建材能源系']}
    mode="inline"
    className={'charts-menu'}
    onClick={props.handleClick}
  >
    {menuConfig.map(val => generateMenu(val))}
  </Menu>
)

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chartsData: getConfig('螺纹/热卷'),
      randomNumber: 5
    }
  }

  handleMenuChange = item => {
    try {
      this.setState({ chartsData: getConfig(item.key) })
    } catch (e) {
      message.error(e.message)
    }
  }

  componentDidMount () {
    this.randomNumber = setInterval(() => {
      // this.setState({
      //   randomNumber: Math.round(Math.random() * 5)
      // })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.randomNumber)
  }


  render () {
    return (
      <div className="Product">
        <LeftMenu handleClick={this.handleMenuChange} count={this.state.randomNumber} />
        <ChartsMain user={this.props.user} chartsData={this.state.chartsData} className={'charts-main'} />
      </div>
    )
  }
}

export default Product
