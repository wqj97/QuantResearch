import { Carousel, Col, Row } from "antd"

import 'rc-banner-anim/assets/index.css'
import QueueAnim from 'rc-queue-anim'
import React from 'react'
import Footer from "../../layout/Footer";
import './Home.scss'

const Banner = () => (
  <Carousel autoplay className={'home-banner-container'}>
    <div className={'home-banner'}>
      <Row type={'flex'} align={'middle'} justify={'space-around'}>
        <Col span={8} offset={2}>
          <p>交易所数据接入</p>
          <p>秒级数据实时展现</p>
        </Col>
        <Col span={14}>
          <img src={require('../../assets/tick.png')} alt="" />
        </Col>
      </Row>
    </div>
    <div className={'home-banner'}>
      <Row type={'flex'} align={'middle'} justify={'space-around'}>
        <Col span={8} offset={2}>
          <p>量化分析</p>
          <p>准确给出量化开仓数据</p>
        </Col>
        <Col span={14}>
          <img src={require('../../assets/data.png')} alt="" />
        </Col>
      </Row>
    </div>
  </Carousel>
)

// const Block1 = () => (
//   <QueueAnim delay={300} className={'block-1'}>
//     <ScrollAnim.OverPack key={'a'} playScale={0.3} replay>
//       <QueueAnim key={'a'} delay={300}>
//         <div key={'a'}>
//           <Icon type="tablet" />工大量研
//         </div>
//         <div key={'b'}>
//           <Icon type="shopping-cart" />工大量研
//         </div>
//         <div key={'c'}>
//           <Icon type="cloud-upload-o" />工大量研
//         </div>
//       </QueueAnim>
//     </ScrollAnim.OverPack>
//     <ScrollAnim.OverPack key={'b'} playScale={0.3} replay>
//       <QueueAnim key={'b'} delay={600}>
//         <div key={'a'}>
//           <Icon type="tablet" />工大量研
//         </div>
//         <div key={'b'}>
//           <Icon type="shopping-cart" />工大量研
//         </div>
//         <div key={'c'}>
//           <Icon type="cloud-upload-o" />工大量研
//         </div>
//       </QueueAnim>
//     </ScrollAnim.OverPack>
//     <ScrollAnim.OverPack key={'c'} playScale={0.1} replay>
//       <QueueAnim key={'c'} delay={900}>
//         <div key={'a'}>
//           <Icon type="tablet" />工大量研
//         </div>
//         <div key={'b'}>
//           <Icon type="shopping-cart" />工大量研
//         </div>
//         <div key={'c'}>
//           <Icon type="cloud-upload-o" />工大量研
//         </div>
//       </QueueAnim>
//     </ScrollAnim.OverPack>
//   </QueueAnim>
// )
//
// const Block2 = () => (
//   <QueueAnim delay={300} className={'block-2'}>
//     <ScrollAnim.OverPack key={'a'} playScale={0.3} replay>
//       <QueueAnim key={'a'} delay={300}>
//         <div key={'a'}>
//           <Icon type="tablet" />工大量研
//         </div>
//         <div key={'b'}>
//           <Icon type="shopping-cart" />工大量研
//         </div>
//         <div key={'c'}>
//           <Icon type="cloud-upload-o" />工大量研
//         </div>
//       </QueueAnim>
//     </ScrollAnim.OverPack>
//     <ScrollAnim.OverPack key={'b'} playScale={0.3} replay>
//       <QueueAnim key={'b'} delay={600}>
//         <div key={'a'}>
//           <Icon type="tablet" />工大量研
//         </div>
//         <div key={'b'}>
//           <Icon type="shopping-cart" />工大量研
//         </div>
//         <div key={'c'}>
//           <Icon type="cloud-upload-o" />工大量研
//         </div>
//       </QueueAnim>
//     </ScrollAnim.OverPack>
//     <ScrollAnim.OverPack key={'c'} playScale={0.3} replay>
//       <QueueAnim key={'c'} delay={900}>
//         <div key={'a'}>
//           <Icon type="tablet" />工大量研
//         </div>
//         <div key={'b'}>
//           <Icon type="shopping-cart" />工大量研
//         </div>
//         <div key={'c'}>
//           <Icon type="cloud-upload-o" />工大量研
//         </div>
//       </QueueAnim>
//     </ScrollAnim.OverPack>
//   </QueueAnim>
// )

class Home extends React.Component {
  render () {
    return (
      <QueueAnim className={'Home'} interval={500} duration={1500}>
        <Banner key={'a'} />
        <Row type={'flex'} justify={'center'} className={'banner-menu'}>
          <Col span={6}>
            <div className="banner-menu-item">
              <div className="banner-menu-icon">
                <img src={require('../../assets/sign-up.svg')} alt="" />
              </div>
              <div className="banner-menu-title">
                免费注册
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="banner-menu-item">
              <div className="banner-menu-icon">
                <img src={require('../../assets/contact.svg')} alt="" />
              </div>
              <div className="banner-menu-title">
                与我们联系
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="banner-menu-item">
              <div className="banner-menu-icon">
                <img src={require('../../assets/price.svg')} alt="" />
              </div>
              <div className="banner-menu-title">
                价格详情
              </div>
            </div>
          </Col>
        </Row>
        <div className="description">
          <div className="description-left">
            <div className={'description-title'}>打造国内专业的个人投资者群体</div>
            <div className={'description-subtitle'}>一站式量化研究平台</div>
          </div>
          <div className="description-right">

          </div>
        </div>
        <Row type={'flex'} justify={'center'} align={'middle'} className={'pricing-block'}>
          <Col span={6}>
            <div className="price-box">
              <div className="price-title">
                免费版
              </div>
              <div className="price-content">
                产品数: 1
              </div>
              <div className="price-content">
                实时数据: 无
              </div>
              <div className="price-content">
                开仓提醒: 无
              </div>
              <div className="price-content">
                紧急变动: 无
              </div>
              <div className="price-content">
                可登陆设备数: 1
              </div>
              <div className="price-pay">
                立即使用
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="price-box">
              <div className="price-title">
                个人用户版
              </div>
              <div className="price-content">
                产品数: 10
              </div>
              <div className="price-content">
                实时数据: 支持
              </div>
              <div className="price-content">
                开仓提醒: 支持
              </div>
              <div className="price-content">
                紧急变动: 支持
              </div>
              <div className="price-content">
                可登陆设备数: 1
              </div>
              <div className="price-pay">
                <span className={'del-price'}>¥ 40000</span><span>¥ 20000</span>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="price-box">
              <div className="price-title">
                企业版
              </div>
              <div className="price-content">
                产品数: 全部产品
              </div>
              <div className="price-content">
                实时数据: 支持
              </div>
              <div className="price-content">
                开仓提醒: 支持
              </div>
              <div className="price-content">
                紧急变动: 支持
              </div>
              <div className="price-content">
                可登陆设备数: 10
              </div>
              <div className="price-pay">
                与我们联系
              </div>
            </div>
          </Col>
        </Row>
        <Footer key={'d'} />
      </QueueAnim>
    )
  }
}

export default Home
