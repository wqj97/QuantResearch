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
          <p>量化对冲分析</p>
          <p>准确给出量化对冲数据</p>
        </Col>
        <Col span={14}>
          <img src={require('../../assets/data.png')} alt="" />
        </Col>
      </Row>
    </div>
  </Carousel>
)

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
          <Row>
            <Col span={17} className="description-left">
              <div className={'description-title'}>打造国内专业的投资者群体</div>
              <div className={'description-subtitle'}>一站式量化对冲研究平台</div>
            </Col>
            <Col span={7} className={'description-right'}>
              <div className="description-point">
                支持四所期货品种
              </div>
              <div className="description-point">
                量化知识库
              </div>
              <div className="description-point">
                基于云的投研平台
              </div>
              <div className="description-point">
                交易模型私人订制
              </div>
              <div className="description-point">
                组织投资者教育
              </div>
              <div className="description-point">
                实盘心得
              </div>
            </Col>
          </Row>
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
