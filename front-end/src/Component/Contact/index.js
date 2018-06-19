import React from 'react'
import './Contact.scss'
import { Row, Col, Card } from 'antd'
import Footer from "../../layout/Footer";

class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="Contact">
        <div className="contact-title">
          联系我们
        </div>
        <Row style={{ height: '25vh' }} type={'flex'} justify={'center'} align={'middle'}>
          <Col className={'contact-block'} span={10}>
            <div className="content-block-title">
              天津量研科技有限公司
            </div>
            <div className="content-block-location">
              地址：天津西青学府工业区才智道35号海澜德大厦4号楼503/504室
            </div>
            <div className="content-block-contact-name">
              联系人：高先生
            </div>
            <div className="content-block-contact-phone">
              电话：（+86）13803067615
            </div>
            <div className="content-block-contact-email">
              邮箱：634686592@qq.com
            </div>
          </Col>
          <Col className={'contact-block'} span={10}>
            <div className="content-block-title">
              天津滨海新区办事处
            </div>
            <div className="content-block-location">
              地址：天津滨海-中关村科技园华塘睿城五区5号楼401-4
            </div>
            <div className="content-block-contact-name">
              联系人：孙先生
            </div>
            <div className="content-block-contact-phone">
              电话：（+86）13116120620
            </div>
            <div className="content-block-contact-email">
              邮箱：tianjinlaowan@163.com
            </div>
          </Col>
        </Row>
        <div className="team-block">
          <div className="team-title">
            核心团队
          </div>
          <Row type={'flex'} justify={'space-around'}>
            <Col span={5}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={require('../../assets/team-1.jpg')} />}
              >
                <Card.Meta
                  title="万千钧"
                  descripti核心on="工程师"
                />
              </Card>
            </Col>
            <Col span={5}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={require('../../assets/team-2.jpg')} />}
              >
                <Card.Meta
                  title="高万贤"
                  description="投资管理人"
                />
              </Card>
            </Col>
            <Col span={5}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={require('../../assets/team-3.jpg')} />}
              >
                <Card.Meta
                  title="孙光浩"
                  description="产品经理"
                />
              </Card>
            </Col>
            <Col span={5}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={require('../../assets/team-4.jpg')} />}
              >
                <Card.Meta
                  title="孔中华"
                  description="工程师"
                />
              </Card>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contact
