import { Button, Col, Form, Icon, Input, message, Popconfirm } from 'antd'
import React from 'react'
import { setProductConfig, deleteProductConfig } from '../../utils/API'

class ProductWrap extends React.Component {
  constructor (props) {
    super(props)
    if (props.new) {
      this.state = {
        props: {
          name: '',
          stableCoefficient: '',
          code: [null, null],
          names: ['产品1', '产品2'],
          product1_month: [null, null, null],
          product2_month: [null, null, null],
          openPosition: [[null, null], [null, null], [null, null]],
          stopLoss: [null, null, null],
          unit: [null, null]
        }
      }
    } else {
      this.state = {
        props: props
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.id = this.props.id
        setProductConfig(values).then(resp => {
          this.props.onSuccess()
          message.success(resp)
        })
      }
    })
  }

  handleDelete = () => {
    deleteProductConfig(this.state.props.id).then(resp => {
      this.props.onSuccess()
      message.success(resp)
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={'product-wrap'}>
        <div className="product-head">
          {this.state.props.name}
        </div>
        <Form className="product-content" onSubmit={this.handleSubmit}>
          <Form.Item label={'产品名'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入产品名' }],
              initialValue: this.state.props.name
            })(
              <Input placeholder="产品名" />
            )}
          </Form.Item>
          <Form.Item label={'稳定系数'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('stableCoefficient', {
              rules: [{ required: true, message: '请输入稳定系数' }],
              initialValue: this.state.props.stableCoefficient,
              normalize: Number,
            })(
              <Input placeholder="稳定系数" />
            )}
          </Form.Item>
          <Form.Item label={'产品代码'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            <Input.Group>
              <Col span={12}>
                {getFieldDecorator('code[0]', {
                  rules: [{
                    required: true,
                    message: '请输入产品代码'
                  }],
                  initialValue: this.state.props.code[0],
                })(
                  <Input placeholder="产品代码" />
                )}
              </Col>
              <Col span={12}>
                {getFieldDecorator('code[1]', {
                  rules: [{
                    required: true,
                    message: '请输入产品代码'
                  }],
                  initialValue: this.state.props.code[1],
                })(
                  <Input placeholder="产品代码" />
                )}
              </Col>
            </Input.Group>
          </Form.Item>
          <Form.Item label={'产品显示名称'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('names[0]', {
              rules: [{
                required: true,
                message: '请输入显示名称'
              }],
              initialValue: this.state.props.names[0],
            })(
              <Input placeholder="显示名称" />
            )}
            {getFieldDecorator('names[1]', {
              rules: [{
                required: true,
                message: '请输入显示名称'
              }],
              initialValue: this.state.props.names[1],
            })(
              <Input placeholder="显示名称" />
            )}
            {getFieldDecorator('names[2]', {
              rules: [{
                required: true,
                message: '请输入显示名称'
              }],
              initialValue: this.state.props.names[2],
            })(
              <Input placeholder="显示名称" />
            )}
          </Form.Item>
          <Form.Item label={this.state.props.names[0] + '月份'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            <Input.Group>
              <Col span={8}>
                {getFieldDecorator('product1_month[0]', {
                  rules: [{
                    required: true,
                    message: '请输入月份',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.product1_month[0],
                })(
                  <Input placeholder="月份" />
                )}
              </Col>
              <Col span={8}>
                {getFieldDecorator('product1_month[1]', {
                  rules: [{
                    required: true,
                    message: '请输入月份',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.product1_month[1],
                })(
                  <Input placeholder="月份" />
                )}
              </Col>
              <Col span={8}>
                {getFieldDecorator('product1_month[2]', {
                  rules: [{
                    required: true,
                    message: '请输入月份',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.product1_month[2],
                })(
                  <Input placeholder="月份" />
                )}
              </Col>
            </Input.Group>
          </Form.Item>
          <Form.Item label={this.state.props.names[1] + '月份'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            <Input.Group>
              <Col span={8}>
                {getFieldDecorator('product2_month[0]', {
                  rules: [{
                    required: true,
                    message: '请输入月份',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.product2_month[0],
                })(
                  <Input placeholder="月份" />
                )}
              </Col>
              <Col span={8}>
                {getFieldDecorator('product2_month[1]', {
                  rules: [{
                    required: true,
                    message: '请输入月份',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.product2_month[1],
                })(
                  <Input placeholder="月份" />
                )}
              </Col>
              <Col span={8}>
                {getFieldDecorator('product2_month[2]', {
                  rules: [{
                    required: true,
                    message: '请输入月份',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.product2_month[2],
                })(
                  <Input placeholder="月份" />
                )}
              </Col>
            </Input.Group>
          </Form.Item>
          <Form.Item label={'开仓区间'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            <Input.Group>
              <Col span={8}>
                {getFieldDecorator('openPosition[0][0]', {
                  rules: [{
                    required: true,
                    message: '请输入开仓区间',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.openPosition[0][0],
                })(
                  <Input placeholder="开仓区间" />
                )}
                {getFieldDecorator('openPosition[0][1]', {
                  rules: [{
                    required: true,
                    message: '请输入开仓区间',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.openPosition[0][1],
                })(
                  <Input placeholder="开仓区间" />
                )}
              </Col>
              <Col span={8}>
                {getFieldDecorator('openPosition[1][0]', {
                  rules: [{
                    required: true,
                    message: '请输入开仓区间',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.openPosition[1][0],
                })(
                  <Input placeholder="开仓区间" />
                )}
                {getFieldDecorator('openPosition[1][1]', {
                  rules: [{
                    required: true,
                    message: '请输入开仓区间',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.openPosition[1][1],
                })(
                  <Input placeholder="开仓区间" />
                )}
              </Col>
              <Col span={8}>
                {getFieldDecorator('openPosition[2][0]', {
                  rules: [{
                    required: true,
                    message: '请输入开仓区间',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.openPosition[2][0],
                })(
                  <Input placeholder="开仓区间" />
                )}
                {getFieldDecorator('openPosition[2][1]', {
                  rules: [{
                    required: true,
                    message: '请输入开仓区间',
                  }],
                  normalize: Number,
                  initialValue: this.state.props.openPosition[2][1],
                })(
                  <Input placeholder="开仓区间" />
                )}
              </Col>
            </Input.Group>
          </Form.Item>
          <Form.Item label={'止损线'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            <Input.Group>
              {getFieldDecorator('stopLoss[0]', {
                rules: [{
                  required: true,
                  message: '请输入止损线',
                }],
                normalize: Number,
                initialValue: this.state.props.stopLoss[0],
              })(
                <Input placeholder="止损线" />
              )}
              {getFieldDecorator('stopLoss[1]', {
                rules: [{
                  required: true,
                  message: '请输入止损线',
                }],
                normalize: Number,
                initialValue: this.state.props.stopLoss[1],
              })(
                <Input placeholder="止损线" />
              )}
              {getFieldDecorator('stopLoss[2]', {
                rules: [{
                  required: true,
                  message: '请输入止损线',
                }],
                normalize: Number,
                initialValue: this.state.props.stopLoss[2],
              })(
                <Input placeholder="止损线" />
              )}
            </Input.Group>
          </Form.Item>
          <Form.Item label={this.state.props.names[0] + '每手吨数'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('unit[0]', {
              rules: [{
                required: true,
                message: '请输入每手吨数'
              }],
              normalize: Number,
              initialValue: this.state.props.unit[0],
            })(
              <Input type={'number'} placeholder="每手吨数" />
            )}
          </Form.Item>
          <Form.Item label={this.state.props.names[1] + '每手吨数'} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
            {getFieldDecorator('unit[1]', {
              rules: [{
                required: true,
                message: '请输入每手吨数'
              }],
              normalize: Number,
              initialValue: this.state.props.unit[1],
            })(
              <Input type={'number'} placeholder="每手吨数" />
            )}
          </Form.Item>
          {this.props.new ? null : (
            <Form.Item className="product-update-time">
              上次更新时间: {this.state.props.updated_at}
            </Form.Item>
          )}
          {this.props.new ? (
            <div className="product-button-new">
              <Button htmlType="submit" type={'primary'} style={{ width: '100%' }}>
                <Icon type="save" />保存
              </Button>
            </div>
          ) : (
            <div className="product-button">
              <Button.Group>
                <Button htmlType="submit">
                  <Icon type="save" />保存
                </Button>
                <Popconfirm title="你确定要删除这个产品吗?" onConfirm={this.handleDelete} okText="确定" cancelText="取消">
                  <Button type="danger">
                    <Icon type="delete" />删除
                  </Button>
                </Popconfirm>
              </Button.Group>
            </div>
          )}
        </Form>
      </div>
    )
  }
}

export default Form.create()(ProductWrap)
