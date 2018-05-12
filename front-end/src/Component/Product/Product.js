import { Icon, Menu } from 'antd'
import React from 'react'
import ChartsMain from './ChartsMain'

import './Product.scss'

const LeftMenu = () => (
  <Menu
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    className={'charts-menu'}
  >
    <Menu.SubMenu title={<span><Icon type="folder" /><span>跨产品对冲</span></span>}>
      <Menu.SubMenu key="sub1" title={<span><Icon type="folder" /><span>建材能源系</span></span>}>
        <Menu.Item>热卷/螺纹</Menu.Item>
        <Menu.Item>螺纹/焦炭</Menu.Item>
        <Menu.Item>热卷/焦炭</Menu.Item>
        <Menu.Item>螺纹/铁矿石</Menu.Item>
        <Menu.Item>焦煤/焦炭</Menu.Item>
        <Menu.Item>螺纹/铁矿石</Menu.Item>
        <Menu.Item>玻璃/螺纹</Menu.Item>
        <Menu.Item>玻璃/热卷</Menu.Item>
        <Menu.Item>焦炭/动力煤</Menu.Item>
        <Menu.Item>焦炭/动力煤</Menu.Item>
        <Menu.Item>玻璃/焦炭</Menu.Item>
        <Menu.Item>玻璃/动力煤</Menu.Item>
        <Menu.Item>玻璃/焦煤</Menu.Item>
        <Menu.Item>螺纹/焦煤</Menu.Item>
        <Menu.Item>热卷/动力煤</Menu.Item>
        <Menu.Item>热卷/焦煤</Menu.Item>
        <Menu.Item>玻璃/铁矿石</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" title={<span><Icon type="folder" /><span>农产品系</span></span>}>
        <Menu.Item>菜粕/豆油</Menu.Item>
        <Menu.Item>菜粕/豆粕</Menu.Item>
        <Menu.Item>菜油/豆油</Menu.Item>
        <Menu.Item>豆粕/豆油</Menu.Item>
        <Menu.Item>棕榈油/菜油</Menu.Item>
        <Menu.Item>棕榈油/豆油</Menu.Item>
        <Menu.Item>鸡蛋/菜粕</Menu.Item>
        <Menu.Item>鸡蛋/豆粕</Menu.Item>
        <Menu.Item>玉米/玉米淀粉</Menu.Item>
        <Menu.Item>鸡蛋/玉米</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub3" title={<span><Icon type="folder" /><span>石化系</span></span>}>
        <Menu.Item>甲醇/动力煤</Menu.Item>
        <Menu.Item>塑料/PTA</Menu.Item>
        <Menu.Item>甲醇/塑料</Menu.Item>
        <Menu.Item>甲醇/PP</Menu.Item>
        <Menu.Item>甲醇/PTA</Menu.Item>
        <Menu.Item>甲醇/PVC</Menu.Item>
        <Menu.Item>甲醇/焦煤</Menu.Item>
        <Menu.Item>甲醇/焦碳</Menu.Item>
        <Menu.Item>塑料/PP</Menu.Item>
        <Menu.Item>塑料/PVC</Menu.Item>
        <Menu.Item>PTA/PP</Menu.Item>
        <Menu.Item>PVC/PP</Menu.Item>
        <Menu.Item>PVC/PTA</Menu.Item>
        <Menu.Item>螺纹/PVC</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
    <Menu.SubMenu title={<span><Icon type="folder" /><span>自选</span></span>}>
      <Menu.SubMenu key="sub1" title={<span><Icon type="folder" /><span>建材能源系</span></span>}>
        <Menu.Item>热卷/螺纹</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
  </Menu>
)

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="Product">
        <LeftMenu />
        <ChartsMain className={'charts-main'} />
      </div>
    )
  }
}

export default Product
