import { Icon, Steps, Row, Col } from "antd"
import React from 'react'

const Step = Steps.Step

class Loading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Row type={'flex'} style={{ width: '100%', height: '100%' }} align={'middle'}>
        <Col span={24}>
          <div style={{
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 30
          }}>正在加载模块</div>
          <Steps current={1}>
            <Step status="finish" title="确定模块内容" icon={<Icon type="api" />} />
            <Step status="finish" title="验证本地缓存" icon={<Icon type="desktop" />} />
            <Step status="process" title="下载模块" icon={<Icon type="loading" />} />
            <Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
          </Steps>
        </Col>
      </Row>
    )
  }
}

export default Loading
