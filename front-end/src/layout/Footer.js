import React from 'react'
import { Row, Col } from 'antd'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Row className="Footer" style={{
        background: '#364d79',
        height: 400,
        color: '#fff',
        fontSize: 40
      }}>
        <Col span={12} style={Styles.flexCenter}>
          天津工大量研科技
        </Col>
        <Col span={12} style={Styles.flexCenter}>
          联系方式XXXX
        </Col>
      </Row>
    )
  }
}

export default Footer

const Styles = {}

Styles.flexCenter = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center'
}
