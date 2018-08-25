import { List, InputNumber, Button, Modal, Table } from 'antd';
import { observer } from 'mobx-react'
import { createPayOrder } from '../../utils/API'
import { store } from './PaymentStore'
import { observable } from 'mobx'
import moment from 'moment'
import React from 'react'
import qrcode from 'qrcode'
import './Payment.scss'

const MealInfo = props => {
  const meal = props.meal
  const group = props.group
  return (
    <div className={'meal-item'}>
      <div className="meal-title">
        {meal.title}
      </div>
      <div className="meal-desc">
        <div>
          套餐内容包含: {meal.content}
        </div>
        <div>紧急变动提醒: {meal.emergentNotify ? '有' : '无'}</div>
        <div>开仓提醒: {meal.notify ? '有' : '无'}</div>
      </div>
      <div className="meal-price">
        ¥: {meal.price}
      </div>
      <div className="meal-count">
        <InputNumber min={0} defaultValue={0} onChange={value => store.mealCountChange(meal, group, value)} />
      </div>
    </div>
  )
}

const ConfirmOrder = props => {
  const mealList = props.store.mealAdded
  const totalPrice = props.store.mealTotalPrice
  return (
    <Table
      columns={[
        {
          title: '套餐名',
          dataIndex: 'groupName',
          key: 'groupName'
        },
        {
          title: '套餐类型',
          dataIndex: 'title',
          key: 'title'
        },
        {
          title: '单价',
          dataIndex: 'price',
          key: 'price'
        },
        {
          title: '份数',
          dataIndex: 'mealAdded',
          key: 'mealAdded'
        },
        {
          title: '合计',
          dataIndex: 'total',
          key: 'total',
          render: (text, record) => <span>¥ {record.price * record.mealAdded}</span>
        },
        {
          title: '开始日期',
          dataIndex: 'startDate',
          render: () => <span>{moment().format('YYYY年M月d日')}</span>
        },
        {
          title: '结束日期',
          dataIndex: 'endDate',
          render: (text, record) => <span>{moment().add(record.mealAdded, record.type).format('YYYY年M月d日')}</span>
        }
      ]}
      bordered
      footer={() => <span>总价: {totalPrice}</span>}
      pagination={false}
      dataSource={mealList}
    />
  )
}

@observer
class Payment extends React.Component {
  @observable
  confirmVisible = false

  @observable
  orderInfo = null

  @observable
  url = null

  handleOk = () => {
    createPayOrder(store.mealAdded.map(meal => meal.id)).then(data => {
      this.orderInfo = data
      const payUrl = `weixin://wxpay/bizpayurl?sign=${data.sign}&appid=${data.appid}&mch_id=${data.mch_id}&product_id=${data.product_id}&$time_stamp=${data.time_stamp}&nonce_str=${data.nonce_str}`
      qrcode.toDataURL(payUrl).then(resp => {
        this.url = resp;
      })
    })
  }

  render () {
    return (
      <div className="Payment">
        {
          store.list.map(group => {
            return (
              <List
                rowKey={group.id}
                header={<div>{group.name}</div>}
                className={'meal-list'}
                bordered
                dataSource={group.group_item}
                renderItem={item => (<List.Item key={item.id}><MealInfo group={group} meal={item} /></List.Item>)}
              />
            )
          })
        }
        <Modal
          visible={this.confirmVisible}
          title={'确认订单'}
          okText={'确认下单'}
          cancelText={'再想一想'}
          width={'50vw'}
          onOk={this.handleOk}
          onCancel={() => this.confirmVisible = false}
        >
          {this.url ? <img src={this.url} alt="qrcode" /> : <ConfirmOrder store={store} />}
        </Modal>
        <div className="checkout">
          <div className="price-count">
            总价: <span className="price">¥ {store.mealTotalPrice.toFixed(2)}</span>
          </div>
          <div className="confirm-btn">
            <Button type={'primary'} onClick={() => this.confirmVisible = true}>结算</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Payment
