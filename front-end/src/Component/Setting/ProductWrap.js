import React from 'react'
import { Form, Button, Icon, Input } from 'antd'

class ProductWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    console.log(props)
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={'product-wrap'}>
        <div className="product-head">
          {this.props.name}
        </div>
        <Form className="product-content">
          <Form.Item label={'稳定系数'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('stableCoefficient', {
              rules: [{ required: true, message: '请输入稳定系数' }],
              initialValue: this.props.stableCoefficient
            })(
              <Input placeholder="稳定系数" />
            )}
          </Form.Item>
          <Form.Item label={'产品代码'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('code', {
              rules: [{
                required: true,
                message: '请输入产品代码, 逗号分割',
                validator (rule, value, cb) {
                  /,/g.test(value) ? cb() : cb(false)
                }
              }],
              initialValue: this.props.code,
            })(
              <Input placeholder="产品代码" />
            )}
          </Form.Item>
          <Form.Item label={'产品显示名称'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('names', {
              rules: [{
                required: true,
                message: '请输入显示名称, 逗号分割',
                validator (rule, value, cb) {
                  /,/g.test(value) ? cb() : cb(false)
                }
              }],
              initialValue: this.props.names,
            })(
              <Input placeholder="显示名称" />
            )}
          </Form.Item>
          <Form.Item label={this.props.names[0] + '月份'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator(this.props.names[0] + '月份', {
              rules: [{
                required: true,
                message: '请输入月份, 逗号分割',
                validator (rule, value, cb) {
                  /,/g.test(value) ? cb() : cb(false)
                }
              }],
              initialValue: this.props.product1_month,
            })(
              <Input placeholder="月份" />
            )}
          </Form.Item>
          <Form.Item label={this.props.names[1] + '月份'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator(this.props.names[1] + '月份', {
              rules: [{
                required: true,
                message: '请输入月份, 逗号分割',
                validator (rule, value, cb) {
                  /,/g.test(value) ? cb() : cb(false)
                }
              }],
              initialValue: this.props.product2_month,
            })(
              <Input placeholder="月份" />
            )}
          </Form.Item>
          <Form.Item label={'开仓区间'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('开仓区间', {
              rules: [{
                required: true,
                message: '请输入开仓区间, 逗号分割',
                validator (rule, value, cb) {
                  /,/g.test(value) ? cb() : cb(false)
                }
              }],
              initialValue: this.props.openPosition,
            })(
              <Input placeholder="开仓区间" />
            )}
          </Form.Item>
          <Form.Item label={'每手吨数'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('每手吨数', {
              rules: [{
                required: true,
                message: '请输入每手吨数, 逗号分割',
                validator (rule, value, cb) {
                  /,/g.test(value) ? cb() : cb(false)
                }
              }],
              initialValue: this.props.unit,
            })(
              <Input placeholder="每手吨数" />
            )}
          </Form.Item>
          <Form.Item className="product-update-time">
            上次更新时间: {this.props.updated_at}
          </Form.Item>
        </Form>
        <div className="product-button">
          <Button.Group>
            <Button>
              <Icon type="save" />保存
            </Button>
            <Button>
              <Icon type="delete" />删除
            </Button>
          </Button.Group>
        </div>
      </div>
    )
  }
}

export default Form.create()(ProductWrap)
