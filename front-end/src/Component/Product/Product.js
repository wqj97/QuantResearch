import { Badge, Icon, Menu } from 'antd'
import React from 'react'
import ChartsMain from './ChartsMain'

import './Product.scss'

const LeftMenu = props => (
  <Menu
    defaultSelectedKeys={['螺纹/热卷']}
    defaultOpenKeys={['跨产品对冲', '建材能源系']}
    mode="inline"
    className={'charts-menu'}
    onClick={props.handleClick}
  >
    <Menu.SubMenu key={'跨产品对冲'}
      title={<Badge count={props.count} title={'可做产品数'} offset={[0, 15]}><span><Icon type="folder" /><span>跨产品对冲</span></span></Badge>}>
      <Menu.SubMenu key={'建材能源系'}
        title={<Badge count={props.count} title={'可做产品数'} offset={[0, 15]}><span><Icon type="folder" /><span>建材能源系</span></span></Badge>}>
        <Menu.Item key={'螺纹/热卷'}><Badge dot={true} offset={[0, 5]}>螺纹/热卷</Badge></Menu.Item>
        <Menu.Item key={'螺纹/焦炭'}><Badge dot={true} offset={[0, 5]}>螺纹/焦炭</Badge></Menu.Item>
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
    this.state = {
      chartsData: {
        code: ['rb', 'hc'],
        names: ['螺纹', '热卷', '螺纹 / 热卷'],
        month: ['1901', '1905', '1810'],
        func: (val1, val2) => {
          return val1 / val2
        }
      },
      randomNumber: 0
    }
  }

  handleMenuChange = item => {
    switch (item.key) {
      case '螺纹/热卷':
        this.setState({
          chartsData: {
            code: ['rb', 'hc'],
            names: ['螺纹', '热卷', '螺纹 / 热卷'],
            month: ['1901', '1905', '1810'],
            func: (val1, val2) => {
              return val1 / val2
            }
          }
        })
        break
      case '螺纹/焦炭':
        this.setState({
          chartsData: {
            code: ['rb', 'j'],
            names: ['螺纹', '焦炭', '螺纹 / 焦炭'],
            month: ['1901', '1905', '1810'],
            custom: ['1901', '1905', '1809'],
            func: (val1, val2) => {
              return val1 / val2
            }
          }
        })
        break
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
