import { Button, Icon, Modal } from "antd"
import React from 'react'
import { getProductConfigList, getRoles } from '../../utils/API'
import ProductWrap from "./ProductWrap";
import './Setting.scss'

class Setting extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      productConfigList: [],
      visible: false,
      roles: []
    }
    getRoles().then(data => {
      this.setState({
        roles: data
      })
    })
  }

  handleOk = () => {
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  getData = () => {
    getProductConfigList().then(data => {
      this.setState({
        productConfigList: data
      })
    })
  }

  componentDidMount () {
    this.getData()
  }


  render () {
    return (
      <div className="Setting">
        <div>
          <Button type="dashed" className={'new-button'} onClick={() => this.setState({ visible: true })}>
            <Icon type="plus" /> 新增产品
          </Button>
        </div>
        {this.state.productConfigList.map(data => {
          return <ProductWrap onSuccess={this.getData} {...data} key={data.updated_at} role={this.state.roles} />
        })}
        <Modal
          title="新增产品"
          visible={this.state.visible}
          okText={'保存'}
          onOk={this.handleOk}
          cancelText={'取消'}
          onCancel={this.handleCancel}
          footer={null}
        >
          <ProductWrap onSuccess={this.getData} new role={this.state.roles}/>
        </Modal>
      </div>
    )
  }
}

export default Setting
