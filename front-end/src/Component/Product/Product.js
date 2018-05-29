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
    {props.menuList.map(val => generateMenu(val))}
  </Menu>
)

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chartsData: getConfig('螺纹/热卷'),
      menuList: menuConfig,
      keyPath: ["螺纹/热卷", "建材能源系", "跨产品对冲"],
      randomNumber: 5
    }
  }

  handleMenuChange = item => {
    try {
      this.setState({ chartsData: getConfig(item.key), keyPath: item.keyPath })
    } catch (e) {
      message.error(e.message)
    }
  }

  handleToggleSelected = (add) => {
    // TODO: 每一个产品应该有一个独立的id, 根据ID进行搜索
    const DFS = (name, arr, path = []) => {
      arr.some((item, key) => {
        if (item.child) {
          path = DFS(name, item.child, path.concat([key]))
        } else {
          if (item === name) {
            path = path.concat([key])
            return false
          }
        }
        return true
      })
      return path
    }

    const [selfSelected, menuList] = this.state.menuList
    if (add) {
      let selfPath = DFS(this.state.keyPath[0], selfSelected.child)
      let selfItem
      selfPath.forEach(path => {
        if (selfItem) {
          selfItem = selfItem.child[path]
        } else {
          selfItem = selfSelected.child[path]
        }
      })

      let path = DFS(this.state.keyPath[0], menuList.child)
      const copyIndex = path.pop()
      let item
      path.forEach(path => {
        if (item) {
          item = item.child[path]
        } else {
          item = menuList.child[path]
        }
      })
      selfItem.child.push(item.child[copyIndex])
      this.forceUpdate()
    } else {
      let path = DFS(this.state.keyPath[0], selfSelected.child)
      if (!path) return
      const removeIndex = path.pop()
      let item
      path.forEach(path => {
        if (item) {
          item = item.child[path]
        } else {
          item = selfSelected.child[path]
        }
      })
      item.child.splice(removeIndex, removeIndex + 1)
      this.forceUpdate()
    }
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

export default Product
