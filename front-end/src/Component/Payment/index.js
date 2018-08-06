import { List, InputNumber, Button, Modal, Table } from 'antd';
import { observer } from 'mobx-react'
import { store } from './PaymentStore'
import { observable } from 'mobx'
import moment from 'moment'
import React from 'react'
import './Payment.scss'

const MealInfo = props => {
  const meal = props.meal
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
        <InputNumber min={0} defaultValue={0} onChange={value => store.mealCountChange(meal, value)} />
      </div>
    </div>
  )
}

const ConfirmOrder = props => {
  const mealList = props.store.mealCount
  const totalPrice = props.store.mealTotalPrice
  return (
    <Table
      columns={[
        {
          title: '套餐名',
          dataIndex: 'title',
          key: 'title'
        },
        {
          title: '量数',
          dataIndex: 'mealCount',
          key: 'mealCount'
        },
        {
          title: '开始日期',
          dataIndex: 'startDate',
          render: () => <span>{moment().format('YYYY年M月d日')}</span>
        },
        {
          title: '结束日期',
          dataIndex: 'endDate',
          render: (text, record) => <span>{moment().add(record.mealCount, record.type).format('YYYY年M月d日')}</span>
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

  render () {
    return (
      <div className="Payment">
        {
          store.list.map(group => {
            return (
              <List
                header={<div>{group.name}</div>}
                className={'meal-list'}
                bordered
                dataSource={group.group_item}
                renderItem={item => (<List.Item key={item.id}><MealInfo meal={item} /></List.Item>)}
              />
            )
          })
        }
        <Modal
          visible={this.confirmVisible}
          title={'确认订单'}
          okText={'确认下单'}
          cancelText={'再想一想'}
          onOk={() => {
          }}
          onCancel={() => this.confirmVisible = false}
        >
          <ConfirmOrder store={store} />
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
