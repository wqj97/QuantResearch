import { Form, Icon, Input, Modal } from 'antd'
import React from 'react'
import { observer } from 'mobx-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { observable } from 'mobx'
import Store from 'store'

@observer
class NewTopicModal extends React.Component {
  @observable
  text = ''

  constructor (props) {
    super(props)
    this.text = Store.get('saved_topic_draft')
  }

  handleOk = event => {
    this.props.hide()
  }

  handleCancel = event => {
    Store.set('saved_topic_draft', this.text)
    this.props.hide()
  }

  handleTextChange = value => {
    this.text = value
  }

  render () {
    const { visible } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <Modal
        title='发布新的话题'
        width={'80vw'}
        visible={visible}
        onOk={this.handleOk}
        okText={'确认发布'}
        cancelText={'取消'}
        onCancel={this.handleCancel}
      >
        <Form>
          <Form.Item required>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入标题' }],
            })(
              <Input prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="标题" />
            )}
          </Form.Item>
        </Form>
        <ReactQuill style={{
          height: 300,
          paddingBottom: 40
        }} defaultValue={this.text} onChange={this.handleTextChange} />
      </Modal>
    )
  }
}

export default Form.create()(NewTopicModal)
