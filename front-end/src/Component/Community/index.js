import { BackTop, Carousel, Col, Icon, Row } from 'antd'
import React from 'react'
import './css/Community.scss'
import Main from "./Main";

class Community extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="Community">
        <BackTop />
        <Row className={'community-banner'}>
          <Col offset={1} span={8}>
            <Carousel autoplay className={'hot-topic'}>
              <div>
                <div className="carousel-image" style={{
                  backgroundImage: `url(${'/default_head.jpg'})`
                }} />
                <div className="carousel-title">
                  量研社区启动啦!
                </div>
              </div>
              <div>
                <div className="carousel-image" style={{
                  backgroundImage: `url(${'/logo.svg'})`
                }} />
                <div className="carousel-title">
                  量研社区启动啦!
                </div>
              </div>
            </Carousel>
          </Col>
          <Col className={'hot-title'} offset={1} span={13}>
            <Row>
              <Col span={24}>
                <div className="hot-main-title">
                  [公告] 量研社区启动了!
                </div>
                <div className="hot-main-des">
                  量研社区从2018-07-09开始运营
                </div>
                <div className="hot-main-title-info">
                  <div className="author-info">
                    <div className="author-head">
                      <img src='/default_head.jpg' alt="" />
                    </div>
                    <div className="author-name">
                      万千钧
                    </div>
                  </div>
                  <div className="topic-info">
                    <div className="info-each">
                      <Icon type="eye-o" /> 100
                    </div>
                    <div className="info-each">
                      <Icon type="heart-o" /> 25
                    </div>
                    <div className="info-each">
                      <Icon type="message" /> 120
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div className="hot-sub-title">
                  [算法] CTP对冲策略
                </div>
                <div className="hot-sub-title">
                  [基础数学] 大数定理在量化上的应用
                </div>
                <div className="hot-sub-title">
                  [跨市场套利] 跨市场套利的理论证明
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Main />
      </div>
    )
  }
}

export default Community
