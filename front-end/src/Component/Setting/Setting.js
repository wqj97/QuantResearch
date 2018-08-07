import { Button, Icon, Modal } from "antd"
import React from 'react'
import { getProductConfigList, getMealGroup } from '../../utils/API'
import ProductWrap from "./ProductWrap";
import './Setting.scss'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Setting extends React.Component {
  @observable
  productConfigList = []
  @observable
  visible = false
  @observable
  group = []

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    getMealGroup().then(data => {
      this.group = data
    })
    this.getData()
  }


  handleOk = () => {
  }
  handleCancel = () => {
    this.visible = false
  }

  getData = () => {
    getProductConfigList().then(data => {
      this.productConfigList = data
    })
  }

  render () {
    return (
      <div className="Setting">
        <div>
          <Button type="dashed" className={'new-button'} onClick={() => this.setState({ visible: true })}>
            <Icon type="plus" /> 新增产品
          </Button>
        </div>
        {this.productConfigList.map(data => {
          return <ProductWrap onSuccess={this.getData} {...data} key={data.updated_at} groupDef={this.group} />
        })}
        <Modal
          title="新增产品"
          visible={this.visible}
          okText={'保存'}
          onOk={this.handleOk}
          cancelText={'取消'}
          onCancel={this.handleCancel}
          footer={null}
        >
          <ProductWrap onSuccess={this.getData} new groupDef={this.group} />
        </Modal>
      </div>
    )
  }
}

export default Setting
