import { Menu, message } from 'antd'
import React from 'react'
import { getConfig } from './Chart/ChartsConfig'
import ChartsMain from './ChartsMain'
import { menuList, generateMenuLinkList, linkSearch, LinkNode } from './MenuConfig'
import { getSelfSelectedList } from '../../utils/API'
import './Product.scss'
import { withRouter } from 'react-router-dom'

const generateMenu = (config, path = []) => {
  // console.log(config)
  if (config.child) {
    return (<Menu.SubMenu title={config.name}
      key={path.join('/') + config.name}>{config.child.map(val => generateMenu(val, path.concat([config.name])))}</Menu.SubMenu>)
  } else {
    const key = path.join('/') + '/' + (config.name ? config.name : config)
    return (<Menu.Item key={key}>{config.name ? config.name : config}</Menu.Item>)
  }
}

const LeftMenu = props => (
  <Menu
    defaultSelectedKeys={['跨产品对冲/建材能源系/螺纹/热卷']}
    defaultOpenKeys={["跨产品对冲", "建材能源系", "跨产品对冲建材能源系"]}
    mode="inline"
    className={'charts-menu'}
    onClick={props.handleClick}
  >
    {props.menuList.child.map(val => generateMenu(val))}
  </Menu>
)

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chartsData: getConfig('螺纹/热卷'),
      menuList: generateMenuLinkList(menuList),
      keyPath: ["跨产品对冲/建材能源系/螺纹/热卷", "跨产品对冲建材能源系", "跨产品对冲"],
      randomNumber: 5
    }
  }

  handleMenuChange = item => {
    let productKey = item.key.replace(/\s+\(.*\)/g, '')
    try {
      this.setState({ chartsData: getConfig(productKey.split('/').splice(-2).join('/')), keyPath: item.keyPath })
    } catch (e) {
      message.error(e.message)
    }
  }

  handleToggleSelected = add => {
    // TODO: 每一个产品应该有一个独立的id, 根据ID进行搜索
    const getProductName = () => {
      return this.state.keyPath[0].split('/').splice(-2).join('/')
    }
    if (add) {
      const linkNode = linkSearch(getProductName(), this.state.menuList.child[1])
      const linkCopy = new LinkNode(this.state.menuList.child[0], null, linkNode.name)
      this.state.menuList.child[0].appendChild(linkCopy)
    } else {
      const linkNode = linkSearch(getProductName(), this.state.menuList.child[0])
      if (linkNode) {
        linkNode.parent.removeChild(linkNode)
      }
    }
    this.forceUpdate()
  }

  componentDidMount () {
    getSelfSelectedList().then(list => {
      list.forEach(node => {
        const linkNode = new LinkNode(this.state.menuList.child[0], null, `${node.name} ( ${node.code.join(' ')} )`)
        this.state.menuList.child[0].appendChild(linkNode)
      })
      this.forceUpdate()
    })
  }


  render () {
    return (
      <div className="Product">
        <LeftMenu menuList={this.state.menuList} handleClick={this.handleMenuChange} count={this.state.randomNumber} />
        <ChartsMain
          onToggleSelected={this.handleToggleSelected}
          user={this.props.user}
          chartsData={this.state.chartsData}
          className={'charts-main'} />
      </div>
    )
  }
}

export default withRouter(Product)
