import { Badge, Menu, message } from 'antd'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { userStore } from '../../model/User'
import { getSelfSelectedList } from '../../utils/API'
import { getConfig } from './Chart/ChartsConfig'
import ChartsMain from './ChartsMain'
import { generateMenuLinkList, LinkNode, linkSearch, menuList } from './MenuConfig'
import './Product.scss'

const generateMenu = (config, path = []) => {
  if (config.child) {
    return (<Menu.SubMenu title={config.name}
      key={path.join('/') + config.name}>{config.child.map(val => generateMenu(val, path.concat([config.name])))}</Menu.SubMenu>)
  } else {
    const key = path.join('/') + '/' + (config.name ? config.name : config)
    return (
      <Menu.Item key={key}>
        {config.name ? config.name : config}&nbsp;
        {config.doable ? (<Badge status="success" />) : null}
        {config.stop ? (<Badge status="error" />) : null}
      </Menu.Item>
    )
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
      chartsData: null,
      menuList: null,
      keyPath: ["跨产品对冲/建材能源系/螺纹/热卷", "跨产品对冲建材能源系", "跨产品对冲"],
      randomNumber: 5
    }
    generateMenuLinkList(menuList).then(linkListData => {
      Promise.all([
        getSelfSelectedList(),
        getConfig('螺纹/热卷')
      ]).then(([list, configData]) => {
        list.forEach(node => {
          const linkNode = new LinkNode(linkListData.child[0], null, `${node.name} ( ${node.code.join(' ')} )`)
          linkListData.child[0].appendChild(linkNode)
        })
        this.setState({
          menuList: linkListData,
          chartsData: configData
        })
      })
    })

  }

  getProductName = () => {
    return this.state.keyPath[0].split('/').splice(-2).join('/')
  }

  handleMenuChange = item => {
    const productKey = item.key.replace(/\s+\(.*\)/g, '')
    const productName = productKey.split('/').splice(-2).join('/')
    const productGroup = linkSearch(productName, this.state.menuList.child[1]).group
    try {
      const userGroup = userStore.user.group.map(item => item.id)
      let hasAuth = false
      userGroup.forEach(role => {
        if (productGroup.indexOf(role) !== -1) {
          hasAuth = true
        }
      })
      if (!hasAuth) {
        message.warn(`您没有权限查看${productKey}的数据`)
        return
      }
    } catch (e) {
      message.warn('您没有登录, 只能查看一个产品')
      return
    }
    try {
      getConfig(productName).then(data => {
        this.setState({ chartsData: data, keyPath: item.keyPath })
      })
    } catch (e) {
      message.error(e.message)
    }
  }

  handleToggleSelected = add => {
    if (add) {
      const linkNode = linkSearch(this.getProductName(), this.state.menuList.child[1])
      const linkCopy = new LinkNode(this.state.menuList.child[0], null, linkNode.name)
      this.state.menuList.child[0].appendChild(linkCopy)
    } else {
      const linkNode = linkSearch(this.getProductName(), this.state.menuList.child[0])
      if (linkNode) {
        linkNode.parent.removeChild(linkNode)
      }
    }
    this.forceUpdate()
  }

  componentDidMount () {
  }


  render () {
    return (
      <div className="Product">
        {this.state.menuList ? (
          <LeftMenu menuList={this.state.menuList} handleClick={this.handleMenuChange} count={this.state.randomNumber} />
        ) : null}
        {this.state.chartsData ? (
          <ChartsMain
            onToggleSelected={this.handleToggleSelected}
            user={this.props.user}
            chartsData={this.state.chartsData}
            className={'charts-main'} />
        ) : null}
      </div>
    )
  }
}

export default withRouter(Product)
